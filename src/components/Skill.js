const renderProgressBar = (name, percent) => {
  return `
    <div class="space-y-1.5">
      <div class="flex justify-between text-[10px] font-bold uppercase tracking-widest">
        <span class="text-slate-400 group-hover:text-slate-200 transition-colors">${name}</span>
        <span class="text-sky-500 font-mono">${percent}%</span>
      </div>
      <div class="h-[3px] w-full bg-slate-800 rounded-full overflow-hidden">
        <div class="h-full bg-sky-500 group-hover:bg-sky-400 transition-all duration-1000 ease-out shadow-[0_0_8px_rgba(56,189,248,0.5)]" style="width: ${percent}%"></div>
      </div>
    </div>
  `;
};

export const Skill = `
<section id="skill" class="min-h-screen flex items-center bg-slate-900 relative overflow-hidden py-20 scroll-mt-16">
  <div class="absolute top-1/2 left-0 w-[500px] h-[500px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none"></div>
<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] lg:text-[20rem] font-black text-white/[0.015] select-none pointer-events-none uppercase tracking-tighter">
    Skill
  </div>
  <div class="max-w-7xl mx-auto px-6 md:px-10 relative z-10 w-full">
    
    <div class="mb-14 lg:mb-20">
      <h2 class="text-sky-400 font-mono text-xs lg:text-sm tracking-[0.3em] uppercase mb-2 italic flex items-center gap-3">
        <span class="h-[1px] w-10 bg-sky-500"></span>
        Skills & Expertise
      </h2>
      <h3 class="text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase leading-none">
        Technical <span class="text-slate-500 italic">&</span> Professional <span class="text-slate-500 italic"></span>
      </h3>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
      
      <div class="bg-slate-800/10 border border-slate-800/50 p-7 rounded-3xl backdrop-blur-md group hover:border-sky-500/30 transition-all duration-500">
        <div class="flex items-center gap-3 mb-8">
            <div class="p-2 bg-sky-500/10 rounded-lg"><i data-lucide="code-2" class="w-5 h-5 text-sky-500"></i></div>
            <h4 class="text-xs font-black text-white uppercase tracking-widest">Development</h4>
        </div>
        <div class="space-y-6">
          ${renderProgressBar("Frontend / JS", 85)}
          ${renderProgressBar("Laravel / PHP", 80)}
          ${renderProgressBar("MySQL / SQL", 75)}
          ${renderProgressBar("Luau Scripting", 70)}
        </div>
      </div>

      <div class="bg-slate-800/10 border border-slate-800/50 p-7 rounded-3xl backdrop-blur-md group hover:border-sky-500/30 transition-all duration-500">
        <div class="flex items-center gap-3 mb-8">
            <div class="p-2 bg-emerald-500/10 rounded-lg"><i data-lucide="calculator" class="w-5 h-5 text-emerald-500"></i></div>
            <h4 class="text-xs font-black text-white uppercase tracking-widest">Finance & Admin</h4>
        </div>
        <div class="space-y-6">
          ${renderProgressBar("Tax", 75)}
          ${renderProgressBar("Financial Report", 75)}
          ${renderProgressBar("MS Office", 85)}
          ${renderProgressBar("Data Entry", 90)}
        </div>
      </div>

      <div class="bg-slate-800/10 border border-slate-800/50 p-7 rounded-3xl backdrop-blur-md group hover:border-sky-500/30 transition-all duration-500">
        <div class="flex items-center gap-3 mb-8">
            <div class="p-2 bg-purple-500/10 rounded-lg"><i data-lucide="brain-circuit" class="w-5 h-5 text-purple-500"></i></div>
            <h4 class="text-xs font-black text-white uppercase tracking-widest">Soft Skills</h4>
        </div>
        <div class="space-y-6">
          ${renderProgressBar("Public Speaking", 75)}
          ${renderProgressBar("Critical Thinking", 80)}
          ${renderProgressBar("Problem Solving", 80)}
          ${renderProgressBar("Collaboration", 80)}
        </div>
      </div>

      <div class="bg-slate-800/10 border border-slate-800/50 p-7 rounded-3xl backdrop-blur-md group hover:border-sky-500/30 transition-all duration-500">
        <div class="flex items-center gap-3 mb-8">
            <div class="p-2 bg-red-500/10 rounded-lg"><i data-lucide="shield-check" class="w-5 h-5 text-red-500"></i></div>
            <h4 class="text-xs font-black text-white uppercase tracking-widest">Interests</h4>
        </div>
        <div class="grid grid-cols-1 gap-3">
          <div class="flex items-center justify-between p-4 bg-slate-900/40 rounded-2xl border border-slate-800/50 group-hover:border-red-500/20 transition-all">
            <span class="text-[10px] text-slate-300 uppercase font-bold tracking-widest">Ethical Hacking</span>
            <i data-lucide="terminal" class="w-3 h-3 text-red-500"></i>
          </div>
          <div class="flex items-center justify-between p-4 bg-slate-900/40 rounded-2xl border border-slate-800/50 group-hover:border-blue-500/20 transition-all">
            <span class="text-[10px] text-slate-300 uppercase font-bold tracking-widest">OSINT Search</span>
            <i data-lucide="search" class="w-3 h-3 text-blue-500"></i>
          </div>
          <div class="flex items-center justify-between p-4 bg-slate-900/40 rounded-2xl border border-slate-800/50 group-hover:border-emerald-500/20 transition-all">
            <span class="text-[10px] text-slate-300 uppercase font-bold tracking-widest">System Audit</span>
            <i data-lucide="file-check" class="w-3 h-3 text-emerald-400"></i>
          </div>
        </div>
      </div>

    </div>

    <div class="mt-12 pt-8 border-t border-slate-800/50 flex flex-wrap justify-between items-center gap-6">
        <div class="flex items-center gap-6">
            <span class="text-[9px] font-mono text-slate-500 uppercase tracking-[0.3em]">Supplementary:</span>
            <div class="flex gap-6 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                 <i data-lucide="figma" class="w-4 h-4 cursor-help"></i>
                 <i data-lucide="github" class="w-4 h-4 cursor-help"></i>
                 <i data-lucide="database" class="w-4 h-4 cursor-help"></i>
            </div>
        </div>
        <div class="px-5 py-1.5 bg-sky-500/5 border border-sky-500/20 rounded-full">
            <span class="text-[9px] text-sky-400 font-bold uppercase tracking-[0.3em] animate-pulse italic">Deep Work</span>
        </div>
    </div>
  </div>
</section>
`;
