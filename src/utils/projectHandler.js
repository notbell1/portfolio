import { projects } from "../data/projects.js";
import { formatYearOnly, renderSpotlightHTML } from "../components/Project.js";

const githubIcon = `<svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`;

/**
 * HELPER: Slug Generator
 */
const createSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
};

const renderModalContent = (slug) => {
  const data = projects.find((p) => createSlug(p.title) === slug || p.id === slug);
  if (!data) return closeProjectDetail();

  const content = document.getElementById("modalContent");
  const modal = document.getElementById("projectModal");

  const cleanYear = formatYearOnly(data.year);

  content.innerHTML = `
    <div class="bg-[#121217] border border-[#800020]/40 rounded-2xl shadow-2xl overflow-hidden max-h-[88vh] flex flex-col text-zinc-100 shadow-black/80">
      
      <!-- Sticky Modal Header -->
      <div class="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[#27272a] bg-[#181820] shrink-0">
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-0.5 bg-[#800020] text-white text-[10px] font-mono font-medium rounded-full border border-[#9b111e]/40">${cleanYear}</span>
          <span class="text-zinc-400 font-mono text-[10px] sm:text-xs uppercase font-medium">${data.category}</span>
        </div>
        
        <button 
          onclick="closeProjectDetail()" 
          class="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Scrollable Body Content -->
      <div class="p-4 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5 no-scrollbar">
        
        <!-- Title & Intro -->
        <div>
          <h2 class="text-lg sm:text-2xl font-bold text-white tracking-tight mb-1.5 leading-snug">
            ${data.title}
          </h2>
          <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed">
            ${data.longDescription}
          </p>
        </div>

        <!-- Main Screenshot Preview -->
        <div class="rounded-xl overflow-hidden border border-[#27272a] bg-[#181820] shadow-md aspect-video max-h-56 sm:max-h-64 w-full">
          <img 
            src="${data.mainImage}" 
            alt="${data.title}" 
            class="w-full h-full object-cover object-top" 
          />
        </div>

        <!-- Key Info Grid: Partner & Tech Stack -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3.5 bg-[#181820] rounded-xl border border-[#27272a] text-xs">
          <div>
            <span class="text-zinc-400 uppercase tracking-wider text-[10px] font-mono block mb-0.5">Partner / Client</span>
            <p class="text-white font-medium">${data.client}</p>
          </div>
          <div>
            <span class="text-zinc-400 uppercase tracking-wider text-[10px] font-mono block mb-1">Tech Stack</span>
            <div class="flex flex-wrap gap-1">
              ${data.stack
                .map(
                  (s) => `
                <span class="px-2 py-0.5 bg-[#121217] border border-[#27272a] rounded text-[10px] font-mono text-[#ff8fa3]">${s}</span>
              `
                )
                .join("")}
            </div>
          </div>
        </div>

        <!-- Key Features List -->
        <div>
          <h3 class="text-xs font-bold text-white uppercase tracking-wider font-mono mb-2">
            Key Features &amp; Deliverables
          </h3>
          <div class="space-y-1.5">
            ${data.features
              .map(
                (f, i) => `
              <div class="flex items-start gap-2.5 text-xs text-zinc-300 leading-relaxed">
                <span class="text-[#ff8fa3] font-mono text-[10px] mt-0.5 font-bold shrink-0">0${i + 1}</span>
                <span>${f}</span>
              </div>
            `
              )
              .join("")}
          </div>
        </div>

      </div>

      <!-- Sticky Modal Footer -->
      <div class="flex items-center justify-between px-4 sm:px-6 py-3 border-t border-[#27272a] bg-[#181820] shrink-0 gap-2">
        <button 
          onclick="closeProjectDetail()" 
          class="text-xs font-medium text-zinc-400 hover:text-white transition-colors cursor-pointer flex items-center gap-1 shrink-0"
        >
          <span>&larr;</span>
          <span>Close</span>
        </button>

        <div class="flex items-center gap-2">
          ${
            data.githubUrl && data.githubUrl !== "#"
              ? `
            <a 
              href="${data.githubUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#121217] hover:bg-[#27272a] text-zinc-200 hover:text-white rounded-xl text-xs font-medium transition-colors border border-[#27272a]"
            >
              ${githubIcon}
              <span>GitHub</span>
            </a>
          `
              : ""
          }
          ${
            data.liveUrl && data.liveUrl !== "#"
              ? `
            <a 
              href="${data.liveUrl}" 
              target="_blank" 
              rel="noopener noreferrer" 
              class="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#800020] hover:bg-[#9b111e] text-white rounded-xl text-xs font-medium transition-colors shadow-md border border-[#9b111e]/40"
            >
              <span>Visit Live Website</span>
              <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
            </a>
          `
              : ""
          }
        </div>
      </div>

    </div>
  `;

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  document.body.style.overflow = "hidden";
  if (window.lucide) window.lucide.createIcons();
};

