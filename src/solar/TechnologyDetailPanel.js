import { projects } from "../data/projects.js";
import { getTechIconSvg } from "./techIcons.js";

/**
 * TechnologyDetailPanel: Displays comprehensive real-world information
 * when a technology planet is selected from the 3D solar system or skills list.
 */
export const renderTechnologyDetail = (tech) => {
  // Find real portfolio projects that use this technology
  const relatedProjects = (tech.relatedProjectIds || [])
    .map((id) => projects.find((p) => p.id === id))
    .filter(Boolean);

  return `
    <div class="bg-[#121217]/95 backdrop-blur-xl border border-[#800020]/40 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden text-zinc-100 max-h-[85vh] flex flex-col shadow-black/80">
      
      <!-- Panel Header -->
      <div class="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-[#27272a] bg-[#181820]/90 shrink-0">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl p-1.5 bg-[#121217] flex items-center justify-center shadow-md border border-[#27272a] shrink-0">
            ${getTechIconSvg(tech.id)}
          </div>
          <div>
            <div class="flex items-center gap-2">
              <h3 class="text-base sm:text-lg font-bold text-white leading-none">${tech.name}</h3>
              <span class="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#800020]/20 text-[#ff8fa3] border border-[#800020]/40">
                Orbit ${tech.orbit}
              </span>
            </div>
            <span class="text-xs text-zinc-400 font-medium leading-tight block mt-0.5">
              ${tech.category}
            </span>
          </div>
        </div>

        <button 
          onclick="window.closeTechnologyPanel && window.closeTechnologyPanel()"
          class="p-2 text-zinc-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
          title="Close Technology Panel (ESC)"
          aria-label="Close"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>

      <!-- Scrollable Panel Body -->
      <div class="p-5 sm:p-6 overflow-y-auto space-y-5 custom-scrollbar text-xs sm:text-sm">
        
        <!-- Technology Overview -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-1.5 font-bold">
            Overview &amp; Architecture
          </h4>
          <p class="text-zinc-300 leading-relaxed">
            ${tech.description}
          </p>
        </div>

        <!-- Practical Use Cases -->
        <div>
          <h4 class="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2 font-bold">
            Practical Production Use Cases
          </h4>
          <div class="grid sm:grid-cols-2 gap-2">
            ${tech.useCases
              .map(
                (uc) => `
              <div class="flex items-start gap-2 p-2.5 rounded-xl bg-[#181820] border border-[#27272a] text-xs text-zinc-200">
                <span class="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style="background-color: ${tech.color}"></span>
                <span>${uc}</span>
              </div>
            `
              )
              .join("")}
          </div>
        </div>

        <!-- Related Portfolio Projects -->
        <div>
          <div class="flex items-center justify-between mb-2.5">
            <h4 class="text-xs font-mono uppercase tracking-wider text-zinc-400 font-bold">
              Applied in Portfolio Projects (${relatedProjects.length})
            </h4>
            ${
              relatedProjects.length > 0
                ? `<span class="text-[11px] text-[#ff8fa3] font-medium font-mono">Verified Implementations</span>`
                : ""
            }
          </div>

          ${
            relatedProjects.length > 0
              ? `
            <div class="space-y-2.5">
              ${relatedProjects
                .map(
                  (p) => `
                <div class="p-3 rounded-2xl bg-[#181820] border border-[#27272a] hover:border-[#800020]/60 shadow-md transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div class="flex items-center gap-2 mb-1">
                      <span class="text-xs font-bold text-white">${p.title}</span>
                      <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-[#800020]/20 text-[#ff8fa3] border border-[#800020]/30">${p.year}</span>
                    </div>
                    <p class="text-xs text-zinc-400 line-clamp-1">${p.category} • ${p.client}</p>
                  </div>
                  
                  <button 
                    onclick="window.openProjectDetail && window.openProjectDetail('${p.id}')"
                    class="px-3.5 py-1.5 rounded-xl bg-[#800020] hover:bg-[#9b111e] text-white text-xs font-medium transition-colors cursor-pointer shrink-0 text-center shadow-sm"
                  >
                    View Project &rarr;
                  </button>
                </div>
              `
                )
                .join("")}
            </div>
          `
              : `
            <div class="p-4 rounded-xl bg-[#181820] border border-[#27272a] text-xs text-zinc-400 flex items-center gap-2">
              <span class="w-2 h-2 rounded-full bg-[#9b111e]"></span>
              <span>Core competency utilized across architectural foundations and independent engineering labs.</span>
            </div>
          `
          }
        </div>

      </div>

      <!-- Panel Footer -->
      <div class="flex items-center justify-between px-5 sm:px-6 py-3 border-t border-[#27272a] bg-[#181820]/90 shrink-0 text-xs text-zinc-400">
        <span>Press <kbd class="px-1.5 py-0.5 rounded bg-[#121217] border border-[#27272a] font-mono text-[10px] text-zinc-300">ESC</kbd> to return to Solar System</span>
        <button 
          onclick="window.closeTechnologyPanel && window.closeTechnologyPanel()"
          class="px-3.5 py-1 rounded-xl bg-[#121217] hover:bg-[#27272a] text-zinc-200 border border-[#27272a] text-xs font-medium cursor-pointer transition-colors"
        >
          Close Panel
        </button>
      </div>

    </div>
  `;
};
