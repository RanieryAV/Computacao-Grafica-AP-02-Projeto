const particleSlider = document.getElementById('particleSlider');
const particleCountDisplay = document.getElementById('particleCount');

// ------------------------------------------ Importação ------------------------------------------ //

import { Group } from 'three';
import { OrbitControls } from '/node_modules/three/examples/jsm/controls/OrbitControls'

// --------------------------------------- criação da cena --------------------------------------- //

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.x = 200
camera.position.y = 200
camera.position.z = 200

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// ------------------------------------ criação das particulas (P) ------------------------------------ //

const quantipart = 500
const sizeofpart = 0.5
const particles = []
const particleSystem = []

for (let i = 0; i < 24; i++)
{
  particles[i] = randomparticles(quantipart, 200, 200, 200)
  const particleMaterial = new THREE.PointsMaterial
  ({
    color: 0xFFFFFF, 
    size: sizeofpart 
  });
  particleSystem[i] = new THREE.Points(particles[i], particleMaterial);
}

// ------------------------------------ Altera posição das particulas para formar as letras ------------------------------------ //

particleSystem[0].position.y += 0
particleSystem[1].position.y += 20
particleSystem[1].position.x += 10
particleSystem[2].position.y += 10
particleSystem[2].position.x += 20
particleSystem[3].position.x += 10

const groupP1 = new Group
groupP1.add(particleSystem[0])
groupP1.add(particleSystem[1])
groupP1.add(particleSystem[2])
groupP1.add(particleSystem[3])

particleSystem[4].position.x += 40
particleSystem[5].position.y += 20
particleSystem[5].position.x += 50
particleSystem[6].position.y += 10
particleSystem[6].position.x += 60
particleSystem[7].position.x += 50

const groupP2 = new Group
groupP2.add(particleSystem[4])
groupP2.add(particleSystem[5])
groupP2.add(particleSystem[6])
groupP2.add(particleSystem[7])

particleSystem[8].position.x += 80
particleSystem[9].position.y += 20
particleSystem[9].position.x += 90
particleSystem[10].position.y += -10
particleSystem[10].position.x += 100
particleSystem[11].position.x += 90
particleSystem[11].position.y += -20
particleSystem[12].position.x += 95

const groupG = new Group
groupG.add(particleSystem[8])
groupG.add(particleSystem[9])
groupG.add(particleSystem[10])
groupG.add(particleSystem[11])
groupG.add(particleSystem[12])

particleSystem[13].position.x += 120
particleSystem[14].position.y += 20
particleSystem[14].position.x += 130
particleSystem[15].position.y += -20
particleSystem[15].position.x += 130
particleSystem[16].position.x += 130

const groupE1 = new Group
groupE1.add(particleSystem[13])
groupE1.add(particleSystem[14])
groupE1.add(particleSystem[15])
groupE1.add(particleSystem[16])

particleSystem[17].position.x += 160
particleSystem[18].position.y += 20
particleSystem[18].position.x += 170
particleSystem[19].position.y += -20
particleSystem[19].position.x += 170
particleSystem[20].position.x += 170

const groupE2 = new Group
groupE2.add(particleSystem[17])
groupE2.add(particleSystem[18])
groupE2.add(particleSystem[19])
groupE2.add(particleSystem[20])

particleSystem[21].position.x += 200
particleSystem[22].position.y += 20
particleSystem[22].position.x += 210
particleSystem[23].position.y += -20
particleSystem[23].position.x += 210

const groupC = new Group
groupC.add(particleSystem[21])
groupC.add(particleSystem[22])
groupC.add(particleSystem[23])

// ------------------------------------ Adiciona os sistemas a um grupo único ------------------------------------ //

const SIGLA = new Group
SIGLA.add(groupP1)
SIGLA.add(groupP2)
SIGLA.add(groupG)
SIGLA.add(groupE1)
SIGLA.add(groupE2)
SIGLA.add(groupC)
scene.add(SIGLA)

// ------------------------------------ controle orbital da camera ------------------------------------ //

const controls =  new OrbitControls(camera, renderer.domElement)

// ------------------------------------ Animação ------------------------------------ //

