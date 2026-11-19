/* ==========================================================================
   THREE.JS 3D ROYAL WEDDING WALK STAGE
   Warm Royal Palace Hallway with 3D Miniature Figurines & Dynamic Lighting
   ========================================================================== */

class Royal3DStage {
  constructor() {
    this.container = document.getElementById('three-stage');
    if (!this.container || typeof THREE === 'undefined') return;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.clock = new THREE.Clock();

    this.groomGroup = null;
    this.brideGroup = null;
    this.petals = [];
    this.diyas = [];

    this.mouseX = 0;
    this.mouseY = 0;
    this.targetCameraX = 0;
    this.targetCameraY = 2.0;

    this.isWalking = false;
    this.walkProgress = 0;
    this.walkSpeed = 0.22;
    this.isCameraFlying = false;

    this.isPaused = false;
    this.animFrameId = null;

    this.init();
  }

  init() {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || (window.innerHeight * 0.58);
    const isMobile = window.innerWidth < 768;

    // 1. Scene & Atmosphere
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x3B050E, 0.04);

    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    this.camera.position.set(0, 2.0, isMobile ? 7.7 : 7.2);
    this.camera.lookAt(0, 1.25, 0);

    // 2. WebGL Renderer - High Clarity & Smooth Performance
    const dpr = Math.min(window.devicePixelRatio || 1, 2.0);
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(dpr);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.2;
    this.container.appendChild(this.renderer.domElement);
    this.onResize();

    // 3. Lighting Setup
    this.setupLighting();

    // 4. Royal Palace Hallway
    this.buildPalace();

    // 5. 3D Miniature Figurines
    this.buildMiniatures();

    // 6. Floating 3D Flower Petals & Diyas
    this.buildFloatingPetals();

    // 7. Handlers
    window.addEventListener('resize', () => this.onResize());
    window.addEventListener('mousemove', (e) => this.onMouseMove(e));
    window.addEventListener('touchmove', (e) => this.onTouchMove(e), { passive: true });

