import * as THREE from 'three'

export const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#webgl'),
  antialias: true
})

export function resizeRenderer() {
  renderer.setSize(window.innerWidth, window.innerHeight)
}