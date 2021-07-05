import * as THREE from 'three';
import * as OrbitControls from 'three-orbitcontrols';
import {cube} from './cube.js';
import { cubeupper, cubeuppernext } from './cube_upper.js';
import { cubeleft, cuberight, cubeleftnext, cuberightnext } from './cube_side.js';
import { light } from './hemi_light.js';
import { CubeUVReflectionMapping } from 'three';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

let suwakvalue = document.getElementById("suwak")
suwakvalue.addEventListener("input", function() {
    cube.scale.x=suwakvalue.value;
    cubeleft.position.x=-suwakvalue.value;
    cuberight.position.x=suwakvalue.value;
    cubeleftnext.position.x = -suwakvalue.value;
    cuberightnext.position.x = suwakvalue.value;
    },false);

let suwakvalue2 = document.getElementById("suwak2")
suwakvalue2.addEventListener("input",function(){
if(suwakvalue2.value>1){
    cube.add(cubeuppernext);
    scene.add(cubeleftnext);
    scene.add(cuberightnext);
    
}
if(suwakvalue2.value<2){
    cube.remove(cubeuppernext);
    scene.remove(cubeleftnext);
    scene.remove(cuberightnext);
}
},false)


scene.add(cube);
scene.add(light);
cube.add(cubeupper);
//cube.add(cubeuppernext)
scene.add(cubeleft);
scene.add(cuberight);

camera.position.z = 8;
camera.position.y = 1.5;

const controls = new OrbitControls( camera, renderer.domElement );

//controls.update() must be called after any manual changes to the camera's transform
//camera.position.set( 0, 20, 100 );
controls.update();
controls.autoRotate=true;


const animate = function () {
    requestAnimationFrame(animate);

    //cube.rotation.x += 0.02;
    //cube.rotation.y += 0.01;

    renderer.render(scene, camera);
    
    controls.update();

};

animate();