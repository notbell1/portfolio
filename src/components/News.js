export const News = `
<section id="news" class="py-20 md:py-32 bg-slate-900 relative overflow-hidden scroll-mt-18">
    <div class="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div class="flex flex-col xl:flex-row xl:items-center justify-between gap-10 mb-20">
            <div class="space-y-4" data-aos="fade-right">
                <h2 class="text-sky-400 font-mono text-[10px] tracking-[0.3em] uppercase italic flex items-center gap-3">
                    <span class="h-[1px] w-12 bg-sky-500"></span> Articles
                </h2>
                <h3 class="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter uppercase leading-none italic">
                    Articles <span class="text-slate-600">Archives</span>
                </h3>
            </div>

            <div class="flex flex-col sm:flex-row items-center bg-slate-950/80 border border-slate-800/60 p-2.5 rounded-[2rem] w-full xl:w-auto shadow-2xl backdrop-blur-xl" data-aos="fade-left">
                <div class="relative w-full sm:w-72">
                    <input type="text" id="newsSearch" placeholder="Search News..." class="w-full bg-transparent px-6 py-3.5 text-[10px] text-white focus:outline-none font-mono tracking-widest placeholder:text-slate-700 uppercase italic font-bold">
                    <i data-lucide="search" class="absolute right-5 top-4 w-4 h-4 text-slate-700"></i>
                </div>
                <div class="hidden sm:block w-[1px] h-8 bg-slate-800 mx-3"></div>
                <div class="relative w-full sm:w-56">
                    <select id="newsFilter" class="w-full bg-transparent px-6 py-3.5 text-[10px] text-sky-500 focus:outline-none font-mono tracking-widest appearance-none cursor-pointer uppercase font-black italic">
                        <option value="all">-- FILTER SEMUA --</option>
                        <option value="Keamanan Siber">Keamanan Siber</option>
                        <option value="Blockchain">Blockchain</option>
                        <option value="Sains Data">Sains Data</option>
                    </select>
                    <i data-lucide="filter" class="absolute right-5 top-4 w-3.5 h-3.5 text-slate-700 pointer-events-none"></i>
                </div>
            </div>
        </div>

        <div id="newsGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"></div>

        <div class="mt-20 flex flex-col sm:flex-row items-center justify-center gap-5" data-aos="fade-up">
            <button id="btnLoadMore" class="w-full sm:w-auto group relative px-14 py-5 bg-transparent border border-slate-800 rounded-full overflow-hidden transition-all hover:border-sky-500 hover:scale-105">
                <span class="relative z-10 text-slate-500 group-hover:text-white font-black uppercase text-[10px] tracking-[0.4em] transition-colors italic">Load More</span>
                <div class="absolute inset-0 bg-sky-500 translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
            </button>
        </div>
    </div>
</section>
`;
