import { renderer } from './renderer.js'

const views = []

export function registerView(div, sceneObj) {
  views.push({ div, ...sceneObj })
}

export function renderViews() {

  const canvasHeight = renderer.domElement.clientHeight

  for (const v of views) {

    const rect = v.div.getBoundingClientRect()

    renderer.setViewport(
      rect.left,
      canvasHeight - rect.bottom,
      rect.width,
      rect.height
    )

    renderer.setScissor(
      rect.left,
      canvasHeight - rect.bottom,
      rect.width,
      rect.height
    )

    renderer.setScissorTest(true)

    v.camera.aspect = rect.width / rect.height
    v.camera.updateProjectionMatrix()

    v.update()
    renderer.render(v.scene, v.camera)

    console.log("Rendering views")
  }
}