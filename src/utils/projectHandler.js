import { projects } from "../data/projects.js";

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

  content.innerHTML = `
    <div class="bg-white border border-neutral-200/90 rounded-2xl shadow-2xl overflow-hidden max-h-[88vh] flex flex-col text-neutral-800">
      
      <!-- Sticky Modal Header -->
      <div class="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-neutral-100 bg-[#fafbfc] shrink-0">
        <div class="flex items-center gap-2">
          <span class="px-2 py-0.5 bg-neutral-900 text-white text-[10px] font-mono font-medium rounded-full">${data.year}</span>
          <span class="text-neutral-500 font-mono text-[10px] sm:text-xs uppercase font-medium">${data.category}</span>
        </div>
        
        <button 
          onclick="closeProjectDetail()" 
          class="p-1.5 text-neutral-400 hover:text-neutral-900 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
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
          <h2 class="text-lg sm:text-2xl font-bold text-neutral-900 tracking-tight mb-1.5 leading-snug">
            ${data.title}
          </h2>
          <p class="text-xs sm:text-sm text-neutral-600 leading-relaxed">
            ${data.longDescription}
          </p>
        </div>

        <!-- Main Screenshot Preview -->
        <div class="rounded-xl overflow-hidden border border-neutral-200/90 bg-neutral-100 shadow-2xs aspect-video max-h-56 sm:max-h-64 w-full">
          <img 
            src="${data.mainImage}" 
            alt="${data.title}" 
            class="w-full h-full object-cover object-top" 
          />
        </div>

        <!-- Key Info Grid: Client & Tech Stack -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 p-3 sm:p-3.5 bg-neutral-50 rounded-xl border border-neutral-100 text-xs">
          <div>
            <span class="text-neutral-400 uppercase tracking-wider text-[10px] font-mono block mb-0.5">Partner / Client</span>
            <p class="text-neutral-800 font-medium">${data.client}</p>
          </div>
          <div>
            <span class="text-neutral-400 uppercase tracking-wider text-[10px] font-mono block mb-1">Tech Stack</span>
            <div class="flex flex-wrap gap-1">
              ${data.stack
                .map(
                  (s) => `
                <span class="px-2 py-0.5 bg-white border border-neutral-200 rounded text-[10px] font-mono text-neutral-700">${s}</span>
              `,
                )
                .join("")}
            </div>
          </div>
        </div>

        <!-- Key Features List -->
        <div>
          <h3 class="text-xs font-bold text-neutral-900 uppercase tracking-wider font-mono mb-2">
            Key Features &amp; Deliverables
          </h3>
          <div class="space-y-1.5">
            ${data.features
              .map(
                (f, i) => `
              <div class="flex items-start gap-2.5 text-xs text-neutral-600 leading-relaxed">
                <span class="text-neutral-400 font-mono text-[10px] mt-0.5 font-bold shrink-0">0${i + 1}</span>
                <span>${f}</span>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>

      </div>

      <!-- Sticky Modal Footer -->
      <div class="flex items-center justify-between px-4 sm:px-6 py-3 border-t border-neutral-100 bg-[#fafbfc] shrink-0">
        <button 
          onclick="closeProjectDetail()" 
          class="text-xs font-medium text-neutral-500 hover:text-neutral-900 transition-colors cursor-pointer flex items-center gap-1"
        >
          <span>&larr;</span>
          <span>Close</span>
        </button>

        ${
          data.liveUrl && data.liveUrl !== "#"
            ? `
          <a 
            href="${data.liveUrl}" 
            target="_blank" 
            rel="noopener noreferrer" 
            class="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg sm:rounded-xl text-xs font-medium transition-colors shadow-2xs"
          >
            <span>Visit Live Website</span>
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </a>
        `
            : ""
        }
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
    (p) => p.id === slugOrId || createSlug(p.title) === slugOrId,
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

export const initProjectDetail = () => {
  const handleRoute = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get("id");

    const item = projects.find(
      (p) => createSlug(p.title) === slug || p.id === slug,
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
