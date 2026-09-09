import { useRef, useEffect } from 'react';

export default function GradientMesh() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const gl = canvas.getContext('webgl');
        if (!gl) return;

        const vsSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

        const fsSource = `
      precision highp float;
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform float u_dark;

      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        vec2 centered = uv * 2.0 - 1.0;
        centered.x *= u_resolution.x / u_resolution.y;

        // Base colors depending on theme
        vec3 lightBase = vec3(0.949, 0.937, 0.906); // #F2EFE7
        vec3 darkBase  = vec3(0.043, 0.067, 0.125); // #0b1120
        vec3 color = mix(lightBase, darkBase, u_dark);
        
        // Palette blobs - adapt intensity for dark mode
        vec3 deepBlue  = vec3(0.200, 0.408, 0.627); // #3368A0
        vec3 midBlue   = vec3(0.400, 0.639, 0.749); // #66A3BF
        vec3 paleAqua  = vec3(0.784, 0.875, 0.859); // #C8DFDB
        
        // In dark mode, use darker variants
        vec3 darkDeep  = vec3(0.08, 0.16, 0.30);
        vec3 darkMid   = vec3(0.10, 0.20, 0.35);
        vec3 darkPale  = vec3(0.05, 0.12, 0.25);

        vec3 b1 = mix(deepBlue, darkDeep, u_dark);
        vec3 b2 = mix(midBlue, darkMid, u_dark);
        vec3 b3 = mix(paleAqua, darkPale, u_dark);

        float t = u_time * 0.3;
        
        vec2 c1 = vec2(sin(t * 0.7) * 0.8, cos(t * 0.6) * 0.5);
        vec2 c2 = vec2(cos(t * 1.1) * 0.7, sin(t * 0.9) * 0.6);
        vec2 c3 = vec2(sin(t * 0.8 + 2.0) * 0.9, sin(t * 1.2 + 1.0) * 0.7);

        float d1 = length(centered - c1);
        float d2 = length(centered - c2);
        float d3 = length(centered - c3);

        float r = 1.6;
        
        float w1 = smoothstep(r, 0.0, d1);
        float w2 = smoothstep(r, 0.0, d2);
        float w3 = smoothstep(r, 0.0, d3);

        float intensity = mix(0.15, 0.25, u_dark);
        color = mix(color, b1, w1 * intensity);
        color = mix(color, b2, w2 * (intensity + 0.05));
        color = mix(color, b3, w3 * (intensity + 0.1));

        // Subtle grain
        float noise = hash(gl_FragCoord.xy + u_time) * 0.02;
        color -= noise;

        gl_FragColor = vec4(color, 1.0);
      }
    `;

        const compileShader = (type: number, source: string) => {
            const shader = gl.createShader(type);
            if (!shader) return null;
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
                console.error('Shader compile error:', gl.getShaderInfoLog(shader));
                gl.deleteShader(shader);
                return null;
            }
            return shader;
        };

        const vs = compileShader(gl.VERTEX_SHADER, vsSource);
        const fs = compileShader(gl.FRAGMENT_SHADER, fsSource);
        if (!vs || !fs) return;

        const program = gl.createProgram();
        if (!program) return;
        gl.attachShader(program, vs);
        gl.attachShader(program, fs);
        gl.linkProgram(program);
        gl.useProgram(program);

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            -1, -1, 1, -1, -1, 1,
            -1, 1, 1, -1, 1, 1,
        ]), gl.STATIC_DRAW);

        const positionLocation = gl.getAttribLocation(program, 'position');
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        const resolutionLocation = gl.getUniformLocation(program, 'u_resolution');
        const timeLocation = gl.getUniformLocation(program, 'u_time');
        const darkLocation = gl.getUniformLocation(program, 'u_dark');

        let animationId: number;

        const render = (time: number) => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const displayWidth = Math.floor(canvas.clientWidth * dpr);
            const displayHeight = Math.floor(canvas.clientHeight * dpr);

            if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
                canvas.width = displayWidth;
                canvas.height = displayHeight;
                gl.viewport(0, 0, canvas.width, canvas.height);
            }

            const isDark = document.documentElement.classList.contains('dark') ? 1.0 : 0.0;

            gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
            gl.uniform1f(timeLocation, time * 0.001);
            gl.uniform1f(darkLocation, isDark);

            gl.drawArrays(gl.TRIANGLES, 0, 6);
            animationId = requestAnimationFrame(render);
        };

        animationId = requestAnimationFrame(render);

        return () => {
            cancelAnimationFrame(animationId);
            gl.deleteProgram(program);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full opacity-60 pointer-events-none"
        />
    );
}
