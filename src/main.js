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

  <!-- Gradient Shadow Overlay: 60% darkness on left, fading to 18% on right (+20% darkness) -->
  <div 
    id="solar-gradient-shadow"
    class="fixed inset-0 w-full h-full pointer-events-none z-[1] select-none"
    style="background: linear-gradient(to right, rgba(9, 9, 11, 0.60) 0%, rgba(9, 9, 11, 0.48) 40%, rgba(9, 9, 11, 0.28) 75%, rgba(9, 9, 11, 0.18) 100%);"
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
    class="hidden fixed inset-0 z-50 bg-black/75 backdrop-blur-sm items-center justify-center p-3 sm:p-6 select-auto"
  >
    <div id="modalContent" class="w-full max-w-3xl max-h-[92vh] animate-panel-in">
      <!-- Populated by initProjectDetail -->
    </div>
  </div>

  <!-- CV Download Confirmation Modal -->
  <div 
    id="cvModal" 
    class="hidden fixed inset-0 z-50 bg-black/80 backdrop-blur-sm items-center justify-center p-4 select-auto"
  >
    <div class="w-full max-w-md bg-[#121217] border border-[#27272a] rounded-2xl shadow-2xl p-6 relative animate-panel-in text-left">
      <!-- Close Button -->
      <button 
        id="cvModalClose"
        type="button" 
        class="absolute top-4 right-4 p-1.5 rounded-lg bg-[#181820] text-zinc-400 hover:text-white border border-[#27272a] hover:border-[#800020] transition-all cursor-pointer"
        aria-label="Close modal"
      >
        <i data-lucide="x" class="w-4 h-4"></i>
      </button>

      <!-- Icon & Header -->
      <div class="flex items-center gap-3.5 mb-4">
        <div class="w-11 h-11 rounded-xl bg-[#800020]/20 border border-[#800020]/40 flex items-center justify-center text-[#ff8fa3] shrink-0">
          <i data-lucide="file-text" class="w-5 h-5"></i>
        </div>
        <div>
          <h3 class="text-base sm:text-lg font-bold text-white tracking-tight">Download CV</h3>
          <p class="text-xs text-zinc-400">Curriculum Vitae &bull; Abbel</p>
        </div>
      </div>

      <!-- File Details Card -->
      <div class="p-3.5 rounded-xl bg-[#181820] border border-[#27272a] mb-5 flex items-center justify-between">
        <div class="flex items-center gap-3 min-w-0">
          <div class="w-9 h-9 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 font-bold font-mono text-xs shrink-0">
            PDF
          </div>
          <div class="truncate">
            <span class="text-xs font-semibold text-zinc-200 block truncate">abbel-cv.pdf</span>
            <span class="text-[10px] text-zinc-500 font-mono">Format: PDF Document</span>
          </div>
        </div>
        <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-[#121217] text-zinc-400 border border-[#27272a] shrink-0">
          ~384 KB
        </span>
      </div>

      <p class="text-xs text-zinc-300 leading-relaxed mb-6">
        Do you want to download <strong class="text-white font-semibold">abbel-cv.pdf</strong> to your device?
      </p>

      <!-- Action Buttons -->
      <div class="flex items-center justify-end gap-2.5">
        <button 
          id="cvModalCancel"
          type="button"
          class="px-4 py-2 rounded-xl bg-[#181820] hover:bg-[#20202a] text-zinc-300 hover:text-white text-xs font-semibold border border-[#27272a] transition-all cursor-pointer"
        >
          Cancel
        </button>
        <a 
          href="/cv/abbel-cv.pdf" 
          download="abbel-cv.pdf"
          id="cvModalConfirmDownload"
          class="px-4 py-2 rounded-xl bg-[#800020] hover:bg-[#9b111e] text-white text-xs font-semibold shadow-lg shadow-[#800020]/30 transition-all border border-[#9b111e]/40 inline-flex items-center gap-1.5 cursor-pointer"
        >
          <i data-lucide="download" class="w-3.5 h-3.5"></i>
          <span>Download</span>
        </a>
      </div>
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
// CV DOWNLOAD MODAL HANDLERS
// ----------------------------------------------------
const btnDownloadCv = document.getElementById("btn-download-cv");
const cvModal = document.getElementById("cvModal");
const cvModalClose = document.getElementById("cvModalClose");
const cvModalCancel = document.getElementById("cvModalCancel");
const cvModalConfirm = document.getElementById("cvModalConfirmDownload");

function openCvModal() {
  if (cvModal) {
    cvModal.classList.remove("hidden");
    cvModal.classList.add("flex");
    if (window.lucide) window.lucide.createIcons();
  }
}

function closeCvModal() {
  if (cvModal) {
    cvModal.classList.add("hidden");
    cvModal.classList.remove("flex");
  }
}

btnDownloadCv?.addEventListener("click", openCvModal);
cvModalClose?.addEventListener("click", closeCvModal);
cvModalCancel?.addEventListener("click", closeCvModal);
cvModalConfirm?.addEventListener("click", () => {
  setTimeout(closeCvModal, 400);
});
cvModal?.addEventListener("click", (e) => {
  if (e.target === cvModal) {
    closeCvModal();
  }
});

// ----------------------------------------------------
// KEYBOARD ESC & BACKDROP EVENTS FOR PROJECT & CV MODALS
// ----------------------------------------------------
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (cvModal && !cvModal.classList.contains("hidden")) {
      closeCvModal();
      return;
    }
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

