import * as THREE from 'three';
import * as OrbitControls from 'three-orbitcontrols';
import {cube} from './cube.js';
import { cubeupper, cubeuppernext, cubeuppertop } from './cube_upper.js';
import { cubeleft, cuberight, cubeleftnext, cuberightnext, cubelefttop, cuberighttop } from './cube_side.js';
import { light } from './hemi_light.js';
import { CubeUVReflectionMapping } from 'three';
import { back, backnext, backtop } from './back.js';
import { light2, light3, light4 } from './direct_light.js';
import { compartment1,compartment3,compartment_middle1, compartment_middle2 } from './compartments.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

let suwakvalue = document.getElementById("suwak")
suwakvalue.addEventListener("input", function() {
    cube.scale.x=suwakvalue.value;
    back.scale.x=suwakvalue.value//*0.925; // do wyregulownia
    cubeleft.position.x=-suwakvalue.value+0.1;
    cuberight.position.x=suwakvalue.value-0.1;
    cubeleftnext.position.x = -suwakvalue.value+0.1;;
    cuberightnext.position.x = suwakvalue.value-0.1;;
    cubelefttop.position.x = -suwakvalue.value+0.1;;
    cuberighttop.position.x = suwakvalue.value-0.1;;
    if (suwakvalue.value>4){
        scene.add(compartment1);
        if(compartment3.ison===true){
            scene.add(compartment3);
            scene.add(compartment_middle1);
            scene.add(compartment_middle2);
        }
        if(compartment_middle2.ison===true){
            scene.add(compartment_middle1);
            scene.add(compartment_middle2);
        }
        //scene.add(compartment3);
    }
    if (suwakvalue.value<4){
        scene.remove(compartment1);
        if(compartment3.ison===true){
            scene.remove(compartment3);
            scene.remove(compartment_middle1);
            scene.remove(compartment_middle2);
        }
        if(compartment_middle2.ison===true){
            scene.remove(compartment_middle1);
            scene.remove(compartment_middle2);
        }
        //scene.remove(compartment3)
    }

    },false);
    
let suwakvalue2 = document.getElementById("suwak2")
suwakvalue2.addEventListener("input",function(){
if(suwakvalue2.value>1 && suwakvalue2.value<3){
    cube.add(cubeuppernext);
    scene.add(cubeleftnext);
    scene.add(cuberightnext);
    cube.add(backnext);
    compartment_middle1.ison=true;
    compartment_middle2.ison=true;
    if (suwakvalue.value>4){
        console.log('bow');
        scene.add(compartment_middle1);
        scene.add(compartment_middle2);
        
    }
    
}
if(suwakvalue2.value<2){
    cube.remove(cubeuppernext);
    scene.remove(cubeleftnext);
    scene.remove(cuberightnext);
    cube.remove(backnext)
    scene.remove(compartment_middle1);
    scene.remove(compartment_middle2);
    compartment_middle2.ison=false;
}



if(suwakvalue2.value>2){
    scene.add(cubelefttop);
    scene.add(cuberighttop);
    cube.add(cubeuppertop);
    cube.add(backtop);
    compartment3.ison=true;
    if (suwakvalue.value>4){
        scene.add(compartment3);
        //scene.add(compartment_middle1);
        //scene.add(compartment_middle2);
    }
    console.log(compartment3.ison);
}

if(suwakvalue2.value<3){
    scene.remove(cubelefttop);
    scene.remove(cuberighttop);
    cube.remove(cubeuppertop);
    cube.remove(backtop);
    compartment3.ison=false;
    scene.remove(compartment3);
    //scene.remove(compartment_middle1);
    //scene.remove(compartment_middle2);
    console.log(compartment3.ison);
}

},false)

let buttonstop = document.getElementById("stop");

buttonstop.addEventListener("click", function(){

    controls.autoRotate=false;
    controls.update();

}, false)

const buttonstart = document.getElementById("start");

buttonstart.addEventListener("click", function(){
    controls.autoRotate=true;
    controls.update();
}, false)

scene.background = new THREE.Color( 0xE8E8E8 );
scene.add(cube);
//scene.add(light);
cube.add(cubeupper);
//cube.add(cubeuppernext)
scene.add(cubeleft);
scene.add(cuberight);
scene.add(back);
scene.add(light2);
scene.add(light2.target);
scene.add(light3);
scene.add(light3.target);
scene.add(light4);
scene.add(light4.target);


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