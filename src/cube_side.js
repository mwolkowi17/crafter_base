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