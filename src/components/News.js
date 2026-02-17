export const News = `
<section id="news" class="py-20 md:py-32 bg-[#050505] relative overflow-hidden scroll-mt-18">
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

    <div class="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div class="flex flex-col xl:flex-row xl:items-end justify-between gap-10 mb-20">
            <div class="space-y-4" data-aos="fade-right">
                <h2 class="text-sky-500 font-mono text-[10px] tracking-[0.5em] uppercase flex items-center gap-3">
                    <span class="h-[2px] w-8 bg-sky-500"></span>ARTICLES
                </h2>
                <h3 class="text-5xl md:text-7xl font-black text-white tracking-[0.1em] uppercase leading-none italic">
                    ARCHIVE
                </h3>
            </div>

            <div class="flex flex-col md:flex-row items-stretch w-full xl:max-w-3xl bg-zinc-900/50 border border-zinc-800 rounded-lg overflow-hidden backdrop-blur-md shadow-2xl" data-aos="fade-left">
                
                <div class="relative group flex-[1.5] border-b md:border-b-0 md:border-r border-zinc-800">
                    <div class="absolute left-5 top-1/2 -translate-y-1/2 flex items-center pointer-events-none">
                        <span class="text-sky-500 font-mono text-[12px] font-bold animate-pulse">></span>
                    </div>
                    <input type="text" id="newsSearch" placeholder="SEARCH ARTICLE..." 
                        class="w-full bg-transparent pl-12 pr-4 py-5 text-[11px] text-white focus:outline-none font-mono tracking-[0.2em] placeholder:text-zinc-700 uppercase font-bold transition-all focus:bg-sky-500/5">
                </div>

                <div class="relative group flex-1 bg-black/20 min-w-0">
                    <div class="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
                        <i data-lucide="terminal" class="w-3.5 h-3.5 text-sky-500 opacity-50"></i>
                    </div>
                    
                    <select id="newsFilter" 
                        class="w-full bg-transparent pl-12 pr-10 py-5 text-[11px] text-zinc-400 focus:text-sky-400 focus:outline-none font-mono tracking-[0.15em] appearance-none cursor-pointer uppercase font-black italic transition-all truncate">
                        <option value="all" class="bg-zinc-950 text-white">ALL CATEGORIES</option>
                        <option value="Keamanan Siber" class="bg-zinc-950 text-white">KEAMANAN SIBER</option>
                        <option value="Blockchain" class="bg-zinc-950 text-white">BLOCKCHAIN</option>
                        <option value="Sains Data" class="bg-zinc-950 text-white">SAINS DATA</option>
                        <option value="Pengembangan Web" class="bg-zinc-950 text-white">PENGEMBANGAN WEB</option>
                        <option value="Kecerdasan Buatan" class="bg-zinc-950 text-white">KECERDASAN BUATAN</option>
                        <option value="DevOps" class="bg-zinc-950 text-white">DEVOPS</option>
                        <option value="Komputasi Awan" class="bg-zinc-950 text-white">CLOUD COMPUTING</option>
                        <option value="Internet of Things" class="bg-zinc-950 text-white">IOT</option>
                    </select>

                    <div class="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none opacity-40 group-hover:opacity-100 transition-opacity">
                        <i data-lucide="chevron-down" class="w-4 h-4 text-sky-500"></i>
                    </div>
                </div>
            </div>
        </div>

        <div id="newsGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"></div>

        <div class="mt-20 flex justify-center" data-aos="fade-up">
            <button id="btnLoadMore" class="group relative px-16 py-5 bg-transparent border-2 border-zinc-800 overflow-hidden transition-all hover:border-sky-500 active:scale-95">
                <span class="relative z-10 text-zinc-500 group-hover:text-black font-black uppercase text-[11px] tracking-[0.5em] transition-colors italic">SHOW MORE</span>
                <div class="absolute inset-0 bg-sky-500 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"></div>
                
                <div class="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-sky-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div class="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-sky-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
        </div>
    </div>
</section>
`;
