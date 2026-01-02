const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
  alpha: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 35;

// IŞIKLAR
const light1 = new THREE.PointLight(0xffcc88, 1.5);
light1.position.set(20, 20, 20);

const light2 = new THREE.PointLight(0xff0000, 0.5);
light2.position.set(-20, -10, 10);

scene.add(light1, light2);

// =======================
// KILIÇ MODELİ
// =======================

// Bıçak
const bladeGeo = new THREE.BoxGeometry(1, 20, 0.3);
const bladeMat = new THREE.MeshStandardMaterial({
  color: 0xcfd2d6,
  metalness: 0.9,
  roughness: 0.2
});
const blade = new THREE.Mesh(bladeGeo, bladeMat);
blade.position.y = 8;

// Kabza
const handleGeo = new THREE.CylinderGeometry(0.6, 0.6, 5, 32);
const handleMat = new THREE.MeshStandardMaterial({
  color: 0x3b2f2f
});
const handle = new THREE.Mesh(handleGeo, handleMat);
handle.position.y = -5;

// Muhafaza
const guardGeo = new THREE.BoxGeometry(6, 0.6, 1);
const guardMat = new THREE.MeshStandardMaterial({
  color: 0x8b0000,
  metalness: 0.7
});
const guard = new THREE.Mesh(guardGeo, guardMat);
guard.position.y = -2;

// GRUPLA
const sword = new THREE.Group();
sword.add(blade, handle, guard);
scene.add(sword);

// AÇI
sword.rotation.z = Math.PI / 6;

// ANİMASYON
function animate() {
  requestAnimationFrame(animate);
  sword.rotation.y += 0.003;
  sword.rotation.x += 0.001;
  renderer.render(scene, camera);
}

animate();

// RESPONSIVE
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
