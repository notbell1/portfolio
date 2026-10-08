export const Header = `
<header class="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-neutral-200/80 transition-all duration-300">
  <div class="h-14 sm:h-16 flex items-center">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 w-full flex justify-between items-center">
      
      <!-- Brand Logo -->
      <a href="#home" class="group flex items-center gap-2">
        <span class="w-8 h-8 rounded-lg bg-neutral-900 text-white font-bold text-sm flex items-center justify-center transition-transform group-hover:scale-105">
          A
        </span>
        <span class="text-neutral-900 font-bold tracking-tight text-base uppercase">
          Abbel
        </span>
      </a>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-1 lg:gap-2">
        ${[
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "education", label: "Education" },
          { id: "skill", label: "Skills" },
          { id: "experience", label: "Experience" },
          { id: "project", label: "Projects" },
        ]
          .map(
            (item) => `
          <a href="#${item.id}" class="nav-link relative px-3 py-2 text-xs font-medium text-neutral-600 hover:text-neutral-950 transition-colors" data-section="${item.id}">
            ${item.label}
            <span class="nav-underline absolute bottom-0 left-3 right-3 h-[2px] bg-neutral-900 scale-x-0 transition-transform duration-200 origin-left"></span>
          </a>
        `,
          )
          .join("")}

        <a href="#contact" class="ml-3 px-4 py-2 rounded-lg bg-neutral-900 text-white text-xs font-medium hover:bg-neutral-800 transition-colors active:scale-95 shadow-sm">
          Get in Touch
        </a>
      </nav>

      <!-- Mobile Menu Button -->
      <button id="menuBtn" class="md:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors" aria-label="Toggle Navigation">
        <div class="flex flex-col gap-1.5 w-5 items-end">
          <span id="line1" class="w-5 h-0.5 bg-neutral-800 transition-all duration-200"></span>
          <span id="line2" class="w-3.5 h-0.5 bg-neutral-800 transition-all duration-200"></span>
          <span id="line3" class="w-5 h-0.5 bg-neutral-800 transition-all duration-200"></span>
        </div>
      </button>

    </div>
  </div>

  <!-- Mobile Drawer -->
  <div id="mobileMenu" class="md:hidden overflow-hidden max-h-0 bg-white border-b border-neutral-200 transition-all duration-300 ease-in-out">
    <div class="px-6 py-4 flex flex-col gap-1">
      ${[
        { id: "home", label: "Home" },
        { id: "about", label: "About" },
        { id: "education", label: "Education" },
        { id: "skill", label: "Skills" },
        { id: "experience", label: "Experience" },
        { id: "project", label: "Projects" },
        { id: "contact", label: "Contact" },
      ]
        .map(
          (item) => `
        <a href="#${item.id}" class="mobile-link py-2.5 text-sm font-medium text-neutral-700 hover:text-neutral-950 transition-colors border-b border-neutral-100 last:border-none">
          ${item.label}
        </a>
      `,
        )
        .join("")}
    </div>
  </div>
</header>
`;
