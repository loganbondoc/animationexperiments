import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export function createSceneB() {

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0xffffff);

  const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100)
  camera.position.set(0,0.25,1)
  console.log(camera);

  // Lighting for your model
  const light = new THREE.AmbientLight(0xffffff, 1)
  light.position.set(0,0,0)
  scene.add(light)

  // Load model
  const loader = new GLTFLoader()
  let model = null

  loader.load(
    '/models/flower-blue.glb', // path relative to public/
    (gltf) => {
      model = gltf.scene
      scene.add(model)
    },
    (xhr) => {
      console.log(`Loading model: ${xhr.loaded / xhr.total * 100}%`)
    },
    (error) => {
      console.error('Error loading model', error)
    }
  )

  function update() {
    if (model) {
      model.rotation.y += 0.01
    }
  }

  return { scene, camera, update }
}