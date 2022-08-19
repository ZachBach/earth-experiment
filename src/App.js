import React, { useRef } from "react";
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from "three";
import earthImg from './earth2.jpg'
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
         color="red"
      />
      </mesh>
   )
}
export default function App(){
   return (
      <>
      <div>
         <p  className="head-text">Hello Devil World! 
         <br/>
         <br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, est sed vitae reprehenderit illum aliquam neque magnam, autem quidem non minima ut corporis quo. Error natus atque consectetur magni nulla?</p>
      </div>
     <Canvas >
         <ambientLight />
         <Sphere />
      </Canvas>
      <p  className="head-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa cum incidunt soluta est mollitia porro explicabo qui, ad, facere velit deserunt in. Minima sint placeat ab aliquam quidem laboriosam tempore.</p>
       </>
   );
};
