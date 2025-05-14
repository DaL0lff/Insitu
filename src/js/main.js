import * as THREE from "three";

var element = document.querySelector(".element");
var width = element.clientWidth;
var height = element.clientHeight;

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.z = 5;
var renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
element.appendChild(renderer.domElement);
renderer.render(scene, camera);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
cube.rotation.x = 0.3;
cube.rotation.y = 0.3;
scene.add(cube);
renderer.render(scene, camera);

function animate() {
  cube.rotation.x += 0.03;
  cube.rotation.y += 0.03;

  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
var duck;

const loader = new GLTFLoader();
loader.load("../img/duck.glb", function (gltf) {
  scene.add(gltf.scene);
  duck = gltf.scene.children[0];
});
const ambientLight = new THREE.AmbientLight(0xffffff, 2);
scene.add(ambientLight);
