import * as THREE from 'three';

const width = 0.2;
const height = 1.2;
const depth = 1;
const geometry = new THREE.BoxGeometry(width, height, depth);
const material = new THREE.MeshPhongMaterial({ color: 0x787878 });

export const cubeleft = new THREE.Mesh(geometry, material);

cubeleft.position.x=-0.9;
cubeleft.position.y=0.5;

export const cuberight = new THREE.Mesh(geometry,material)

cuberight.position.x=0.9;
cuberight.position.y=0.5;

export const cubeleftnext = new THREE.Mesh(geometry, material);

cubeleftnext.position.x=-0.9;
cubeleftnext.position.y=1.5;

export const cuberightnext = new THREE.Mesh(geometry,material)

cuberightnext.position.x=0.9;
cuberightnext.position.y=1.5;

export const cubelefttop = new THREE.Mesh(geometry, material);

cubelefttop.position.x=-0.9;
cubelefttop.position.y=2.5;

export const cuberighttop = new THREE.Mesh(geometry,material)

cuberighttop.position.x=0.9;
cuberighttop.position.y=2.5;