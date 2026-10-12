import { experiences } from "../data/experience.js";

export const Experience = `
<section id="experience" class="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
  
  <!-- Section Header -->
  <div class="mb-8 sm:mb-10" data-aos="fade-down">
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
      Work History &amp; Experience
    </h2>
    <p class="text-xs sm:text-sm text-zinc-400 max-w-xl mt-1.5">
      Milestones crossed along the development journey, bridging academic foundations and field production.
    </p>
  </div>

  <!-- Timeline Cards Grid (2 Columns, Chronological) -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
    ${experiences
      .map(
        (exp, i) => `
      <div 
        class="bg-[#121217] border border-[#27272a] hover:border-[#800020]/60 p-5 sm:p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all flex flex-col justify-between"
        data-aos="fade-up"
        data-aos-delay="${i * 100}"
      >
        <div>
          <!-- Header: Role, Org & Period -->
          <div class="flex items-start justify-between gap-2 mb-2">
            <div>
             
              <h3 class="text-base font-bold text-white tracking-tight">${exp.role}</h3>
              <p class="text-xs text-zinc-300 font-medium">${exp.organization} • <span class="text-zinc-500">${exp.location}</span></p>
            </div>
            
            <span class="text-[11px] font-mono font-medium px-2.5 py-1 rounded-lg bg-[#181820] border border-[#27272a] text-zinc-200 shrink-0">
              ${exp.period}
            </span>
          </div>

          <p class="text-xs text-zinc-400 leading-relaxed my-3">
            ${exp.summary}
          </p>

          <!-- Bullet Outcomes -->
          <div class="space-y-1.5 my-3 pt-3 border-t border-[#27272a]">
            ${exp.outcomes
              .map(
                (out) => `
              <div class="flex items-start gap-2 text-xs text-zinc-300">
                <span class="text-[#ff8fa3] font-bold text-sm leading-none shrink-0">•</span>
                <span>${out}</span>
              </div>
            `,
              )
              .join("")}
          </div>
        </div>

        <!-- Tech Footer -->
        <div class="flex flex-wrap gap-1 pt-3 border-t border-[#27272a]">
          ${exp.tech
            .map(
              (t) => `
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-[#181820] text-zinc-400 border border-[#27272a]">
              ${t}
            </span>
          `,
            )
            .join("")}
        </div>
      </div>
    `,
      )
      .join("")}
  </div>

</section>
`;
