import './style.css'

import { resizeRenderer } from './three/renderer.js'
import { registerView, renderViews } from './three/ViewManager.js'
import { createSceneA } from './three/scenes/sceneA.js'
import { createSceneB } from './three/scenes/sceneB.js'
import { createSceneC } from './three/scenes/sceneC.js'

console.log("MAIN LOADED")

window.addEventListener('resize', resizeRenderer)
resizeRenderer()

registerView(
  document.querySelector('#winA'),
  createSceneA()
)

registerView(
  document.querySelector('#winB'),
  createSceneB()
)

registerView(
  document.querySelector('#winC'),
  createSceneC()
)

function animate() {
  requestAnimationFrame(animate)
  renderViews()
}

animate()