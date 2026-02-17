export const Header = `
<nav class="fixed top-0 w-full z-[100] bg-slate-900/90 backdrop-blur-xl border-b border-slate-800 transition-all duration-300 font-mono">
  <div class="h-20 flex items-center">
    <div class="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
      
      <a href="#home" class="group flex items-center gap-2">
        <div class="bg-sky-500 text-slate-900 px-2 py-0.5 rounded-sm font-black text-xl tracking-tighter">
            ABBEL
        </div>
        <span class="text-white font-black text-xl tracking-tighter opacity-80 group-hover:opacity-100 transition-opacity uppercase">PORTFOLIO</span>
      </a>

      <ul class="hidden xl:flex items-center gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400">
        ${[
          "home",
          "about",
          "education",
          "skill",
          "experience",
          "project",
          "news",
        ]
          .map(
            (item) => `
          <li class="relative group">
            <a href="#${item}" class="nav-link py-2 transition-colors hover:text-white flex items-center gap-1.5" data-section="${item}">
              ${item === "news" ? "Articles" : item}
            </a>
            <span class="nav-underline absolute -bottom-1 left-0 w-0 h-[2px] bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        `,
          )
          .join("")}
        
        <li>
          <a href="#contact" class="ml-4 bg-sky-500 text-slate-900 px-5 py-2.5 rounded-sm font-black hover:bg-white transition-all duration-300 active:scale-95 block uppercase tracking-widest">
            Let's Talk
          </a>
        </li>
      </ul>

      <button id="menuBtn" class="xl:hidden group p-2 focus:outline-none">
        <div class="flex flex-col gap-1.5 items-end">
          <span id="line1" class="w-6 h-0.5 bg-white transition-all duration-300"></span>
          <span id="line2" class="w-4 h-0.5 bg-sky-500 transition-all duration-300 group-hover:w-6"></span>
          <span id="line3" class="w-6 h-0.5 bg-white transition-all duration-300"></span>
        </div>
      </button>
    </div>
  </div>

  <div id="mobileMenu" class="xl:hidden overflow-hidden max-h-0 bg-slate-900 border-b border-slate-800 transition-all duration-500 ease-in-out">
    <ul class="flex flex-col gap-2 p-8">
      ${["home", "about", "education", "skill", "experience", "project", "news"]
        .map(
          (item) => `
        <li class="border-b border-slate-800/50 last:border-0">
          <a href="#${item}" class="mobile-link block py-4 text-slate-400 text-[10px] uppercase tracking-[0.3em] font-bold hover:text-sky-500 transition-colors">
            ${item === "news" ? "Articles" : item}
          </a>
        </li>
      `,
        )
        .join("")}
      <li class="mt-6">
        <a href="#contact" class="mobile-link block bg-sky-500 text-slate-900 py-4 rounded-sm text-center font-black uppercase text-[10px] tracking-[0.4em]">
          Let's Talk
        </a>
      </li>
    </ul>
  </div>
</nav>
`;
