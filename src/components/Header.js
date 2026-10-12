export const Header = `
<header class="fixed top-0 left-0 right-0 z-40 bg-[#09090b]/80 backdrop-blur-md border-b border-[#27272a] transition-all">
  <div class="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-18 flex items-center justify-between">
    
    <!-- Wordmark / Brand -->
    <a href="#home" class="flex items-center gap-2 group">
      <div>
        <span class="block text-base sm:text-lg font-extrabold text-white tracking-tight leading-none group-hover:text-[#ff8fa3] transition-colors">
          Abbel
        </span>
        <span class="text-[10px] sm:text-xs text-zinc-400 font-medium leading-tight">
          Developer Portfolio
        </span>
      </div>
    </a>

    <!-- Desktop Navigation Links -->
    <nav class="hidden md:flex items-center gap-1 sm:gap-1.5" aria-label="Main Navigation">
      <a href="#home" class="nav-link px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors" data-section="home">Home</a>
      <a href="#about" class="nav-link px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors" data-section="about">About</a>
      <a href="#project" class="nav-link px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors" data-section="project">Projects</a>
      <a href="#skill" class="nav-link px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors" data-section="skill">Skills</a>
      <a href="#experience" class="nav-link px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-colors" data-section="experience">Experience</a>
      
    </nav>

    <!-- Header Actions -->
    <div class="hidden sm:flex items-center gap-2">
      <a 
        href="#contact"
        class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#800020] hover:bg-[#9b111e] text-white text-xs font-medium shadow-xs transition-all active:scale-98 cursor-pointer border border-[#9b111e]/40 shadow-[#800020]/25"
        title="Get in touch"
      >
        <i data-lucide="mail" class="w-3.5 h-3.5"></i>
        <span>Get in Touch</span>
      </a>
    </div>

    <!-- Mobile Menu Button -->
    <div class="flex items-center gap-2 md:hidden">
      <button 
        id="mobile-menu-toggle"
        class="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
        aria-label="Toggle navigation menu"
      >
        <i data-lucide="menu" class="w-5 h-5"></i>
      </button>
    </div>

  </div>

  <!-- Mobile Dropdown Navigation -->
  <div id="mobile-menu" class="hidden md:hidden border-t border-[#27272a] bg-[#0e0e13]/95 backdrop-blur-md px-4 py-3 space-y-1">
    <a href="#home" class="mobile-nav-link block px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white">Home &amp; Solar System</a>
    <a href="#about" class="mobile-nav-link block px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white">About Developer</a>
    <a href="#project" class="mobile-nav-link block px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white">Projects Showcase</a>
    <a href="#skill" class="mobile-nav-link block px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white">Technical Stack</a>
    <a href="#experience" class="mobile-nav-link block px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white">Experience</a>
    <a href="#contact" class="mobile-nav-link block px-3 py-2 rounded-lg text-sm font-medium text-zinc-300 hover:bg-white/5 hover:text-white">Contact</a>
  </div>
</header>
`;
