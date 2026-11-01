import * as THREE from "three";
import { technologies, projectCompetencies } from "./technologies.js";
import { techSvgMap } from "./techIcons.js";
import { projects } from "../data/projects.js";
import { experiences } from "../data/experience.js";

export const SOLAR_THEMES = {
  crimson: {
    id: "crimson",
    name: "Crimson",
    badge: "DEFAULT",
    bgHex: 0x09090b,
    blockBaseHex: 0x15151c,
    blockActiveHex: 0x800020,
    blockHighlightHex: 0xff4d6d,
    ambientHex: 0xffffff,
    dirLightHex: 0xffe4e8,
    pointLightHex: 0x9b111e,
  },
};

const STAGE_CAMERAS = [
  { pos: new THREE.Vector3(18, 25, 34), look: new THREE.Vector3(0, 2.0, 0), rotY: -0.16 },
  { pos: new THREE.Vector3(-16, 23, 32), look: new THREE.Vector3(0, 2.2, 0), rotY: 0.18 },
  { pos: new THREE.Vector3(0, 27, 33), look: new THREE.Vector3(0, 1.5, 0), rotY: 0.0 },
  { pos: new THREE.Vector3(14, 24, 31), look: new THREE.Vector3(0, 2.0, 0), rotY: -0.14 },
  { pos: new THREE.Vector3(-14, 24, 32), look: new THREE.Vector3(0, 1.8, 0), rotY: 0.15 },
  { pos: new THREE.Vector3(0, 26, 34), look: new THREE.Vector3(0, 1.5, 0), rotY: 0.0 },
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function buildDynamicVocabulary() {
  const rawChunks = [];

  technologies.forEach((t) => {
    rawChunks.push(t.name, t.role, t.category, t.description);
  });
  projectCompetencies.forEach((c) => {
    rawChunks.push(c.name, c.category, c.description);
  });
  projects.forEach((p) => {
    rawChunks.push(p.title, p.category, p.longDescription);
  });
  experiences.forEach((e) => {
    rawChunks.push(e.role, e.organization, e.summary);
  });

  const excludedWords = new Set([
    "THE", "AND", "FOR", "WITH", "FROM", "THAT", "THIS", "ARE", "WAS",
    "WERE", "HAVE", "HAS", "HAD", "NOT", "BUT", "YOU", "ALL", "CAN",
    "HER", "HIS", "ONE", "OUR", "OUT", "DAY", "GET", "USE", "NEW",
    "NOW", "WAY", "MAY", "SAY", "TOO", "ANY", "INTO", "OVER", "SUCH",
    "ACROSS", "USING", "BUILT", "BASED", "WHERE", "WHICH", "THEIR",
    "THESE", "THOSE", "ABOUT", "AFTER", "OTHER", "UNDER", "WHILE",
    "XEOO", "NTTBELL", "WUAZE", "BAPENDA", "KKN", "PADANG", "BALAI",
    "GADANG", "SUMATERA", "BARAT", "ISLAM", "WCAG", "SSRF", "HSTS",
    "CSRF", "CORS", "JSON", "GEOJSON", "HTML", "VITE", "LUAU", "MYSQLI",
  ]);

  const wordSet = new Set([
    "EXPLOIT", "SECURITY", "SYSTEM", "NETWORK", "DATABASE", "BACKEND",
    "FRONTEND", "SERVER", "DIGITAL", "CODEBASE", "ENGINE", "FIREWALL",
    "AUDITOR", "MODERN", "CREATIVE", "PROJECT", "DEPLOY", "DESIGN",
    "RUNTIME", "CLIENT", "SCRIPT", "MODULE", "SCHEMA", "ROUTER",
    "MATRIX", "VECTOR", "RENDER", "SHIELD", "PORTAL", "ACCESS",
    "KERNEL", "BUFFER", "PACKET", "SOCKET", "STREAM", "CRYPTO",
    "MEMORY", "BINARY", "LOGIC", "CLOUD", "STACK", "BUILD",
    "DEBUG", "PATCH", "TOKEN", "ADMIN", "QUERY", "INDEX",
    "CACHE", "PROXY", "CYBER", "VOXEL", "FRAME", "LAYER",
    "STATE", "EVENT", "ASYNC", "FETCH", "PARSE", "GUARD",
    "AUDIT", "TRACE", "VALID", "CLEAN", "SOLID", "SWIFT",
    "POWER", "SMART", "PRIME", "NEXUS", "PULSE", "SPACE",
    "WORLD", "CRAFT", "FOCUS", "LEARN", "REACT", "PYTHON",
    "LARAVEL", "NODEJS", "TAILWIND", "SUPABASE", "GITHUB", "VERCEL",
  ]);

  const fullText = rawChunks.filter(Boolean).join(" ");
  const tokens = fullText.match(/[a-zA-Z]{4,10}/g) || [];

  for (let i = 0; i < tokens.length; i++) {
    const upper = tokens[i].toUpperCase();
    if (!excludedWords.has(upper) && /[AEIOU]/.test(upper)) {
      wordSet.add(upper);
    }
  }

  return Array.from(wordSet);
}

export class SolarSystem {
  constructor(containerEl) {
    this.container = containerEl;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.worldGroup = null;

    this.gridCols = 19;
    this.gridRows = 13;
    this.gridSpacing = 3.05;
    this.pistonWidth = 1.98;
    this.floorBaseY = -7.2;
    this.totalBlocks = this.gridCols * this.gridRows;
    this.instancedBlocks = null;
    this.blockData = [];
    this.gridLookup = [];
    this.dummy = new THREE.Object3D();
    this.tempColor = new THREE.Color();

    this.letterTextures = [];

    this.vocabulary = buildDynamicVocabulary();
    this.nextWordSpawnTime = 0;
    this.wordCycleDuration = 7.4;
    this.wordFadeOutStartTime = 5.5;

    this.cubeSize = 1.82;
    this.techCubes = [];
    this.interactiveMeshes = [];
    this.spaceBoundX = 31.0;
    this.spaceBoundZ = 18.5;
    this.spaceMinY = 2.8;
    this.spaceMaxY = 19.8;

    this.maxLinePairs = (20 * 19) / 2;
    this.constellationLines = null;
    this.linePositions = null;
    this.lineColors = null;

    this.collisionBursts = [];
    this.pairCollisionCooldown = new Map();
    this.sparkGeo = new THREE.BoxGeometry(0.34, 0.34, 0.34);
    this.ringGeo = new THREE.RingGeometry(0.55, 0.82, 4);

    this.ripples = [];

    this.currentTheme = SOLAR_THEMES.crimson;
    this.baseColor = new THREE.Color(this.currentTheme.blockBaseHex);
    this.activeColor = new THREE.Color(this.currentTheme.blockActiveHex);
    this.highlightColor = new THREE.Color(this.currentTheme.blockHighlightHex);
    this.flashColor = new THREE.Color(0xffb3c1);

    this.animationFrameId = null;
    this.lastTime = performance.now();
    this.startTime = performance.now();
    this.isPaused = false;

    this.targetScrollProgress = 0;
    this.smoothScrollProgress = 0;
    this.currentCamPos = new THREE.Vector3(24, 30, 42);
    this.currentLookAt = new THREE.Vector3(0, 2.0, 0);
    this.currentStageRotY = -0.16;

    this.mouseNormalized = new THREE.Vector2(99, 99);
    this.smoothMouse = new THREE.Vector2(0, 0);
    this.raycaster = new THREE.Raycaster();
    this.groundPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
    this.cursorWorldPt = new THREE.Vector3(999, 0, 999);

    this.hoveredTechCube = null;
    this.highlightedTechId = null;
    this.onPlanetHover = null;

    this.init();
  }

  init() {
    const width = window.innerWidth || 1200;
    const height = window.innerHeight || 800;

    this.scene = new THREE.Scene();

    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.5, 240);
    this.camera.position.copy(this.currentCamPos);
    this.camera.lookAt(this.currentLookAt);
    this.updateSpaceBoundsForAspect(width / height);

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.35));

    this.container.innerHTML = "";
    this.container.appendChild(this.renderer.domElement);
    this.renderer.domElement.style.outline = "none";
    this.renderer.domElement.style.pointerEvents = "none";

    this.setupLighting();

    this.worldGroup = new THREE.Group();
    this.worldGroup.position.set(0, -3.6, 0);
    this.scene.add(this.worldGroup);

    this.buildLetterTextureCache();
    this.createInstancedBlockMatrix();
    this.spawnRandomWords(0);
    this.createTechLogoCubes();
    this.createConstellationLines();
    this.bindEvents();
    this.triggerShockwave(0, 0);
    this.animate();
  }

  updateSpaceBoundsForAspect(aspect) {
    this.spaceBoundX = Math.max(24.0, Math.min(36.0, 19.5 * aspect));
    this.spaceBoundZ = 18.5;
  }

  setupLighting() {
    this.ambientLight = new THREE.AmbientLight(
      this.currentTheme.ambientHex,
      1.32
    );
    this.scene.add(this.ambientLight);

    this.dirLight = new THREE.DirectionalLight(
      this.currentTheme.dirLightHex,
      1.95
    );
    this.dirLight.position.set(24, 42, 28);
    this.scene.add(this.dirLight);

    this.rimLight = new THREE.DirectionalLight(
      this.currentTheme.pointLightHex,
      1.42
    );
    this.rimLight.position.set(-26, 18, -22);
    this.scene.add(this.rimLight);
  }

  buildLetterTextureCache() {
    const size = 128;
    for (let i = 0; i < 26; i++) {
      const char = ALPHABET[i];
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, size, size);

      ctx.strokeStyle = "rgba(255, 255, 255, 0.38)";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.roundRect(10, 10, size - 20, size - 20, 18);
      ctx.stroke();

      ctx.font = "900 72px 'JetBrains Mono', 'Inter', monospace, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      ctx.lineWidth = 7;
      ctx.strokeStyle = "#050508";
      ctx.strokeText(char, size * 0.5, size * 0.53);
      ctx.fillStyle = "#FFFFFF";
      ctx.fillText(char, size * 0.5, size * 0.53);

      const tex = new THREE.CanvasTexture(canvas);
      tex.minFilter = THREE.LinearFilter;
      tex.magFilter = THREE.LinearFilter;
      this.letterTextures.push(tex);
    }
  }

  createInstancedBlockMatrix() {
    const blockGeo = new THREE.BoxGeometry(
      this.pistonWidth,
      1.0,
      this.pistonWidth
    );
    const blockMat = new THREE.MeshLambertMaterial({
      color: 0xffffff,
    });

    this.instancedBlocks = new THREE.InstancedMesh(
      blockGeo,
      blockMat,
      this.totalBlocks
    );
    this.instancedBlocks.instanceMatrix.setUsage(THREE.DynamicDrawUsage);

    const capGeo = new THREE.PlaneGeometry(
      this.pistonWidth * 0.88,
      this.pistonWidth * 0.88
    );
    capGeo.rotateX(-Math.PI * 0.5);

    const halfCols = (this.gridCols - 1) * 0.5;
    const halfRows = (this.gridRows - 1) * 0.5;
    let index = 0;

    for (let gx = 0; gx < this.gridCols; gx++) {
      this.gridLookup[gx] = [];
      for (let gz = 0; gz < this.gridRows; gz++) {
        const nx = gx - halfCols;
        const nz = gz - halfRows;
        const x = nx * this.gridSpacing;
        const z = nz * this.gridSpacing;
        const distFromCenter = Math.hypot(nx, nz);

        const initialCharIdx = Math.floor(Math.random() * 26);
        const capMat = new THREE.MeshBasicMaterial({
          map: this.letterTextures[initialCharIdx],
          transparent: true,
          opacity: 0.24,
          depthWrite: false,
        });

        const letterCap = new THREE.Mesh(capGeo, capMat);
        letterCap.position.set(x, this.floorBaseY + 2.02, z);
        this.worldGroup.add(letterCap);

        const blockObj = {
          index,
          gx,
          gz,
          nx,
          nz,
          x,
          z,
          distFromCenter,
          currentHeight: 2.0,
          topY: this.floorBaseY + 2.0,
          colorMix: 0,
          charIdx: initialCharIdx,
          pendingCharIdx: -1,
          letterCap,
          capMat,
          currentOpacity: 0.24,
          isWordBlock: false,
          wordRevealTime: 0,
          wordFadeTime: 0,
          wordBoost: 0,
          nextRandomCharTime: 2.5 + Math.random() * 6.5,
        };

        this.blockData.push(blockObj);
        this.gridLookup[gx][gz] = blockObj;

        this.dummy.position.set(x, this.floorBaseY + 1.0, z);
        this.dummy.scale.set(1, 2.0, 1);
        this.dummy.updateMatrix();
        this.instancedBlocks.setMatrixAt(index, this.dummy.matrix);
        this.instancedBlocks.setColorAt(index, this.baseColor);
        index++;
      }
    }

    this.worldGroup.add(this.instancedBlocks);
  }

  pickRandomWord(maxLen = 11) {
    for (let attempt = 0; attempt < 20; attempt++) {
      const candidate =
        this.vocabulary[Math.floor(Math.random() * this.vocabulary.length)];
      if (candidate && candidate.length >= 4 && candidate.length <= maxLen) {
        return candidate;
      }
    }
    return "EXPLOIT";
  }

  spawnRandomWords(elapsed) {
    for (let i = 0; i < this.totalBlocks; i++) {
      this.blockData[i].isWordBlock = false;
    }

    const wordCount = 1 + Math.floor(Math.random() * 3);
    const candidateRows = [2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i = candidateRows.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = candidateRows[i];
      candidateRows[i] = candidateRows[j];
      candidateRows[j] = tmp;
    }

    const chosenRows = [];
    for (let i = 0; i < candidateRows.length && chosenRows.length < wordCount; i++) {
      const row = candidateRows[i];
      if (chosenRows.every((r) => Math.abs(r - row) >= 2)) {
        chosenRows.push(row);
      }
    }
    chosenRows.sort((a, b) => a - b);

    const usedWords = new Set();
    let globalCharOrder = 0;

    for (let w = 0; w < chosenRows.length; w++) {
      const gz = chosenRows[w];
      let word = this.pickRandomWord(11);
      for (let retry = 0; retry < 8 && usedWords.has(word); retry++) {
        word = this.pickRandomWord(11);
      }
      usedWords.add(word);

      const minStartGx = 2;
      const maxStartGx = Math.max(minStartGx, this.gridCols - 2 - word.length);
      const startGx =
        minStartGx + Math.floor(Math.random() * (maxStartGx - minStartGx + 1));

      for (let c = 0; c < word.length; c++) {
        const gx = startGx + c;
        const block = this.gridLookup[gx]?.[gz];
        if (!block) continue;

        const code = word.charCodeAt(c) - 65;
        if (code >= 0 && code < 26) {
          block.pendingCharIdx = code;
          block.isWordBlock = true;
          block.wordRevealTime = elapsed + globalCharOrder * 0.085;
          block.wordFadeTime =
            elapsed + this.wordFadeOutStartTime + c * 0.05;
          globalCharOrder++;
        }
      }
    }

    this.nextWordSpawnTime = elapsed + this.wordCycleDuration;
  }

  createTechLogoCubes() {
    const cubeGeo = new THREE.BoxGeometry(
      this.cubeSize,
      this.cubeSize,
      this.cubeSize
    );

    technologies.forEach((tech, idx) => {
      const logoTexture = this.createOfficialLogoBlockTexture(tech);

      const logoMat = new THREE.MeshLambertMaterial({
        map: logoTexture,
        emissive: new THREE.Color(0x000000),
      });

      const mesh = new THREE.Mesh(cubeGeo, logoMat);
      mesh.userData = { techId: tech.id, index: idx };

      const col = idx % 5;
      const row = Math.floor(idx / 5);
      const initX =
        ((col - 2) / 2) * (this.spaceBoundX * 0.88) +
        (Math.random() - 0.5) * 4.2;
      const initZ =
        ((row - 1.5) / 1.5) * (this.spaceBoundZ * 0.85) +
        (Math.random() - 0.5) * 3.5;
      const initY = 4.2 + (idx % 5) * 3.1 + Math.random() * 2.2;

      mesh.position.set(initX, initY, initZ);
      mesh.rotation.set(
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2,
        Math.random() * Math.PI * 2
      );

      const speed = 1.15 + Math.random() * 0.95;
      const theta = Math.random() * Math.PI * 2;
      const phi = (Math.random() - 0.5) * 0.85;
      const vel = new THREE.Vector3(
        Math.cos(theta) * Math.cos(phi) * speed,
        Math.sin(phi) * speed * 0.7,
        Math.sin(theta) * Math.cos(phi) * speed
      );

      const rotVel = new THREE.Vector3(
        (Math.random() - 0.5) * 0.75,
        (Math.random() - 0.5) * 0.95,
        (Math.random() - 0.5) * 0.65
      );
      if (rotVel.length() < 0.25) rotVel.y = 0.45;

      this.worldGroup.add(mesh);
      this.interactiveMeshes.push(mesh);

      this.techCubes.push({
        tech,
        mesh,
        logoMat,
        idx,
        vel,
        rotVel,
        phaseX: Math.random() * Math.PI * 2,
        phaseY: Math.random() * Math.PI * 2,
        phaseZ: Math.random() * Math.PI * 2,
        freqX: 0.32 + Math.random() * 0.32,
        freqY: 0.42 + Math.random() * 0.32,
        freqZ: 0.32 + Math.random() * 0.32,
        currentScale: 1.0,
        collisionPulse: 0,
        collisionFlash: 0,
        spinBoost: 0,
      });
    });
  }

  createConstellationLines() {
    const vertexCount = this.maxLinePairs * 2;
    this.linePositions = new Float32Array(vertexCount * 3);
    this.lineColors = new Float32Array(vertexCount * 3);

    const lineGeo = new THREE.BufferGeometry();
    lineGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(this.linePositions, 3).setUsage(
        THREE.DynamicDrawUsage
      )
    );
    lineGeo.setAttribute(
      "color",
      new THREE.BufferAttribute(this.lineColors, 3).setUsage(
        THREE.DynamicDrawUsage
      )
    );

    const lineMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    this.constellationLines = new THREE.LineSegments(lineGeo, lineMat);
    this.worldGroup.add(this.constellationLines);
  }

  updateConstellationLines() {
    if (!this.constellationLines) return;

    const maxConnectDist = 27.5;
    let segmentIdx = 0;

    for (let i = 0; i < this.techCubes.length; i++) {
      const pA = this.techCubes[i].mesh.position;
      for (let j = i + 1; j < this.techCubes.length; j++) {
        const pB = this.techCubes[j].mesh.position;
        const dx = pB.x - pA.x;
        const dy = pB.y - pA.y;
        const dz = pB.z - pA.z;
        const dist = Math.hypot(dx, dy, dz);

        if (dist < maxConnectDist && segmentIdx < this.maxLinePairs) {
          const proximity = 1.0 - dist / maxConnectDist;
          const strength = proximity * proximity * 0.85;

          const posOffset = segmentIdx * 6;
          this.linePositions[posOffset] = pA.x;
          this.linePositions[posOffset + 1] = pA.y;
          this.linePositions[posOffset + 2] = pA.z;
          this.linePositions[posOffset + 3] = pB.x;
          this.linePositions[posOffset + 4] = pB.y;
          this.linePositions[posOffset + 5] = pB.z;

          const r = 0.88 * strength;
          const g = 0.34 * strength;
          const b = 0.45 * strength;

          this.lineColors[posOffset] = r;
          this.lineColors[posOffset + 1] = g;
          this.lineColors[posOffset + 2] = b;
          this.lineColors[posOffset + 3] = r;
          this.lineColors[posOffset + 4] = g;
          this.lineColors[posOffset + 5] = b;

          segmentIdx++;
        }
      }
    }

    for (let s = segmentIdx; s < this.maxLinePairs; s++) {
      const offset = s * 6;
      for (let k = 0; k < 6; k++) {
        this.linePositions[offset + k] = 0;
        this.lineColors[offset + k] = 0;
      }
    }

    this.constellationLines.geometry.attributes.position.needsUpdate = true;
    this.constellationLines.geometry.attributes.color.needsUpdate = true;
  }

  spawnCollisionBurst(x, y, z, colorHexA, colorHexB) {
    const ringMat = new THREE.MeshBasicMaterial({
      color: 0xff8fa3,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95,
    });
    const ringMesh = new THREE.Mesh(this.ringGeo, ringMat);
    ringMesh.position.set(x, y, z);
    ringMesh.lookAt(this.camera.position);
    this.worldGroup.add(ringMesh);

    const sparks = [];
    for (let s = 0; s < 8; s++) {
      const sparkMat = new THREE.MeshBasicMaterial({
        color: s % 2 === 0 ? colorHexA : colorHexB,
        transparent: true,
        opacity: 1.0,
      });
      const sparkMesh = new THREE.Mesh(this.sparkGeo, sparkMat);
      sparkMesh.position.set(x, y, z);

      const angle = (s / 8) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
      const elev = (Math.random() - 0.5) * 1.4;
      const spd = 4.2 + Math.random() * 3.8;
      const sVel = new THREE.Vector3(
        Math.cos(angle) * Math.cos(elev) * spd,
        Math.sin(elev) * spd,
        Math.sin(angle) * Math.cos(elev) * spd
      );

      this.worldGroup.add(sparkMesh);
      sparks.push({ mesh: sparkMesh, mat: sparkMat, vel: sVel });
    }

    this.collisionBursts.push({
      ringMesh,
      ringMat,
      sparks,
      age: 0,
      maxAge: 0.65,
    });

    if (this.collisionBursts.length > 6) {
      const oldest = this.collisionBursts.shift();
      this.disposeCollisionBurst(oldest);
    }
  }

  disposeCollisionBurst(burst) {
    if (!burst) return;
    this.worldGroup.remove(burst.ringMesh);
    burst.ringMat.dispose();
    for (let i = 0; i < burst.sparks.length; i++) {
      this.worldGroup.remove(burst.sparks[i].mesh);
      burst.sparks[i].mat.dispose();
    }
  }

  createOfficialLogoBlockTexture(tech) {
    const size = 512;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    const drawKeycapFrame = () => {
      ctx.fillStyle = tech.color;
      ctx.fillRect(0, 0, size, size);

      ctx.fillStyle = "#14141d";
      ctx.beginPath();
      ctx.roundRect(24, 24, size - 48, size - 48, 48);
      ctx.fill();

      ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
      ctx.beginPath();
      ctx.roundRect(52, 52, size - 104, size - 104, 36);
      ctx.fill();

      ctx.strokeStyle = "rgba(255, 255, 255, 0.18)";
      ctx.lineWidth = 5;
      ctx.stroke();
    };

    drawKeycapFrame();
    ctx.save();
    ctx.translate(64, 64);
    ctx.scale(3.0, 3.0);
    this.drawVectorLogo(ctx, tech.id, tech.color);
    ctx.restore();

    const tex = new THREE.CanvasTexture(canvas);
    tex.minFilter = THREE.LinearFilter;
    tex.magFilter = THREE.LinearFilter;

    const svgUrl = techSvgMap[tech.id];
    if (svgUrl && typeof window !== "undefined") {
      fetch(svgUrl)
        .then((res) => (res.ok ? res.text() : Promise.reject()))
        .then((svgText) => {
          let aspect = 1.0;
          const vbMatch = svgText.match(
            /viewBox=["']\s*([-\d.]+)\s+([-\d.]+)\s+([\d.]+)\s+([\d.]+)\s*["']/i
          );
          if (vbMatch) {
            const vbW = parseFloat(vbMatch[3]);
            const vbH = parseFloat(vbMatch[4]);
            if (vbW > 0 && vbH > 0) {
              aspect = vbW / vbH;
            }
          }

          const targetW = aspect >= 1 ? 400 : Math.round(400 * aspect);
          const targetH = aspect >= 1 ? Math.round(400 / aspect) : 400;

          let normalizedSvg = svgText
            .replace(/\bwidth=["'][^"']*["']/i, `width="${targetW}"`)
            .replace(/\bheight=["'][^"']*["']/i, `height="${targetH}"`);

          if (tech.id === "php") {
            normalizedSvg = normalizedSvg.replace(/#000004/gi, "#1e293b");
          }

          const blob = new Blob([normalizedSvg], {
            type: "image/svg+xml;charset=utf-8",
          });
          const blobUrl = URL.createObjectURL(blob);
          const img = new Image();
          img.onload = () => {
            drawKeycapFrame();

            const maxBox = 344;
            let drawW = maxBox;
            let drawH = maxBox;
            if (aspect > 1.0) {
              drawH = maxBox / aspect;
            } else if (aspect < 1.0) {
              drawW = maxBox * aspect;
            }
            const drawX = (size - drawW) * 0.5;
            const drawY = (size - drawH) * 0.5;

            ctx.save();
            ctx.shadowColor = "rgba(255, 255, 255, 0.26)";
            ctx.shadowBlur = 12;
            ctx.drawImage(img, drawX, drawY, drawW, drawH);
            ctx.restore();

            tex.needsUpdate = true;
            URL.revokeObjectURL(blobUrl);
          };
          img.onerror = () => {
            URL.revokeObjectURL(blobUrl);
          };
          img.src = blobUrl;
        })
        .catch(() => {});
    }

    return tex;
  }

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
        ctx.fillStyle = "#387EB8";
        ctx.fill(
          new Path2D(
            "M63.5 14C45 14 46 22 46 22l.02 8.35h18v2.6H28.4S14 31.3 14 51.5c0 20.3 12.6 19.5 12.6 19.5h7.5v-10.5s-.4-12.6 12.4-12.6h21.3s11.9.2 11.9-11.6V25.7S81.6 14 63.5 14z"
          )
        );
        ctx.fillStyle = "#FFE052";
        ctx.fill(
          new Path2D(
            "M64.5 114c18.5 0 17.5-8 17.5-8l-.02-8.35h-18v-2.6h35.6s14.4 1.6 14.4-18.6c0-20.3-12.6-19.5-12.6-19.5h-7.5v10.5s.4 12.6-12.4 12.6H42.6s-11.9-.2-11.9 11.6v10.6s-1.9 11.7 16.2 11.7z"
          )
        );
        break;
      }
      case "lua": {
        ctx.fillStyle = "#00A2FF";
        ctx.beginPath();
        ctx.arc(62, 68, 42, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "900 26px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("LUA", 62, 70);
        break;
      }
      case "html5": {
        ctx.fillStyle = "#E34F26";
        ctx.fill(new Path2D("M20 14L29 102L64 116L99 102L108 14H20Z"));
        ctx.fillStyle = "#EF652A";
        ctx.fill(new Path2D("M64 21V108.5L92 97L99.5 21H64Z"));
        ctx.fillStyle = "#FFFFFF";
        ctx.fill(
          new Path2D(
            "M90 34H38L41 68H75L74 83L64 86L54 83L53 74H41.5L43 91L64 98L85 91L88 56H52L51 46H89L90 34Z"
          )
        );
        break;
      }
      case "css3": {
        ctx.fillStyle = "#1572B6";
        ctx.fill(new Path2D("M20 14L29 102L64 116L99 102L108 14H20Z"));
        ctx.fillStyle = "#33A9DC";
        ctx.fill(new Path2D("M64 21V108.5L92 97L99.5 21H64Z"));
        ctx.fillStyle = "#FFFFFF";
        ctx.fill(
          new Path2D(
            "M38 34H90L85 91L64 98L43 91L41.5 74H53L54 83L64 86L74 83L75.5 67H48L49 55H76.5L77.5 46H39L38 34Z"
          )
        );
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
        ctx.fillStyle = "#FF2D20";
        ctx.fill(new Path2D("M64 14L108 39V89L64 114L20 89V39L64 14Z"));
        ctx.strokeStyle = "#FFFFFF";
        ctx.lineWidth = 5.5;
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
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "900 30px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("JS", 64, 65);
        break;
      }
      case "vite": {
        ctx.fillStyle = "#646CFF";
        ctx.fill(new Path2D("M16 24L64 116 112 24 64 36 16 24z"));
        ctx.fillStyle = "#FFD62E";
        ctx.fill(new Path2D("M72 12L36 66h25l-9 44 44-58H69L72 12z"));
        break;
      }
      case "tailwindcss": {
        ctx.fillStyle = "#38BDF8";
        ctx.fill(
          new Path2D(
            "M64 28C46.9 28 36.3 36.5 32 53.6c6.4-8.5 13.9-11.7 22.4-9.6 4.9 1.2 8.4 4.7 12.3 8.6 6.3 6.4 13.7 13.8 29.3 13.8 17.1 0 27.7-8.5 32-25.6-6.4 8.5-13.9 11.7-22.4 9.6-4.9-1.2-8.4-4.7-12.3-8.6C87 35.4 79.6 28 64 28zM32 66.4C14.9 66.4 4.3 74.9 0 92c6.4-8.5 13.9-11.7 22.4-9.6 4.9 1.2 8.4 4.7 12.3 8.6 6.3 6.4 13.7 13.8 29.3 13.8 17.1 0 27.7-8.5 32-25.6-6.4 8.5-13.9 11.7-22.4 9.6-4.9-1.2-8.4-4.7-12.3-8.6-6.3-6.4-13.7-13.8-29.3-13.8z"
          )
        );
        break;
      }
      case "bootstrap": {
        ctx.fillStyle = "#7952B3";
        ctx.beginPath();
        ctx.roundRect(16, 16, 96, 96, 22);
        ctx.fill();
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "900 58px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("B", 64, 68);
        break;
      }
      case "mysqli": {
        ctx.fillStyle = "#00758F";
        ctx.beginPath();
        ctx.roundRect(14, 24, 100, 80, 18);
        ctx.fill();
        ctx.fillStyle = "#F29111";
        ctx.font = "900 30px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("MySQL", 64, 66);
        break;
      }
      case "postgresql": {
        ctx.fillStyle = "#336791";
        ctx.beginPath();
        ctx.roundRect(16, 16, 96, 96, 22);
        ctx.fill();
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "900 36px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("PG", 64, 66);
        break;
      }
      case "supabase": {
        ctx.fillStyle = "#3ECF8E";
        ctx.fill(new Path2D("M72 14L18 78h42l-6 36 54-64H66l6-36z"));
        break;
      }
      case "vercel": {
        ctx.fillStyle = "#FFFFFF";
        ctx.fill(new Path2D("M64 16L116 106H12L64 16z"));
        break;
      }
      case "git": {
        ctx.save();
        ctx.translate(64, 64);
        ctx.rotate(Math.PI / 4);
        ctx.fillStyle = "#F05032";
        ctx.beginPath();
        ctx.roundRect(-38, -38, 76, 76, 14);
        ctx.fill();
        ctx.restore();
        break;
      }
      case "github": {
        ctx.fillStyle = "#3E77BF";
        ctx.beginPath();
        ctx.arc(64, 64, 48, 0, Math.PI * 2);
        ctx.fill();
        break;
      }
      case "wuaze": {
        ctx.fillStyle = "#0284C7";
        ctx.beginPath();
        ctx.roundRect(16, 16, 96, 96, 22);
        ctx.fill();
        ctx.fillStyle = "#FFFFFF";
        ctx.font = "900 24px Inter, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("WUAZE", 64, 66);
        break;
      }
      default: {
        ctx.fillStyle = brandColor;
        ctx.beginPath();
        ctx.roundRect(22, 22, 84, 84, 20);
        ctx.fill();
        break;
      }
    }

    ctx.restore();
  }

  computeStageTerrainHeight(stageIdx, b, elapsed) {
    const { nx, nz, distFromCenter } = b;

    switch (stageIdx) {
      case 0: {
        const wingStep = Math.max(0, Math.abs(nx) - 5) * 0.85;
        const wave =
          Math.sin(nx * 0.42 + elapsed * 1.1) *
          Math.cos(nz * 0.42 + elapsed * 0.95) *
          0.65;
        return 2.6 + wingStep + wave;
      }

      case 1: {
        const diagCoord = nx - nz;
        const stairStep = Math.floor((diagCoord + 15) * 0.4) * 0.45;
        return 2.2 + stairStep + Math.sin(elapsed * 1.1 + nx * 0.35) * 0.3;
      }

      case 2: {
        const isRim = Math.abs(nx) >= 6 || Math.abs(nz) >= 5;
        if (isRim) {
          return 5.0 + Math.sin(elapsed * 1.3 + (nx + nz) * 0.35) * 0.45;
        }
        return (
          2.3 +
          Math.sin(nx * 0.6 - elapsed * 1.4) * Math.cos(nz * 0.6) * 0.35
        );
      }

      case 3: {
        const rowTilt = (6 - nz) * 0.24;
        return 2.4 + rowTilt + Math.sin(elapsed * 1.2 + nx * 0.3) * 0.25;
      }

      case 4: {
        const riverCenterNx = Math.sin(nz * 0.38 + elapsed * 0.9) * 1.5;
        const distFromRiver = Math.abs(nx - riverCenterNx);
        if (distFromRiver < 2.4) {
          return 2.0 + Math.sin(nz * 0.65 - elapsed * 2.0) * 0.35;
        }
        const cliffTier = Math.min(3, Math.floor(distFromRiver - 1.4));
        return 3.0 + cliffTier * 0.95;
      }

      case 5:
      default: {
        const chebyshevDist = Math.max(Math.abs(nx), Math.abs(nz));
        const pyramidStep = Math.max(0, 6 - chebyshevDist) * 0.65;
        return 2.3 + pyramidStep + Math.sin(distFromCenter - elapsed * 1.6) * 0.35;
      }
    }
  }

  triggerShockwave(originX = 0, originZ = 0, strength = 2.6) {
    this.ripples.push({
      x: originX,
      z: originZ,
      radius: 0,
      strength,
    });
    if (this.ripples.length > 5) this.ripples.shift();
  }

  focusOnProject() {
    this.triggerShockwave(0, 0, 2.8);
    this.techCubes.forEach((c) => {
      c.vel.y += 1.4;
      c.spinBoost = 3.0;
    });
  }

  setScrollFlightProgress(progress) {
    const clamped = Math.max(0, Math.min(1, progress));
    const scrollDelta = clamped - this.targetScrollProgress;
    this.targetScrollProgress = clamped;

    if (Math.abs(scrollDelta) > 0.001) {
      for (let i = 0; i < this.techCubes.length; i++) {
        const c = this.techCubes[i];
        c.vel.y += scrollDelta * (i % 2 === 0 ? 5.8 : -5.0);
        c.vel.x += scrollDelta * Math.cos(i * 1.3) * 4.5;
        c.spinBoost = Math.min(3.5, c.spinBoost + Math.abs(scrollDelta) * 12.0);
      }
    }
  }

  setHighlightedTech(techId) {
    this.highlightedTechId = techId;
    if (techId) {
      const target = this.techCubes.find((c) => c.tech.id === techId);
      if (target) {
        target.vel.y = 2.2;
        target.spinBoost = 6.0;
        target.collisionPulse = 0.35;
        target.collisionFlash = 0.9;
        this.triggerShockwave(target.mesh.position.x, target.mesh.position.z, 2.4);
      }
    }
  }

  bindEvents() {
    this.onResize = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      this.camera.aspect = w / h;
      this.camera.updateProjectionMatrix();
      this.updateSpaceBoundsForAspect(w / h);
      this.renderer.setSize(w, h);
    };
    window.addEventListener("resize", this.onResize);

    this.onVisibility = () => {
      this.isPaused = document.hidden;
    };
    document.addEventListener("visibilitychange", this.onVisibility);

    this.onPointerMove = (e) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      this.mouseNormalized.set(nx, ny);

      this.raycaster.setFromCamera(this.mouseNormalized, this.camera);
      const hitPt = new THREE.Vector3();
      if (this.raycaster.ray.intersectPlane(this.groundPlane, hitPt)) {
        this.cursorWorldPt.set(
          hitPt.x - this.worldGroup.position.x,
          0,
          hitPt.z - this.worldGroup.position.z
        );
      }

      const hits = this.raycaster.intersectObjects(this.interactiveMeshes, false);
      if (hits.length > 0) {
        const techId = hits[0].object.userData?.techId;
        const found = this.techCubes.find((c) => c.tech.id === techId) || null;
        if (this.hoveredTechCube !== found && found) {
          found.spinBoost = 4.5;
          found.collisionPulse = 0.25;
          found.vel.y += 0.85;
        }
        this.hoveredTechCube = found;
        if (found && this.onPlanetHover) {
          this.onPlanetHover(found.tech, e.clientX, e.clientY);
        }
      } else if (this.hoveredTechCube) {
        this.hoveredTechCube = null;
        if (this.onPlanetHover) {
          this.onPlanetHover(null, 0, 0);
        }
      }
    };
    window.addEventListener("pointermove", this.onPointerMove, { passive: true });

    this.onClick = () => {
      if (Math.abs(this.cursorWorldPt.x) < 42 && Math.abs(this.cursorWorldPt.z) < 34) {
        this.triggerShockwave(this.cursorWorldPt.x, this.cursorWorldPt.z, 2.8);
      }

      if (this.hoveredTechCube) {
        this.hoveredTechCube.spinBoost = 7.5;
        this.hoveredTechCube.collisionPulse = 0.4;
        this.hoveredTechCube.collisionFlash = 1.0;
        this.hoveredTechCube.vel.y += 2.0;
      }
    };
    window.addEventListener("click", this.onClick);
  }

  animate() {
    this.animationFrameId = requestAnimationFrame(() => this.animate());

    if (this.isPaused) return;

    const now = performance.now();
    const delta = Math.min((now - this.lastTime) / 1000, 0.1);
    const elapsed = (now - this.startTime) / 1000;
    this.lastTime = now;

    if (elapsed >= this.nextWordSpawnTime) {
      this.spawnRandomWords(elapsed);
    }

    this.smoothScrollProgress +=
      (this.targetScrollProgress - this.smoothScrollProgress) * 0.055;
    this.smoothMouse.lerp(this.mouseNormalized, 0.055);

    const totalStages = STAGE_CAMERAS.length - 1;
    const exactStage = this.smoothScrollProgress * totalStages;
    const stageIdxA = Math.min(totalStages, Math.floor(exactStage));
    const stageIdxB = Math.min(totalStages, stageIdxA + 1);
    const stageFrac = exactStage - stageIdxA;
    const easeFrac = stageFrac * stageFrac * (3 - 2 * stageFrac);

    const camA = STAGE_CAMERAS[stageIdxA];
    const camB = STAGE_CAMERAS[stageIdxB];

    const targetPos = camA.pos.clone().lerp(camB.pos, easeFrac);
    const targetLook = camA.look.clone().lerp(camB.look, easeFrac);

    targetPos.x += this.smoothMouse.x * 3.2;
    targetPos.y += this.smoothMouse.y * 1.8;

    this.currentCamPos.lerp(targetPos, 0.055);
    this.currentLookAt.lerp(targetLook, 0.065);

    const targetRotY =
      camA.rotY + (camB.rotY - camA.rotY) * easeFrac + this.smoothMouse.x * 0.09;
    this.currentStageRotY += (targetRotY - this.currentStageRotY) * 0.055;
    this.worldGroup.rotation.y = this.currentStageRotY;

    this.camera.position.copy(this.currentCamPos);
    this.camera.lookAt(this.currentLookAt);

    for (let i = this.ripples.length - 1; i >= 0; i--) {
      const r = this.ripples[i];
      r.radius += delta * 16.5;
      r.strength -= delta * 1.2;
      if (r.strength <= 0) {
        this.ripples.splice(i, 1);
      }
    }

    for (let i = 0; i < this.totalBlocks; i++) {
      const b = this.blockData[i];

      if (!b.isWordBlock && b.wordBoost < 0.08 && elapsed >= b.nextRandomCharTime) {
        if (b.pendingCharIdx === -1) {
          b.pendingCharIdx = Math.floor(Math.random() * 26);
        }
        b.currentOpacity += (0.04 - b.currentOpacity) * 0.12;
        if (b.currentOpacity < 0.08) {
          b.charIdx = b.pendingCharIdx;
          b.capMat.map = this.letterTextures[b.charIdx];
          b.pendingCharIdx = -1;
          b.nextRandomCharTime = elapsed + 4.0 + Math.random() * 5.5;
        }
      }

      if (b.isWordBlock && b.pendingCharIdx !== -1 && elapsed >= b.wordRevealTime - 0.15) {
        b.charIdx = b.pendingCharIdx;
        b.capMat.map = this.letterTextures[b.charIdx];
        b.pendingCharIdx = -1;
      }

      const hA = this.computeStageTerrainHeight(stageIdxA, b, elapsed);
      const hB =
        stageIdxA === stageIdxB
          ? hA
          : this.computeStageTerrainHeight(stageIdxB, b, elapsed);

      let targetHeight = hA + (hB - hA) * easeFrac;

      const isWordActiveWindow =
        b.isWordBlock &&
        elapsed >= b.wordRevealTime &&
        elapsed < b.wordFadeTime;

      const targetWordBoost = isWordActiveWindow ? 1.0 : 0.0;
      const boostLerpRate = targetWordBoost > b.wordBoost ? 0.048 : 0.028;
      b.wordBoost += (targetWordBoost - b.wordBoost) * boostLerpRate;

      targetHeight += b.wordBoost * 1.45;

      const dx = b.x - this.cursorWorldPt.x;
      const dz = b.z - this.cursorWorldPt.z;
      const cursorDist = Math.hypot(dx, dz);
      let cursorGlow = 0;

      if (cursorDist < 5.5) {
        const proximity = 1 - cursorDist / 5.5;
        targetHeight += proximity * 1.9;
        cursorGlow = proximity * 0.8;
      }

      for (let r = 0; r < this.ripples.length; r++) {
        const rip = this.ripples[r];
        const rDist = Math.abs(Math.hypot(b.x - rip.x, b.z - rip.z) - rip.radius);
        if (rDist < 2.5) {
          const rBoost = (1 - rDist / 2.5) * rip.strength;
          targetHeight += rBoost;
          cursorGlow = Math.max(cursorGlow, Math.min(1, rBoost * 0.45));
        }
      }

      targetHeight = Math.max(1.4, Math.min(10.5, targetHeight));
      b.currentHeight += (targetHeight - b.currentHeight) * 0.085;
      b.topY = this.floorBaseY + b.currentHeight;

      const targetColorMix = Math.max(b.wordBoost, cursorGlow);
      const colorLerpRate = targetColorMix > b.colorMix ? 0.055 : 0.032;
      b.colorMix += (targetColorMix - b.colorMix) * colorLerpRate;

      this.dummy.position.set(
        b.x,
        this.floorBaseY + b.currentHeight * 0.5,
        b.z
      );
      this.dummy.rotation.set(0, 0, 0);
      this.dummy.scale.set(1, b.currentHeight, 1);
      this.dummy.updateMatrix();
      this.instancedBlocks.setMatrixAt(i, this.dummy.matrix);

      b.letterCap.position.y = b.topY + 0.03;
      if (b.pendingCharIdx === -1) {
        const targetOpacity = 0.22 + b.colorMix * 0.78;
        b.currentOpacity += (targetOpacity - b.currentOpacity) * 0.055;
      }
      b.capMat.opacity = b.currentOpacity;

      this.tempColor.copy(this.baseColor);
      if (b.colorMix > 0.01) {
        this.tempColor.lerp(this.activeColor, Math.min(1, b.colorMix * 1.1));
        if (b.wordBoost > 0.45) {
          this.tempColor.lerp(this.highlightColor, (b.wordBoost - 0.45) * 0.7);
        }
      }
      this.instancedBlocks.setColorAt(i, this.tempColor);
    }

    this.instancedBlocks.instanceMatrix.needsUpdate = true;
    if (this.instancedBlocks.instanceColor) {
      this.instancedBlocks.instanceColor.needsUpdate = true;
    }

    for (let i = 0; i < this.techCubes.length; i++) {
      const c = this.techCubes[i];
      const pos = c.mesh.position;

      const driftAx = Math.sin(elapsed * c.freqX + c.phaseX) * 0.58;
      const driftAy = Math.cos(elapsed * c.freqY + c.phaseY) * 0.48;
      const driftAz = Math.sin(elapsed * c.freqZ + c.phaseZ) * 0.58;

      c.vel.x += driftAx * delta;
      c.vel.y += driftAy * delta;
      c.vel.z += driftAz * delta;

      if (pos.x > this.spaceBoundX) c.vel.x -= (pos.x - this.spaceBoundX) * 2.4 * delta;
      if (pos.x < -this.spaceBoundX) c.vel.x -= (pos.x + this.spaceBoundX) * 2.4 * delta;
      if (pos.z > this.spaceBoundZ) c.vel.z -= (pos.z - this.spaceBoundZ) * 2.4 * delta;
      if (pos.z < -this.spaceBoundZ) c.vel.z -= (pos.z + this.spaceBoundZ) * 2.4 * delta;
      if (pos.y > this.spaceMaxY) c.vel.y -= (pos.y - this.spaceMaxY) * 2.6 * delta;
      if (pos.y < this.spaceMinY) c.vel.y += (this.spaceMinY - pos.y) * 2.6 * delta;

      const cdx = pos.x - this.cursorWorldPt.x;
      const cdz = pos.z - this.cursorWorldPt.z;
      const cDist = Math.hypot(cdx, cdz);
      if (cDist < 5.5 && cDist > 0.01) {
        const push = (1 - cDist / 5.5) * 4.0 * delta;
        c.vel.x += (cdx / cDist) * push;
        c.vel.z += (cdz / cDist) * push;
        c.vel.y += push * 0.65;
      }

      const maxSpeed = 2.65;
      const minSpeed = 0.72;
      const curSpeed = c.vel.length();
      if (curSpeed > maxSpeed) {
        c.vel.multiplyScalar(maxSpeed / curSpeed);
      } else if (curSpeed < minSpeed && curSpeed > 0.001) {
        c.vel.multiplyScalar(minSpeed / curSpeed);
      }

      pos.x += c.vel.x * delta;
      pos.y += c.vel.y * delta;
      pos.z += c.vel.z * delta;

      c.spinBoost *= 0.91;
      const rotMult = 1.0 + c.spinBoost;
      c.mesh.rotation.x += c.rotVel.x * rotMult * delta;
      c.mesh.rotation.y += c.rotVel.y * rotMult * delta;
      c.mesh.rotation.z += c.rotVel.z * rotMult * delta;

      c.collisionPulse *= 0.86;
      c.collisionFlash *= 0.88;
      if (c.collisionFlash > 0.01) {
        c.logoMat.emissive.copy(this.flashColor).multiplyScalar(c.collisionFlash * 0.65);
      } else {
        c.logoMat.emissive.setHex(0x000000);
      }
    }

    const minCubeDist = 3.55;
    for (let pass = 0; pass < 2; pass++) {
      for (let i = 0; i < this.techCubes.length; i++) {
        const cA = this.techCubes[i];
        const pA = cA.mesh.position;
        for (let j = i + 1; j < this.techCubes.length; j++) {
          const cB = this.techCubes[j];
          const pB = cB.mesh.position;
          const dx = pB.x - pA.x;
          const dy = pB.y - pA.y;
          const dz = pB.z - pA.z;
          const dist = Math.hypot(dx, dy, dz);

          if (dist < minCubeDist && dist > 0.0001) {
            const overlap = (minCubeDist - dist) * 0.5;
            const nx = dx / dist;
            const ny = dy / dist;
            const nz = dz / dist;

            pA.x -= nx * overlap;
            pA.y -= ny * overlap;
            pA.z -= nz * overlap;
            pB.x += nx * overlap;
            pB.y += ny * overlap;
            pB.z += nz * overlap;

            if (pass === 0) {
              const relVx = cB.vel.x - cA.vel.x;
              const relVy = cB.vel.y - cA.vel.y;
              const relVz = cB.vel.z - cA.vel.z;
              const sepVel = relVx * nx + relVy * ny + relVz * nz;

              if (sepVel < 0) {
                const impulse = Math.max(1.35, -sepVel * 1.15);
                cA.vel.x -= nx * impulse;
                cA.vel.y -= ny * impulse;
                cA.vel.z -= nz * impulse;
                cB.vel.x += nx * impulse;
                cB.vel.y += ny * impulse;
                cB.vel.z += nz * impulse;
              }

              const pairKey = `${i}_${j}`;
              const lastHit = this.pairCollisionCooldown.get(pairKey) || 0;
              if (elapsed - lastHit > 0.32) {
                this.pairCollisionCooldown.set(pairKey, elapsed);

                cA.spinBoost = 4.6;
                cB.spinBoost = 4.6;
                cA.collisionPulse = 0.34;
                cB.collisionPulse = 0.34;
                cA.collisionFlash = 1.0;
                cB.collisionFlash = 1.0;

                cA.rotVel.x = -cA.rotVel.x;
                cB.rotVel.z = -cB.rotVel.z;

                const midX = (pA.x + pB.x) * 0.5;
                const midY = (pA.y + pB.y) * 0.5;
                const midZ = (pA.z + pB.z) * 0.5;
                this.spawnCollisionBurst(
                  midX,
                  midY,
                  midZ,
                  cA.tech.color,
                  cB.tech.color
                );

                this.triggerShockwave(midX, midZ, 1.5);
              }
            }
          }
        }
      }
    }

    for (let i = this.collisionBursts.length - 1; i >= 0; i--) {
      const b = this.collisionBursts[i];
      b.age += delta;
      const progress = b.age / b.maxAge;

      if (progress >= 1.0) {
        this.disposeCollisionBurst(b);
        this.collisionBursts.splice(i, 1);
        continue;
      }

      const ringScale = 1.0 + progress * 4.2;
      b.ringMesh.scale.set(ringScale, ringScale, 1);
      b.ringMesh.lookAt(this.camera.position);
      b.ringMat.opacity = (1.0 - progress) * 0.9;

      for (let s = 0; s < b.sparks.length; s++) {
        const sp = b.sparks[s];
        sp.mesh.position.x += sp.vel.x * delta;
        sp.mesh.position.y += sp.vel.y * delta;
        sp.mesh.position.z += sp.vel.z * delta;
        sp.mesh.rotation.x += 6.0 * delta;
        sp.mesh.rotation.y += 6.0 * delta;
        const spScale = Math.max(0.05, 1.0 - progress);
        sp.mesh.scale.set(spScale, spScale, spScale);
        sp.mat.opacity = 1.0 - progress;
      }
    }

    for (let i = 0; i < this.techCubes.length; i++) {
      const c = this.techCubes[i];
      const pos = c.mesh.position;

      let maxUnderTopY = this.floorBaseY + 2.0;
      for (let k = 0; k < this.totalBlocks; k++) {
        const b = this.blockData[k];
        if (
          Math.abs(b.x - pos.x) < 3.2 &&
          Math.abs(b.z - pos.z) < 3.2
        ) {
          if (b.topY > maxUnderTopY) {
            maxUnderTopY = b.topY;
          }
        }
      }

      const isHovered =
        this.hoveredTechCube === c || this.highlightedTechId === c.tech.id;
      const baseTargetScale = isHovered ? 1.35 : 0.98;
      const targetScale = baseTargetScale + c.collisionPulse;
      c.currentScale += (targetScale - c.currentScale) * 0.18;
      c.mesh.scale.set(c.currentScale, c.currentScale, c.currentScale);

      const safeClearance = (this.cubeSize * c.currentScale) * 0.9 + 1.15;
      const minSafeY = maxUnderTopY + safeClearance;
      if (pos.y < minSafeY) {
        pos.y = minSafeY;
        if (c.vel.y < 0) {
          c.vel.y = Math.abs(c.vel.y) * 0.7 + 0.4;
        }
      }
    }

    this.updateConstellationLines();

    this.renderer.render(this.scene, this.camera);
  }

  destroy() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    window.removeEventListener("resize", this.onResize);
    document.removeEventListener("visibilitychange", this.onVisibility);
    window.removeEventListener("pointermove", this.onPointerMove);
    window.removeEventListener("click", this.onClick);

    while (this.collisionBursts.length > 0) {
      this.disposeCollisionBurst(this.collisionBursts.pop());
    }

    if (this.renderer?.domElement?.parentElement) {
      this.renderer.domElement.parentElement.removeChild(
        this.renderer.domElement
      );
    }
    this.renderer?.dispose();
  }
}
