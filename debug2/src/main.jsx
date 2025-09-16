
import { createRoot } from 'react-dom/client'
import './index.css'
import {Canvas} from "@react-three/fiber"
import Scene from './Scene'

createRoot(document.getElementById('root')).render(
  <>
<Canvas camera={{
  fov:100,
  near:0.1,
  far:100,
  position:[2,2,5]
}}>
<Scene/>
</Canvas>
</>
)
