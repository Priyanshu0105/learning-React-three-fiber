
import { createRoot } from 'react-dom/client'
import './index.css'
import {Canvas} from "@react-three/fiber"
import Scene from './Scene'
import Custom from './Custom'
const createdCanvasHandler = (state)=>{
    state.gl.setClearColor("yellow" , 0.6);
  };

createRoot(document.getElementById('root')).render(

<>
  <Canvas gl={{
    antialias:true,
    alpha:true,
  }}
  // orthographic
  camera = {{

    fov:100,
    near:0.1,
    far:100,
    // zoom:120,
    position:[2,2,5],
  }}
  onCreated={createdCanvasHandler}
  >
    
    <Scene/>
    {/* <Custom/> */}
  </Canvas>
</>
)
