import { orbitGroups, technologies, projectCompetencies } from "../solar/technologies.js";
import { getTechIconSvg } from "../solar/techIcons.js";

export const Skill = `
<section id="skill" class="py-12 sm:py-16 px-4 sm:px-6 max-w-7xl mx-auto">
  
  <!-- Clean Section Header -->
  <div class="mb-8 sm:mb-10" data-aos="fade-down">
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
      Technical Skills &amp; Technology Stack
    </h2>
    <p class="text-xs sm:text-sm text-zinc-400 max-w-2xl mt-1.5 leading-relaxed">
      A comprehensive index of core technologies, specialized project capabilities, and productivity tools powering the developer stack. Grouped systematically across core languages, modern frameworks, database backends, deployment platforms, and applied project toolkits.
    </p>
  </div>

  <!-- 4 Orbital Categories Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
    ${orbitGroups
      .map((group, groupIdx) => {
        const groupTechs = technologies.filter((t) => t.orbit === group.orbit);
        return `
      <div 
        class="bg-[#121217]/90 backdrop-blur-md border border-[#27272a] p-5 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between"
        data-aos="fade-up"
        data-aos-delay="${groupIdx * 100}"
      >
        <div>
          <!-- Orbit Header -->
          <div class="flex items-center justify-between pb-3 mb-3 border-b border-[#27272a]">
            <div class="flex items-center gap-2.5">
              <span class="w-6 h-6 rounded-lg bg-[#800020]/20 text-[#ff8fa3] flex items-center justify-center font-mono text-xs font-bold border border-[#800020]/40">
                ${group.orbit}
              </span>
              <div>
                <h3 class="text-sm sm:text-base font-bold text-white tracking-tight leading-none">${group.title}</h3>
              </div>
            </div>
          </div>

          <p class="text-xs text-zinc-400 mb-4 leading-relaxed">
            ${group.description}
          </p>

          <!-- Technology Badges Grid with Official Icons -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
            ${groupTechs
              .map(
                (tech) => `
              <div 
                class="w-full text-left p-2.5 rounded-xl bg-[#181820] hover:bg-[#1e1e28] border border-[#27272a] hover:border-[#800020]/70 shadow-sm transition-all flex items-center justify-between group cursor-default"
              >
                <div class="flex items-center gap-2.5 min-w-0">
                  <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg p-1 bg-[#121217] border border-[#27272a] group-hover:border-[#ff8fa3]/60 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 shadow-sm">
                    ${getTechIconSvg(tech.id)}
                  </div>
                  <div class="truncate">
                    <span class="text-xs font-bold text-white group-hover:text-[#ff8fa3] transition-colors block leading-tight truncate">
                      ${tech.name}
                    </span>
                    <span class="text-[10px] text-zinc-400 block truncate font-mono" title="${tech.role || tech.category}">
                      ${tech.role || tech.category}
                    </span>
                  </div>
                </div>

                <span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#121217] text-[#ff8fa3] border border-[#27272a] shrink-0 ml-1.5">
                  ${tech.badgeLabel || "TECH"}
                </span>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>
      </div>
    `;
      })
      .join("")}
  </div>

  <!-- Specialized Project Competencies & Office Productivity Toolkits -->
  <div class="mt-8 sm:mt-10" data-aos="fade-up">
    <div class="bg-[#121217]/90 backdrop-blur-md border border-[#27272a] p-5 sm:p-7 rounded-2xl shadow-xl">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-5 border-b border-[#27272a] gap-2">
        <div class="flex items-center gap-2.5">
          <span class="w-7 h-7 rounded-lg bg-[#800020]/25 text-[#ff8fa3] flex items-center justify-center font-mono text-sm font-bold border border-[#800020]/50 shadow-sm">
            ★
          </span>
          <div>
            <h3 class="text-base sm:text-lg font-bold text-white tracking-tight leading-tight">
              Specialized Project Competencies &amp; Office Productivity
            </h3>
            <p class="text-xs text-zinc-400">
              Applied domain expertise and specialized tools utilized across featured software projects, GIS mapping, and community field systems.
            </p>
          </div>
        </div>
        <span class="text-[10px] font-mono text-[#ff8fa3] bg-[#800020]/20 px-2.5 py-1 rounded-full border border-[#800020]/30 self-start sm:self-auto">
          6 Specialized Toolsets
        </span>
      </div>

      <!-- Competencies Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        ${projectCompetencies
          .map(
            (comp) => `
          <div class="p-3.5 rounded-xl bg-[#181820] hover:bg-[#1e1e28] border border-[#27272a] hover:border-[#800020]/70 transition-all flex flex-col justify-between group shadow-sm">
            <div>
              <div class="flex items-center justify-between mb-2.5">
                <div class="flex items-center gap-2.5 min-w-0">
                  <div class="w-8 h-8 rounded-lg p-1.5 bg-[#121217] border border-[#27272a] group-hover:border-[#ff8fa3]/60 flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 shadow-sm">
                    ${getTechIconSvg(comp.id)}
                  </div>
                  <div class="truncate">
                    <h4 class="text-xs sm:text-sm font-bold text-white group-hover:text-[#ff8fa3] transition-colors truncate">
                      ${comp.name}
                    </h4>
                    <span class="text-[10px] text-zinc-400 block truncate font-mono">
                      ${comp.category}
                    </span>
                  </div>
                </div>
                <span class="text-[9px] font-mono px-1.5 py-0.5 rounded bg-[#121217] text-[#ff8fa3] border border-[#27272a] shrink-0 ml-1">
                  ${comp.badgeLabel}
                </span>
              </div>
              <p class="text-[11px] text-zinc-300 leading-relaxed mb-3">
                ${comp.description}
              </p>
            </div>

            <div class="pt-2 border-t border-[#27272a]/60">
              <span class="text-[9px] font-mono uppercase tracking-wider text-zinc-500 block mb-0.5">Applied in:</span>
              <span class="text-[10px] text-zinc-400 font-medium block truncate">
                ${comp.relatedProjects}
              </span>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
    </div>
  </div>

</section>
`;