window.openProjectDetail = (slugOrId) => {
  const item = projects.find(
    (p) => p.id === slugOrId || createSlug(p.title) === slugOrId
  );
  const finalSlug = item ? createSlug(item.title) : slugOrId;

  window.history.pushState({}, "", `?id=${finalSlug}`);
  window.dispatchEvent(new PopStateEvent("popstate"));
};

window.closeProjectDetail = () => {
  const modal = document.getElementById("projectModal");
  if (modal) {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }
  window.history.pushState({}, "", window.location.pathname);
  document.body.style.overflow = "auto";
};

// Select Orbit Project Handler
window.selectOrbitProject = (projectId) => {
  const targetProject = projects.find((p) => p.id === projectId);
  if (!targetProject) return;

  const card = document.getElementById("orbit-spotlight-card");
  if (card) {
    card.innerHTML = renderSpotlightHTML(targetProject);
    if (window.lucide) window.lucide.createIcons();
  }

  // Highlight selected node button
  const buttons = document.querySelectorAll(".orbit-node-btn");
  buttons.forEach((b) => {
    if (b.getAttribute("data-project-id") === projectId) {
      b.classList.add("ring-2", "ring-[#ff8fa3]", "bg-[#272738]");
    } else {
      b.classList.remove("ring-2", "ring-[#ff8fa3]", "bg-[#272738]");
    }
  });
};

// Toggle Radar Orbit Motion (Play / Pause)
window.toggleRadarMotion = () => {
  const stage = document.getElementById("radar-main-stage");
  const dot = document.getElementById("motion-dot");
  const text = document.getElementById("motion-text");
  if (!stage) return;

  const isPaused = stage.classList.toggle("is-paused");
  if (isPaused) {
    if (dot) {
      dot.className = "w-2 h-2 rounded-full bg-amber-400";
    }
    if (text) {
      text.textContent = "Paused";
    }
  } else {
    if (dot) {
      dot.className = "w-2 h-2 rounded-full bg-emerald-400 animate-pulse";
    }
    if (text) {
      text.textContent = "Orbiting";
    }
  }
};

// Switch Between Orbit View & Grid View
window.switchProjectView = (viewMode) => {
  const orbitContainer = document.getElementById("project-orbit-container");
  const gridContainer = document.getElementById("project-grid-container");
  const btnOrbit = document.getElementById("btn-orbit-view");
  const btnGrid = document.getElementById("btn-grid-view");

  if (!orbitContainer || !gridContainer || !btnOrbit || !btnGrid) return;

  if (viewMode === "grid") {
    orbitContainer.classList.add("hidden");
    gridContainer.classList.remove("hidden");
    gridContainer.classList.add("grid");

    btnGrid.className =
      "px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer bg-[#800020] text-white shadow-sm flex items-center gap-1.5";
    btnOrbit.className =
      "px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white transition-all cursor-pointer flex items-center gap-1.5";
  } else {
    gridContainer.classList.add("hidden");
    gridContainer.classList.remove("grid");
    orbitContainer.classList.remove("hidden");

    btnOrbit.className =
      "px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer bg-[#800020] text-white shadow-sm flex items-center gap-1.5";
    btnGrid.className =
      "px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white transition-all cursor-pointer flex items-center gap-1.5";
  }

  if (window.lucide) window.lucide.createIcons();
  if (window.AOS) window.AOS.refresh();
};

export const initProjectDetail = () => {
  const handleRoute = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get("id");

    const item = projects.find(
      (p) => createSlug(p.title) === slug || p.id === slug
    );

    if (slug && item) {
      renderModalContent(slug);
    } else {
      const modal = document.getElementById("projectModal");
      if (modal) {
        modal.classList.add("hidden");
        modal.classList.remove("flex");
      }
      document.body.style.overflow = "auto";
    }
  };

  // Close modal on Escape key press
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProjectDetail();
    }
  });

  window.addEventListener("popstate", handleRoute);
  handleRoute();
};
