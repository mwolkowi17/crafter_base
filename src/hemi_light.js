import * as THREE from 'three';

const intensity = 1;
const skyColor = 0xB1E1FF;  // light blue
const groundColor =  0xB1E1FF;  //0xB97A29;  // brownish orange
export const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
