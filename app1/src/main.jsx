
import { createRoot } from 'react-dom/client'
import Scene from "./Scene"
import {Canvas} from "@react-three/fiber"
import "./index.css"
createRoot(document.getElementById('root')).render(
  <>
  <Canvas camera={
    {
      fov:100,
      near:0.1,
      far:100,
      // position:[2,5,5],
    }
  }>
    {/* <group position-x = {4}> */}
    {/* <mesh position = {[4,0,0]} rotation-x = {Math.PI*0.5}>
      <torusKnotGeometry />
      <meshNormalMaterial />
    </mesh>
    </group> */}
    <Scene/>
  </Canvas>
  </>

  
)
