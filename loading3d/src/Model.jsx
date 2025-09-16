// import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js"
import * as THREE from "three"
// import { useLoader } from "@react-three/fiber"
import { useAnimations, useGLTF } from "@react-three/drei"
import { useEffect } from "react"

const Model = () => {
    const model = useGLTF("/model/character.gltf")
    const animation = useAnimations(model.animations,model.scene)
    console.log(model);
    useEffect(() =>{
        animation.actions.course_loup.play();
        animation.actions.course_cavalier.play();
    },[])
    return <primitive position-y={-0.4} object={model.scene} />


}
useGLTF.preload("/model/character.gltf")
export default Model;