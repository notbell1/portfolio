export const Header = `
<header class="fixed top-0 left-0 right-0 z-40 bg-zinc-950 border-b-2 border-zinc-800 transition-all">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
    <a href="/" data-route="home" class="flex items-center gap-2.5 group">
      <img
        src="/favicon.svg"
        alt="Abbel Icon"
        class="w-7 h-7 sm:w-8 sm:h-8 rounded-lg border border-zinc-800 group-hover:border-[#800020] shadow-[0_2px_0_0_#000] group-hover:-translate-y-0.5 transition-all select-none object-contain"
      />
      <span class="block text-base sm:text-lg font-extrabold text-white tracking-tight leading-none group-hover:text-[#ff8fa3] transition-colors">
        Abbel
      </span>
    </a>

    <nav class="hidden md:flex items-center gap-1 sm:gap-1.5" aria-label="Main Navigation">
      <a href="/" data-route="home" class="nav-link px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-zinc-400 hover:text-white hover:bg-[#181820] transition-colors" data-section="home">Home</a>
      <a href="/about" data-route="about" class="nav-link px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-zinc-400 hover:text-white hover:bg-[#181820] transition-colors" data-section="about">About</a>
      <a href="/project" data-route="project" class="nav-link px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-zinc-400 hover:text-white hover:bg-[#181820] transition-colors" data-section="project">Projects</a>
      <a href="/skill" data-route="skill" class="nav-link px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-zinc-400 hover:text-white hover:bg-[#181820] transition-colors" data-section="skill">Skills</a>
      <a href="/experience" data-route="experience" class="nav-link px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-zinc-400 hover:text-white hover:bg-[#181820] transition-colors" data-section="experience">Experience</a>
    </nav>

    <div class="hidden sm:flex items-center gap-2">
      <a 
        href="/contact"
        data-route="contact"
        class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#800020] hover:bg-[#9b111e] text-white text-xs font-medium shadow-[0_3px_0_0_#000] transition-all active:translate-y-0.5 cursor-pointer border border-[#9b111e]/40"
        title="Get in touch"
      >
        <i data-lucide="mail" class="w-3.5 h-3.5"></i>
        <span>Get in Touch</span>
      </a>
    </div>

    <div class="flex items-center gap-2 md:hidden">
      <button 
        id="mobile-menu-toggle"
        class="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-[#181820] transition-colors cursor-pointer"
        aria-label="Toggle navigation menu"
      >
        <i data-lucide="menu" class="w-5 h-5"></i>
      </button>
    </div>
  </div>

  <div id="mobile-menu" class="hidden md:hidden border-t border-zinc-800 bg-[#0e0e13] px-4 py-3 space-y-1">
    <a href="/" data-route="home" class="mobile-nav-link block px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:bg-[#181820] hover:text-white">Home</a>
    <a href="/about" data-route="about" class="mobile-nav-link block px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:bg-[#181820] hover:text-white">About</a>
    <a href="/project" data-route="project" class="mobile-nav-link block px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:bg-[#181820] hover:text-white">Projects</a>
    <a href="/skill" data-route="skill" class="mobile-nav-link block px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:bg-[#181820] hover:text-white">Skills</a>
    <a href="/experience" data-route="experience" class="mobile-nav-link block px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:bg-[#181820] hover:text-white">Experience</a>
    <a href="/contact" data-route="contact" class="mobile-nav-link block px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:bg-[#181820] hover:text-white">Contact</a>
  </div>
</header>
`;
