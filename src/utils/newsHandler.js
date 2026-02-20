import { news } from "../data/news.js";

let visibleCount = 3;
let searchTerm = "";
let selectedCategory = "all";
let clockInterval = null;

/**
 * HELPER: Slug Generator
 */
const createSlug = (text) => {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
};

/**
 * CORE UTILS
 */
const startClock = () => {
  if (clockInterval) clearInterval(clockInterval);
  const update = () => {
    const el = document.getElementById("digitalClock");
    if (!el) return;
    const now = new Date();
    el.innerText = `${new Intl.DateTimeFormat("en-GB", {
      timeZone: "Asia/Jakarta",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(now)} WIB`;
  };
  update();
  clockInterval = setInterval(update, 1000);
};

/**
 * COMPONENT: Navigation Buttons (Prev, Exit, Next)
 */
const navButtonsComponent = (currentSlug) => {
  const currentIndex = news.findIndex(
    (n) => createSlug(n.title) === currentSlug,
  );

  const prevIndex = (currentIndex - 1 + news.length) % news.length;
  const prevSlug = createSlug(news[prevIndex].title);

  const nextIndex = (currentIndex + 1) % news.length;
  const nextSlug = createSlug(news[nextIndex].title);

  return `
    <div class="flex flex-wrap items-center gap-3">
     <button onclick="window.closeNewsDetail()" 
                class="group relative px-5 py-2.5 bg-white hover:bg-red-500 transition-all duration-300 rounded-lg shadow-lg">
            <span class="text-black group-hover:text-white font-mono text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                <i data-lucide="x-circle" class="w-4 h-4"></i>
                EXIT
            </span>
        </button>
        <button onclick="window.openNewsDetail('${prevSlug}')" 
                class="group relative px-5 py-2.5 bg-zinc-800 hover:bg-sky-500 border border-white/10 transition-all duration-300 rounded-lg shadow-lg">
            <span class="text-white font-mono text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                <i data-lucide="chevron-left" class="w-4 h-4 group-hover:-translate-x-1 transition-transform"></i>
                PREV
            </span>
        </button>
        <button onclick="window.openNewsDetail('${nextSlug}')" 
                class="group relative px-5 py-2.5 bg-zinc-800 hover:bg-sky-500 border border-white/10 transition-all duration-300 rounded-lg shadow-lg">
            <span class="text-white font-mono text-[10px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                NEXT
                <i data-lucide="chevron-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
            </span>
        </button>
        
    </div>
  `;
};

/**
 * CARD RENDERING: News Grid
 */
const createNewsCard = (item, index) => {
  const slug = createSlug(item.title);
  return `
    <article class="group relative bg-zinc-900 border border-zinc-800 rounded-[2rem] overflow-hidden hover:border-sky-500/40 transition-all duration-500 flex flex-col h-full">
        <div class="relative h-56 overflow-hidden bg-black">
            <img src="${item.image}" onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c';" loading="lazy" 
                 class="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000">
            <div class="absolute top-4 left-4">
                <span class="px-2 py-1 bg-black/80 text-sky-400 text-[8px] font-black uppercase tracking-widest rounded border border-sky-500/30">${item.category}</span>
            </div>
        </div>

        <div class="p-7 flex-grow flex flex-col justify-between font-mono">
            <div class="space-y-3 mb-6">
                <p class="text-zinc-600 text-[9px] uppercase tracking-[0.3em] italic flex items-center gap-2">
                    <span class="w-4 h-[1px] bg-sky-500"></span> ${item.date}
                </p>
                <h4 class="text-xl font-black text-white uppercase tracking-tighter italic leading-tight group-hover:text-sky-400 transition-colors">${item.title}</h4>
                <p class="text-zinc-500 text-[11px] leading-relaxed line-clamp-2 italic font-medium">${item.excerpt}</p>
            </div>
            
            <div class="pt-5 border-t border-zinc-800 flex items-center">
                <button onclick="window.openNewsDetail('${slug}')" 
                        class="flex items-center gap-3 bg-white hover:bg-sky-500 px-5 py-2 rounded-md transition-all duration-300 cursor-pointer active:scale-95 shadow-md">
                    <span class="text-black font-black uppercase text-[10px] tracking-widest">READ MORE</span>
                    <i data-lucide="arrow-right" class="w-3.5 h-3.5 text-black"></i>
                </button>
            </div>
        </div>
    </article>
  `;
};

