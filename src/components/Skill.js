const renderSkill = (name, percent) => {
  return `
    <div class="space-y-1">
      <div class="flex justify-between items-center text-xs">
        <span class="text-neutral-700 font-medium truncate">${name}</span>
        <span class="text-neutral-500 font-mono text-[10px] shrink-0 ml-1">${percent}%</span>
      </div>
      <div class="h-1.5 w-full bg-neutral-100 rounded-full overflow-hidden">
        <div class="h-full bg-neutral-900 rounded-full transition-all duration-500" style="width: ${percent}%"></div>
      </div>
    </div>
  `;
};

export const Skill = `
<section id="skill" class="bg-[#fafbfc] relative py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8">
  <div class="max-w-6xl w-full mx-auto flex flex-col justify-center">
    
    <!-- Section Header -->
    <div class="mb-3 sm:mb-5" data-aos="fade-down" data-aos-duration="600">
      <span class="text-neutral-500 font-mono text-[10px] sm:text-xs uppercase tracking-widest block mb-1">Expertise</span>
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
        Skills &amp; Competencies
      </h2>
    </div>

    <!-- Cards: Compact 1 Column on Mobile, Grid on Tablet/Desktop -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
      
      <!-- Development (Updated to React, TypeScript, Tailwind, Laravel) -->
      <div class="bg-white border border-neutral-200/90 p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-xs hover:shadow-sm transition-shadow flex flex-col justify-between" data-aos="fade-up" data-aos-delay="100">
        <div>
          <div class="flex items-center gap-2 mb-3">
            <div class="p-2 rounded-xl bg-neutral-100 text-neutral-800">
              <i data-lucide="code-2" class="w-4 h-4"></i>
            </div>
            <h3 class="text-xs sm:text-sm font-bold text-neutral-900 uppercase tracking-wider">Development</h3>
          </div>
          <div class="space-y-2.5">
            ${renderSkill("React.js", 90)}
            ${renderSkill("TypeScript & JS", 85)}
            ${renderSkill("Tailwind CSS", 92)}
            ${renderSkill("Laravel & PHP", 82)}
          </div>
        </div>
      </div>

      <!-- Finance & Admin -->
      <div class="bg-white border border-neutral-200/90 p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-xs hover:shadow-sm transition-shadow flex flex-col justify-between" data-aos="fade-up" data-aos-delay="200">
        <div>
          <div class="flex items-center gap-2 mb-3">
            <div class="p-2 rounded-xl bg-neutral-100 text-neutral-800">
              <i data-lucide="calculator" class="w-4 h-4"></i>
            </div>
            <h3 class="text-xs sm:text-sm font-bold text-neutral-900 uppercase tracking-wider">Finance &amp; Admin</h3>
          </div>
          <div class="space-y-2.5">
            ${renderSkill("Tax Compliance", 75)}
            ${renderSkill("Financial Report", 75)}
            ${renderSkill("MS Office Suite", 85)}
            ${renderSkill("Data Admin", 90)}
          </div>
        </div>
      </div>

      <!-- Soft Skills -->
      <div class="bg-white border border-neutral-200/90 p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-xs hover:shadow-sm transition-shadow flex flex-col justify-between" data-aos="fade-up" data-aos-delay="300">
        <div>
          <div class="flex items-center gap-2 mb-3">
            <div class="p-2 rounded-xl bg-neutral-100 text-neutral-800">
              <i data-lucide="brain-circuit" class="w-4 h-4"></i>
            </div>
            <h3 class="text-xs sm:text-sm font-bold text-neutral-900 uppercase tracking-wider">Soft Skills</h3>
          </div>
          <div class="space-y-2.5">
            ${renderSkill("Communication", 80)}
            ${renderSkill("Critical Thinking", 80)}
            ${renderSkill("Problem Solving", 85)}
            ${renderSkill("Collaboration", 85)}
          </div>
        </div>
      </div>

      <!-- Specialized Focus -->
      <div class="bg-white border border-neutral-200/90 p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-xs hover:shadow-sm transition-shadow flex flex-col justify-between" data-aos="fade-up" data-aos-delay="400">
        <div>
          <div class="flex items-center gap-2 mb-3">
            <div class="p-2 rounded-xl bg-neutral-100 text-neutral-800">
              <i data-lucide="shield-check" class="w-4 h-4"></i>
            </div>
            <h3 class="text-xs sm:text-sm font-bold text-neutral-900 uppercase tracking-wider">Security &amp; Tools</h3>
          </div>
          <div class="space-y-2 text-xs">
            <div class="flex items-center justify-between p-2 bg-neutral-50 rounded-lg border border-neutral-100">
              <span class="text-neutral-700 font-medium">Ethical Hacking</span>
              <i data-lucide="terminal" class="w-3.5 h-3.5 text-neutral-400"></i>
            </div>
            <div class="flex items-center justify-between p-2 bg-neutral-50 rounded-lg border border-neutral-100">
              <span class="text-neutral-700 font-medium">OSINT Research</span>
              <i data-lucide="search" class="w-3.5 h-3.5 text-neutral-400"></i>
            </div>
            <div class="flex items-center justify-between p-2 bg-neutral-50 rounded-lg border border-neutral-100">
              <span class="text-neutral-700 font-medium">System Audit</span>
              <i data-lucide="file-check" class="w-3.5 h-3.5 text-neutral-400"></i>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Supplementary Pill Row -->
    <div class="mt-6 pt-4 border-t border-neutral-200/80 flex flex-wrap justify-between items-center gap-3 text-xs text-neutral-500">
      <div class="flex flex-wrap items-center gap-3">
        <span class="font-mono text-neutral-400"> Techstack:</span>
        <div class="flex flex-wrap items-center gap-3 text-neutral-600 font-medium">
          <span>React</span>
          <span>&bull;</span>
          <span>TypeScript</span>
          <span>&bull;</span>
          <span>Tailwind CSS</span>
          <span>&bull;</span>
          <span>Laravel</span>
          <span>&bull;</span>
          <span>MySQL</span>
          <span>&bull;</span>
          <span>Git / GitHub</span>
          <span>&bull;</span>
          <span>Figma</span>
        </div>
      </div>
      <div class="flex items-center gap-1.5 text-neutral-600">
        <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
        <span>Continuously learning</span>
      </div>
    </div>

  </div>
</section>
`;
