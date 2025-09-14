import {OrbitControls} from "@react-three/drei"
import {useLoader} from "@react-three/fiber"
import * as THREE from "three"
const Particles = () => {
const texture = useLoader(THREE.TextureLoader,"/oak_veneer_01_diff_1k.jpg" );
const verticesAmount = 2000;
const positionArray = new Float32Array(verticesAmount*3);


for(let i = 0; i<verticesAmount*3;i++){
    positionArray[i] = (Math.random()-0.5)* 10;
}
return (
<>
    <OrbitControls autoRotate= {true}/>
        <points>
            <bufferGeometry>
                <bufferAttribute  
                attach="attributes-position" 
                count={positionArray.length} 
                itemSize={3} 
                array={positionArray} />
            </bufferGeometry>
            <pointsMaterial transparent={true} size={0.02} map={texture}/>
        </points>
</>
)

}

export default Particles;