/**
 * MODAL CONTENT RENDERER
 */
const renderModalContent = (data) => {
  const langMap = {
    js: "javascript",
    py: "python",
    sh: "bash",
    "c++": "cpp",
    cpp: "cpp",
    "c#": "csharp",
    cs: "csharp",
  };
  const langClass =
    langMap[data.language.toLowerCase()] || data.language.toLowerCase();
  const currentSlug = createSlug(data.title);

  const modal = document.getElementById("newsModal");
  modal.className =
    "fixed inset-0 z-[100] overflow-y-auto bg-black hidden font-mono";

  document.getElementById("newsModalContent").innerHTML = `
        <div class="max-w-[1500px] mx-auto px-6 md:px-12 py-10 text-white">
            
            <div class="flex items-center justify-between mb-10 border-b border-white/10 pb-8">
                ${navButtonsComponent(currentSlug)}
                <div class="hidden md:flex items-center gap-6 bg-zinc-900/50 p-4 border border-zinc-800 rounded-xl">
                    <span id="digitalClock" class="text-white text-xs font-black tracking-[0.2em] tabular-nums">00:00:00 WIB</span>
                </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
                
                <div class="lg:col-span-8 space-y-10">
                    <div class="space-y-4">
                        <div class="flex items-center gap-3 text-sky-500 text-[10px] font-black uppercase tracking-[0.5em]">
                            <span class="w-12 h-0.5 bg-sky-500"></span> DETAILS
                        </div>
                        <h1 class="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tighter leading-[1.1] italic">
                            ${data.title}
                        </h1>
                    </div>

                    <div class="rounded-[2.5rem] overflow-hidden border border-zinc-800 bg-zinc-900 relative group max-h-[500px]">
                        <img src="${data.image}" class="w-full h-full object-cover opacity-90 transition-all duration-700">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>

                    <div class="prose prose-invert max-w-none">
                        <p class="text-zinc-300 text-xl md:text-2xl font-black leading-tight uppercase italic tracking-tighter mb-12 border-l-4 border-sky-500 pl-8">
                            "${data.excerpt}"
                        </p>
                        <div class="text-zinc-400 text-base md:text-lg leading-loose space-y-8 font-medium italic">
                            ${data.content
                              .split("\n")
                              .filter((p) => p.trim())
                              .map(
                                (p) => `
                                <p class="hover:text-white transition-colors flex gap-3">
                                    <span class="text-sky-500 font-bold not-italic">>></span>
                                    <span>${p.trim()}</span>
                                </p>
                            `,
                              )
                              .join("")}
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-4 space-y-8">
                    <div class="bg-zinc-900 border border-zinc-800 rounded-[2.5rem] p-8 shadow-2xl space-y-6">
                        <h2 class="text-sky-500 font-black text-[11px] uppercase tracking-[0.4em] italic mb-8">INFORMATION</h2>
                        
                        <div class="bg-black/50 p-5 border border-zinc-800 rounded-xl flex items-center gap-4">
                            <div class="w-12 h-12 rounded-full overflow-hidden border-2 border-sky-500/50 shrink-0">
                                <img src="/img/profile/profile_1.jpg" alt="Author" class="w-full h-full ">
                            </div>
                            <div>
                                <span class="text-zinc-600 text-[9px] uppercase font-black tracking-[0.3em] block mb-1">AUTHOR</span>
                                <span class="text-white text-lg font-black uppercase italic">${data.author}</span>
                            </div>
                        </div>

                        <div class="bg-black/50 p-5 border border-zinc-800 rounded-xl flex items-center gap-4">
                            <div class="w-10 h-10 bg-sky-500/10 rounded-lg flex items-center justify-center border border-sky-500/20">
                                <i data-lucide="tag" class="w-5 h-5 text-sky-500"></i>
                            </div>
                            <div>
                                <span class="text-zinc-600 text-[9px] uppercase font-black tracking-[0.3em] block mb-1">CATEGORY</span>
                                <span class="text-sky-500 text-lg font-black uppercase italic">${data.category}</span>
                            </div>
                        </div>

                        <div class="bg-black/50 p-5 border border-zinc-800 rounded-xl flex items-center gap-4">
                            <div class="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center border border-zinc-700">
                                <i data-lucide="calendar" class="w-5 h-5 text-zinc-400"></i>
                            </div>
                            <div>
                                <span class="text-zinc-600 text-[9px] uppercase font-black tracking-[0.3em] block mb-1">DATE</span>
                                <span class="text-zinc-400 text-lg font-black uppercase italic">${data.date}</span>
                            </div>
                        </div>

                        <div class="mt-8 rounded-xl overflow-hidden border border-zinc-800 bg-black">
                            <div class="bg-zinc-800 px-4 py-2 flex justify-between items-center">
                                <span class="text-[8px] text-zinc-400 font-black uppercase">${data.language}</span>
                                <div class="w-2 h-2 rounded-full bg-emerald-500/50"></div>
                            </div>
                            <div class="p-5 text-[11px] overflow-x-auto custom-scrollbar">
                                <pre class="!bg-transparent !m-0"><code class="language-${langClass}">${data.codeQuote}</code></pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="text-center py-20 border-t border-zinc-900">
                <p class="text-[10px] text-zinc-700 uppercase tracking-[1em] mb-10 font-black">--- END OF ARTICLE ---</p>
                <div class="flex justify-center">
                    ${navButtonsComponent(currentSlug)}
                </div>
            </div>
        </div>
    `;

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  modal.scrollTo({ top: 0, behavior: "instant" });
  startClock();

  setTimeout(() => {
    if (window.lucide) window.lucide.createIcons();
    if (window.Prism) window.Prism.highlightAll();
  }, 100);
};

