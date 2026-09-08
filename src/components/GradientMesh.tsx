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

      // Hash for noise
      float hash(vec2 p) {
        return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453);
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        uv = uv * 2.0 - 1.0;
        uv.x *= u_resolution.x / u_resolution.y;

        // Base color (white/cyan light)
        vec3 color = vec3(1.0, 1.0, 1.0);
        
        // Blobs
        vec3 blobColor1 = vec3(0.023, 0.713, 0.835); // #06b6d4 cyan-500
        vec3 blobColor2 = vec3(0.133, 0.827, 0.933); // #22d3ee cyan-400
        vec3 blobColor3 = vec3(0.403, 0.909, 0.976); // #67e8f9 cyan-200
        vec3 blobColor4 = vec3(0.8, 0.98, 0.94);     // teal tint

        float t = u_time * 0.4;
        
        // Center coordinates of blobs moving around
        vec2 c1 = vec2(sin(t * 0.7) * 0.8, cos(t * 0.6) * 0.5);
        vec2 c2 = vec2(cos(t * 1.1) * 0.7, sin(t * 0.9) * 0.6);
        vec2 c3 = vec2(sin(t * 0.8 + 2.0) * 0.9, sin(t * 1.2 + 1.0) * 0.7);
        vec2 c4 = vec2(cos(t * 1.3 - 1.0) * 0.6, cos(t * 0.7 + 2.0) * 0.8);

        float d1 = length(uv - c1);
        float d2 = length(uv - c2);
        float d3 = length(uv - c3);
        float d4 = length(uv - c4);

        // Smooth blending radius
        float r = 1.4;
        
        float w1 = smoothstep(r, 0.0, d1);
        float w2 = smoothstep(r, 0.0, d2);
        float w3 = smoothstep(r, 0.0, d3);
        float w4 = smoothstep(r, 0.0, d4);

        color = mix(color, blobColor1, w1 * 0.4);
        color = mix(color, blobColor2, w2 * 0.3);
        color = mix(color, blobColor3, w3 * 0.4);
        color = mix(color, blobColor4, w4 * 0.5);

        // Grain noise
        float noise = hash(gl_FragCoord.xy + u_time) * 0.04;
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

        let animationId: number;

        const render = (time: number) => {
            // Handle resizing
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            const displayWidth = Math.floor(canvas.clientWidth * dpr);
            const displayHeight = Math.floor(canvas.clientHeight * dpr);

            if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
                canvas.width = displayWidth;
                canvas.height = displayHeight;
                gl.viewport(0, 0, canvas.width, canvas.height);
            }

            gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
            gl.uniform1f(timeLocation, time * 0.001); // seconds

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
            className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
        />
    );
}
