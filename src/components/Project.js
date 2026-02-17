import { projects } from "../data/projects.js";

export const Project = `
<section id="project" class="min-h-screen flex items-center bg-slate-950 relative overflow-hidden py-20 scroll-mt-10">

  <div class="max-w-7xl mx-auto px-6 relative z-10 w-full">
    
    <div class="mb-12" data-aos="fade-down">
      <h2 class="text-sky-400 font-mono text-[10px] tracking-[0.4em] uppercase mb-2 italic flex items-center gap-3">
        <span class="h-[1px] w-8 bg-sky-500"></span>
        Portfolio
      </h2>
      <h3 class="text-3xl lg:text-4xl font-black text-white tracking-tighter uppercase leading-none">
        Logic <span class="text-slate-700 italic">&</span> Design
      </h3>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${projects
        .map(
          (p, index) => `
        <div 
          class="group relative bg-slate-900/40 border border-slate-800/50 rounded-3xl overflow-hidden hover:border-sky-500/40 transition-all duration-500 flex h-[400px]"
          data-aos="fade-up" 
          data-aos-delay="${index * 100}"
        >
          <div class="w-12 border-r border-white/5 flex items-center justify-center bg-slate-950/40 relative z-20">
            <h4 class="text-white font-black uppercase tracking-[0.2em] text-[10px] whitespace-nowrap -rotate-90 origin-center opacity-60 group-hover:opacity-100 group-hover:text-sky-400 transition-all duration-500">
              ${p.title}
            </h4>
          </div>

          <div class="flex-1 relative flex flex-col justify-end p-6 overflow-hidden">
            
            <div class="absolute inset-0 z-0 pointer-events-none">
               <img src="${p.mainImage}" alt="${p.title}" class="w-full h-full object-cover opacity-20 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700">
               <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent"></div>
            </div>

            <div class="relative z-30 w-full">
              <span class="text-sky-500 font-mono text-[9px] tracking-[0.3em] uppercase mb-2 block">
                NOTTBELL
              </span>
              
              <p class="text-slate-400 text-[11px] leading-relaxed italic mb-6 line-clamp-3 opacity-80">
                ${p.longDescription || "No description available."}
              </p>
              
              <div class="flex flex-wrap gap-1.5 mb-8">
                ${p.stack
                  .slice(0, 3)
                  .map(
                    (s) => `
                  <span class="text-[7px] font-bold text-slate-400 bg-white/5 px-2 py-0.5 rounded border border-white/10 uppercase tracking-widest">${s}</span>
                `,
                  )
                  .join("")}
              </div>

              <button 
                onclick="openProjectDetail('${p.id}')" 
                class="w-full py-3.5 bg-white text-slate-950 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] transition-all hover:bg-sky-500 hover:text-white active:scale-95 shadow-xl cursor-pointer">
                View Details
              </button>
            </div>
          </div>
        </div>
      `,
        )
        .join("")}
    </div>
  </div>

  <div id="projectModal" class="fixed inset-0 z-[200] hidden">
    <div class="absolute inset-0 bg-slate-950/98 backdrop-blur-3xl" onclick="closeProjectDetail()"></div>
    <div class="relative h-full w-full overflow-y-auto custom-scrollbar">
       <div id="modalContent" class="max-w-4xl mx-auto py-20 px-6 animate-fade-in"></div>
       <button onclick="closeProjectDetail()" class="fixed top-6 right-6 p-4 bg-white text-slate-900 rounded-full shadow-2xl hover:rotate-90 transition-all z-[210]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
       </button>
    </div>
  </div>
</section>
`;
