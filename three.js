// SAHNE
const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg"),
  alpha: true,
  antialias: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 40;

// IŞIKLAR (SİNEMATİK)
scene.add(new THREE.AmbientLight(0x331100, 0.4));

const keyLight = new THREE.PointLight(0xffc27a, 1.8);
keyLight.position.set(20, 20, 20);
scene.add(keyLight);

const redLight = new THREE.PointLight(0x8b0000, 0.8);
redLight.position.set(-20, -10, 5);
scene.add(redLight);

// =======================
// YENİÇERİ KILIÇ MODELİ
// =======================

const sword = new THREE.Group();

// Eğri bıçak
const bladeGeo = new THREE.BoxGeometry(1, 22, 0.4);
bladeGeo.translate(0, 11, 0);

const bladeMat = new THREE.MeshStandardMaterial({
  color: 0xdfe3e6,
  metalness: 0.95,
  roughness: 0.15
});

const blade = new THREE.Mesh(bladeGeo, bladeMat);
blade.rotation.z = -0.08; // eğrilik

// Kabza
const handleGeo = new THREE.CylinderGeometry(0.7, 0.8, 5, 32);
const handleMat = new THREE.MeshStandardMaterial({ color: 0x2b1b14 });
const handle = new THREE.Mesh(handleGeo, handleMat);
handle.position.y = -4;

// Muhafaza
const guardGeo = new THREE.BoxGeometry(7, 0.8, 1.2);
const guardMat = new THREE.MeshStandardMaterial({
  color: 0x7a0000,
  metalness: 0.7
});
const guard = new THREE.Mesh(guardGeo, guardMat);
guard.position.y = -1.5;

// Birleştir
sword.add(blade, handle, guard);
scene.add(sword);

// AÇI
sword.rotation.z = Math.PI / 10;

// ANİMASYON
function animate() {
  requestAnimationFrame(animate);
  sword.rotation.y += 0.002;
  sword.rotation.x += 0.0008;
  renderer.render(scene, camera);
}
animate();
