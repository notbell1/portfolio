import { news } from "../data/news.js";

let visibleCount = 3;
let searchTerm = "";
let selectedCategory = "all";
let clockInterval = null;

/**
 * CORE UTILS
 */
window.copyToClipboard = (text) => {
  navigator.clipboard
    .writeText(text)
    .then(() => {
      alert("SYSTEM: Link berhasil disalin.");
    })
    .catch((err) => console.error("Gagal menyalin:", err));
};

window.shareNews = (title) => {
  if (navigator.share) {
    navigator
      .share({ title: title, url: window.location.href })
      .catch(console.error);
  } else {
    window.copyToClipboard(window.location.href);
  }
};

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
 * UI RENDERING
 */
const createNewsCard = (item) => `
    <article class="group bg-slate-800/10 border border-slate-800/40 rounded-[2.5rem] overflow-hidden hover:border-sky-500/30 transition-all duration-500 flex flex-col h-full cursor-pointer" onclick="openNewsDetail('${item.id}')">
        <div class="relative h-56 overflow-hidden bg-slate-900">
            <img src="${item.image}" onerror="this.src='https://images.unsplash.com/photo-1555066931-4365d14bab8c';" loading="lazy" class="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-1000">
            <div class="absolute top-5 left-5">
                <span class="px-3 py-1 bg-slate-950/90 text-sky-400 text-[8px] font-black uppercase tracking-widest rounded-lg border border-sky-500/20 shadow-xl">${item.category}</span>
            </div>
        </div>
        <div class="p-8 flex-grow flex flex-col justify-between">
            <div class="space-y-4 mb-8">
                <p class="text-slate-600 font-mono text-[9px] uppercase tracking-widest italic flex items-center gap-2">
                    <span class="w-6 h-[1px] bg-sky-500"></span> ${item.date}
                </p>
                <h4 class="text-xl font-bold text-white uppercase tracking-tight group-hover:text-sky-400 transition-colors italic leading-tight">${item.title}</h4>
                <p class="text-slate-400 text-[12px] font-light italic leading-relaxed line-clamp-2">${item.excerpt}</p>
            </div>
            <div class="pt-6 border-t border-slate-800/30 flex items-center justify-between">
                <span class="text-white/50 font-black uppercase text-[8px] tracking-[0.2em] italic group-hover:text-sky-500">Read More</span>
                <i data-lucide="arrow-right" class="w-4 h-4 text-slate-700 group-hover:text-sky-500 group-hover:translate-x-1 transition-all"></i>
            </div>
        </div>
    </article>
`;

