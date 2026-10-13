import { projects } from "../data/projects.js";

const githubIcon = `<svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`;

// Helper: Extract clean year only (removes any month like "October")
export const formatYearOnly = (yearStr) => {
  if (!yearStr) return "";
  const match = String(yearStr).match(/\b(19|20)\d{2}\b/);
  return match ? match[0] : String(yearStr).replace(/^[A-Za-z]+\s+/, "");
};

// Helper: Short display title for satellite badges
const getShortTitle = (title) => {
  if (!title) return "Project";
  return title.split("—")[0].trim();
};

const totalProjects = projects.length;

// Divide projects into 3 concentric orbit rings dynamically
const orbit1 = projects.filter((_, i) => i % 3 === 0);
const orbit2 = projects.filter((_, i) => i % 3 === 1);
const orbit3 = projects.filter((_, i) => i % 3 === 2);

export const Project = `
<section id="project" class="py-14 sm:py-20 px-4 sm:px-6 max-w-7xl mx-auto">
  
  <!-- Clean Section Header (No redundant badge) -->
  <div class="mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4" data-aos="fade-down">
    <div>
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
        Featured Projects
      </h2>
      <p class="text-xs sm:text-sm text-zinc-400 max-w-xl mt-1.5 leading-relaxed">
        Key software engineering applications, security suites, and developer tools organized into an interactive moving Solar Projects Radar.
      </p>
    </div>

    <!-- View Switcher Tabs (Orbiting button removed as requested) -->
    <div class="flex items-center gap-1 p-1 rounded-xl bg-[#121217] border border-[#27272a] self-start md:self-auto">
      <button 
        id="btn-orbit-view" 
        onclick="window.switchProjectView && window.switchProjectView('orbit')"
        class="px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer bg-[#800020] text-white shadow-sm flex items-center gap-1.5"
      >
        <span class="w-1.5 h-1.5 rounded-full bg-[#ff8fa3]"></span>
        <span>Solar Radar</span>
      </button>
      <button 
        id="btn-grid-view" 
        onclick="window.switchProjectView && window.switchProjectView('grid')"
        class="px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white transition-all cursor-pointer flex items-center gap-1.5"
      >
        <i data-lucide="grid" class="w-3.5 h-3.5"></i>
        <span>Card Grid</span>
      </button>
    </div>
  </div>

  <!-- 1. MOVING SOLAR ORBIT RADAR STAGE -->
  <div id="project-orbit-container" class="space-y-6">
    <div class="grid lg:grid-cols-12 gap-6 items-stretch">
      
      <!-- Left: Interactive Dynamic Orbit Radar Stage -->
      <div 
        id="radar-main-stage"
        class="radar-stage lg:col-span-7 bg-[#121217]/90 backdrop-blur-md border border-[#27272a] rounded-3xl p-5 sm:p-6 shadow-2xl relative overflow-hidden flex flex-col justify-between min-h-[500px]" 
        data-aos="fade-right"
      >
        <!-- Top Status Bar -->
        <div class="flex items-center justify-between z-20">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 rounded-full bg-[#9b111e] animate-ping"></span>
            <span class="text-xs font-bold text-white tracking-wide">Live Projects</span>
           
          </div>
          <span class="text-[11px] font-mono text-[#ff8fa3] bg-[#800020]/20 px-2 py-0.5 rounded-full border border-[#800020]/30">
            ${totalProjects} Projects Revolving
          </span>
        </div>

        <!-- Concentric Rotating Orbit Rings & Satellites Arena (Static Dimensioned) -->
        <div class="relative w-full flex-1 flex items-center justify-center my-4 min-h-[440px] select-none overflow-hidden">
          
          <!-- Soft Radial Radar Background Lines -->
          <div class="absolute inset-0 bg-radial-[circle_at_center] from-[#800020]/10 via-transparent to-transparent pointer-events-none"></div>

          <!-- Radar Sweep Scanner Beam (Static 420px) -->
          <div class="absolute w-[420px] h-[420px] rounded-full pointer-events-none radar-sweep-beam" style="background: conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(155, 17, 30, 0.16) 360deg);"></div>

          <!-- Central Core: Project Hub -->
          <div class="relative z-30 w-18 h-18 rounded-full bg-gradient-to-br from-[#9b111e] via-[#800020] to-[#3b020a] flex flex-col items-center justify-center shadow-2xl shadow-[#800020]/60 border-2 border-[#ff8fa3]/40 text-white cursor-pointer group">
            <span class="text-xs font-black tracking-tight group-hover:scale-110 transition-transform">PROJECT</span>
            <span class="text-[9px] font-mono text-[#ff8fa3]">CORE</span>
          </div>

          <!-- ================= ORBIT 1 (INNER - Static 180px) ================= -->
          <div class="absolute w-[180px] h-[180px] rounded-full border border-dashed border-[#800020]/40 pointer-events-none"></div>
          ${orbit1
            .map((p, idx) => {
              const delay = ((idx / orbit1.length) * 36).toFixed(2);
              const cleanYear = formatYearOnly(p.year);
              const shortTitle = getShortTitle(p.title);

              return `
              <div 
                class="radar-orbit-carrier orbit-1-carrier absolute w-[180px] h-[180px] rounded-full"
                style="animation-delay: -${delay}s;"
              >
                <div 
                  class="absolute pointer-events-auto"
                  style="top: 50%; left: 100%; transform: translate(-50%, -50%);"
                >
                  <div class="radar-node-content" style="animation-delay: -${delay}s;">
                    <button
                      onclick="window.selectOrbitProject && window.selectOrbitProject('${p.id}')"
                      data-project-id="${p.id}"
                      class="orbit-node-btn w-[148px] h-[38px] px-2 rounded-full bg-[#181820]/95 hover:bg-[#222230] border border-[#27272a] hover:border-[#ff8fa3] shadow-xl flex items-center gap-2 cursor-pointer transition-all hover:scale-105 active:scale-95 group text-left shrink-0 select-none"
                      title="${p.title}"
                    >
                      <img src="${p.mainImage}" alt="${shortTitle}" class="w-6 h-6 rounded-full object-cover border border-[#ff8fa3]/50 shrink-0" />
                      <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
                        <span class="text-[11px] font-bold text-white group-hover:text-[#ff8fa3] leading-tight truncate transition-colors">${shortTitle}</span>
                        <span class="text-[8px] font-mono text-zinc-400 leading-tight">${cleanYear}</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            `;
            })
            .join("")}

          <!-- ================= ORBIT 2 (MIDDLE - Static 300px) ================= -->
          <div class="absolute w-[300px] h-[300px] rounded-full border border-[#27272a] pointer-events-none"></div>
          ${orbit2
            .map((p, idx) => {
              const delay = ((idx / orbit2.length) * 54 + 12).toFixed(2);
              const cleanYear = formatYearOnly(p.year);
              const shortTitle = getShortTitle(p.title);

              return `
              <div 
                class="radar-orbit-carrier orbit-2-carrier absolute w-[300px] h-[300px] rounded-full"
                style="animation-delay: -${delay}s;"
              >
                <div 
                  class="absolute pointer-events-auto"
                  style="top: 50%; left: 100%; transform: translate(-50%, -50%);"
                >
                  <div class="radar-node-content" style="animation-delay: -${delay}s;">
                    <button
                      onclick="window.selectOrbitProject && window.selectOrbitProject('${p.id}')"
                      data-project-id="${p.id}"
                      class="orbit-node-btn w-[148px] h-[38px] px-2 rounded-full bg-[#181820]/95 hover:bg-[#222230] border border-[#27272a] hover:border-[#ff8fa3] shadow-xl flex items-center gap-2 cursor-pointer transition-all hover:scale-105 active:scale-95 group text-left shrink-0 select-none"
                      title="${p.title}"
                    >
                      <img src="${p.mainImage}" alt="${shortTitle}" class="w-6 h-6 rounded-full object-cover border border-[#ff8fa3]/50 shrink-0" />
                      <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
                        <span class="text-[11px] font-bold text-white group-hover:text-[#ff8fa3] leading-tight truncate transition-colors">${shortTitle}</span>
                        <span class="text-[8px] font-mono text-zinc-400 leading-tight">${cleanYear}</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            `;
            })
            .join("")}

          <!-- ================= ORBIT 3 (OUTER - Static 420px) ================= -->
          <div class="absolute w-[420px] h-[420px] rounded-full border border-dashed border-[#27272a] pointer-events-none"></div>
          ${orbit3
            .map((p, idx) => {
              const delay = ((idx / orbit3.length) * 74 + 24).toFixed(2);
              const cleanYear = formatYearOnly(p.year);
              const shortTitle = getShortTitle(p.title);

              return `
              <div 
                class="radar-orbit-carrier orbit-3-carrier absolute w-[420px] h-[420px] rounded-full"
                style="animation-delay: -${delay}s;"
              >
                <div 
                  class="absolute pointer-events-auto"
                  style="top: 50%; left: 100%; transform: translate(-50%, -50%);"
                >
                  <div class="radar-node-content" style="animation-delay: -${delay}s;">
                    <button
                      onclick="window.selectOrbitProject && window.selectOrbitProject('${p.id}')"
                      data-project-id="${p.id}"
                      class="orbit-node-btn w-[148px] h-[38px] px-2 rounded-full bg-[#181820]/95 hover:bg-[#222230] border border-[#27272a] hover:border-[#ff8fa3] shadow-xl flex items-center gap-2 cursor-pointer transition-all hover:scale-105 active:scale-95 group text-left shrink-0 select-none"
                      title="${p.title}"
                    >
                      <img src="${p.mainImage}" alt="${shortTitle}" class="w-6 h-6 rounded-full object-cover border border-[#ff8fa3]/50 shrink-0" />
                      <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
                        <span class="text-[11px] font-bold text-white group-hover:text-[#ff8fa3] leading-tight truncate transition-colors">${shortTitle}</span>
                        <span class="text-[8px] font-mono text-zinc-400 leading-tight">${cleanYear}</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            `;
            })
            .join("")}

        </div>
      </div>

      <!-- Right: Active Project Spotlight Card -->
      <div class="lg:col-span-5 flex flex-col" data-aos="fade-left">
        <div 
          id="orbit-spotlight-card"
          class="bg-[#121217]/90 backdrop-blur-md border border-[#27272a] rounded-3xl p-5 sm:p-6 shadow-2xl flex flex-col justify-between h-full transition-all"
        >
          <!-- Injected Spotlight Content (Defaults to first project) -->
          ${renderSpotlightHTML(projects[0])}
        </div>
      </div>

    </div>
  </div>

  <!-- 2. CARD GRID VIEW (Alternative Static View) -->
  <div id="project-grid-container" class="hidden grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
    ${projects
      .map(
        (p, index) => `
      <div 
        class="w-full bg-[#121217]/90 backdrop-blur-md border border-[#27272a] hover:border-[#800020]/70 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between group"
        data-aos="fade-up" 
        data-aos-delay="${(index % 4) * 80}"
      >
        <!-- Project Preview Banner -->
        <div class="relative h-40 sm:h-44 overflow-hidden bg-[#181820]">
          <img 
            src="${p.mainImage}" 
            alt="${p.title}" 
            class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 opacity-90 group-hover:opacity-100"
            loading="lazy"
          />
          
          <!-- Category & Clean Year (No Month) -->
          <div class="absolute top-3 left-3 flex items-center gap-1.5">
            <span class="px-2.5 py-0.5 rounded-full bg-[#121217]/90 backdrop-blur-md text-[10px] font-mono font-medium text-zinc-200 border border-[#27272a] shadow-md">
              ${formatYearOnly(p.year)}
            </span>
            <span class="px-2.5 py-0.5 rounded-full bg-[#800020]/90 backdrop-blur-md text-[10px] font-medium text-white shadow-md border border-[#9b111e]/40">
              ${p.category}
            </span>
          </div>

          <!-- Top-Right Action Links -->
          <div class="absolute top-3 right-3 flex items-center gap-1.5">
            ${
              p.githubUrl && p.githubUrl !== "#"
                ? `
              <a 
                href="${p.githubUrl}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="p-1.5 rounded-full bg-[#121217]/90 hover:bg-[#181820] text-zinc-300 hover:text-white border border-[#27272a] shadow-md inline-flex items-center justify-center transition-colors"
                title="GitHub Repository"
                aria-label="GitHub Repository"
              >
                ${githubIcon}
              </a>
              `
                : ""
            }
            ${
              p.liveUrl && p.liveUrl !== "#"
                ? `
              <a 
                href="${p.liveUrl}" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="px-2.5 py-0.5 rounded-full bg-[#800020] hover:bg-[#9b111e] text-[10px] font-medium text-white shadow-md border border-[#9b111e]/40 inline-flex items-center gap-1 transition-colors"
                title="Open Live Preview"
              >
                <span>Live</span>
                <i data-lucide="arrow-up-right" class="w-3 h-3"></i>
              </a>
              `
                : ""
            }
          </div>
        </div>

        <!-- Project Content Body -->
        <div class="p-4 flex flex-col justify-between flex-1">
          <div class="mb-3">
            <h3 class="text-sm sm:text-base font-bold text-white tracking-tight mb-1.5 group-hover:text-[#ff8fa3] transition-colors leading-snug">
              ${p.title}
            </h3>
            <p class="text-xs text-zinc-400 leading-relaxed line-clamp-2">
              ${p.longDescription}
            </p>
          </div>

          <!-- Tech Stack Badges & Actions -->
          <div class="space-y-3 pt-3 border-t border-[#27272a]">
            <div class="flex flex-wrap gap-1">
              ${p.stack
                .slice(0, 3)
                .map(
                  (s) => `
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181820] text-[#ff8fa3] border border-[#27272a]">${s}</span>
              `,
                )
                .join("")}
            </div>

            <div class="grid ${(p.liveUrl && p.liveUrl !== "#") || (p.githubUrl && p.githubUrl !== "#") ? "grid-cols-2" : "grid-cols-1"} gap-1.5 sm:gap-2 pt-1">
              <button 
                onclick="openProjectDetail('${p.id}')" 
                class="w-full py-2 bg-[#800020] hover:bg-[#9b111e] text-white rounded-xl text-xs font-medium transition-colors cursor-pointer active:scale-98 flex items-center justify-center gap-1 shadow-md border border-[#9b111e]/40"
              >
                <span>Details</span>
                <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
              </button>
              
              ${
                p.liveUrl && p.liveUrl !== "#"
                  ? `
                <a 
                  href="${p.liveUrl}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="w-full py-2 bg-[#181820] hover:bg-[#27272a] text-zinc-200 hover:text-white rounded-xl text-xs font-medium transition-colors active:scale-98 flex items-center justify-center gap-1 border border-[#27272a]"
                >
                  <span>Visit Site</span>
                  <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                </a>
                `
                  : p.githubUrl && p.githubUrl !== "#"
                    ? `
                <a 
                  href="${p.githubUrl}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="w-full py-2 bg-[#181820] hover:bg-[#27272a] text-zinc-200 hover:text-white rounded-xl text-xs font-medium transition-colors active:scale-98 flex items-center justify-center gap-1 border border-[#27272a]"
                >
                  <span>GitHub</span>
                  ${githubIcon}
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

  <!-- Standalone Project Detail Modal Mount -->
  <div id="projectModal" class="fixed inset-0 z-50 hidden items-center justify-center p-3 sm:p-5 md:p-6" role="dialog" aria-modal="true">
    <div class="fixed inset-0 bg-black/75 backdrop-blur-sm transition-opacity" onclick="closeProjectDetail()"></div>
    <div class="relative w-full max-w-2xl my-auto z-10 animate-fade-in">
       <div id="modalContent" class="w-full"></div>
    </div>
  </div>

</section>
`;

// Helper: Renders the Spotlight Card HTML
export function renderSpotlightHTML(project) {
  if (!project) return "";
  const yearOnly = formatYearOnly(project.year);

  return `
    <div>
      <!-- Banner Preview -->
      <div class="relative h-48 sm:h-52 rounded-2xl overflow-hidden bg-[#181820] border border-[#27272a] mb-4 shadow-md group">
        <img 
          src="${project.mainImage}" 
          alt="${project.title}" 
          class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div class="absolute top-3 left-3 flex items-center gap-1.5">
          <span class="px-2.5 py-0.5 rounded-full bg-[#121217]/90 text-[10px] font-mono text-zinc-200 border border-[#27272a]">
            ${yearOnly}
          </span>
          <span class="px-2.5 py-0.5 rounded-full bg-[#800020]/90 text-[10px] text-white border border-[#9b111e]/40">
            ${project.category}
          </span>
        </div>
      </div>

      <!-- Title & Details -->
      <h3 class="text-lg sm:text-xl font-bold text-white tracking-tight mb-2 leading-snug">
        ${project.title}
      </h3>
      <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-4 line-clamp-3">
        ${project.longDescription}
      </p>

      <!-- Tech Stack Tags -->
      <div class="flex flex-wrap gap-1.5 mb-5">
        ${project.stack
          .map(
            (s) => `
          <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181820] text-[#ff8fa3] border border-[#27272a]">${s}</span>
        `,
          )
          .join("")}
      </div>
    </div>

    <!-- Actions -->
    <div class="grid ${(project.liveUrl && project.liveUrl !== "#") || (project.githubUrl && project.githubUrl !== "#") ? "grid-cols-2" : "grid-cols-1"} gap-2 pt-3 border-t border-[#27272a]">
      <button 
        onclick="openProjectDetail('${project.id}')" 
        class="w-full py-2.5 bg-[#800020] hover:bg-[#9b111e] text-white rounded-xl text-xs font-semibold transition-colors cursor-pointer active:scale-98 flex items-center justify-center gap-1.5 shadow-md border border-[#9b111e]/40"
      >
        <span>View Full Specs</span>
        <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
      </button>

      ${
        project.liveUrl && project.liveUrl !== "#"
          ? `
        <a 
          href="${project.liveUrl}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="w-full py-2.5 bg-[#181820] hover:bg-[#27272a] text-zinc-200 hover:text-white rounded-xl text-xs font-semibold transition-colors active:scale-98 flex items-center justify-center gap-1 border border-[#27272a]"
        >
          <span>Live Demo</span>
          <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
        </a>
      `
          : project.githubUrl && project.githubUrl !== "#"
            ? `
        <a 
          href="${project.githubUrl}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="w-full py-2.5 bg-[#181820] hover:bg-[#27272a] text-zinc-200 hover:text-white rounded-xl text-xs font-semibold transition-colors active:scale-98 flex items-center justify-center gap-1 border border-[#27272a]"
        >
          <span>GitHub Repo</span>
          ${githubIcon}
        </a>
      `
            : ""
      }
    </div>
  `;
}
