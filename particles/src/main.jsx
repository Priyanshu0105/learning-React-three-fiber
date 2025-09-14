
import { createRoot } from 'react-dom/client'
import './index.css'
import {Canvas} from "@react-three/fiber"
import * as THREE from "three"
import Particles from './Particles'

createRoot(document.getElementById('root')).render(
  <Canvas camera={{
    fov:100,
    near:0.1,
    far:100,
    position:[0,0,5],
  }}>
    <Particles/>
  </Canvas>
)
