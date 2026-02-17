export const Footer = `
<footer class="bg-[#020617] pt-32 pb-12 border-t border-slate-900/50 relative overflow-hidden font-mono">
    <div class="absolute inset-0 pointer-events-none">
        <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-500/50 to-transparent animate-[scan_4s_linear_infinite]"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(14,165,233,0.05),transparent_70%)]"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6 relative z-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
            
            <div class="lg:col-span-5 space-y-10" data-aos="fade-up">
                <div class="space-y-6">
                    <a href="#home" class="inline-flex items-center gap-4 group">
                        <div class="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center text-slate-950 transition-transform duration-500 group-hover:rotate-[360deg] shadow-[0_0_20px_rgba(14,165,233,0.3)]">
                            <i data-lucide="command" class="w-6 h-6"></i>
                        </div>
                        <h2 class="text-2xl font-black text-white italic tracking-tighter uppercase">
                            END OF CONTENT
                        </h2>
                    </a>
                    <p class="text-slate-400 text-sm italic leading-loose max-w-sm">
                        Architecting digital ecosystems through <span class="text-white">clean code</span> and <span class="text-sky-400">future-proof design</span>. Every module is a signature of excellence.
                    </p>
                </div>
                
                <div class="flex flex-wrap gap-3">
                    <div class="flex items-center gap-2 px-4 py-1.5 bg-slate-900/40 border border-slate-800 rounded-md">
                        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        <span class="text-[9px] text-slate-400 uppercase tracking-widest">Available For Project</span>
                    </div>
                    <div class="flex items-center gap-2 px-4 py-1.5 bg-slate-900/40 border border-slate-800 rounded-md">
                        <span class="text-[9px] text-sky-500 uppercase tracking-widest">V2.0.26</span>
                    </div>
                </div>
            </div>

            <div class="lg:col-span-3 space-y-8" data-aos="fade-up" data-aos-delay="200">
                <h4 class="text-white font-black text-[11px] uppercase tracking-[0.4em] flex items-center gap-2 italic">
                    <span class="w-2 h-2 bg-sky-500 rounded-full"></span> NAVIGATION
                </h4>
                <ul class="grid grid-cols-2 gap-x-4 gap-y-5">
                    ${[
                      "Home",
                      "Experience",
                      "About",
                      "Project",
                      "Education",
                      "News",
                      "Skill",
                      "Contact",
                    ]
                      .map(
                        (item) => `
                        <li>
                            <a href="#${item.toLowerCase()}" class="text-slate-500 hover:text-white transition-all duration-300 text-[10px] flex items-center gap-2 group">
                                <span class="h-px w-2 bg-slate-800 group-hover:w-4 group-hover:bg-sky-500 transition-all"></span>
                                ${item.toUpperCase()}
                            </a>
                        </li>
                    `,
                      )
                      .join("")}
                </ul>
            </div>

            <div class="lg:col-span-4 space-y-8" data-aos="fade-up" data-aos-delay="400">
                <h4 class="text-white font-black text-[11px] uppercase tracking-[0.4em] flex items-center gap-2 italic">
                    <span class="w-2 h-2 bg-emerald-500 rounded-full"></span> SYSTEM ARCHITECTURE
                </h4>
                <div class="p-8 bg-slate-900/20 backdrop-blur-sm border border-slate-800/50 rounded-2xl space-y-6 relative overflow-hidden group">
                    
                    <div class="flex justify-between items-center border-b border-slate-800/50 pb-3">
                        <span class="text-[10px] text-slate-500">ENGINE STACK</span>
                        <span class="text-[10px] text-sky-400">JS + TAILWIND CSS</span>
                    </div>
                    <div class="flex justify-between items-center border-b border-slate-800/50 pb-3">
                        <span class="text-[10px] text-slate-500">CORE UPTIME</span>
                        <span class="text-[10px] text-emerald-400">STABLE</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-[10px] text-slate-500">DATA UPDATE</span>
                        <span class="text-[10px] text-white">FEB 17, 2026</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="pt-12 border-t border-slate-900/50 flex flex-col md:flex-row justify-between items-center gap-8" data-aos="fade-in">
            <div class="text-[10px] text-slate-500 uppercase tracking-[0.2em] italic flex flex-wrap justify-center gap-1 items-center">
                <span>&copy; 2026 ABBEL</span>
                <span class="mx-2 text-slate-800">|</span>
                <span>ALL RIGHTS RESERVED</span>
                <span class="mx-2 text-slate-800">|</span>
                <div class="flex items-center gap-2 group cursor-default">
                    <span>CODE WITH</span>
                    <i data-lucide="heart" class="w-3.5 h-3.5 text-red-500 fill-red-500 animate-[heartbeat_1.5s_ease-in-out_infinite] group-hover:animate-none transition-all"></i>
                </div>
            </div>
            
            <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})" 
                class="group relative flex items-center gap-3 px-8 py-3 bg-transparent hover:bg-sky-500 transition-all duration-500 rounded-lg border border-slate-800 hover:border-sky-400 shadow-lg active:scale-95">
                <span class="text-[9px] text-slate-500 group-hover:text-slate-950 font-black uppercase tracking-[0.4em] transition-colors">Back To Top</span>
                <i data-lucide="arrow-up" class="w-4 h-4 text-sky-500 group-hover:text-slate-950 transition-transform group-hover:-translate-y-1"></i>
            </button>
        </div>
    </div>
</footer>

<style>
    @keyframes scan {
        0% { transform: translateY(0); opacity: 0; }
        50% { opacity: 1; }
        100% { transform: translateY(500px); opacity: 0; }
    }
    @keyframes heartbeat {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.3); }
    }
</style>
`;
