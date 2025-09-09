import { useFrame ,extend , useThree} from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import {OrbitControls} from "@react-three/drei"
// import {OrbitControls} from "three/examples/jsm/controls/OrbitControls.js"
extend({ OrbitControls })
const Scene = () => {
    const cubeRef = useRef();
    const planeRef= useRef();
    const {gl,camera} = useThree();
    useFrame((state , delta)=>{
        // cubeRef.current.rotation.y+=delta;
        // planeRef.current.rotation.y+=delta;
        state.camera.position.x = Math.sin(state.clock.elapsedTime)
    })

    return (
    <>
    {/* <OrbitControls enableRotate={false} /> */}
    {/* <orbitControls args ={[camera,gl.domElement]}/> */}
    {/* <group> */}
    <mesh ref={planeRef} position-x={-2}>
        {/* <torusKnotGeometry />
        <meshNormalMaterial /> */}
        <planeGeometry args={[2,2]}/>
        <meshBasicMaterial color={"orange"} side={THREE.DoubleSide}/>
    </mesh>
    <mesh ref = {cubeRef} position-x ={2} rotation-y ={Math.PI*0.25}>
        <boxGeometry />
        <meshBasicMaterial color={"red"} />
    </mesh>
    {/* </group> */}
    </>
    );
}

export default Scene;