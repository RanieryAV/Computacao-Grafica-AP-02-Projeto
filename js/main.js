import * as THREE from "https://cdn.skypack.dev/three@0.133.1/build/three.module";
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.133.1/examples/jsm/controls/OrbitControls';
import { FontLoader } from "https://cdn.skypack.dev/three@0.133.1/examples/jsm/loaders/FontLoader.js";
import { TextGeometry } from "https://cdn.skypack.dev/three@0.133.1/examples/jsm/geometries/TextGeometry.js";
import { TweenMax, Power4, Power2 } from "gsap";

// Constants
const particleCount = 100000;
const particleSize = 0.9;
const defaultAnimationSpeed = 1;
const morphAnimationSpeed = 18;
const color = '#FFFFFF';

// Triggers
const triggers = document.getElementsByTagName('span');

// Animation variables
let animationVars = {
    speed: defaultAnimationSpeed / 100,
    color: color,
    rotation: -45
};

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(85, 290, 130);

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

// Function to create random points in a buffer geometry
function generateRandomPointsInBufferGeometry(geometry, count) {
    const positions = geometry.attributes.position.array;
    const result = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
        const index = Math.floor(Math.random() * (positions.length / 3));
        const offset = index * 3;

        result[i * 3] = positions[offset];
        result[i * 3 + 1] = positions[offset + 1];
        result[i * 3 + 2] = positions[offset + 2];
    }

    const bufferGeometry = new THREE.BufferGeometry();
    bufferGeometry.setAttribute('position', new THREE.BufferAttribute(result, 3));

    return bufferGeometry;
}

// Function to create vertices for points
function createVertices(bufferGeometry, points) {
    const positionAttribute = bufferGeometry.getAttribute('position');

    if (!positionAttribute) {
        console.error("Position attribute is undefined. BufferGeometry might not be correctly initialized.");
        return;
    }

    const geometry = new THREE.Geometry();

    for (let p = 0; p < particleCount; p++) {
        const vertex = new THREE.Vector3();
        vertex.fromBufferAttribute(positionAttribute, p);

        geometry.vertices.push(vertex);
    }

    // Set the geometry directly for points
    points.geometry = geometry;
}

function disperseParticlesDEPRECATED(textGeometry, count) {
    const particlesGeometry = new THREE.BufferGeometry();

    const positions = textGeometry.attributes.position.array;
    const boundingBox = new THREE.Box3().setFromBufferAttribute(textGeometry.attributes.position);

    const particleCount = count;
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
        const randomPoint = new THREE.Vector3(
            Math.random() * boundingBox.getSize(new THREE.Vector3()).x + boundingBox.min.x,
            Math.random() * boundingBox.getSize(new THREE.Vector3()).y + boundingBox.min.y,
            Math.random() * boundingBox.getSize(new THREE.Vector3()).z + boundingBox.min.z
        );

        particlePositions[i * 3] = randomPoint.x;
        particlePositions[i * 3 + 1] = randomPoint.y;
        particlePositions[i * 3 + 2] = randomPoint.z;

        const color = new THREE.Color();
        color.setHSL(Math.random(), 1.0, 0.5);

        particleColors[i * 3] = color.r;
        particleColors[i * 3 + 1] = color.g;
        particleColors[i * 3 + 2] = color.b;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    return particlesGeometry;
}

function generateSparseParticles(geometry, particleCount) {
    const positions = geometry.attributes.position.array;
    const result = new Float32Array(particleCount * 3);
  
    for (let i = 0; i < particleCount; i++) {
      const index = Math.floor(Math.random() * (positions.length / 3));
      const offset = index * 3;
  
      result[i * 3] = positions[offset];
      result[i * 3 + 1] = positions[offset + 1];
      result[i * 3 + 2] = positions[offset + 2];
    }
  
    const bufferGeometry = new THREE.BufferGeometry();
    bufferGeometry.setAttribute('position', new THREE.BufferAttribute(result, 3));
  
    return bufferGeometry;
  }
  
  function disperseParticles(geometry, particleCount) {
    const particlesGeometry = generateSparseParticles(geometry, particleCount);
    const particlesMaterial = new THREE.PointsMaterial({ size: particleSize, vertexColors: true });
  
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    return particles;
  }
  




// Create particles
const particlesGeometry = new THREE.BufferGeometry();
const particlesMaterial = new THREE.PointsMaterial({ size: particleSize, vertexColors: true });

// Generate random particles
const positions = [];
const colors = [];

for (let i = 0; i < particleCount; i++) {
    const x = (Math.random() - 0.5) * 200;
    const y = (Math.random() - 0.5) * 200;
    const z = (Math.random() - 0.5) * 200;

    positions.push(x, y, z);

    const color = new THREE.Color();
    color.setHSL(Math.random(), 1.0, 0.5);

    colors.push(color.r, color.g, color.b);
}

particlesGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
particlesGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

const particleSystem = new THREE.Points(particlesGeometry, particlesMaterial);
//scene.add(particleSystem);

// Texts
var loader = new FontLoader();
var typeface = 'https://dl.dropboxusercontent.com/s/bkqic142ik0zjed/swiss_black_cond.json?';

loader.load(typeface, (font) => {
    Array.from(triggers).forEach((trigger, idx) => {
      const textGeometry = new TextGeometry(trigger.textContent, {
        font: font,
        size: window.innerWidth * 0.02,
        height: 4,
        curveSegments: 10,
      });
      textGeometry.center();
  
      // Create particles for each character
      const positions = textGeometry.attributes.position.array;
  
      for (let i = 0; i < positions.length; i += 3) {
        const x = positions[i];
        const y = positions[i + 1];
        const z = positions[i + 2];
  
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesMaterial = new THREE.PointsMaterial({ size: particleSize, vertexColors: true });
  
        const particlePosition = new THREE.Float32BufferAttribute([x, y, z], 3);
        const particleColor = new THREE.Float32BufferAttribute([1, 1, 1], 3);
  
        particlesGeometry.setAttribute('position', particlePosition);
        particlesGeometry.setAttribute('color', particleColor);
  
        const particles = new THREE.Points(particlesGeometry, particlesMaterial);
  
        // Position the particles
        particles.position.x = (idx - 1) * 100;
        particles.position.y = 50;
  
        scene.add(particles);
      }
    });
    // Animate
    function animate() {
        // Update controls
        controls.update();

        // Update camera
        camera.lookAt(scene.position);

        window.requestAnimationFrame(animate);
        renderer.render(scene, camera);
    }

    animate();
});