    // 8. Render Loop
    this.animate();
  }

  setupLighting() {
    const isMobile = window.innerWidth < 768;
    const ambient = new THREE.AmbientLight(0xFFE5D0, 1.05);
    this.scene.add(ambient);

    const mainLight = new THREE.DirectionalLight(0xFFF0DE, 1.1);
    mainLight.position.set(1.5, 7, 5);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    mainLight.shadow.bias = -0.001;
    this.scene.add(mainLight);

    const fillLight = new THREE.DirectionalLight(0xFFE2C8, 0.45);
    fillLight.position.set(-2, 4, 3);
    this.scene.add(fillLight);

    const goldGlow = new THREE.PointLight(0xD4AF37, 1.8, 22);
    goldGlow.position.set(0, 4.0, -10);
    this.scene.add(goldGlow);
  }

  buildPalace() {
    // Marble Floor
    const floorGeo = new THREE.PlaneGeometry(28, 40);
    const floorMat = new THREE.MeshStandardMaterial({
      color: 0x220409,
      roughness: 0.2,
      metalness: 0.5
    });
    const floor = new THREE.Mesh(floorGeo, floorMat);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    floor.receiveShadow = true;
    this.scene.add(floor);

    // Red Velvet Carpet Runway
    const carpetGeo = new THREE.PlaneGeometry(3.4, 38);
    const carpetMat = new THREE.MeshStandardMaterial({
      color: 0x821124,
      roughness: 0.7,
      metalness: 0.1
    });
    const carpet = new THREE.Mesh(carpetGeo, carpetMat);
    carpet.rotation.x = -Math.PI / 2;
    carpet.position.set(0, 0.015, -4);
    carpet.receiveShadow = true;
    this.scene.add(carpet);

    // Gold borders along carpet
    [-1.75, 1.75].forEach(x => {
      const borderGeo = new THREE.BoxGeometry(0.08, 0.03, 38);
      const borderMat = new THREE.MeshStandardMaterial({ color: 0xD4AF37, metalness: 0.85, roughness: 0.25 });
      const border = new THREE.Mesh(borderGeo, borderMat);
      border.position.set(x, 0.02, -4);
      this.scene.add(border);
    });

    // 3D Ornate Golden Pillars with decorative rings
    const zPositions = [-10, -6, -2, 2];
    zPositions.forEach(z => {
      [-2.5, 2.5].forEach(x => {
        const pillarGroup = new THREE.Group();

        // Base Pedestal
        const baseGeo = new THREE.CylinderGeometry(0.35, 0.42, 0.35, 16);
        const goldMat = new THREE.MeshStandardMaterial({ color: 0xD4AF37, metalness: 0.8, roughness: 0.25 });
        const base = new THREE.Mesh(baseGeo, goldMat);
        base.position.y = 0.18;
        pillarGroup.add(base);

        // Shaft (Ivory Cream with Gold Flutes)
        const shaftGeo = new THREE.CylinderGeometry(0.24, 0.26, 4.0, 16);
        const creamMat = new THREE.MeshStandardMaterial({ color: 0xFDFBF7, roughness: 0.35 });
        const shaft = new THREE.Mesh(shaftGeo, creamMat);
        shaft.position.y = 2.18;
        shaft.castShadow = true;
        pillarGroup.add(shaft);

        // Middle Gold Ring
        const ringGeo = new THREE.TorusGeometry(0.28, 0.035, 8, 20);
        const ring = new THREE.Mesh(ringGeo, goldMat);
        ring.rotation.x = Math.PI / 2;
        ring.position.y = 2.2;
        pillarGroup.add(ring);

        // Capital
        const capGeo = new THREE.CylinderGeometry(0.42, 0.26, 0.4, 16);
        const cap = new THREE.Mesh(capGeo, goldMat);
        cap.position.y = 4.2;
        pillarGroup.add(cap);

        // Diya Light
        const diyaLight = new THREE.PointLight(0xFFA500, 1.1, 5);
        diyaLight.position.set(x > 0 ? -0.4 : 0.4, 0.35, 0);
        pillarGroup.add(diyaLight);
        this.diyas.push(diyaLight);

        pillarGroup.position.set(x, 0, z);
        this.scene.add(pillarGroup);
      });

      // Royal Overhead Arch
      const archGeo = new THREE.TorusGeometry(2.5, 0.08, 8, 24, Math.PI);
      const archMat = new THREE.MeshStandardMaterial({ color: 0xD4AF37, metalness: 0.85, roughness: 0.2 });
      const arch = new THREE.Mesh(archGeo, archMat);
      arch.position.set(0, 4.15, z);
      this.scene.add(arch);
    });

    // Palace Royal Arch Gate at Far End
    const gateGroup = new THREE.Group();
    const gateGeo = new THREE.BoxGeometry(3.0, 5.0, 0.1);
    const gateMat = new THREE.MeshStandardMaterial({ color: 0x4D0914, roughness: 0.4, metalness: 0.3 });
    const gate = new THREE.Mesh(gateGeo, gateMat);
    gate.position.y = 2.5;
    gateGroup.add(gate);

    const gateFrameGeo = new THREE.BoxGeometry(3.3, 5.3, 0.12);
    const gateFrameMat = new THREE.MeshStandardMaterial({ color: 0xD4AF37, metalness: 0.85, roughness: 0.2 });
    const gateFrame = new THREE.Mesh(gateFrameGeo, gateFrameMat);
    gateFrame.position.y = 2.65;
    gateGroup.add(gateFrame);

    gateGroup.position.set(0, 0, -13.5);
    this.scene.add(gateGroup);
  }

  buildMiniatures() {
    const textureLoader = new THREE.TextureLoader();

    // 1. Exact 3D Groom Figurine (Chi. Rajesh)
    this.groomGroup = new THREE.Group();
    this.groomGroup.position.set(-0.85, 0, -11);

    textureLoader.load('assets/groom_3d_real_miniature.png', (texture) => {
      texture.generateMipmaps = true;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      if (this.renderer && this.renderer.capabilities.getMaxAnisotropy) {
        texture.anisotropy = Math.min(this.renderer.capabilities.getMaxAnisotropy(), 4);
      }

      const mat = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        alphaTest: 0.05,
        roughness: 0.95,
        metalness: 0.0,
        side: THREE.DoubleSide
      });
      // Figurine ratio -> 1.56 x 2.5
      const geo = new THREE.PlaneGeometry(1.56, 2.5);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.y = 1.25;
      mesh.castShadow = true;
      this.groomGroup.add(mesh);
    });

    const shadowGeo = new THREE.PlaneGeometry(0.9, 0.45);
    const shadowMat = new THREE.MeshBasicMaterial({
      color: 0x000000,
      transparent: true,
      opacity: 0.45
    });
    this.groomShadow = new THREE.Mesh(shadowGeo, shadowMat);
    this.groomShadow.rotation.x = -Math.PI / 2;
    this.groomShadow.position.y = 0.02;
    this.groomGroup.add(this.groomShadow);

    this.scene.add(this.groomGroup);

    // 2. Exact 3D Bride Figurine (Chi. La. Sow. Nidharshini)
    this.brideGroup = new THREE.Group();
    this.brideGroup.position.set(0.85, 0, -11);

    textureLoader.load('assets/bride_3d_real_miniature.png', (texture) => {
      texture.generateMipmaps = true;
      texture.minFilter = THREE.LinearMipmapLinearFilter;
      texture.magFilter = THREE.LinearFilter;
      if (this.renderer && this.renderer.capabilities.getMaxAnisotropy) {
        texture.anisotropy = Math.min(this.renderer.capabilities.getMaxAnisotropy(), 4);
      }

      const mat = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        alphaTest: 0.05,
        roughness: 0.95,
        metalness: 0.0,
        side: THREE.DoubleSide
      });
      // Figurine ratio -> 1.56 x 2.5
      const geo = new THREE.PlaneGeometry(1.56, 2.5);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.y = 1.25;
      mesh.castShadow = true;
      this.brideGroup.add(mesh);
    });

    this.brideShadow = new THREE.Mesh(shadowGeo, shadowMat);
    this.brideShadow.rotation.x = -Math.PI / 2;
    this.brideShadow.position.y = 0.02;
    this.brideGroup.add(this.brideShadow);

    this.scene.add(this.brideGroup);
  }

  buildFloatingPetals() {
    const isMobile = window.innerWidth < 768;
    const petalCount = isMobile ? 22 : 75;
    const colors = [0xDA2944, 0xFF9933, 0xFFD700, 0xF7CAC9];

    for (let i = 0; i < petalCount; i++) {
      const geo = new THREE.PlaneGeometry(0.08, 0.12);
      const mat = new THREE.MeshStandardMaterial({
        color: colors[Math.floor(Math.random() * colors.length)],
        side: THREE.DoubleSide,
        roughness: 0.4
      });
      const petal = new THREE.Mesh(geo, mat);
      petal.position.set(
        (Math.random() - 0.5) * 8,
        Math.random() * 5 + 0.5,
        (Math.random() - 0.5) * 16 - 2
      );
      petal.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI);
      petal.userData = {
        speedY: Math.random() * 0.016 + 0.008,
        rotX: Math.random() * 0.03 - 0.015,
        rotY: Math.random() * 0.03 - 0.015,
        swaySpeed: Math.random() * 2 + 1,
        swayOffset: Math.random() * Math.PI
      };
      this.scene.add(petal);
      this.petals.push(petal);
    }
  }

  onMouseMove(e) {
    this.mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    this.mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    this.targetCameraX = this.mouseX * 0.7;
    this.targetCameraY = 2.0 + this.mouseY * 0.3;
  }

  onTouchMove(e) {
    if (e.touches.length > 0) {
      const t = e.touches[0];
      this.mouseX = (t.clientX / window.innerWidth) * 2 - 1;
      this.mouseY = -(t.clientY / window.innerHeight) * 2 + 1;
      this.targetCameraX = this.mouseX * 0.7;
      this.targetCameraY = 2.0 + this.mouseY * 0.3;
    }
  }

  onResize() {
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || (window.innerHeight * 0.58);
    this.camera.aspect = width / height;

    // Responsive FOV & camera distance for mobile vs desktop
    if (width < 450) {
      this.camera.fov = 48;
      this.camera.position.z = 7.7;
    } else if (width < 768) {
      this.camera.fov = 44;
      this.camera.position.z = 7.4;
    } else {
      this.camera.fov = 40;
      this.camera.position.z = 7.2;
    }

    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    const dpr = Math.min(window.devicePixelRatio || 1, 2.0);
    this.renderer.setPixelRatio(dpr);
  }

  flyIntoPalace(onComplete) {
    this.isCameraFlying = true;
    const startZ = this.camera.position.z;
    const targetZ = -10;
    const duration = 1.5;
    let elapsed = 0;

    const flyStep = () => {
      elapsed += 0.025;
      const progress = Math.min(elapsed / duration, 1);
      const ease = progress < 0.5 ? 2 * progress * progress : -1 + (4 - 2 * progress) * progress;
      this.camera.position.z = startZ + (targetZ - startZ) * ease;
      this.camera.position.y = 2.0 - ease * 0.3;

      if (this.groomGroup) this.groomGroup.position.x = -0.75 - ease * 1.5;
      if (this.brideGroup) this.brideGroup.position.x = 0.75 + ease * 1.5;

      if (progress < 1) {
        requestAnimationFrame(flyStep);
      } else {
        if (onComplete) onComplete();
      }
    };
    flyStep();
  }

  startWalk() {
    this.isCameraFlying = false;
    this.camera.position.set(0, 2.0, this.container.clientWidth < 450 ? 7.7 : 7.2);
    this.walkProgress = 0;
    this.isWalking = true;
    if (this.groomGroup) {
      this.groomGroup.position.set(-0.85, 0, -11);
      this.groomGroup.rotation.y = 0;
    }
    if (this.brideGroup) {
      this.brideGroup.position.set(0.85, 0, -11);
      this.brideGroup.rotation.y = 0;
    }
  }

  replayWalk() {
    this.isCameraFlying = false;
    this.camera.position.set(0, 2.0, 7.2);
    this.walkProgress = 0;
    this.isWalking = true;
    if (this.groomGroup) {
      this.groomGroup.position.set(-0.75, 0, -11);
      this.groomGroup.rotation.y = 0;
    }
    if (this.brideGroup) {
      this.brideGroup.position.set(0.75, 0, -11);
      this.brideGroup.rotation.y = 0;
    }
  }

  pause() {
    this.isPaused = true;
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  }

  resume() {
    if (this.isPaused) {
      this.isPaused = false;
      this.clock.getDelta(); // flush delta so figurines do not jump
      this.animate();
    }
  }

  animate() {
    if (this.isPaused) return;
    this.animFrameId = requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta();
    const time = this.clock.getElapsedTime();

    if (this.isWalking && !this.isCameraFlying) {
      this.walkProgress += delta * this.walkSpeed;

      if (this.walkProgress >= 1) {
        this.walkProgress = 1;
        this.isWalking = false;
        if (this.groomGroup) this.groomGroup.rotation.y = 0.22;
        if (this.brideGroup) this.brideGroup.rotation.y = -0.22;

        window.dispatchEvent(new CustomEvent('miniaturesReachedCenter'));
      } else {
        const currentZ = -11 + this.walkProgress * 12.0;

        const bobGroom = Math.abs(Math.sin(time * 7.5)) * 0.1;
        const bobBride = Math.abs(Math.sin(time * 7.5 + 0.3)) * 0.1;
        const swayGroom = Math.sin(time * 7.5) * 0.035;
        const swayBride = -Math.sin(time * 7.5) * 0.035;

        if (this.groomGroup) {
          this.groomGroup.position.z = currentZ;
          this.groomGroup.position.y = bobGroom;
          this.groomGroup.rotation.z = swayGroom;
          if (this.groomShadow) {
            this.groomShadow.scale.set(1 - bobGroom * 2, 1 - bobGroom * 2, 1);
          }
        }

        if (this.brideGroup) {
          this.brideGroup.position.z = currentZ;
          this.brideGroup.position.y = bobBride;
          this.brideGroup.rotation.z = swayBride;
          if (this.brideShadow) {
            this.brideShadow.scale.set(1 - bobBride * 2, 1 - bobBride * 2, 1);
          }
        }
      }
    }

    if (!this.isCameraFlying) {
      this.camera.position.x += (this.targetCameraX - this.camera.position.x) * 0.05;
      this.camera.position.y += (this.targetCameraY - this.camera.position.y) * 0.05;
      this.camera.lookAt(0, 1.25, 0.5);
    }

    this.petals.forEach(p => {
      p.position.y -= p.userData.speedY;
      p.position.x += Math.sin(time * p.userData.swaySpeed + p.userData.swayOffset) * 0.005;
      p.rotation.x += p.userData.rotX;
      p.rotation.y += p.userData.rotY;

      if (p.position.y < 0.05) {
        p.position.y = 5.0;
        p.position.x = (Math.random() - 0.5) * 8;
      }
    });

    this.diyas.forEach((d, idx) => {
      d.intensity = 0.9 + Math.sin(time * 8 + idx) * 0.25;
    });

    this.renderer.render(this.scene, this.camera);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  window.royal3DStage = new Royal3DStage();
});
