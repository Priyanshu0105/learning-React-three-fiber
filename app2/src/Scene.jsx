import { useFrame ,extend , useThree} from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three"
import { OrbitControls} from "@react-three/drei";



const Scene = () =>{
    const boxRef = useRef();
    useFrame((state,delta)=>{
        boxRef.current.rotation.y +=delta;
        // state.camera.position.x = Math.sin(state.clock.elapsedTime)
    });
    return(
    <>

    <OrbitControls/>
    {/* <axesHelper args={[3]} />
    <gridHelper/> */}
    <mesh ref={boxRef} >
        <boxGeometry/>
        <meshNormalMaterial side ={THREE.DoubleSide} />
    </mesh>
    </>)
}

export default Scene;