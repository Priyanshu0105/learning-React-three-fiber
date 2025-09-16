
import { createRoot } from 'react-dom/client'
import './index.css'
import {Canvas} from "@react-three/fiber"
import Scene from "./Scene"
import { Perf } from "r3f-perf"

createRoot(document.getElementById('root')).render(
  <Canvas camera={{
    fov:100,
    near:0.1,
    far:100,
  }}>
    <Scene/>
    <Perf position='top-left'/>
  </Canvas>
)
