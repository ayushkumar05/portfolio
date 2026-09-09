import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

function DNAHelix() {
  const groupRef = useRef<THREE.Group>(null);
  const count = 40;
  
  // Create instances for spheres and links
  const { spheres, links } = useMemo(() => {
    const s = [];
    const l = [];
    
    for (let i = 0; i < count; i++) {
      const t = i / count;
      const angle = t * Math.PI * 4; // Two full turns
      const y = (t - 0.5) * 20; // Height spread from -10 to 10
      const radius = 3;
      
      // Strand 1 position
      const x1 = Math.cos(angle) * radius;
      const z1 = Math.sin(angle) * radius;
      
      // Strand 2 position
      const x2 = Math.cos(angle + Math.PI) * radius;
      const z2 = Math.sin(angle + Math.PI) * radius;
      
      s.push(new THREE.Vector3(x1, y, z1));
      s.push(new THREE.Vector3(x2, y, z2));
      
      l.push([new THREE.Vector3(x1, y, z1), new THREE.Vector3(x2, y, z2)]);
    }
    
    return { spheres: s, links: l };
  }, [count]);

  useFrame(() => {
    if (groupRef.current) {
      // Automatic gentle rotation
      groupRef.current.rotation.y += 0.002;
      
      // Scroll-based rotation and movement
      // window.scrollY mapped to rotation
      const scrollY = window.scrollY;
      groupRef.current.position.y = scrollY * 0.005; 
      groupRef.current.rotation.x = scrollY * 0.001;
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        {/* Spheres */}
        {spheres.map((pos, i) => (
          <mesh key={`sphere-${i}`} position={pos}>
            <sphereGeometry args={[0.4, 32, 32]} />
            <meshStandardMaterial 
              color={i % 2 === 0 ? "#C8DFDB" : "#66A3BF"} 
              roughness={0.2}
              metalness={0.8}
            />
          </mesh>
        ))}
        
        {/* Connecting Links */}
        {links.map((pair, i) => {
          const distance = pair[0].distanceTo(pair[1]);
          const center = pair[0].clone().lerp(pair[1], 0.5);
          const orientation = new THREE.Matrix4().lookAt(pair[0], pair[1], new THREE.Object3D().up);
          const quaternion = new THREE.Quaternion().setFromRotationMatrix(orientation);
          // Cylinder points up by default, so we rotate it by 90 deg around X to align with Z axis (lookAt)
          quaternion.multiply(new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), Math.PI / 2));
          
          return (
            <mesh key={`link-${i}`} position={center} quaternion={quaternion}>
              <cylinderGeometry args={[0.08, 0.08, distance, 8]} />
              <meshStandardMaterial 
                color="#66A3BF" 
                transparent
                opacity={0.5}
                roughness={0.5}
              />
            </mesh>
          );
        })}
      </Float>
    </group>
  );
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 15], fov: 45 }} dpr={[1, 2]}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={2} color="#F2EFE7" />
        <directionalLight position={[-10, -10, -5]} intensity={1} color="#C8DFDB" />
        <Environment preset="city" />
        <DNAHelix />
      </Canvas>
    </div>
  );
}
