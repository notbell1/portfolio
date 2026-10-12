// Import CSS & Tailwind tokens
import "./style.css";

// Import Components
import { Header } from "./components/Header.js";
import { Hero } from "./components/Hero.js";
import { About, initAge } from "./components/About.js";
import { Project } from "./components/Project.js";
import { Skill } from "./components/Skill.js";
import { Experience } from "./components/Experience.js";
import { Footer } from "./components/Footer.js";

// Import 3D Developer Solar System
import { SolarSystem } from "./solar/SolarSystem.js";
import { technologies } from "./solar/technologies.js";

// Import Navigation & Project Handlers
import { initNav } from "./utils/navHandler.js";
import { initProjectDetail } from "./utils/projectHandler.js";

const app = document.querySelector("#app");

// Render Complete Portfolio Structure:
// 1. Fixed full-page 3D Solar System Canvas in background
// 2. Gradient Shadow Overlay (darkening to the left, 20% reveal from right)
// 3. Foreground scrollable content with translucent glass styling
app.innerHTML = `
  <!-- Full-Page Static/Ambient 3D Solar System Background Canvas -->
  <div 
    id="solar-canvas-mount" 
    class="fixed inset-0 w-full h-full pointer-events-none z-0 select-none"
    aria-hidden="true"
  ></div>

  <!-- Gradient Shadow Overlay: 40% darkness on left, fading to transparent on right -->
  <div 
    id="solar-gradient-shadow"
    class="fixed inset-0 w-full h-full pointer-events-none z-[1] select-none"
    style="background: linear-gradient(to right, rgba(9, 9, 11, 0.40) 0%, rgba(9, 9, 11, 0.32) 40%, rgba(9, 9, 11, 0.15) 75%, transparent 100%);"
    aria-hidden="true"
  ></div>

  <!-- Foreground Scrollable Website Content -->
  <div class="relative z-10 w-full">
    ${Header}
    <main class="w-full">
      ${Hero}
      ${About}
      ${Project}
      ${Skill}
      ${Experience}
    </main>
    ${Footer}
  </div>

  <!-- Standalone Project Detail Modal for Deep-Dives -->
  <div 
    id="projectModal" 
    class="hidden fixed inset-0 z-50 bg-black/75 backdrop-blur-sm  items-center justify-center p-3 sm:p-6 select-auto"
  >
    <div id="modalContent" class="w-full max-w-3xl max-h-[92vh] animate-panel-in">
      <!-- Populated by initProjectDetail -->
    </div>
  </div>
`;

// Initialize UI Icons & Scroll Animations
if (window.lucide) {
  window.lucide.createIcons();
}
if (window.AOS) {
  window.AOS.init({
    duration: 600,
    once: true,
  });
}

// Initialize Interactive Handlers
initNav();
initAge(2002, 6, 20);
initProjectDetail();

// ----------------------------------------------------
// 3D DEVELOPER SOLAR SYSTEM INITIALIZATION
// ----------------------------------------------------
let solarSystemInstance = null;
const solarMount = document.getElementById("solar-canvas-mount");

if (solarMount) {
  try {
    solarSystemInstance = new SolarSystem(solarMount);
  } catch (err) {
    console.warn("WebGL background initialization failed:", err);
  }
}

// ----------------------------------------------------
// KEYBOARD ESC & BACKDROP EVENTS FOR PROJECT MODAL
// ----------------------------------------------------
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const projModal = document.getElementById("projectModal");
    if (projModal && !projModal.classList.contains("hidden")) {
      window.closeProjectDetail();
    }
  }
});

const projModal = document.getElementById("projectModal");
if (projModal) {
  projModal.addEventListener("click", (e) => {
    if (e.target === projModal) {
      window.closeProjectDetail();
    }
  });
}