export const renderNewsGrid = () => {
  const grid = document.getElementById("newsGrid");
  if (!grid) return;

  const filtered = news.filter(
    (n) =>
      (selectedCategory === "all" || n.category === selectedCategory) &&
      n.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  grid.innerHTML = filtered.length
    ? filtered.slice(0, visibleCount).map(createNewsCard).join("")
    : `<div class="col-span-full py-20 text-center text-slate-700 font-mono text-[10px] uppercase tracking-[0.5em] italic border border-dashed border-slate-800 rounded-3xl">No Log Entries Found.</div>`;

  document
    .getElementById("btnLoadMore")
    ?.classList.toggle("hidden", visibleCount >= filtered.length);
  document
    .getElementById("btnCloseMore")
    ?.classList.toggle("hidden", visibleCount <= 3);

  if (window.lucide) window.lucide.createIcons();
};

/**
 * INITIALIZATION & ROUTING
 */
export const initNewsDetail = () => {
  // Event Listeners
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
      document.getElementById("news").scrollIntoView({ behavior: "smooth" });
    }
  });

  const handleRoute = () => {
    const hash = window.location.hash;
    if (hash.startsWith("#news/")) {
      const data = news.find((n) => n.id === hash.split("/")[1]);
      if (data) {
        // PRISM LANGUAGE MAPPING
        const langMap = {
          "c#": "csharp",
          "c++": "cpp",
          js: "javascript",
          yml: "yaml",
        };
        const langClass =
          langMap[data.language.toLowerCase()] || data.language.toLowerCase();

        document.getElementById("newsModalContent").innerHTML = `
                    <div class="max-w-6xl mx-auto px-6 md:px-10 animate-fade-in pb-20">
                        <div class="flex items-center justify-between mb-12 border-b border-slate-800/50 pb-6">
                            <button onclick="closeNewsDetail()" class="text-slate-500 hover:text-sky-500 font-mono text-[10px] uppercase tracking-widest italic flex items-center gap-2 transition-colors">
                                <i data-lucide="chevron-left" class="w-4 h-4"></i> BACK TO ARCHIVE
                            </button>
                            <div class="flex items-center gap-4 bg-sky-500/5 px-4 py-2 border border-sky-500/10 rounded-full">
                                <span class="relative flex h-2 w-2">
                                  <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                  <span class="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                                </span>
                                <span id="digitalClock" class="text-white font-mono text-[11px] font-black tracking-widest italic tabular-nums">00:00:00 WIB</span>
                            </div>
                        </div>

                        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20">
                            <div class="lg:col-span-7 space-y-8">
                                <div class="space-y-4">
                                    <div class="flex items-center gap-2 text-sky-500 font-mono text-[8px] font-black uppercase tracking-[0.4em]">
                                        <span class="w-10 h-[1px] bg-sky-500"></span> Details
                                    </div>
                                    <h1 class="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9] italic">${data.title}</h1>
                                </div>
                                <div class="rounded-[3rem] overflow-hidden border border-slate-800 shadow-2xl aspect-video relative group bg-slate-900">
                                    <img src="${data.image}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2000ms]">
                                </div>
                            </div>
                            <div class="lg:col-span-5">
                                <div class="bg-slate-950 border border-slate-800 rounded-[2.5rem] p-8 shadow-2xl space-y-3 font-mono">
                                    <h2 class="text-white font-black text-[10px] uppercase tracking-[0.4em] italic flex items-center gap-3 mb-5">
                                        <i data-lucide="database" class="w-4 h-4 text-sky-500"></i> Metadata
                                    </h2>
                                    ${[
                                      ["Author", data.author],
                                      [
                                        "Category",
                                        data.category,
                                        "text-sky-500",
                                      ],
                                      ["Date Upload", data.date],
                                      [
                                        "Runtime Est",
                                        data.readTime,
                                        "text-white",
                                      ],
                                      [
                                        "Language",
                                        data.language,
                                        "text-emerald-500",
                                      ],
                                    ]
                                      .map(
                                        (info) => `
                                        <div class="flex justify-between items-center bg-slate-900/40 p-4 border border-slate-800/40 rounded-2xl">
                                            <span class="text-slate-600 text-[8px] uppercase font-bold">${info[0]}</span>
                                            <span class="${info[2] || "text-white"} text-[10px] font-bold uppercase">${info[1]}</span>
                                        </div>
                                    `,
                                      )
                                      .join("")}
                                </div>
                            </div>
                        </div>

                        <div class="border-t border-slate-800/50 pt-16">
                            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
                                <div class="lg:col-span-8 space-y-12">
                                    <div class="prose prose-invert max-w-none">
                                        <p class="text-slate-300 text-xl md:text-2xl leading-relaxed italic font-light first-letter:text-7xl first-letter:font-black first-letter:text-white first-letter:mr-4 first-letter:float-left first-letter:leading-none">
                                            ${data.excerpt}
                                        </p>
                                        <div class="text-slate-400 text-lg md:text-xl leading-relaxed italic font-light mt-10 space-y-6">
                                            ${data.content
                                              .split("\n")
                                              .filter((p) => p.trim())
                                              .map((p) => `<p>${p.trim()}</p>`)
                                              .join("")}
                                        </div>
                                    </div>

                                    <div class="bg-slate-950 rounded-[2.5rem] border border-slate-800 overflow-hidden shadow-2xl relative">
                                        <div class="bg-slate-900/50 px-8 py-4 border-b border-slate-800 flex justify-between items-center">
                                            <div class="flex items-center gap-3">
                                                <i data-lucide="file-code" class="w-4 h-4 text-sky-500"></i>
                                                <span class="text-[9px] font-mono text-slate-500 tracking-[0.3em] uppercase italic">${data.fileName}</span>
                                            </div>
                                            <span class="text-[9px] font-mono text-sky-500 font-bold uppercase tracking-widest">${data.language}</span>
                                        </div>
                                        <div class="p-10 font-mono text-xs md:text-sm leading-loose overflow-x-auto">
                                            <pre class="!bg-transparent"><code class="language-${langClass}">${data.codeQuote}</code></pre>
                                        </div>
                                    </div>

                                    <button onclick="closeNewsDetail()" class="group flex items-center gap-4 bg-slate-900 hover:bg-sky-500/10 border border-slate-800 hover:border-sky-500/50 px-8 py-4 rounded-2xl transition-all">
                                        <i data-lucide="arrow-left" class="w-5 h-5 text-slate-500 group-hover:text-sky-500 group-hover:-translate-x-1 transition-all"></i>
                                        <span class="text-slate-500 group-hover:text-white font-mono text-[10px] uppercase tracking-[0.3em] italic">Back to Archive</span>
                                    </button>
                                </div>

                                <div class="lg:col-span-4 space-y-8">
                                    <div class="p-8 bg-sky-500/5 border border-sky-500/10 rounded-[2.5rem] space-y-5 relative overflow-hidden group">
                                        <i data-lucide="quote" class="w-8 h-8 text-sky-500/10 absolute -right-2 -top-2"></i>
                                        <h5 class="text-white font-black text-[10px] uppercase tracking-widest italic">Motivational</h5>
                                        <p class="text-slate-400 text-sm leading-relaxed italic font-mono tracking-tighter uppercase">"${data.motivation}"</p>
                                    </div>
                                    <div class="p-8 border border-dashed border-slate-800 rounded-[2.5rem] flex justify-center gap-10 text-slate-600">
                                        <button onclick="shareNews('${data.title}')" class="hover:text-sky-500 transition-all transform hover:scale-110"><i data-lucide="share-2"></i></button>
                                        <button onclick="copyToClipboard(window.location.href)" class="hover:text-emerald-500 transition-all transform hover:scale-110"><i data-lucide="copy"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
        document.getElementById("newsModal").classList.remove("hidden");
        document.body.style.overflow = "hidden";
        startClock();

        // RE-TRIGGER HIGHLIGHTING & ICONS
        setTimeout(() => {
          if (window.lucide) window.lucide.createIcons();
          if (window.Prism) window.Prism.highlightAll();
        }, 50);
      }
    } else {
      document.getElementById("newsModal")?.classList.add("hidden");
      if (!hash.includes("project")) document.body.style.overflow = "auto";
      if (clockInterval) clearInterval(clockInterval);
    }
  };

  window.addEventListener("hashchange", handleRoute);
  handleRoute();
  renderNewsGrid();
};

window.openNewsDetail = (id) => {
  window.location.hash = `news/${id}`;
};
window.closeNewsDetail = () => {
  window.location.hash = `news`;
};
