import * as THREE from 'three';

const width = 2;
const height = 1.2;
const depth = 0.1;
const geometry = new THREE.BoxGeometry(width, height, depth);
const material = new THREE.MeshPhongMaterial({ color: 0x87878 });
export const back  = new THREE.Mesh(geometry, material);

back.position.z=-0.5;
back.position.y=0.5;

export const backnext = new THREE.Mesh(geometry, material);

backnext.position.z=-0.5;
backnext.position.y=1.5;

export const backtop = new THREE.Mesh(geometry, material);

backtop.position.z=-0.5;
backtop.position.y=2.5;
