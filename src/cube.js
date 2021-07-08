import * as THREE from 'three';

const width = 2;
const height = 0.2;
const depth = 1;
const geometry = new THREE.BoxGeometry(width, height, depth);
const material = new THREE.MeshPhongMaterial({ color: 0x787878 });

export const cube = new THREE.Mesh(geometry, material);
cube.castShadow = true;