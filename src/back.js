import * as THREE from 'three';

const width = 2;
const height = 1.2;
const depth = 0.1;
const geometry = new THREE.BoxGeometry(width, height, depth);
const material = new THREE.MeshPhongMaterial({ color: 0x87878 });
export const back  = new THREE.Mesh(geometry, material);

back.position.z=-0.5;
back.position.y=0.5;