/**
 * CORE GRID LOGIC
 */
export const renderNewsGrid = () => {
  const grid = document.getElementById("newsGrid");
  if (!grid) return;
  const filtered = news.filter(
    (n) =>
      (selectedCategory === "all" || n.category === selectedCategory) &&
      n.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  grid.innerHTML = filtered.length
    ? filtered
        .slice(0, visibleCount)
        .map((item, index) => createNewsCard(item, index))
        .join("")
    : `<div class="col-span-full py-20 text-center text-zinc-800 font-black text-[10px] uppercase tracking-[0.5em]">ERR: DATA_NOT_FOUND</div>`;

  document
    .getElementById("btnLoadMore")
    ?.classList.toggle("hidden", visibleCount >= filtered.length);
  document
    .getElementById("btnCloseMore")
    ?.classList.toggle("hidden", visibleCount <= 3);
  if (window.lucide) window.lucide.createIcons();
  if (window.AOS) window.AOS.refresh();
};

export const initNewsDetail = () => {
  document.getElementById("newsSearch")?.addEventListener("input", (e) => {
    searchTerm = e.target.value;
    visibleCount = 3;
    renderNewsGrid();
  });
  document.getElementById("newsFilter")?.addEventListener("change", (e) => {
    selectedCategory = e.target.value;
    visibleCount = 3;
    renderNewsGrid();
  });

  document.addEventListener("click", (e) => {
    if (e.target.closest("#btnLoadMore")) {
      visibleCount += 3;
      renderNewsGrid();
    }
    if (e.target.closest("#btnCloseMore")) {
      visibleCount = 3;
      renderNewsGrid();
      document.getElementById("news")?.scrollIntoView({ behavior: "smooth" });
    }
  });

  const handleRoute = () => {
    const urlParams = new URLSearchParams(window.location.search);
    const slug = urlParams.get("id");
    if (slug) {
      const data = news.find((n) => createSlug(n.title) === slug);
      if (data) renderModalContent(data);
    } else {
      document.getElementById("newsModal")?.classList.add("hidden");
      document.body.style.overflow = "auto";
      if (clockInterval) clearInterval(clockInterval);
    }
  };

  window.addEventListener("popstate", handleRoute);
  handleRoute();
  renderNewsGrid();
};

window.openNewsDetail = (slug) => {
  window.history.pushState({}, "", `?id=${slug}`);
  window.dispatchEvent(new PopStateEvent("popstate"));
};

window.closeNewsDetail = () => {
  window.history.pushState({}, "", window.location.pathname);
  window.dispatchEvent(new PopStateEvent("popstate"));
};
