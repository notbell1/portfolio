import { profile } from "../data/profile.js";

const githubIcon = `<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`;

export const Hero = `
<section id="home" class="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
  
  <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
    
    <!-- Left Column: Personal Intro & CTAs (lg:col-span-7) -->
    <div class="lg:col-span-7 flex flex-col items-start space-y-4 sm:space-y-5 text-left order-2 lg:order-1" data-aos="fade-right">
      
      <!-- Open to Work Status Indicator -->
      <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#121217]/90 backdrop-blur-md border border-emerald-500/40 text-emerald-400 text-xs font-semibold shadow-lg shadow-emerald-950/20">
        <span class="relative flex h-2.5 w-2.5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span>Open to Work</span>
        <span class="text-zinc-500">•</span>
        <span class="text-zinc-300 font-normal">Available for Projects</span>
      </div>

      <!-- Main Headline -->
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
        Let's Learn Code <br class="hidden sm:inline" />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-[#ff8fa3]">
          to Make More Exploitation
        </span>
      </h1>

      <!-- Supporting Description -->
      <p class="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl font-normal">
        Hi, I'm <strong class="text-white font-semibold">${profile.fullName}</strong> (${profile.name}). Full-stack developer building robust web applications, defensive security utilities, and interactive digital experiences with clean architecture.
      </p>

      <!-- Primary & Secondary Action CTAs -->
      <div class="flex flex-wrap items-center gap-3 pt-1 w-full sm:w-auto">
        <a 
          href="#project"
          class="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#800020] hover:bg-[#9b111e] text-white text-xs sm:text-sm font-semibold shadow-lg shadow-[#800020]/30 transition-all active:scale-98 inline-flex items-center gap-2 cursor-pointer border border-[#9b111e]/40"
        >
          <span>Explore Projects</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </a>
        
        <a 
          href="#contact"
          class="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#121217]/85 hover:bg-[#181820] text-zinc-200 hover:text-white text-xs sm:text-sm font-semibold border border-[#27272a] hover:border-[#800020]/70 backdrop-blur-md shadow-md transition-all active:scale-98 inline-flex items-center gap-2 cursor-pointer"
        >
          <i data-lucide="mail" class="w-4 h-4 text-[#ff8fa3]"></i>
          <span>Get in Touch</span>
        </a>
      </div>

      <!-- Quick Connect Links Row -->
      <div class="pt-2 flex items-center gap-3 text-zinc-400">
        <span class="text-[11px] font-mono uppercase tracking-wider text-zinc-500">Contact:</span>
        <div class="flex items-center gap-2">
          <a 
            href="${profile.social.github}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="p-2 sm:p-2.5 rounded-xl bg-[#121217]/80 hover:bg-[#181820] border border-[#27272a] hover:border-[#800020] text-zinc-300 hover:text-white transition-all shadow-md backdrop-blur-md"
            title="GitHub Profile"
            aria-label="GitHub"
          >
            ${githubIcon}
          </a>
          <a 
            href="${profile.social.email}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="p-2 sm:p-2.5 rounded-xl bg-[#121217]/80 hover:bg-[#181820] border border-[#27272a] hover:border-[#800020] text-zinc-300 hover:text-[#ff8fa3] transition-all shadow-md backdrop-blur-md"
            title="Send Email"
            aria-label="Email"
          >
            <i data-lucide="mail" class="w-4 h-4"></i>
          </a>
          <a 
            href="${profile.social.telegram}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="p-2 sm:p-2.5 rounded-xl bg-[#121217]/80 hover:bg-[#181820] border border-[#27272a] hover:border-[#800020] text-zinc-300 hover:text-[#ff8fa3] transition-all shadow-md backdrop-blur-md"
            title="Telegram"
            aria-label="Telegram"
          >
            <i data-lucide="send" class="w-4 h-4"></i>
          </a>
          <a 
            href="${profile.social.whatsapp}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="p-2 sm:p-2.5 rounded-xl bg-[#121217]/80 hover:bg-[#181820] border border-[#27272a] hover:border-[#800020] text-zinc-300 hover:text-[#ff8fa3] transition-all shadow-md backdrop-blur-md"
            title="WhatsApp"
            aria-label="WhatsApp"
          >
            <i data-lucide="message-circle" class="w-4 h-4"></i>
          </a>
        </div>
      </div>

    </div>

    <!-- Right Column: Profile Photo (lg:col-span-5) -->
    <div class="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2" data-aos="fade-left">
      <div class="relative group">
        
        <!-- Ambient Maroon Glow behind photo -->
        <div class="absolute -inset-2 bg-gradient-to-tr from-[#800020] via-[#9b111e] to-[#4a0410] rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition duration-700"></div>
        
        <!-- Responsive Photo Container -->
        <div class="relative w-48 h-48 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-3xl overflow-hidden border-2 border-[#800020]/60 bg-[#121217] shadow-2xl">
          <img 
            src="${profile.photo}" 
            alt="${profile.fullName}" 
            class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            loading="eager"
          />
          
          <!-- Bottom identity vignette pill -->
          <div class="absolute inset-x-0 bottom-0 p-3 sm:p-4 bg-gradient-to-t from-black/95 via-black/60 to-transparent flex items-center justify-between">
            <div class="text-left">
              <span class="text-xs sm:text-sm font-bold text-white block leading-tight">${profile.name}</span>
              <span class="text-[10px] sm:text-xs text-zinc-400">Full-Stack Developer</span>
            </div>
            
          </div>
        </div>

      </div>
    </div>

  </div>

</section>
`;
