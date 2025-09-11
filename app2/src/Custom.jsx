import * as THREE from "three";
// import { useRef, useEffect } from "react";
const Custom = () =>{
    // const geometryRef = useRef();
    const positionArray = new Float32Array([0,0,0,0,1,0,1,0,0])
//     useEffect(() => {
//     if (geometryRef.current) {
//       geometryRef.current.computeVertexNormals(); // ✅ Add this
//     }
//   }, []);
    return(
        <mesh position={[-2, 0, 0]}>
            <bufferGeometry>
                <bufferAttribute 
                attach="attributes-position" 
                count={3} 
                itemSize={3} 
                array={positionArray}
                />

            </bufferGeometry>
            <meshBasicMaterial color={"red"} side ={THREE.DoubleSide} />
        </mesh>
    )
}
export default Custom;