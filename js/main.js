var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var verticalLineParticleGeometry = new THREE.BufferGeometry();
var particleMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.001 });

var rightHalfOfCircleParticleGeometry = new THREE.BufferGeometry();

var positions = new Float32Array(1000 * 3); // An array to store particle positions
var circle_positions = new Float32Array(1000 * 3); // An array to store particle positions

// Function to generate particles forming the letter "P"
function generateLetterP() {
  for (var i = 0; i < 500; i++) {
    // Distribute particles in a semicircular shape
    var angle = (i / 500) * Math.PI;

    // Position particles to form the letter "P"
    circle_positions[i / 5 * 3] = Math.sin(angle);
    circle_positions[i / 5 * 3 + 1] = Math.cos(angle);
    
    // Distribute particles along a horizontal line with fewer particles
    if (i % 5 === 0) {
      positions[i / 9 * 3] = (i / 1000000) * 2;
      positions[i / 9 * 3 + 1] = 0;
      positions[i / 9 * 3 + 2] = 0;
    }

    // Add a vertical line on the left side of the horizontal line
    if (i < 375) {
      positions[i / 5 * 3 + 1] = (i / 250) * 2 - 2; // Adjust the length of the vertical line
    }
  }

  verticalLineParticleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  var verticalLineParticleSystem = new THREE.Points(verticalLineParticleGeometry, particleMaterial);
  scene.add(verticalLineParticleSystem);

  rightHalfOfCircleParticleGeometry.setAttribute('position', new THREE.BufferAttribute(circle_positions, 3));
  var rightHalfOfCircleParticleSystem = new THREE.Points(rightHalfOfCircleParticleGeometry, particleMaterial);
  scene.add(rightHalfOfCircleParticleSystem);
}

generateLetterP();

camera.position.z = 3;

function animate() {
  requestAnimationFrame(animate);

  // Update particle positions or any other animations here

  renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', function () {
  var newWidth = window.innerWidth;
  var newHeight = window.innerHeight;

  camera.aspect = newWidth / newHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(newWidth, newHeight);
});
