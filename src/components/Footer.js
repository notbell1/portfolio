export const Footer = `
<footer class="bg-slate-950 pt-24 pb-12 border-t border-slate-900 relative overflow-hidden">
    <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500 to-transparent"></div>
    </div>

    <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
            
            <div class="lg:col-span-5 space-y-8" data-aos="fade-up">
                <div class="space-y-4">
                    <h2 class="text-2xl font-black text-white italic tracking-tighter flex items-center gap-3">
                        <span class="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center text-slate-950 not-italic text-sm">B</span>
                        BELL PORTFOLIO
                    </h2>
                    <p class="text-slate-500 text-sm font-light italic leading-relaxed max-w-sm">
                        Building digital solutions through structured logic and forward-thinking design. Every line of code is a deliberate step toward the future.
                    </p>
                </div>
                
                <div class="inline-flex items-center gap-4 px-5 py-2 bg-slate-900/50 border border-slate-800 rounded-full">
                    <span class="text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em]">JavaScript</span>
                    <div class="w-px h-3 bg-slate-800"></div>
                    <span class="text-[9px] font-mono text-emerald-500 uppercase tracking-[0.2em]">Tailwind CSS</span>
                </div>
            </div>

            <div class="lg:col-span-3 space-y-6" data-aos="fade-up" data-aos-delay="200">
                <h4 class="text-white font-black text-[10px] uppercase tracking-[0.4em] italic">Navigation</h4>
                <ul class="space-y-4">
                    <li><a href="#home" class="text-slate-500 hover:text-sky-400 font-mono text-xs transition-colors flex items-center gap-2 group">
                        <span class="w-0 group-hover:w-4 h-px bg-sky-500 transition-all"></span>HOME
                    </a></li>
                    <li><a href="#about" class="text-slate-500 hover:text-sky-400 font-mono text-xs transition-colors flex items-center gap-2 group">
                        <span class="w-0 group-hover:w-4 h-px bg-sky-500 transition-all"></span>ABOUT
                    </a></li>
                    <li><a href="#projects" class="text-slate-500 hover:text-sky-400 font-mono text-xs transition-colors flex items-center gap-2 group">
                        <span class="w-0 group-hover:w-4 h-px bg-sky-500 transition-all"></span>PROJECTS
                    </a></li>
                    <li><a href="#contact" class="text-slate-500 hover:text-sky-400 font-mono text-xs transition-colors flex items-center gap-2 group">
                        <span class="w-0 group-hover:w-4 h-px bg-sky-500 transition-all"></span>CONNECT
                    </a></li>
                </ul>
            </div>

            <div class="lg:col-span-4 space-y-6" data-aos="fade-up" data-aos-delay="400">
                <h4 class="text-white font-black text-[10px] uppercase tracking-[0.4em] italic">System Architecture</h4>
                <div class="p-6 bg-slate-900/30 border border-slate-800 rounded-3xl space-y-4">
                    <div class="flex justify-between items-center">
                        <span class="text-[10px] font-mono text-slate-600 italic">Built With</span>
                        <span class="text-[10px] font-mono text-sky-500 uppercase">JS + Tailwind</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-[10px] font-mono text-slate-600 italic">Deployment</span>
                        <span class="text-[10px] font-mono text-emerald-500 uppercase">Github</span>
                    </div>
                    <div class="flex justify-between items-center">
                        <span class="text-[10px] font-mono text-slate-600 italic">Last Update</span>
                        <span class="text-[10px] font-mono text-slate-400">FEB 2026</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="pt-12 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6" data-aos="fade-in">
            <p class="text-[10px] font-mono text-slate-600 uppercase tracking-widest italic">
                &copy; 2026 NOTTBELL <span class="mx-2 text-slate-800">|</span> ALL RIGHTS RESERVED.
            </p>
            
            <button onclick="window.scrollTo({top: 0, behavior: 'smooth'})" 
                class="group flex items-center gap-3 px-6 py-3 bg-slate-900 hover:bg-sky-500 transition-all rounded-full border border-slate-800 hover:border-sky-400">
                <span class="text-[9px] font-mono text-slate-500 group-hover:text-slate-950 font-black uppercase tracking-widest transition-colors">Return To Top</span>
                <i data-lucide="chevron-up" class="w-4 h-4 text-sky-500 group-hover:text-slate-950 transition-colors"></i>
            </button>
        </div>
    </div>
</footer>
`;
