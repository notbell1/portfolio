import { projects } from "../data/projects.js";

const githubIcon = `<svg class="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`;

export const formatYearOnly = (yearStr) => {
  if (!yearStr) return "";
  const match = String(yearStr).match(/\b(19|20)\d{2}\b/);
  return match ? match[0] : String(yearStr).replace(/^[A-Za-z]+\s+/, "");
};

export const hasLiveSite = (project) => {
  return Boolean(
    project?.liveUrl &&
      project.liveUrl !== "#" &&
      !project.liveUrl.includes("github.com")
  );
};

export const hasGithubRepo = (project) => {
  return Boolean(project?.githubUrl && project.githubUrl !== "#");
};

const getShortTitle = (title) => {
  if (!title) return "Project";
  return title.split("—")[0].trim();
};

export const Project = `
<section id="project" class="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
  <div class="mb-6 sm:mb-8 flex flex-col md:flex-row md:items-end justify-between gap-3">
    <div>
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
        Featured Projects
      </h2>
      <p class="text-xs sm:text-sm text-zinc-400 max-w-xl mt-1">
        Select any modular project cartridge below or switch to the full block grid.
      </p>
    </div>

    <div class="flex items-center gap-1 p-1 rounded-xl bg-[#121217] self-start md:self-auto">
      <button 
        id="btn-orbit-view" 
        onclick="window.switchProjectView && window.switchProjectView('orbit')"
        class="px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer bg-[#800020] text-white flex items-center gap-1.5"
      >
        <i data-lucide="layers" class="w-3.5 h-3.5"></i>
        <span>Block Deck</span>
      </button>
      <button 
        id="btn-grid-view" 
        onclick="window.switchProjectView && window.switchProjectView('grid')"
        class="px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white transition-all cursor-pointer flex items-center gap-1.5"
      >
        <i data-lucide="grid" class="w-3.5 h-3.5"></i>
        <span>Block Grid</span>
      </button>
    </div>
  </div>

  <div id="project-orbit-container">
    <div class="grid lg:grid-cols-12 gap-5 items-stretch">
      <div class="lg:col-span-5 flex flex-col justify-between">
        <div class="bg-[#121217] p-4 sm:p-5 rounded-2xl h-full flex flex-col justify-between">
          <div class="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <span class="text-xs font-bold text-white flex items-center gap-2">
              <i data-lucide="box" class="w-4 h-4 text-[#ff8fa3]"></i>
              <span>Project Modules</span>
            </span>
            <span class="text-[10px] font-mono text-[#ff8fa3] px-2 py-0.5 rounded bg-[#800020]/20">
              ${projects.length} BLOCKS
            </span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
            ${projects
              .map((p, idx) => {
                const cleanYear = formatYearOnly(p.year);
                const shortTitle = getShortTitle(p.title);
                const isFirst = idx === 0;
                return `
                <button
                  onclick="window.selectOrbitProject && window.selectOrbitProject('${p.id}')"
                  data-project-id="${p.id}"
                  class="orbit-node-btn w-full px-3 py-2.5 rounded-xl bg-[#181820] ${
                    isFirst ? "ring-2 ring-[#ff8fa3]" : ""
                  } flex items-center justify-between gap-2.5 cursor-pointer group text-left"
                >
                  <div class="flex items-center gap-2.5 min-w-0">
                    <span class="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#800020]/25 text-[#ff8fa3] shrink-0">
                      0${idx + 1}
                    </span>
                    <img src="${p.mainImage}" alt="${shortTitle}" class="w-7 h-7 rounded-md object-cover shrink-0" />
                    <div class="truncate">
                      <span class="text-xs font-bold text-white group-hover:text-[#ff8fa3] transition-colors block truncate">
                        ${shortTitle}
                      </span>
                      <span class="text-[10px] text-zinc-400 font-mono block truncate">
                        ${p.category}
                      </span>
                    </div>
                  </div>
                  <span class="text-[10px] font-mono text-zinc-400 group-hover:text-white shrink-0">
                    ${cleanYear}
                  </span>
                </button>
              `;
              })
              .join("")}
          </div>
        </div>
      </div>

      <div class="lg:col-span-7 flex flex-col">
        <div 
          id="orbit-spotlight-card"
          class="cinematic-tilt-card bg-[#121217] rounded-2xl p-5 sm:p-6 flex flex-col justify-between h-full"
        >
          ${renderSpotlightHTML(projects[0])}
        </div>
      </div>
    </div>
  </div>

  <div id="project-grid-container" class="hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
    ${projects
      .map(
        (p) => `
      <div class="cinematic-tilt-card bg-[#121217] rounded-2xl overflow-hidden flex flex-col justify-between group">
        <div class="relative h-40 overflow-hidden bg-black/30">
          <img 
            src="${p.mainImage}" 
            alt="${p.title}" 
            class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        <div class="p-4 flex flex-col justify-between flex-1">
          <div class="mb-3">
            <h3 class="text-sm sm:text-base font-bold text-white tracking-tight mb-1 group-hover:text-[#ff8fa3] transition-colors leading-snug">
              ${p.title}
            </h3>
            <p class="text-xs text-zinc-400 leading-relaxed line-clamp-2">
              ${p.longDescription}
            </p>
          </div>

          <div class="space-y-3 pt-3 border-t border-white/10">
            <div class="flex flex-wrap gap-1">
              ${p.stack
                .slice(0, 3)
                .map(
                  (s) => `
                <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181820] text-[#ff8fa3]">${s}</span>
              `
                )
                .join("")}
            </div>

            <div class="grid ${hasLiveSite(p) || hasGithubRepo(p) ? "grid-cols-2" : "grid-cols-1"} gap-2">
              <button 
                onclick="openProjectDetail('${p.id}')" 
                class="w-full py-2 bg-[#800020] hover:bg-[#9b111e] text-white rounded-xl text-xs font-semibold cursor-pointer flex items-center justify-center gap-1"
              >
                <span>Details</span>
                <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
              </button>
              
              ${
                hasLiveSite(p)
                  ? `
                <a 
                  href="${p.liveUrl}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="w-full py-2 bg-[#181820] text-zinc-200 hover:text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1"
                >
                  <span>Live Site</span>
                  <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
                </a>
                `
                  : hasGithubRepo(p)
                    ? `
                <a 
                  href="${p.githubUrl}" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  class="w-full py-2 bg-[#181820] text-zinc-200 hover:text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1"
                >
                  <span>View Repository</span>
                  ${githubIcon}
                </a>
                `
                    : ""
              }
            </div>
          </div>
        </div>
      </div>
    `
      )
      .join("")}
  </div>
</section>
`;

