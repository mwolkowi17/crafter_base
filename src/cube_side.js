import * as THREE from 'three';

const width = 0.2;
const height = 1.2;
const depth = 1;
const geometry = new THREE.BoxGeometry(width, height, depth);
const material = new THREE.MeshPhongMaterial({ color: 0xb5651d });

export const cubeleft = new THREE.Mesh(geometry, material);

cubeleft.position.x=-1;
cubeleft.position.y=0.5;

export const cuberight = new THREE.Mesh(geometry,material)

cuberight.position.x=1;
cuberight.position.y=0.5;

export const cubeleftnext = new THREE.Mesh(geometry, material);

cubeleftnext.position.x=-1;
cubeleftnext.position.y=1;

export const cuberightnext = new THREE.Mesh(geometry,material)

cuberightnext.position.x=1;
cuberightnext.position.y=1;