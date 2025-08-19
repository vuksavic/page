import * as THREE from 'three';

let material;
let matColor = 0xffffff;

function toggleMode() {
    const body = document.body;
    const hoverText = document.querySelector('.mode-toggle .hover');

    if (body.classList.contains('bright')) {
        body.classList.replace('bright', 'dark');
        matColor = 0x777777;
        hoverText.textContent = '[ bright mode ]';
    } else {
        body.classList.replace('dark', 'bright');
        matColor = 0xffffff;
        hoverText.textContent = '[ dark mode ]';
    }

    if (material) {
        material.color.setHex(matColor);
    }
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);

document.body.appendChild(renderer.domElement);

material = new THREE.MeshPhongMaterial({ color: matColor });
const geometry = new THREE.BoxGeometry(1, 1, 1);
const cube = new THREE.Mesh(geometry, material);

const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 8);

scene.add(cube);
scene.add(light);

camera.position.z = 5;

window.onresize = function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
};

function animate() {
    cube.rotation.x += 0.002;
    cube.rotation.y += 0.002;
    renderer.render(scene, camera);
}

document.querySelector('.mode-toggle').addEventListener('click', toggleMode);
