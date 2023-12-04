// ------------------------------------------ Importação ------------------------------------------ //

import { Group } from 'three';
import { OrbitControls } from '/node_modules/three/examples/jsm/controls/OrbitControls'

// --------------------------------------- criação da cena --------------------------------------- //

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ------------------------------------ criação das particulas do primeiro (P) ------------------------------------ //

const quantipart = 1500
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
