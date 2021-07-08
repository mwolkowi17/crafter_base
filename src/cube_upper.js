import * as THREE from 'three';

const width = 2;
const height = 0.2;
const depth = 1;
const geometry = new THREE.BoxGeometry(width, height, depth);
const material = new THREE.MeshPhongMaterial({ color: 0x787878 });

export const cubeupper = new THREE.Mesh(geometry, material);

cubeupper.position.y=1;

export const cubeuppernext = new THREE.Mesh(geometry, material);

cubeuppernext.position.y=2;

export const cubeuppertop = new THREE.Mesh(geometry, material)

cubeuppertop.position.y=3;