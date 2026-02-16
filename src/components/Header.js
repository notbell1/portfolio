export const Header = `
<nav class="fixed top-0 w-full z-[100] bg-slate-900/90 backdrop-blur-xl border-b border-slate-800">
  <div class="h-20 flex items-center">
    <div class="max-w-7xl mx-auto px-6 w-full flex justify-between items-center">
      <a href="#home" class="text-xl font-black tracking-tighter text-white uppercase flex items-center gap-2">
        <span class="bg-sky-500 text-slate-900 px-1.5 rounded-sm">Bell</span>
        <span class="text-white">PORTFOLIO</span>
      </a>

      <ul class="hidden xl:flex items-center gap-6 text-[10px] uppercase tracking-[0.15em] font-bold text-slate-400">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skill">Skills</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#project">Projects</a></li>
        <li><a href="#news">Articles</a></li>
        <li><a href="#contact" class="ml-4 bg-sky-500 text-slate-900 px-4 py-2 rounded-sm">Let's Talk</a></li>
      </ul>

      <button id="menuBtn" class="xl:hidden text-white p-2 flex flex-col gap-1.5 items-end focus:outline-none">
        <span id="line1" class="w-6 h-0.5 bg-white transition-all duration-300"></span>
        <span id="line2" class="w-4 h-0.5 bg-sky-500 transition-all duration-300"></span>
        <span id="line3" class="w-6 h-0.5 bg-white transition-all duration-300"></span>
      </button>
    </div>
  </div>

  <div id="mobileMenu" class="xl:hidden overflow-hidden max-h-0 bg-slate-900 border-b border-slate-800 transition-all duration-500 ease-in-out">
    <ul class="flex flex-col gap-4 p-6 text-[10px] uppercase tracking-[0.15em] font-bold text-slate-400">
      <li><a href="#home" class="mobile-link block py-2 hover:text-sky-500">Home</a></li>
      <li><a href="#about" class="mobile-link block py-2 hover:text-sky-500">About</a></li>
      <li><a href="#education" class="mobile-link block py-2 hover:text-sky-500">Education</a></li>
      <li><a href="#skill" class="mobile-link block py-2 hover:text-sky-500">Skills</a></li>
      <li><a href="#experience" class="mobile-link block py-2 hover:text-sky-500">Experience</a></li>
      <li><a href="#project" class="mobile-link block py-2 hover:text-sky-500">Projects</a></li>
      <li><a href="#news" class="mobile-link block py-2 hover:text-sky-500">Articles</a></li>
      <li><a href="#contact" class="mobile-link mt-2 bg-sky-500 text-slate-900 px-4 py-3 rounded-sm text-center">Let's Talk</a></li>
    </ul>
  </div>
</nav>
`;
