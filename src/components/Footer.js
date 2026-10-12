import { profile } from "../data/profile.js";

const githubIcon = `<svg class="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`;

export const Footer = `
<footer id="contact" class="border-t border-[#27272a]/60 bg-transparent mt-16 pt-16 pb-12 px-4 sm:px-6 relative">
  <div class="max-w-6xl mx-auto space-y-12">
    
    <!-- 1. GET IN TOUCH SECTION (Simplified, No Form, 4 Social Cards in New Tabs) -->
    <div class="text-center max-w-2xl mx-auto space-y-3" data-aos="fade-up">
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
        Get in Touch
      </h2>
      <p class="text-xs sm:text-sm text-zinc-400 leading-relaxed">
        Open for full-stack engineering roles, modern web applications, and collaborative ventures. Reach out directly across any channel below:
      </p>
    </div>

    <!-- 4 Direct Social Channel Cards Grid -->
    <div class="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 max-w-4xl mx-auto" data-aos="fade-up" data-aos-delay="100">
      
      <!-- GitHub Card -->
      <a 
        href="${profile.social.github}" 
        target="_blank" 
        rel="noopener noreferrer"
        class="p-4 sm:p-5 rounded-2xl bg-[#121217]/90 hover:bg-[#181820] border border-[#27272a] hover:border-[#800020] text-zinc-300 hover:text-white transition-all shadow-xl hover:shadow-2xl group flex flex-col items-center justify-center gap-2.5 text-center active:scale-98"
        title="Open GitHub Profile in new tab"
      >
        <div class="w-10 h-10 rounded-xl bg-[#181820] text-[#ff8fa3] flex items-center justify-center group-hover:bg-[#800020] group-hover:text-white transition-colors border border-[#27272a]">
          ${githubIcon}
        </div>
        <div>
          <span class="text-xs sm:text-sm font-bold text-white group-hover:text-[#ff8fa3] transition-colors block">GitHub</span>
          
        </div>
      </a>

      <!-- Email Card -->
      <a 
        href="${profile.social.email}" 
        target="_blank" 
        rel="noopener noreferrer"
        class="p-4 sm:p-5 rounded-2xl bg-[#121217]/90 hover:bg-[#181820] border border-[#27272a] hover:border-[#800020] text-zinc-300 hover:text-white transition-all shadow-xl hover:shadow-2xl group flex flex-col items-center justify-center gap-2.5 text-center active:scale-98"
        title="Send direct email in new tab"
      >
        <div class="w-10 h-10 rounded-xl bg-[#181820] text-[#ff8fa3] flex items-center justify-center group-hover:bg-[#800020] group-hover:text-white transition-colors border border-[#27272a]">
          <i data-lucide="mail" class="w-5 h-5"></i>
        </div>
        <div>
          <span class="text-xs sm:text-sm font-bold text-white group-hover:text-[#ff8fa3] transition-colors block">Email</span>
          
        </div>
      </a>

      <!-- Telegram Card -->
      <a 
        href="${profile.social.telegram}" 
        target="_blank" 
        rel="noopener noreferrer"
        class="p-4 sm:p-5 rounded-2xl bg-[#121217]/90 hover:bg-[#181820] border border-[#27272a] hover:border-[#800020] text-zinc-300 hover:text-white transition-all shadow-xl hover:shadow-2xl group flex flex-col items-center justify-center gap-2.5 text-center active:scale-98"
        title="Open Telegram Chat in new tab"
      >
        <div class="w-10 h-10 rounded-xl bg-[#181820] text-[#ff8fa3] flex items-center justify-center group-hover:bg-[#800020] group-hover:text-white transition-colors border border-[#27272a]">
          <i data-lucide="send" class="w-5 h-5"></i>
        </div>
        <div>
          <span class="text-xs sm:text-sm font-bold text-white group-hover:text-[#ff8fa3] transition-colors block">Telegram</span>
          
        </div>
      </a>

      <!-- WhatsApp Card -->
      <a 
        href="${profile.social.whatsapp}" 
        target="_blank" 
        rel="noopener noreferrer"
        class="p-4 sm:p-5 rounded-2xl bg-[#121217]/90 hover:bg-[#181820] border border-[#27272a] hover:border-[#800020] text-zinc-300 hover:text-white transition-all shadow-xl hover:shadow-2xl group flex flex-col items-center justify-center gap-2.5 text-center active:scale-98"
        title="Open WhatsApp in new tab"
      >
        <div class="w-10 h-10 rounded-xl bg-[#181820] text-[#ff8fa3] flex items-center justify-center group-hover:bg-[#800020] group-hover:text-white transition-colors border border-[#27272a]">
          <i data-lucide="message-circle" class="w-5 h-5"></i>
        </div>
        <div>
          <span class="text-xs sm:text-sm font-bold text-white group-hover:text-[#ff8fa3] transition-colors block">WhatsApp</span>
          
        </div>
      </a>

    </div>

    <!-- 2. FOOTER BAR -->
    <div class="pt-8 border-t border-[#27272a] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
      
      <div class="flex items-center gap-2">
        <div>
          <span class="font-bold text-white text-sm">Abbel</span>
          <span class="text-zinc-500">• Developer Portfolio </span>
        </div>
      </div>

      <!-- Copyright & Back to Top -->
      <div class="flex items-center gap-3">
        <span>&copy; ${new Date().getFullYear()} ${profile.fullName}</span>
        <button 
          onclick="window.scrollTo({ top: 0, behavior: 'smooth' })" 
          class="p-1.5 rounded-lg bg-[#121217] hover:bg-[#181820] text-zinc-300 hover:text-white border border-[#27272a] hover:border-[#800020] transition-colors cursor-pointer"
          title="Back to Top"
          aria-label="Back to Top"
        >
          <i data-lucide="arrow-up" class="w-3.5 h-3.5 text-[#ff8fa3]"></i>
        </button>
      </div>

    </div>

  </div>
</footer>
`;
