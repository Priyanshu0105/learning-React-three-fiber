import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader.js"
import * as THREE from "three"
import { useLoader } from "@react-three/fiber"

const Model = () => {
    const model = useLoader(GLTFLoader,"/model/scene.gltf")
    return <primitive position-y={-0.4} object={model.scene} />
}
export default Model;