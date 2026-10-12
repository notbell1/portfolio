import { orbitGroups, technologies } from "./technologies.js";

/**
 * SolarSystemFallback: Clean, accessible 2D interactive representation
 * of the Developer Solar System when WebGL is unavailable.
 */
export const renderSolarFallback = () => {
  return `
    <div class="w-full h-full flex flex-col justify-center p-5 sm:p-6 bg-[#121217] rounded-3xl border border-[#27272a] text-zinc-100">
      
      <!-- Central Core Pill -->
      <div class="flex items-center justify-between pb-4 mb-4 border-b border-[#27272a]">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-gradient-to-br from-[#9b111e] to-[#800020] text-white flex items-center justify-center font-bold text-xs shadow-md border border-[#ff8fa3]/40">
            <span class="w-2.5 h-2.5 rounded-full bg-white animate-pulse"></span>
          </div>
          <div>
            <span class="text-xs font-bold block text-white">Developer Core • Abbel</span>
            <span class="text-[10px] text-zinc-400">Full-Stack Technology Ecosystem</span>
          </div>
        </div>
        <span class="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-[#800020]/20 text-[#ff8fa3] border border-[#800020]/30">
          ${technologies.length} Active Technologies
        </span>
      </div>

      <!-- 4 Orbits List -->
      <div class="space-y-3.5">
        ${orbitGroups
          .map((group) => {
            const groupTechs = technologies.filter(
              (t) => t.orbit === group.orbit,
            );
            return `
            <div>
              <div class="flex items-center gap-1.5 mb-1.5">
                <span class="text-[10px] font-mono uppercase font-bold text-[#ff8fa3]">Orbit ${group.orbit}</span>
                <span class="text-xs font-bold text-white">• ${group.title}</span>
              </div>
              <div class="flex flex-wrap gap-1.5">
                ${groupTechs
                  .map(
                    (tech) => `
                  <button 
                    onclick="window.selectSolarTechnology && window.selectSolarTechnology('${tech.id}')"
                    class="px-2.5 py-1 rounded-xl bg-[#181820] border border-[#27272a] hover:border-[#800020] hover:bg-[#1e1e28] text-xs font-medium text-zinc-200 transition-all active:scale-95 cursor-pointer flex items-center gap-1.5 shadow-sm"
                  >
                    <span class="w-2 h-2 rounded-full" style="background-color: ${tech.color}"></span>
                    <span>${tech.name}</span>
                  </button>
                `,
                  )
                  .join("")}
              </div>
            </div>
          `;
          })
          .join("")}
      </div>

    </div>
  `;
};