const velocityofpart = 0.1
function animate() 
{
  requestAnimationFrame(animate);

  // As particulas de cada sistema vão para determinadas posições e formam diferentes formas cubicas
  
  animateletterformation(particles[0], particleSystem[0], particles[0].particle, 5, 25, 5, velocityofpart)
  animateletterformation(particles[1], particleSystem[1], particles[1].particle, 15, 5, 5, velocityofpart)
  animateletterformation(particles[2], particleSystem[2], particles[2].particle, 5, 15, 5, velocityofpart)
  animateletterformation(particles[3], particleSystem[3], particles[3].particle, 15, 5, 5, velocityofpart)

  animateletterformation(particles[4], particleSystem[4], particles[4].particle, 5, 25, 5, velocityofpart)
  animateletterformation(particles[5], particleSystem[5], particles[5].particle, 15, 5, 5, velocityofpart)
  animateletterformation(particles[6], particleSystem[6], particles[6].particle, 5, 15, 5, velocityofpart)
  animateletterformation(particles[7], particleSystem[7], particles[7].particle, 15, 5, 5, velocityofpart)

  animateletterformation(particles[8], particleSystem[8], particles[8].particle, 5, 25, 5, velocityofpart)
  animateletterformation(particles[9], particleSystem[9], particles[9].particle, 15, 5, 5, velocityofpart)
  animateletterformation(particles[10], particleSystem[10], particles[10].particle, 5, 15, 5, velocityofpart)
  animateletterformation(particles[11], particleSystem[11], particles[11].particle, 15, 5, 5, velocityofpart)
  animateletterformation(particles[12], particleSystem[12], particles[12].particle, 10, 5, 5, velocityofpart)

  animateletterformation(particles[13], particleSystem[13], particles[13].particle, 5, 25, 5, velocityofpart)
  animateletterformation(particles[14], particleSystem[14], particles[14].particle, 15, 5, 5, velocityofpart)
  animateletterformation(particles[15], particleSystem[15], particles[15].particle, 15, 5, 5, velocityofpart)
  animateletterformation(particles[16], particleSystem[16], particles[16].particle, 15, 5, 5, velocityofpart)
  
  animateletterformation(particles[17], particleSystem[17], particles[17].particle, 5, 25, 5, velocityofpart)
  animateletterformation(particles[18], particleSystem[18], particles[18].particle, 15, 5, 5, velocityofpart)
  animateletterformation(particles[19], particleSystem[19], particles[19].particle, 15, 5, 5, velocityofpart)
  animateletterformation(particles[20], particleSystem[20], particles[20].particle, 15, 5, 5, velocityofpart)

  animateletterformation(particles[21], particleSystem[21], particles[21].particle, 5, 25, 5, velocityofpart)
  animateletterformation(particles[22], particleSystem[22], particles[22].particle, 15, 5, 5, velocityofpart)
  animateletterformation(particles[23], particleSystem[23], particles[23].particle, 15, 5, 5, velocityofpart)

  
  // translação e rotação do grupo todo
  
  /*
  SIGLA.position.x += Math.cos(Math.PI) + SIGLA.position.z/100
  SIGLA.position.z += Math.sin(Math.PI) - SIGLA.position.x/100
  
  SIGLA.rotation.y += 0.1
  */
  
  
  // atualiza a cena e o controle de camera a cada frame

  controls.update() 
  renderer.render(scene, camera);
}
animate();



// -------------------------------------------- Funções -------------------------------------------- //

function randomparticles(count, incrementx, incrementy, incrementz) {
  const Pgeometry = new THREE.Geometry();
  for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * incrementx;
      const y = (Math.random() - 0.5) * incrementy;
      const z = (Math.random() - 0.5) * incrementz;
      const particle = new THREE.Vector3(x, y, z);
      Pgeometry.vertices.push(particle);
  }
  return Pgeometry;
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

//Slider
particleSlider.addEventListener('input', function () {
  const newParticleCount = parseInt(particleSlider.value);
  particleCountDisplay.textContent = newParticleCount;

  // Atualize o número de partículas
  for (let i = 0; i < 24; i++) {
      particles[i] = randomparticles(newParticleCount, 200, 200, 200);
      particleSystem[i].geometry = particles[i];
  }
});


