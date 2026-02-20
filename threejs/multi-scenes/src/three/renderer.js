import * as THREE from 'three'

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js'
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js'
import { FilmPass } from 'three/addons/postprocessing/FilmPass.js'

export const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#webgl'),
  antialias: true
})

export function resizeRenderer() {
  renderer.setSize(window.innerWidth, window.innerHeight)
}

/**
 * Creates an EffectComposer with a RenderPass and FilmPass for grain.
 * @param {THREE.WebGLRenderer} r - The renderer
 * @param {THREE.Scene} scene - Scene to render
 * @param {THREE.Camera} camera - Camera to use
 * @param {number} [grainIntensity=0.35] - Grain intensity 0–1
 * @param {boolean} [grayscale=false] - Whether to use grayscale grain
 * @returns {EffectComposer}
 */
export function createComposerWithGrain(r, scene, camera, grainIntensity = 0.35, grayscale = false) {
  const composer = new EffectComposer(r)
  composer.addPass(new RenderPass(scene, camera))
  composer.addPass(new FilmPass(grainIntensity, grayscale))
  return composer
}