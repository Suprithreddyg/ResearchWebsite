import React, { Suspense } from "react";
import { createRoot } from 'react-dom/client';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics, usePlane, useBox } from "@react-three/cannon";
import '../Styles/Group.css';

function Box() {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 2, 0] }));
  return (
    <mesh
      onClick={() => {
        api.velocity.set(0, 2, 0);
      }}
      ref={ref}
      position={[0, 2, 0]}
    >
      <boxBufferGeometry attach="geometry" />
      <shaderMaterial
        attach="material"
        args={[
          {
            vertexShader: `
              varying vec2 vUv;
              void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
              }
            `,
            fragmentShader: `
              varying vec2 vUv;
              void main() {
                vec3 color = mix(vec3(0.0, 0.0, 1.0), vec3(1.0, 0.0, 0.0), vUv.y);
                gl_FragColor = vec4(color, 1.0);
              }
            `
          }
        ]}
      />
    </mesh>
  );
}

function Plane() {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <mesh ref={ref} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  );
}

export default function Group() {
  return (
    <div>
      <Canvas className="CanvasScreen" style={{ width: 800, height: 600 , border : '20px solid gray'}}>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <Physics>
          <Box />
          <Plane />
        </Physics>
      </Canvas>
      <h1>apdoifjldfnoioifjhoidfshgoihdfsoighfdsoghoisfdhgoihgoisdfhgoisdhighdsipghoi</h1>
    </div>
  );
}
