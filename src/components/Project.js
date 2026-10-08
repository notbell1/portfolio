import { projects } from "../data/projects.js";

export const Project = `
<section id="project" class="bg-[#fafbfc] relative py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8">
  <div class="max-w-6xl w-full mx-auto flex flex-col justify-center">
    
    <!-- Section Header -->
    <div class="mb-3 sm:mb-5" data-aos="fade-down" data-aos-duration="600">
      <span class="text-neutral-500 font-mono text-[10px] sm:text-xs uppercase tracking-widest block mb-1">Portfolio</span>
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
        Featured Projects
      </h2>
    </div>

    <!-- Responsive Grid: Natural Columns on Mobile, Tablet & Desktop (NO Swipe) -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
      ${projects
        .map(
          (p, index) => `
        <div 
          class="w-full bg-white border border-neutral-200/90 rounded-xl sm:rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
          data-aos="fade-up" 
          data-aos-delay="${index * 100}"
        >
          <!-- Image Banner -->
          <div class="relative h-44 sm:h-52 md:h-56 overflow-hidden bg-neutral-100">
            <img 
              src="${p.mainImage}" 
              alt="${p.title}" 
              class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute top-3 left-3 flex items-center gap-1.5">
              <span class="px-2.5 py-0.5 rounded-full bg-white/95 backdrop-blur text-[10px] font-mono font-medium text-neutral-800 shadow-2xs">
                ${p.year}
              </span>
              <span class="px-2.5 py-0.5 rounded-full bg-neutral-900/80 backdrop-blur text-[10px] font-mono font-medium text-white shadow-2xs">
                ${p.category}
              </span>
            </div>
            ${
              p.liveUrl && p.liveUrl !== "#"
                ? `
            <div class="absolute top-3 right-3">
              <a 
                href="${p.liveUrl}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="px-2.5 py-0.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-[10px] font-medium text-white shadow-2xs inline-flex items-center gap-1 transition-colors"
                title="Open Live Website"
              >
                <span>Live Site</span>
                <i data-lucide="external-link" class="w-3 h-3"></i>
              </a>
            </div>
            `
                : ""
            }
          </div>

          <!-- Body Info -->
          <div class="p-4 sm:p-5 flex flex-col justify-between flex-1">
            <div class="mb-3">
              <h3 class="text-base sm:text-lg font-bold text-neutral-900 tracking-tight mb-1.5 group-hover:text-neutral-700 transition-colors">
                ${p.title}
              </h3>
              <p class="text-xs sm:text-sm text-neutral-600 leading-relaxed line-clamp-2">
                ${p.longDescription}
              </p>
            </div>

            <!-- Footer: Tech Badges + Action Buttons -->
            <div class="space-y-3 pt-3 border-t border-neutral-100">
              <div class="flex flex-wrap gap-1.5">
                ${p.stack
                  .slice(0, 4)
                  .map(
                    (s) => `
                  <span class="text-[10px] sm:text-xs font-mono px-2 py-0.5 rounded bg-neutral-100 text-neutral-700">${s}</span>
                `,
                  )
                  .join("")}
              </div>

              <div class="grid ${p.liveUrl && p.liveUrl !== "#" ? "grid-cols-2" : "grid-cols-1"} gap-2 pt-1">
                <button 
                  onclick="openProjectDetail('${p.id}')" 
                  class="w-full py-2 bg-neutral-900 hover:bg-neutral-800 text-white rounded-lg sm:rounded-xl text-xs font-medium transition-colors cursor-pointer active:scale-98 flex items-center justify-center gap-1.5 shadow-2xs">
                  <span>View Details</span>
                  <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
                </button>
                ${
                  p.liveUrl && p.liveUrl !== "#"
                    ? `
                <a 
                  href="${p.liveUrl}" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="w-full py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded-lg sm:rounded-xl text-xs font-medium transition-colors active:scale-98 flex items-center justify-center gap-1.5">
                  <span>Visit Website</span>
                  <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                </a>
                `
                    : ""
                }
              </div>
            </div>
          </div>
        </div>
      `,
        )
        .join("")}
    </div>

  </div>

  <!-- Detail Modal -->
  <div id="projectModal" class="fixed inset-0 z-50 hidden items-center justify-center p-3 sm:p-5 md:p-6">
    <div class="fixed inset-0 bg-neutral-900/60 backdrop-blur-xs transition-opacity" onclick="closeProjectDetail()"></div>
    <div class="relative w-full max-w-2xl my-auto z-10 animate-fade-in">
       <div id="modalContent" class="w-full"></div>
    </div>
  </div>
</section>
`;
