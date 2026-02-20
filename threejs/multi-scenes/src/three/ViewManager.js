import { renderer, createComposerWithGrain } from './renderer.js'

const views = []

export function registerView(div, sceneObj) {
  views.push({ div, ...sceneObj })
}

export function renderViews() {
  const canvasHeight = renderer.domElement.clientHeight
  const pixelRatio = renderer.getPixelRatio()

  for (const v of views) {
    const rect = v.div.getBoundingClientRect()

    if (rect.width <= 0 || rect.height <= 0) continue

    if (!v.composer) {
      v.composer = createComposerWithGrain(renderer, v.scene, v.camera, 5, false)
    }

    v.camera.aspect = rect.width / rect.height
    v.camera.updateProjectionMatrix()

    v.composer.setSize(rect.width, rect.height)
    v.composer.setPixelRatio(pixelRatio)

    renderer.setViewport(
      rect.left * pixelRatio,
      (canvasHeight - rect.bottom) * pixelRatio,
      rect.width * pixelRatio,
      rect.height * pixelRatio
    )
    renderer.setScissor(
      rect.left * pixelRatio,
      (canvasHeight - rect.bottom) * pixelRatio,
      rect.width * pixelRatio,
      rect.height * pixelRatio
    )
    renderer.setScissorTest(true)

    v.update()
    v.composer.render()
  }

  renderer.setScissorTest(false)
}