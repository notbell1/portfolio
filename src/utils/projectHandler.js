import { projects } from "../data/projects.js";

/**
 * HELPER: Membuat Slug dari Judul Project
 */
const createSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
};

const renderModalContent = (slug) => {
  const data = projects.find((p) => createSlug(p.title) === slug);
  if (!data) return closeProjectDetail();

  const content = document.getElementById("modalContent");
  const modal = document.getElementById("projectModal");

  content.innerHTML = `
      <div class="animate-fade-in space-y-16 md:space-y-24">
        
        <div class="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start border-b border-slate-800/50 pb-12 md:pb-16">
          
          <div class="w-full lg:w-2/3 order-2 lg:order-1">
            <div class="flex items-center gap-4 mb-6">
                <span class="px-3 py-1 bg-sky-500 text-slate-950 text-[9px] font-black tracking-[0.2em] uppercase rounded-full italic">${data.year}</span>
                <span class="text-slate-500 font-mono text-[10px] uppercase tracking-widest">${data.category}</span>
            </div>
            
            <h1 class="text-3xl md:text-5xl lg:text-7xl font-black text-white uppercase tracking-tight leading-[1.1] mb-8">
                ${data.title}
            </h1>
            
            <p class="text-slate-400 text-base md:text-xl lg:text-2xl font-light leading-relaxed italic max-w-2xl mb-10">
                "${data.longDescription}"
            </p>

            <div class="flex flex-wrap gap-4 lg:hidden">
                <a href="${data.liveUrl}" target="_blank" class="flex-1 text-center py-4 bg-sky-500 text-slate-950 font-black uppercase text-[10px] tracking-widest rounded-2xl hover:bg-white transition-colors">Launch Live</a>
                <a href="${data.githubUrl}" target="_blank" class="flex-1 text-center py-4 bg-slate-800 text-white font-black uppercase text-[10px] tracking-widest rounded-2xl border border-slate-700 hover:bg-slate-700 transition-colors italic">Repository</a>
            </div>
          </div>
          
          <div class="w-full lg:w-1/3 order-1 lg:order-2">
            <div class="bg-slate-800/20 p-6 md:p-8 rounded-[2rem] border border-slate-800/50 backdrop-blur-xl space-y-8">
                <div class="flex flex-col sm:flex-row lg:flex-col gap-6 md:gap-8">
                    <div class="flex-1">
                        <p class="text-slate-500 text-[8px] uppercase font-black tracking-[0.3em] mb-2 italic">Client</p>
                        <p class="text-white font-bold italic text-base md:text-xl uppercase tracking-tight leading-tight">${data.client}</p>
                    </div>
                    
                    <div class="flex-1">
                        <p class="text-slate-500 text-[8px] uppercase font-black tracking-[0.3em] mb-3 italic">Stack</p>
                        <div class="flex flex-wrap gap-1.5 md:gap-2">
                            ${data.stack.map((s) => `<span class="px-2 py-1 bg-slate-900 rounded-lg text-[9px] text-sky-400 border border-sky-500/20 font-bold uppercase font-mono tracking-wider">${s}</span>`).join("")}
                        </div>
                    </div>
                </div>

                <div class="hidden lg:flex flex-col gap-3 pt-6 border-t border-slate-800/50">
                    <a href="${data.liveUrl}" target="_blank" class="group flex items-center justify-between p-4 bg-sky-500 rounded-2xl transition-all hover:scale-[1.02] active:scale-95">
                        <span class="text-slate-950 font-black uppercase text-[10px] tracking-widest">Launch Project</span>
                        <i data-lucide="external-link" class="w-4 h-4 text-slate-950"></i>
                    </a>
                    <a href="${data.githubUrl}" target="_blank" class="group flex items-center justify-between p-4 bg-slate-900/50 border border-slate-700 rounded-2xl transition-all hover:bg-slate-800">
                        <span class="text-white/70 font-black uppercase text-[10px] tracking-widest italic group-hover:text-white transition-colors">Source Code</span>
                        <i data-lucide="github" class="w-4 h-4 text-white/50 group-hover:text-sky-400 transition-colors"></i>
                    </a>
                </div>
            </div>
          </div>
        </div>

        <div class="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div class="space-y-10 order-2 lg:order-1">
            <h3 class="text-2xl font-black text-white uppercase tracking-tighter flex items-center gap-4">
               <span class="w-12 h-[2px] bg-sky-500"></span> Technical Highlights
            </h3>
            <div class="grid gap-4">
              ${data.features
                .map(
                  (f, index) => `
                <div class="flex gap-5 p-6 bg-slate-800/10 rounded-[1.5rem] border border-slate-800/30 group hover:bg-slate-800/20 transition-all duration-500">
                  <span class="text-sky-500/30 font-black text-2xl group-hover:text-sky-400 transition-colors italic font-mono">0${index + 1}</span>
                  <p class="text-slate-300 text-sm leading-relaxed italic mt-1 font-light">${f}</p>
                </div>
              `,
                )
                .join("")}
            </div>
          </div>

          <div class="order-1 lg:order-2 group relative">
             <div class="absolute -inset-1 bg-gradient-to-r from-sky-500 to-blue-600 rounded-[3rem] blur opacity-10 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
             
             <div class="relative bg-slate-900 rounded-[2.8rem] overflow-hidden border border-slate-700/50 shadow-2xl">
                <img src="${data.mainImage}" alt="${data.title}" class="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out">
             </div>
             <div class="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-sky-500/50 rounded-tr-[3rem] pointer-events-none group-hover:scale-110 transition-transform"></div>
             <div class="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-sky-500/50 rounded-bl-[3rem] pointer-events-none group-hover:scale-110 transition-transform"></div>
          </div>
        </div>

        <div class="space-y-8 pb-10">
            <h3 class="text-2xl font-black text-white uppercase tracking-tighter flex items-center gap-4">
                <span class="w-12 h-[2px] bg-sky-500"></span> Interface
            </h3>
            <div class="flex gap-6 overflow-x-auto pb-6 custom-scrollbar snap-x snap-mandatory px-2 font-mono">
                ${data.images
                  .map(
                    (img) => `
                    <div class="min-w-[90%] md:min-w-[70%] aspect-video bg-slate-900 rounded-[2.5rem] overflow-hidden snap-center border border-slate-800">
                        <img src="${img}" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" loading="lazy">
                    </div>
                `,
                  )
                  .join("")}
            </div>
        </div>

        <div class="text-center py-12 border-t border-slate-800">
            <button onclick="closeProjectDetail()" class="text-slate-600 hover:text-sky-500 font-mono font-black uppercase tracking-widest text-[10px] transition-all italic">
                < Back
            </button>
        </div>

      </div>
    `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  if (window.lucide) window.lucide.createIcons();
};

