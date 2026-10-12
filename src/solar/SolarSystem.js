import * as THREE from "three";
import { technologies, solarOrbitRings } from "./technologies.js";

/**
 * SolarSystem: Full-Screen Ambient Developer Solar System Background
 * Features:
 * - Fixed background across all scrollable sections down to footer
 * - 6 spacious concentric orbit rings with non-overlapping line gaps (----icon----)
 * - Orbiting entities are PURELY the 20 3D tech stack icons
 */
export class SolarSystem {
  constructor(containerEl) {
    this.container = containerEl;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.systemGroup = null;
    this.planets = [];
    this.orbitLines = [];
    this.animationFrameId = null;
    this.lastTime = performance.now();
    this.isPaused = false;
    this.prefersReducedMotion = false;

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      this.prefersReducedMotion = true;
    }

    this.init();
  }

  init() {
    const width = window.innerWidth || 1200;
    const height = window.innerHeight || 800;

    // 1. Scene
    this.scene = new THREE.Scene();

    // 2. Camera (Perspective, responsive FOV for 6 wider orbits)
    const isMobile = width < 768;
    const camDist = isMobile ? 68 : 50;
    const camY = isMobile ? 43 : 32;

    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 300);
    this.camera.position.set(0, camY, camDist);
    this.camera.lookAt(0, 0, 0);

    // 3. WebGL Renderer
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.15;

    this.container.innerHTML = "";
    this.container.appendChild(this.renderer.domElement);
    this.renderer.domElement.style.outline = "none";
    this.renderer.domElement.style.pointerEvents = "none";

    // 4. Lighting
    this.setupLighting();

    // 5. Starfield Dust Particles
    this.createStarField();

    // 6. Root System Group (subtle orbital inclination tilt)
    this.systemGroup = new THREE.Group();
    this.systemGroup.rotation.x = 0.42;
    this.systemGroup.rotation.y = -0.15;
    this.scene.add(this.systemGroup);

    // 7. Central Developer Core Sun
    this.createDeveloperCore();

    // 8. 20 Orbiting Tech Stack Icon Badges (2x larger, smooth 3D)
    this.createTechIcons();

    // 9. 4 Concentric Orbit Rings with gapped segments (----icon----)
    this.createOrbitRings();

    // 10. Window Resize & Visibility Events
    this.bindEvents();

    // 11. Animation Loop
    this.animate();
  }

  setupLighting() {
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    this.scene.add(ambientLight);

    const coreLight = new THREE.PointLight(0x9b111e, 4.2, 75);
    coreLight.position.set(0, 0, 0);
    this.scene.add(coreLight);

    const dirLight = new THREE.DirectionalLight(0xfff5f5, 1.35);
    dirLight.position.set(15, 24, 18);
    this.scene.add(dirLight);
  }

  createStarField() {
    const count = 350;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);

    const white = new THREE.Color(0xffffff);
    const maroon = new THREE.Color(0x9b111e);
    const silver = new THREE.Color(0xa1a1aa);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 95;
      positions[i3 + 1] = (Math.random() - 0.5) * 70 + 5;
      positions[i3 + 2] = (Math.random() - 0.5) * 95;

      const rand = Math.random();
      const c = rand > 0.75 ? maroon : rand > 0.35 ? silver : white;
      colors[i3] = c.r;
      colors[i3 + 1] = c.g;
      colors[i3 + 2] = c.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.25,
      vertexColors: true,
      transparent: true,
      opacity: 0.65,
    });

    const starField = new THREE.Points(geometry, material);
    this.scene.add(starField);
  }

  createDeveloperCore() {
    const coreGroup = new THREE.Group();

    // Central Sun Sphere
    const coreGeo = new THREE.SphereGeometry(1.5, 32, 32);
    const canvasTexture = this.createCoreCanvasTexture();
    const coreMat = new THREE.MeshStandardMaterial({
      map: canvasTexture,
      color: 0x800020,
      emissive: 0x4a0410,
      emissiveIntensity: 0.9,
      roughness: 0.2,
      metalness: 0.25,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    coreMesh.renderOrder = 0;
    coreGroup.add(coreMesh);
    this.coreMesh = coreMesh;

    // Atmospheric coronal pulse halo
    const haloGeo = new THREE.RingGeometry(1.7, 2.35, 48);
    const haloMat = new THREE.MeshBasicMaterial({
      color: 0x9b111e,
      transparent: true,
      opacity: 0.45,
      side: THREE.DoubleSide,
    });
    this.haloMesh = new THREE.Mesh(haloGeo, haloMat);
    this.haloMesh.rotation.x = Math.PI / 2;
    this.haloMesh.renderOrder = 0;
    coreGroup.add(this.haloMesh);

    this.systemGroup.add(coreGroup);
  }

  createCoreCanvasTexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");

    // Deep Maroon radial core
    const grad = ctx.createRadialGradient(128, 128, 15, 128, 128, 128);
    grad.addColorStop(0, "#ff4d6d");
    grad.addColorStop(0.35, "#9b111e");
    grad.addColorStop(0.7, "#800020");
    grad.addColorStop(1, "#36020a");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);

    // Glowing concentric coronal rings
    ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(128, 128, 92, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = "rgba(255, 200, 220, 0.6)";
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    ctx.arc(128, 128, 60, 0, Math.PI * 2);
    ctx.stroke();

    // Radiant core flare
    const flareGrad = ctx.createRadialGradient(128, 128, 0, 128, 128, 45);
    flareGrad.addColorStop(0, "#ffffff");
    flareGrad.addColorStop(0.5, "rgba(255, 200, 220, 0.8)");
    flareGrad.addColorStop(1, "transparent");
    ctx.fillStyle = flareGrad;
    ctx.beginPath();
    ctx.arc(128, 128, 45, 0, Math.PI * 2);
    ctx.fill();

    return new THREE.CanvasTexture(canvas);
  }

  /**
   * Creates 6 spacious concentric orbit lines that dynamically break/gap around every icon (----icon----)
   */
  createOrbitRings() {
    const segmentCount = 240;

    solarOrbitRings.forEach((group) => {
      const geometry = new THREE.BufferGeometry();
      // Pre-allocate buffer for up to segmentCount line segments (2 vertices * 3 floats each)
      const positions = new Float32Array(segmentCount * 2 * 3);
      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

      const material = new THREE.LineBasicMaterial({
        color: group.orbit === 1 ? 0x9b111e : 0x52525b,
        transparent: true,
        opacity: group.orbit === 1 ? 0.48 : 0.30,
        depthTest: true,
        depthWrite: false,
      });

      const orbitLine = new THREE.LineSegments(geometry, material);
      orbitLine.renderOrder = 2;
      this.systemGroup.add(orbitLine);

      this.orbitLines.push({
        orbit: group.orbit,
        radius: group.radius,
        line: orbitLine,
        geometry,
        segmentCount,
      });
    });

    this.updateOrbitRings();
  }

  /**
   * Rebuilds each of the 6 orbit rings' visible segments so the line stops cleanly before and after each icon (----icon----)
   */
  updateOrbitRings() {
    const TWO_PI = Math.PI * 2;

    this.orbitLines.forEach((ring) => {
      const posAttr = ring.geometry.getAttribute("position");
      const arr = posAttr.array;
      const segs = ring.segmentCount;
      const r = ring.radius;

      // Icons belonging to this specific solar orbit ring (1..6)
      const ringPlanets = this.planets.filter(
        (p) => (p.tech.solarOrbit || p.tech.orbit) === ring.orbit
      );

      let vertexIdx = 0;

      for (let i = 0; i < segs; i++) {
        const a1 = (i / segs) * TWO_PI;
        const a2 = ((i + 1) / segs) * TWO_PI;
        const midAngle = (a1 + a2) * 0.5;

        // Check if this segment falls inside the angular gap of any icon on this orbit
        let insideGap = false;
        for (let j = 0; j < ringPlanets.length; j++) {
          const p = ringPlanets[j];
          // Shortest angular distance between midAngle and p.angle
          let diff = Math.abs(
            (((midAngle - p.angle) % TWO_PI) + TWO_PI + Math.PI) % TWO_PI -
              Math.PI
          );
          if (diff < p.gapAngle) {
            insideGap = true;
            break;
          }
        }

        if (!insideGap) {
          arr[vertexIdx++] = Math.cos(a1) * r;
          arr[vertexIdx++] = 0;
          arr[vertexIdx++] = Math.sin(a1) * r;

          arr[vertexIdx++] = Math.cos(a2) * r;
          arr[vertexIdx++] = 0;
          arr[vertexIdx++] = Math.sin(a2) * r;
        }
      }

      // Zero out remaining unused vertices
      for (let k = vertexIdx; k < arr.length; k++) {
        arr[k] = 0;
      }

      ring.geometry.setDrawRange(0, vertexIdx / 3);
      posAttr.needsUpdate = true;
    });
  }

  /**
   * Orbiting entities are 40% smaller than previous (tech.size * 6.8), razor-sharp 3D extruded tech stack logos
   * with invisible depth occluders so orbit lines never penetrate or overlap icons (----icon----)
   */
  createTechIcons() {
    technologies.forEach((tech) => {
      const iconGroup = new THREE.Group();

      // 512x512 high-resolution 3D-extruded & bevel-lit texture of ONLY the logo
      const texture = this.createTechIconTexture(tech);
      // Reduced by ~40% from 11.4 -> 6.8 for balanced proportions across 6 orbits
      const meshSize = tech.size * 6.8;

      const planeGeo = new THREE.PlaneGeometry(meshSize, meshSize);

      // 0. Invisible Depth-Buffer Occluder Disc (clips any background orbit line behind the icon!)
      const occluderRadius = meshSize * 0.30;
      const occluderGeo = new THREE.CircleGeometry(occluderRadius, 32);
      const occluderMat = new THREE.MeshBasicMaterial({
        colorWrite: false,
        depthWrite: true,
        depthTest: true,
        side: THREE.DoubleSide,
      });
      const occluderMesh = new THREE.Mesh(occluderGeo, occluderMat);
      occluderMesh.position.z = 1.0;
      occluderMesh.renderOrder = 1;
      iconGroup.add(occluderMesh);

      // 1. Crisp Single High-Resolution 3D Extruded Mesh (eliminates multi-slice ghosting/blur)
      const frontMat = new THREE.MeshStandardMaterial({
        map: texture,
        color: 0xffffff,
        transparent: true,
        depthWrite: false,
        depthTest: false,
        roughness: 0.14,
        metalness: 0.22,
        side: THREE.DoubleSide,
      });

      const frontMesh = new THREE.Mesh(planeGeo, frontMat);
      frontMesh.position.z = 0.15;
      frontMesh.renderOrder = 5;
      iconGroup.add(frontMesh);

      // Position along orbit
      const initialAngle = tech.initialAngle || 0;
      iconGroup.position.x = Math.cos(initialAngle) * tech.orbitRadius;
      iconGroup.position.z = Math.sin(initialAngle) * tech.orbitRadius;

      this.systemGroup.add(iconGroup);

      // Angular half-gap along its orbit ring so the line stops cleanly on both sides (---- icon ----)
      const gapRadius = meshSize * 0.33;
      const gapAngle = gapRadius / tech.orbitRadius;

      this.planets.push({
        tech,
        group: iconGroup,
        angle: initialAngle,
        radius: tech.orbitRadius,
        speed: tech.speed,
        gapAngle,
      });
    });
  }

  /**
   * Helper to create a solid-colored silhouette canvas from a source logo canvas for 3D extrusion walls
   */
  createTintedSilhouette(srcCanvas, fillStyle) {
    const c = document.createElement("canvas");
    c.width = srcCanvas.width;
    c.height = srcCanvas.height;
    const ctx = c.getContext("2d");
    ctx.drawImage(srcCanvas, 0, 0);
    ctx.globalCompositeOperation = "source-in";
    ctx.fillStyle = fillStyle;
    ctx.fillRect(0, 0, c.width, c.height);
    return c;
  }

  /**
   * Generates a 512x512 clean, sharp 3D-extruded official logo texture
   */
  createTechIconTexture(tech) {
    const size = 512;

    // 1. Render crisp 2D official vector logo onto offscreen faceCanvas
    const faceCanvas = document.createElement("canvas");
    faceCanvas.width = size;
    faceCanvas.height = size;
    const fCtx = faceCanvas.getContext("2d");

    fCtx.save();
    fCtx.translate(248, 244);
    fCtx.scale(3.3, 3.3);
    fCtx.translate(-64, -64);
    this.drawVectorLogo(fCtx, tech.id, tech.color);
    fCtx.restore();

    // Subtle 3D surface lighting across the front face (top-left light -> bottom-right shade)
    fCtx.save();
    fCtx.globalCompositeOperation = "source-atop";
    const sheenGrad = fCtx.createLinearGradient(90, 90, 420, 420);
    sheenGrad.addColorStop(0, "rgba(255, 255, 255, 0.22)");
    sheenGrad.addColorStop(0.45, "rgba(255, 255, 255, 0.0)");
    sheenGrad.addColorStop(1, "rgba(0, 0, 0, 0.18)");
    fCtx.fillStyle = sheenGrad;
    fCtx.fillRect(0, 0, size, size);
    fCtx.restore();

    // 2. Compute clean 3D extrusion side-wall colors
    const baseHex =
      tech.id === "github" || tech.id === "vercel"
        ? "#64748B"
        : tech.id === "javascript"
          ? "#B45309"
          : tech.id === "html5"
            ? "#9A3412"
            : tech.id === "css3"
              ? "#1E3A8A"
              : tech.id === "git"
                ? "#991B1B"
                : tech.color;
    const midThreeColor = new THREE.Color(baseHex).multiplyScalar(0.62);
    const darkThreeColor = new THREE.Color(baseHex).multiplyScalar(0.28);

    const sideMidCanvas = this.createTintedSilhouette(
      faceCanvas,
      `#${midThreeColor.getHexString()}`
    );
    const sideDarkCanvas = this.createTintedSilhouette(
      faceCanvas,
      `#${darkThreeColor.getHexString()}`
    );
    const shadowCanvas = this.createTintedSilhouette(
      faceCanvas,
      "rgba(0, 0, 0, 0.65)"
    );

    // 3. Composite clean 3D extruded block onto main 512x512 canvas
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, size, size);

    // A. Soft 3D Drop Shadow behind the extruded block
    ctx.save();
    ctx.filter = "blur(8px)";
    ctx.globalAlpha = 0.55;
    ctx.drawImage(shadowCanvas, 18, 22);
    ctx.restore();

    // B. 16-Step Solid, Crisp 3D Extrusion Wall (no blurry white halo)
    const totalSteps = 16;
    for (let s = totalSteps; s >= 1; s--) {
      const dx = s * 0.65;
      const dy = s * 0.82;
      ctx.drawImage(s > 12 ? sideDarkCanvas : sideMidCanvas, dx, dy);
    }

    // C. Razor-Sharp Front Face Logo
    ctx.drawImage(faceCanvas, 0, 0);

    const texture = new THREE.CanvasTexture(canvas);
    texture.minFilter = THREE.LinearFilter;
    texture.magFilter = THREE.LinearFilter;
    return texture;
  }

  /**
   * Renders 100% authentic, crystal-clear official vector logos in a 128x128 viewBox
   */
  drawVectorLogo(ctx, techId, brandColor) {
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    switch (techId) {
      case "typescript": {
        ctx.fillStyle = "#3178C6";
        ctx.beginPath();
        ctx.roundRect(14, 14, 100, 100, 18);
        ctx.fill();

        ctx.fillStyle = "#FFFFFF";
        ctx.font = "900 52px Inter, system-ui, sans-serif";
        ctx.textAlign = "right";
        ctx.textBaseline = "alphabetic";
        ctx.fillText("TS", 106, 102);
        break;
      }

      case "javascript": {
        ctx.fillStyle = "#F7DF1E";
        ctx.beginPath();
        ctx.roundRect(14, 14, 100, 100, 18);
        ctx.fill();

        ctx.fillStyle = "#000000";
        ctx.font = "900 52px Inter, system-ui, sans-serif";
        ctx.textAlign = "right";
        ctx.textBaseline = "alphabetic";
        ctx.fillText("JS", 106, 102);
        break;
      }

      case "php": {
        ctx.fillStyle = "#777BB4";
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 4.5;
        ctx.beginPath();
        ctx.ellipse(64, 64, 54, 34, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = "#FFFFFF";
        ctx.font = "900 italic 38px Inter, system-ui, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("php", 62, 65);
        break;
      }

      case "python": {
        const topSnake = new Path2D(
          "M63.5 14C45 14 46 22 46 22l.02 8.35h18v2.6H28.4S14 31.3 14 51.5c0 20.3 12.6 19.5 12.6 19.5h7.5v-10.5s-.4-12.6 12.4-12.6h21.3s11.9.2 11.9-11.6V25.7S81.6 14 63.5 14z"
        );
        ctx.fillStyle = "#387EB8";
        ctx.fill(topSnake);

        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(53.7, 23.5, 4.5, 0, Math.PI * 2);
        ctx.fill();

        const botSnake = new Path2D(
          "M64.5 114c18.5 0 17.5-8 17.5-8l-.02-8.35h-18v-2.6h35.6s14.4 1.6 14.4-18.6c0-20.3-12.6-19.5-12.6-19.5h-7.5v10.5s.4 12.6-12.4 12.6H42.6s-11.9-.2-11.9 11.6v10.6s-1.9 11.7 16.2 11.7z"
        );
        ctx.fillStyle = "#FFE052";
        ctx.fill(botSnake);

        ctx.fillStyle = "#1E293B";
        ctx.beginPath();
        ctx.arc(74.3, 104.5, 4.5, 0, Math.PI * 2);
        ctx.fill();
        break;
      }

      case "lua": {
        ctx.fillStyle = "#1D4ED8";
        ctx.beginPath();
        ctx.arc(62, 68, 42, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(77, 51, 13, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#38BDF8";
        ctx.beginPath();
        ctx.arc(26, 28, 11, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#FFFFFF";
        ctx.font = "900 26px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("LUA", 58, 82);
        break;
      }

      case "html5": {
        // Geometrically aligned, ultra-clean HTML5 Shield + single continuous "5" emblem
        const shieldOuter = new Path2D("M20 14L29 102L64 116L99 102L108 14H20Z");
        ctx.fillStyle = "#E34F26";
        ctx.fill(shieldOuter);

        // Bright right-half shield facet
        ctx.fillStyle = "#EF652A";
        ctx.fill(new Path2D("M64 21V108.5L92 97L99.5 21H64Z"));

        // Crisp subtle rim around shield
        ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
        ctx.lineWidth = 2.5;
        ctx.stroke(shieldOuter);

        // Single continuous, 100% aligned geometric "5"
        const fivePath = new Path2D(
          "M90 34H38L41 68H75L74 83L64 86L54 83L53 74H41.5L43 91L64 98L85 91L88 56H52L51 46H89L90 34Z"
        );
        ctx.fillStyle = "#FFFFFF";
        ctx.fill(fivePath);
        break;
      }

      case "css3": {
        // Geometrically aligned, ultra-clean CSS3 Shield + single continuous "3" emblem
        const shieldOuter = new Path2D("M20 14L29 102L64 116L99 102L108 14H20Z");
        ctx.fillStyle = "#1572B6";
        ctx.fill(shieldOuter);

        // Bright right-half shield facet
        ctx.fillStyle = "#33A9DC";
        ctx.fill(new Path2D("M64 21V108.5L92 97L99.5 21H64Z"));

        // Crisp subtle rim around shield
        ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
        ctx.lineWidth = 2.5;
        ctx.stroke(shieldOuter);

        // Single continuous, 100% aligned geometric "3"
        const threePath = new Path2D(
          "M38 34H90L85 91L64 98L43 91L41.5 74H53L54 83L64 86L74 83L75.5 67H48L49 55H76.5L77.5 46H39L38 34Z"
        );
        ctx.fillStyle = "#FFFFFF";
        ctx.fill(threePath);
        break;
      }

      case "react": {
        ctx.translate(64, 64);
        ctx.strokeStyle = "#00D8FF";
        ctx.lineWidth = 8.5;
        for (let a = 0; a < Math.PI; a += Math.PI / 3) {
          ctx.save();
          ctx.rotate(a);
          ctx.beginPath();
          ctx.ellipse(0, 0, 50, 19, 0, 0, Math.PI * 2);
          ctx.stroke();
          ctx.restore();
        }
        ctx.fillStyle = "#00D8FF";
        ctx.beginPath();
        ctx.arc(0, 0, 12, 0, Math.PI * 2);
        ctx.fill();
        break;
      }

      case "laravel": {
        ctx.fillStyle = "#FF5A4F";
        ctx.fill(new Path2D("M64 14L108 39L64 64L20 39Z"));
        ctx.fillStyle = "#FF2D20";
        ctx.fill(new Path2D("M20 39L64 64V114L20 89Z"));
        ctx.fillStyle = "#C81E1E";
        ctx.fill(new Path2D("M64 64L108 39V89L64 114Z"));

        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 5;
        ctx.stroke(
          new Path2D(
            "M64 14L108 39V89L64 114L20 89V39L64 14ZM20 39L64 64L108 39M64 64V114"
          )
        );
        break;
      }

      case "nodejs": {
        ctx.fillStyle = "#68A063";
        ctx.fill(new Path2D("M64 12l46 26.5v51L64 116 18 89.5v-51L64 12z"));
        ctx.fillStyle = "#3F7531";
        ctx.fill(new Path2D("M64 12l46 26.5v51L64 116V12z"));

        ctx.fillStyle = "#FFFFFF";
        ctx.font = "900 32px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("NODE", 64, 65);
        break;
      }

      case "vite": {
        ctx.fillStyle = "#646CFF";
        ctx.fill(new Path2D("M16 24L64 116 112 24 64 36 16 24z"));
        ctx.fillStyle = "#BD34FE";
        ctx.fill(new Path2D("M64 36L112 24 64 116V36z"));

        ctx.fillStyle = "#FFD62E";
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 2;
        const bolt = new Path2D("M72 12L36 66h25l-9 44 44-58H69L72 12z");
        ctx.fill(bolt);
        ctx.stroke(bolt);
        break;
      }

      case "tailwindcss": {
        ctx.fillStyle = "#38BDF8";
        const wavePath = new Path2D(
          "M64 28C46.9 28 36.3 36.5 32 53.6c6.4-8.5 13.9-11.7 22.4-9.6 4.9 1.2 8.4 4.7 12.3 8.6 6.3 6.4 13.7 13.8 29.3 13.8 17.1 0 27.7-8.5 32-25.6-6.4 8.5-13.9 11.7-22.4 9.6-4.9-1.2-8.4-4.7-12.3-8.6C87 35.4 79.6 28 64 28zM32 66.4C14.9 66.4 4.3 74.9 0 92c6.4-8.5 13.9-11.7 22.4-9.6 4.9 1.2 8.4 4.7 12.3 8.6 6.3 6.4 13.7 13.8 29.3 13.8 17.1 0 27.7-8.5 32-25.6-6.4 8.5-13.9 11.7-22.4 9.6-4.9-1.2-8.4-4.7-12.3-8.6-6.3-6.4-13.7-13.8-29.3-13.8z"
        );
        ctx.fill(wavePath);
        break;
      }

      case "bootstrap": {
        ctx.fillStyle = "#7952B3";
        ctx.beginPath();
        ctx.roundRect(16, 16, 96, 96, 22);
        ctx.fill();

        ctx.fillStyle = "#FFFFFF";
        ctx.fill(
          new Path2D(
            "M44 34h24c11 0 18 5 18 13.5 0 6-3.5 10-9 12 7.5 2 11.5 7 11.5 14 0 10-7.5 15.5-19.5 15.5H44V34zm14 21h8c4.5 0 7.5-2.2 7.5-5.5S70.5 44 66 44h-8v11zm0 22h9c5.5 0 8.5-2.5 8.5-6.5S72.5 64 67 64h-9v13z"
          )
        );
        break;
      }

      case "mysqli": {
        ctx.fillStyle = "#0369A1";
        ctx.fill(
          new Path2D(
            "M20 72v22c0 10 19.7 18 44 18s44-8 44-18V72c0 10-19.7 18-44 18S20 82 20 72z"
          )
        );
        ctx.fillStyle = "#0284C7";
        ctx.fill(
          new Path2D(
            "M20 46v22c0 10 19.7 18 44 18s44-8 44-18V46c0 10-19.7 18-44 18S20 56 20 46z"
          )
        );
        ctx.fillStyle = "#0EA5E9";
        ctx.fill(
          new Path2D("M20 26v16c0 10 19.7 18 44 18s44-8 44-18V26H20z")
        );
        ctx.fillStyle = "#7DD3FC";
        ctx.beginPath();
        ctx.ellipse(64, 26, 44, 15, 0, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = "#FFFFFF";
        ctx.font = "900 24px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("MySQLi", 64, 68);
        break;
      }

      case "postgresql": {
        ctx.fillStyle = "#336791";
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 4;
        const earsPath = new Path2D(
          "M42 26c-18 4-28 18-25 38 3 16 13 26 24 26 6 0 10-4 11-11V50c-4-14-4-20-10-24zm44 0c18 4 28 18 25 38-3 16-13 26-24 26-6 0-10-4-11-11V50c4-14 4-20 10-24z"
        );
        ctx.fill(earsPath);
        ctx.stroke(earsPath);

        ctx.fillStyle = "#60A5FA";
        const headPath = new Path2D(
          "M64 18c-18 0-30 12-30 30 0 15 6 26 17 31v25c0 7 5.5 12 13 12s13-5 13-12V79c11-5 17-16 17-31 0-18-12-30-30-30z"
        );
        ctx.fill(headPath);
        ctx.stroke(headPath);

        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(52, 48, 5.5, 0, Math.PI * 2);
        ctx.arc(76, 48, 5.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = "#FBBF24";
        ctx.lineWidth = 5.5;
        ctx.beginPath();
        ctx.moveTo(45, 76);
        ctx.quadraticCurveTo(64, 88, 83, 76);
        ctx.stroke();
        break;
      }

      case "supabase": {
        ctx.fillStyle = "#10B981";
        ctx.fill(new Path2D("M68 18L20 76h40l-4 34 52-58H68l0-34z"));
        ctx.fillStyle = "#3ECF8E";
        ctx.fill(new Path2D("M72 14L18 78h42l-6 36 54-64H66l6-36z"));
        break;
      }

      case "vercel": {
        ctx.fillStyle = "#FFFFFF";
        ctx.fill(new Path2D("M64 16L116 106H12L64 16z"));
        ctx.fillStyle = "#CBD5E1";
        ctx.fill(new Path2D("M64 16L116 106H64V16z"));
        break;
      }

      case "git": {
        // Authentic Official Git Logo: 45°-rotated diamond + diagonal & vertical branch topology
        ctx.save();
        ctx.translate(64, 64);
        ctx.rotate(Math.PI / 4);
        ctx.fillStyle = "#F05032";
        ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.roundRect(-38, -38, 76, 76, 14);
        ctx.fill();
        ctx.stroke();
        ctx.restore();

        // Official Git branch lines:
        // 1) Top-left diamond edge (43, 27) -> Node 1 (56, 40) -> Node 2 (78, 62)
        // 2) Node 1 (56, 40) -> vertical down to Node 3 (56, 84)
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 8;
        ctx.beginPath();
        ctx.moveTo(43, 27);
        ctx.lineTo(78, 62);
        ctx.moveTo(56, 40);
        ctx.lineTo(56, 84);
        ctx.stroke();

        // 3 Commit Nodes
        ctx.fillStyle = "#FFFFFF";
        ctx.beginPath();
        ctx.arc(56, 40, 9.5, 0, Math.PI * 2);
        ctx.arc(78, 62, 9.5, 0, Math.PI * 2);
        ctx.arc(56, 84, 9.5, 0, Math.PI * 2);
        ctx.fill();
        break;
      }

      case "github": {
        // Official High-Contrast GitHub Mark:
        // Deep obsidian interior circle + gleaming white official GitHub mark with Octocat silhouette carved inside
        ctx.fillStyle = "#090D16";
        ctx.beginPath();
        ctx.arc(64, 64, 50, 0, Math.PI * 2);
        ctx.fill();

        const githubMarkPath = new Path2D(
          "M64 12C35.3 12 12 35.3 12 64c0 23 14.9 42.5 35.6 49.3 2.6.5 3.5-1.1 3.5-2.5 0-1.2-.1-5.3-.1-9.7-13.1 2.4-16.4-3.2-17.5-6.1-.6-1.5-3.1-6.1-5.3-7.4-1.8-1-4.4-3.3-.1-3.4 4.1-.1 7 3.7 8 5.3 4.7 7.9 12.2 5.6 15.2 4.3.5-3.3 1.9-5.6 3.3-7-11.5-1.3-23.7-5.8-23.7-25.8 0-5.7 2.1-10.4 5.3-14-.5-1.3-2.3-6.6.5-13.7 0 0 4.4-1.4 14.3 5.3 4.2-1.1 8.5-1.8 13-1.8 4.5 0 8.8.6 13 1.8 9.9-6.7 14.3-5.3 14.3-5.3 2.8 7.1 1 12.4.5 13.7 3.3 3.6 5.3 8.3 5.3 14 0 20.1-12.2 24.5-23.8 25.8 1.9 1.7 3.5 4.8 3.5 9.7 0 7-.1 12.6-.1 14.4 0 1.4.9 3 3.5 2.5C101.1 106.5 116 87 116 64c0-28.7-23.3-52-52-52z"
        );
        ctx.fillStyle = "#FFFFFF";
        ctx.fill(githubMarkPath);
        break;
      }

      case "wuaze": {
        const cloudPath = new Path2D(
          "M32 90c-12 0-22-9.8-22-22 0-10.8 7.8-19.8 18.2-21.5C31.8 31.8 45 20 61 20c15.2 0 28 10 32 23.8 2.6-.8 5.4-1.2 8.2-1.2 13.2 0 23.8 10.6 23.8 23.8 0 12.6-9.8 23.6-22.5 23.6H32z"
        );
        ctx.fillStyle = "#0284C7";
        ctx.strokeStyle = "#7DD3FC";
        ctx.lineWidth = 4.5;
        ctx.fill(cloudPath);
        ctx.stroke(cloudPath);

        ctx.fillStyle = "#FFFFFF";
        ctx.font = "900 24px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("WUAZE", 66, 66);
        break;
      }

      default: {
        ctx.fillStyle = brandColor;
        ctx.beginPath();
        ctx.roundRect(20, 20, 88, 88, 20);
        ctx.fill();
        break;
      }
    }

    ctx.restore();
  }

  bindEvents() {
    this.onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      this.camera.aspect = w / h;

      const isMobile = w < 768;
      const camDist = isMobile ? 68 : 50;
      const camY = isMobile ? 43 : 32;
      this.camera.position.set(0, camY, camDist);
      this.camera.updateProjectionMatrix();

      this.renderer.setSize(w, h);
    };
    window.addEventListener("resize", this.onResize);

    this.onVisibility = () => {
      this.isPaused = document.hidden;
    };
    document.addEventListener("visibilitychange", this.onVisibility);
  }

  animate() {
    this.animationFrameId = requestAnimationFrame(() => this.animate());

    if (this.isPaused) return;

    const now = performance.now();
    const delta = Math.min((now - this.lastTime) / 1000, 0.1);
    this.lastTime = now;

    // Pulse core halo
    if (this.haloMesh) {
      const s = 1.0 + Math.sin(now * 0.002) * 0.06;
      this.haloMesh.scale.set(s, s, s);
    }

    // Update technology icons in orbit
    const speedMultiplier = this.prefersReducedMotion ? 0.08 : 0.38;

    // Compute inverse quaternion of systemGroup so children face camera directly in world space
    const invSystemQuat = this.systemGroup.quaternion.clone().invert();
    const targetQuat = invSystemQuat.multiply(this.camera.quaternion);

    this.planets.forEach((p) => {
      // 1. Smooth orbital revolution around the sun
      p.angle += p.speed * speedMultiplier * delta;
      p.group.position.x = Math.cos(p.angle) * p.radius;
      p.group.position.z = Math.sin(p.angle) * p.radius;

      // 2. Subtle cosmic levitation (NO tumbling / spinning!)
      p.group.position.y = Math.sin(now * 0.0018 + p.angle) * 0.32;

      // 3. Keep logo ALWAYS cleanly facing the camera, upright, legible & stable!
      p.group.quaternion.copy(targetQuat);
    });

    // 4. Dynamically update orbit line segments so lines stop before & after each icon (----icon----)
    this.updateOrbitRings();

    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener("resize", this.onResize);
    document.removeEventListener("visibilitychange", this.onVisibility);

    if (this.renderer?.domElement?.parentElement) {
      this.renderer.domElement.parentElement.removeChild(
        this.renderer.domElement,
      );
    }
    this.renderer?.dispose();
  }
}
