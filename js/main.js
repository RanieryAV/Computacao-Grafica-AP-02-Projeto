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

<<<<<<< Updated upstream
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1000);
camera.position.set(85, 290, 130);
=======
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10
>>>>>>> Stashed changes

const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

<<<<<<< Updated upstream
const controls = new OrbitControls(camera, renderer.domElement);
controls.update();

// Function to create random points in a buffer geometry
function generateRandomPointsInBufferGeometry(geometry, count) {
    const positions = geometry.attributes.position.array;
    const result = new Float32Array(count * 3);
=======
// ------------------------------------ criação das particulas do primeiro (P) ------------------------------------ //

const quantipart = 1500
const sizeofpart = 0.5
>>>>>>> Stashed changes

    for (let i = 0; i < count; i++) {
        const index = Math.floor(Math.random() * (positions.length / 3));
        const offset = index * 3;

        result[i * 3] = positions[offset];
        result[i * 3 + 1] = positions[offset + 1];
        result[i * 3 + 2] = positions[offset + 2];
    }

    const bufferGeometry = new THREE.BufferGeometry();
    bufferGeometry.setAttribute('position', new THREE.BufferAttribute(result, 3));

<<<<<<< Updated upstream
    return bufferGeometry;
=======
const particles4 = new THREE.Geometry()
randomparticles(quantipart, 200, 200, 200, particles4)
const particleMaterial4 = new THREE.PointsMaterial
({
  color: 0xFFFFFF, 
  size: sizeofpart 
});
const particleSystem4 = new THREE.Points(particles4, particleMaterial4);

// ------------------------------------ Altera posição das particulas para formar o P ------------------------------------ //

particleSystem2.position.y += 20
particleSystem2.position.x += 10
particleSystem3.position.y += 10
particleSystem3.position.x += 20
particleSystem4.position.x += 10

// ------------------------------------ Adiciona os sistemas a um grupo único ------------------------------------ //

const groupP = new Group
groupP.add(particleSystem1)
groupP.add(particleSystem2)
groupP.add(particleSystem3)
groupP.add(particleSystem4)
scene.add(groupP)

// ------------------------------------ criação das particulas do segundo (P) ------------------------------------ //
const particles5 = new THREE.Geometry() // Cria a coluna vertical do P
randomparticles(quantipart, 200, 200, 200, particles5)
const particleMaterial5 = new THREE.PointsMaterial
({
  color: 0xFF0000, 
  size: sizeofpart 
});
const particleSystem5 = new THREE.Points(particles5, particleMaterial5);

const particles6 = new THREE.Geometry()
randomparticles(quantipart, 200, 200, 200, particles6)
const particleMaterial6 = new THREE.PointsMaterial
({
  color: 0x00FF00, 
  size: sizeofpart 
});
const particleSystem6 = new THREE.Points(particles6, particleMaterial6);

const particles7 = new THREE.Geometry()
randomparticles(quantipart, 200, 200, 200, particles7)
const particleMaterial7 = new THREE.PointsMaterial
({
  color: 0x0000FF, 
  size: sizeofpart 
});
const particleSystem7 = new THREE.Points(particles7, particleMaterial7);

const particles8 = new THREE.Geometry()
randomparticles(quantipart, 200, 200, 200, particles8)
const particleMaterial8 = new THREE.PointsMaterial
({
  color: 0xFFFFFF, 
  size: sizeofpart 
});
const particleSystem8 = new THREE.Points(particles8, particleMaterial8);

// ------------------------------------ Altera posição das particulas para formar o P ------------------------------------ //

particleSystem5.position.x += 40
particleSystem6.position.y += 20
particleSystem6.position.x += 50
particleSystem7.position.y += 10
particleSystem7.position.x += 60
particleSystem8.position.x += 50

// ------------------------------------ Adiciona os sistemas a um grupo único ------------------------------------ //

const groupP2 = new Group
groupP2.add(particleSystem5)
groupP2.add(particleSystem6)
groupP2.add(particleSystem7)
groupP2.add(particleSystem8)
scene.add(groupP2)
// ------------------------------------ controle orbital da camera ------------------------------------ //

const controls =  new OrbitControls(camera, renderer.domElement)

// ------------------------------------ Animação ------------------------------------ //

const velocityofpart = 0.5
function animate() 
{
  requestAnimationFrame(animate);

  // As particulas de cada sistema vão para determinadas posições e formam diferentes formas cubicas

  animateletterformation(particles1, particleSystem1, particles1.particle, 5, 25, 5, velocityofpart)
  animateletterformation(particles2, particleSystem2, particles2.particle, 15, 5, 5, velocityofpart)
  animateletterformation(particles3, particleSystem3, particles3.particle, 5, 15, 5, velocityofpart)
  animateletterformation(particles4, particleSystem4, particles4.particle, 15, 5, 5, velocityofpart)

  animateletterformation(particles5, particleSystem5, particles5.particle, 5, 25, 5, velocityofpart)
  animateletterformation(particles6, particleSystem6, particles6.particle, 15, 5, 5, velocityofpart)
  animateletterformation(particles7, particleSystem7, particles7.particle, 5, 15, 5, velocityofpart)
  animateletterformation(particles8, particleSystem8, particles8.particle, 15, 5, 5, velocityofpart)
  
  // translação e rotação do grupo todo
  
  //groupP.position.x += Math.cos(Math.PI) + groupP.position.z/100
  //groupP.position.z += Math.sin(Math.PI) - groupP.position.x/100
  
  //groupP.rotation.y += 0.1
  
  
  // atualiza a cena e o controle de camera a cada frame

  controls.update() 
  renderer.render(scene, camera);
>>>>>>> Stashed changes
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
