// ------------------------------------------ Importação ------------------------------------------ //

import { Group } from 'three';
import { OrbitControls } from '/node_modules/three/examples/jsm/controls/OrbitControls'

// --------------------------------------- criação da cena --------------------------------------- //

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.y = 200

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ------------------------------------ criação das particulas (P) ------------------------------------ //

const quantipart = 500
const sizeofpart = 0.5

const particles1 = new THREE.Geometry()
randomparticles(quantipart, 200, 200, 200, particles1)
const particleMaterial1 = new THREE.PointsMaterial
({
  color: 0xFF0000, 
  size: sizeofpart 
});
const particleSystem1 = new THREE.Points(particles1, particleMaterial1);

const particles2 = new THREE.Geometry()
randomparticles(quantipart, 200, 200, 200, particles2)
const particleMaterial2 = new THREE.PointsMaterial
({
  color: 0x00FF00, 
  size: sizeofpart 
});
const particleSystem2 = new THREE.Points(particles2, particleMaterial2);

const particles3 = new THREE.Geometry()
randomparticles(quantipart, 200, 200, 200, particles3)
const particleMaterial3 = new THREE.PointsMaterial
({
  color: 0x0000FF, 
  size: sizeofpart 
});
const particleSystem3 = new THREE.Points(particles3, particleMaterial3);

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
  
  // translação e rotação do grupo todo
  
  groupP.position.x += Math.cos(Math.PI) + groupP.position.z/100
  groupP.position.z += Math.sin(Math.PI) - groupP.position.x/100
  
  groupP.rotation.y += 0.1
  
  
  // atualiza a cena e o controle de camera a cada frame

  controls.update() 
  renderer.render(scene, camera);
}
animate();



// -------------------------------------------- Funções -------------------------------------------- //

function randomparticles(count, incrementx, incrementy, incrementz, Pgeometry)
{
  // Cria as particulas em posições aleatórias e as manda para a geometria determinada

  for (let i = 0; i < count; i++) 
  {
    const x = (Math.random() - 0.5) * incrementx; 
    const y = (Math.random() - 0.5) * incrementy;  
    const z = (Math.random() - 0.5) * incrementz;  
    const particle = new THREE.Vector3(x, y, z); z
    Pgeometry.vertices.push(particle);
  }
}



function cubicpositions(particle, finalpositionx, finalpositiony, finalpositionz, velocity)
{
  // Tomada de posição em formas quadradas
  // "Velocity" não é necessariamente a velocidade, e sim o update de posição

  if(particle.x > finalpositionx)
    {
      particle.x -= velocity
    }
    else if (particle.x < -finalpositionx)
    {
      particle.x += velocity
    }

    if(particle.y > finalpositiony)
    {
      particle.y -= velocity
    }
    else if (particle.y < -finalpositiony)
    {
      particle.y += velocity
    }

    if(particle.z > finalpositionz)
    {
      particle.z -= velocity
    }
    else if (particle.z < -finalpositionz)
    {
      particle.z += velocity
    }
}

function animateletterformation(particles, particleSystem, p, X, Y, Z, V)
{
  // Atualiza a posição das particulas de cada sistema a cada frame de acordo com a função

  particles.vertices.forEach(function (p) {
    cubicpositions(p, X, Y, Z, V)
  });
  particleSystem.geometry.verticesNeedUpdate = true;
}
