import {OrbitControls} from "@react-three/drei"
import {button,useControls} from "leva"
const Scene = () =>{
const {position , color , wireframe} = useControls({
    position:{
        value:{
            x:0,
            y:0,
            z:0,
        },
        min:-10,
        max:10,
        step:0.01,
    },
    color:"#ffffff",
    wireframe:false,
    click:button(()=>{
    console.log("clicked")
    }),
    scale:{options:[1,2,3]}
})
return(

    <>
    <OrbitControls/>
    <directionalLight position={[2,2,25]} intensity={2}/>
    <ambientLight/>
    <mesh position={[position.x,position.y,position.z]}>
        <boxGeometry/>
        <meshStandardMaterial color = {color} wireframe = {wireframe}/>
    </mesh>
    </>
)
}

export default Scene;