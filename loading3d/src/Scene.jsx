import { OrbitControls ,Environment} from "@react-three/drei"
import * as THREE from "three"
import Model from "./Model";
import { Suspense } from "react";
const Scene = () =>{
return(
<>
<ambientLight intensity={5} />
<directionalLight position={[10, 10, 5]} intensity={3} />
<pointLight position={[-5, 5, -5]} intensity={2} />
<Environment preset="sunset" />
<OrbitControls/>

    <Suspense fallback={
        <mesh position={[0,1,0]} >
            <boxGeometry args={[1.5, 1.5, 1.5]}  />
            <meshBasicMaterial wireframe />
        </mesh>
    }>
        <Model/>
    </Suspense>
    

</>
    )
}


export default Scene;