/**
 * GLOBAL NAVIGATION FUNCTIONS (MODIFIED TO QUERY PARAM)
 */
window.openProjectDetail = (slugOrId) => {
  const item = projects.find(
    (p) => p.id === slugOrId || createSlug(p.title) === slugOrId,
  );
  const finalSlug = item ? createSlug(item.title) : slugOrId;

  window.history.pushState({}, "", `?id=${finalSlug}`);
  window.dispatchEvent(new PopStateEvent("popstate"));
};

window.closeProjectDetail = () => {
  window.history.pushState({}, "", window.location.pathname);
  window.dispatchEvent(new PopStateEvent("popstate"));
  document.getElementById("projectModal").classList.add("hidden");
  document.body.style.overflow = "auto";
};

/**
 * INITIALIZATION & ROUTING
 */
export const initProjectDetail = () => {
  const handleRoute = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get("id");

    const isProject = projects.some((p) => createSlug(p.title) === slug);

    if (slug && isProject) {
      renderModalContent(slug);
    } else {
      document.getElementById("projectModal")?.classList.add("hidden");
      const isNews = urlParams.has("id") && !isProject;
      if (!isNews) {
        document.body.style.overflow = "auto";
      }
    }
  };

  window.addEventListener("popstate", handleRoute);
  handleRoute();
};
