import { Group } from 'three';
import { OrbitControls } from '/node_modules/three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 10

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);



// criação das particulas

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

particleSystem2.position.y += 20
particleSystem2.position.x += 10
particleSystem3.position.y += 10
particleSystem3.position.x += 20
particleSystem4.position.x += 10

const groupP1 = new Group
groupP1.add(particleSystem1)
groupP1.add(particleSystem2)
groupP1.add(particleSystem3)
groupP1.add(particleSystem4)

scene.add(groupP1)

// controle orbital da camera
const controls =  new OrbitControls(camera, renderer.domElement)





const velocityofpart = 0.1
function animate() 
{
  requestAnimationFrame(animate);

  particles1.vertices.forEach(function (particle) {
    cubicpositions(particle, 5, 25, 5, velocityofpart)
  });
  particleSystem1.geometry.verticesNeedUpdate = true;  

  particles2.vertices.forEach(function (particle) {
    cubicpositions(particle, 15, 5, 5, velocityofpart)
  });
  particleSystem2.geometry.verticesNeedUpdate = true;  

  particles3.vertices.forEach(function (particle) {
    cubicpositions(particle, 5, 15, 5, velocityofpart)
  });
  particleSystem3.geometry.verticesNeedUpdate = true;  

  particles4.vertices.forEach(function (particle) {
    cubicpositions(particle, 15, 5, 5, velocityofpart)
  });
  particleSystem4.geometry.verticesNeedUpdate = true;  
  
  /*
  groupP.position.x += Math.cos(Math.PI) + groupP.position.z/100
  groupP.position.z += Math.sin(Math.PI) - groupP.position.x/100
  groupP.rotation.y += 0.1
  */
  

  controls.update()
  renderer.render(scene, camera);
}
animate();





function randomparticles(count, incrementx, incrementy, incrementz, Pgeometry)
{
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

/*
function torusparticles(particle)
{
    const minR = 0.5
    const maxR = 2
    const theta = Math.random()*2*Math.PI
    const R = 2

    particle.y = R*Math.sin(theta)
    particle.z = (Math.random() - 0.5)*2
    particle.x = R*Math.cos(theta)
}
*/