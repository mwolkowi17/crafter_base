import * as THREE from 'three';

const width = 0.2;
const height = 1.2;
const depth = 1;
const geometry = new THREE.BoxGeometry(width, height, depth);
const material = new THREE.MeshPhongMaterial({ color: 0x787878 });

export const compartment1 = new THREE.Mesh(geometry, material);
compartment1.position.x=0;
compartment1.position.y=0.5;
compartment1.ison=false;

export const compartment3 = new THREE.Mesh(geometry, material);
compartment3.position.x=0;
compartment3.position.y=2.5;
compartment3.ison=false;

export const compartment_middle1 = new THREE.Mesh(geometry, material);
compartment_middle1.position.x=-2;
compartment_middle1.position.y=1.5;
compartment_middle1.ison=false;


export const compartment_middle2 = new THREE.Mesh(geometry, material);
compartment_middle2.position.x=2;
compartment_middle2.position.y=1.5;
compartment_middle2.ison=false;