export function renderSpotlightHTML(project) {
  if (!project) return "";
  const yearOnly = formatYearOnly(project.year);

  return `
    <div>
      <div class="relative h-48 sm:h-56 rounded-xl overflow-hidden bg-black/30 border border-white/10 mb-4 group">
        <img 
          src="${project.mainImage}" 
          alt="${project.title}" 
          class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        <div class="absolute top-3 left-3 flex items-center gap-1.5">
          <span class="px-2.5 py-0.5 rounded-lg bg-black/80 text-[10px] font-mono text-zinc-200">
            ${yearOnly}
          </span>
          <span class="px-2.5 py-0.5 rounded-lg bg-[#800020] text-[10px] font-mono text-white">
            ${project.category}
          </span>
        </div>
      </div>

      <h3 class="text-lg sm:text-xl font-extrabold text-white tracking-tight mb-2 leading-snug">
        ${project.title}
      </h3>
      <p class="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
        ${project.longDescription}
      </p>

      <div class="flex flex-wrap gap-1.5 mb-5">
        ${project.stack
          .map(
            (s) => `
          <span class="text-[10px] font-mono px-2.5 py-1 rounded-lg bg-[#181820] text-[#ff8fa3]">${s}</span>
        `
          )
          .join("")}
      </div>
    </div>

    <div class="grid ${hasLiveSite(project) || hasGithubRepo(project) ? "grid-cols-2" : "grid-cols-1"} gap-2.5 pt-3 border-t border-white/10">
      <button 
        onclick="openProjectDetail('${project.id}')" 
        class="w-full py-2.5 bg-[#800020] hover:bg-[#9b111e] text-white rounded-xl text-xs font-semibold cursor-pointer flex items-center justify-center gap-1.5 shadow-[0_3px_0_0_#000]"
      >
        <span>Inspect Full Specs</span>
        <i data-lucide="arrow-up-right" class="w-3.5 h-3.5"></i>
      </button>

      ${
        hasLiveSite(project)
          ? `
        <a 
          href="${project.liveUrl}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="w-full py-2.5 bg-[#181820] text-zinc-100 hover:text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5"
        >
          <span>Live Site</span>
          <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
        </a>
      `
          : hasGithubRepo(project)
            ? `
        <a 
          href="${project.githubUrl}" 
          target="_blank" 
          rel="noopener noreferrer" 
          class="w-full py-2.5 bg-[#181820] text-zinc-100 hover:text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5"
        >
          <span>View Repository</span>
          ${githubIcon}
        </a>
      `
            : ""
      }
    </div>
  `;
}
