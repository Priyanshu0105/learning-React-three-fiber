import { useFrame ,extend , useThree} from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three"
import { OrbitControls} from "@react-three/drei";
import { useLoader } from "@react-three/fiber";

const Scene = () =>{
    const texture = useLoader(THREE.TextureLoader,"./oak_veneer_01_diff_1k.jpg")
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
        <meshBasicMaterial side ={THREE.DoubleSide} map={texture} />
    </mesh>
    </>)
}

export default Scene;