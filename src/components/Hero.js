import { profile } from "../data/profile.js";

const githubIcon = `<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`;

export const Hero = `
<section id="home" class="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 px-4 sm:px-6 max-w-6xl mx-auto">
  <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
    <div class="lg:col-span-7 flex flex-col items-center lg:items-start space-y-4 sm:space-y-5 text-center lg:text-left order-2 lg:order-1">
      <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-[#181820] border border-emerald-500/40 text-emerald-400 text-xs font-semibold">
        <span class="relative flex h-2.5 w-2.5">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
        </span>
        <span>Open to Work</span>
      </div>

      <h1 class="text-[clamp(1.3rem,4.6vw,3.3rem)] lg:text-[clamp(1.7rem,3.2vw,3.35rem)] font-extrabold text-white tracking-tight leading-[1.18] w-full">
        <span class="block whitespace-nowrap">Lets Learn Code to</span>
        <span class="block whitespace-nowrap text-[#ff8fa3]">Make More Exploitation</span>
      </h1>

      <p class="text-sm sm:text-base text-zinc-300 leading-relaxed max-w-xl font-normal mx-auto lg:mx-0">
        Hi, I'm <strong class="text-white font-semibold">${profile.fullName}</strong>. Focusing on <strong class="text-white font-medium">Web Development</strong> and <strong class="text-white font-medium">Junior Cyber Security</strong> — building robust web applications, defensive security utilities, and interactive digital experiences with clean architecture.
      </p>

      <div class="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1 w-full sm:w-auto">
        <a 
          href="/project"
          data-route="project"
          class="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#800020] hover:bg-[#9b111e] text-white text-xs sm:text-sm font-semibold shadow-[0_4px_0_0_#000] transition-all hover:-translate-y-0.5 active:translate-y-0.5 inline-flex items-center gap-2 cursor-pointer border border-[#9b111e]"
        >
          <span>Explore Projects</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </a>
        
        <button 
          id="btn-download-cv"
          type="button"
          class="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-[#181820] text-zinc-200 hover:text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 cursor-pointer"
        >
          <i data-lucide="download" class="w-4 h-4 text-[#ff8fa3]"></i>
          <span>Download CV</span>
        </button>
      </div>

      <div class="pt-2 flex flex-wrap sm:flex-nowrap items-center justify-center lg:justify-start gap-3 text-zinc-400 w-full lg:w-auto">
        <span class="text-[11px] font-mono uppercase tracking-wider text-zinc-500">Contact:</span>
        <div class="flex items-center gap-2">
          <a 
            href="${profile.social.github}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="p-2 sm:p-2.5 rounded-xl bg-[#181820] text-zinc-300 hover:text-white transition-all"
            title="GitHub Profile"
            aria-label="GitHub"
          >
            ${githubIcon}
          </a>
          <a 
            href="${profile.social.email}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="p-2 sm:p-2.5 rounded-xl bg-[#181820] text-zinc-300 hover:text-[#ff8fa3] transition-all"
            title="Send Email"
            aria-label="Email"
          >
            <i data-lucide="mail" class="w-4 h-4"></i>
          </a>
          <a 
            href="${profile.social.telegram}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="p-2 sm:p-2.5 rounded-xl bg-[#181820] text-zinc-300 hover:text-[#ff8fa3] transition-all"
            title="Telegram"
            aria-label="Telegram"
          >
            <i data-lucide="send" class="w-4 h-4"></i>
          </a>
          <a 
            href="${profile.social.whatsapp}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="p-2 sm:p-2.5 rounded-xl bg-[#181820] text-zinc-300 hover:text-[#ff8fa3] transition-all"
            title="WhatsApp"
            aria-label="WhatsApp"
          >
            <i data-lucide="message-circle" class="w-4 h-4"></i>
          </a>
        </div>
      </div>
    </div>

    <div class="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
      <div class="relative group">
        <div class="cinematic-tilt-card relative w-48 h-48 sm:w-60 sm:h-60 md:w-64 md:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-2xl overflow-hidden bg-[#121217]">
          <img 
            src="${profile.photo}" 
            alt="${profile.fullName}" 
            class="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            loading="eager"
          />
        </div>
      </div>
    </div>
  </div>
</section>
`;
