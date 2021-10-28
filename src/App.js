import React, { useRef } from "react";
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from "three";
import earthImg from './earthimg.jpeg'
import "./App.css";



const Sphere=()=>{
   const base=new THREE.TextureLoader().load(earthImg)
   const ref=useRef()
   useFrame(() => (ref.current.rotation.x=ref.current.rotation.y += 0.0004 ))
   return(
      <mesh visible castShadow ref={ref} position={[0, 0, 3]}>
      <directionalLight intensity={0.5} />
      <sphereGeometry attach="geometry" args={[1, 32, 32]} />
      <meshBasicMaterial
      
         map={base}
         color="white"
      />
      </mesh>
   )
}
export default function App(){
   return (
     <Canvas >
         <ambientLight />
         <Sphere />
      </Canvas>
   );
};
