import { profile } from "../data/profile.js";

const githubIcon = `<svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>`;

export const Contact = `
<section id="contact" class="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
  
  <!-- Section Header -->
  <div class="mb-8 sm:mb-10" data-aos="fade-down">
    <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#800020]/20 border border-[#800020]/40 text-[#ff8fa3] text-xs font-medium mb-2">
      <i data-lucide="mail" class="w-3.5 h-3.5 text-[#ff8fa3]"></i>
      <span>Direct Communication</span>
    </div>
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
      Get in Touch
    </h2>
    <p class="text-xs sm:text-sm text-zinc-400 max-w-xl mt-1.5">
      Open for full-stack engineering roles, interactive web applications, and creative developer discussions.
    </p>
  </div>

  <div class="grid lg:grid-cols-12 gap-5 items-stretch">
    
    <!-- Direct Channels Cards (Left) -->
    <div class="lg:col-span-5 flex flex-col justify-between space-y-3" data-aos="fade-right">
      
      <!-- Email Card -->
      <a 
        href="${profile.social.email}" 
        class="bg-[#121217] border border-[#27272a] hover:border-[#800020]/70 p-4 sm:p-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all group flex items-center gap-3.5"
      >
        <div class="w-10 h-10 rounded-xl bg-[#181820] text-[#ff8fa3] flex items-center justify-center shrink-0 group-hover:bg-[#800020] group-hover:text-white transition-colors border border-[#27272a]">
          <i data-lucide="mail" class="w-5 h-5"></i>
        </div>
        <div>
          <span class="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">Email Direct</span>
          <span class="text-xs sm:text-sm font-bold text-white group-hover:text-[#ff8fa3] transition-colors">${profile.social.emailRaw}</span>
        </div>
      </a>

      <!-- GitHub Card -->
      <a 
        href="${profile.social.github}" 
        target="_blank" 
        rel="noopener noreferrer"
        class="bg-[#121217] border border-[#27272a] hover:border-[#800020]/70 p-4 sm:p-5 rounded-2xl shadow-xl hover:shadow-2xl transition-all group flex items-center gap-3.5"
      >
        <div class="w-10 h-10 rounded-xl bg-[#181820] text-[#ff8fa3] flex items-center justify-center shrink-0 group-hover:bg-[#800020] group-hover:text-white transition-colors border border-[#27272a]">
          ${githubIcon}
        </div>
        <div>
          <span class="text-[10px] font-mono uppercase tracking-wider text-zinc-400 block">GitHub Profile</span>
          <span class="text-xs sm:text-sm font-bold text-white group-hover:text-[#ff8fa3] transition-colors">@notbell1</span>
        </div>
      </a>

      <!-- Messaging Channels (WhatsApp & Telegram) -->
      <div class="grid grid-cols-2 gap-3">
        <a 
          href="${profile.social.whatsapp}" 
          target="_blank" 
          rel="noopener noreferrer"
          class="bg-[#121217] border border-[#27272a] hover:border-[#800020]/70 p-3.5 rounded-2xl shadow-xl hover:shadow-2xl transition-all text-center flex flex-col items-center justify-center gap-1 group"
        >
          <div class="w-8 h-8 rounded-lg bg-[#181820] text-[#ff8fa3] flex items-center justify-center group-hover:bg-[#800020] group-hover:text-white transition-colors border border-[#27272a]">
            <i data-lucide="message-square" class="w-4 h-4"></i>
          </div>
          <span class="text-xs font-bold text-white mt-1 group-hover:text-[#ff8fa3] transition-colors">WhatsApp</span>
          <span class="text-[10px] text-zinc-400">Quick Chat</span>
        </a>

        <a 
          href="${profile.social.telegram}" 
          target="_blank" 
          rel="noopener noreferrer"
          class="bg-[#121217] border border-[#27272a] hover:border-[#800020]/70 p-3.5 rounded-2xl shadow-xl hover:shadow-2xl transition-all text-center flex flex-col items-center justify-center gap-1 group"
        >
          <div class="w-8 h-8 rounded-lg bg-[#181820] text-[#ff8fa3] flex items-center justify-center group-hover:bg-[#800020] group-hover:text-white transition-colors border border-[#27272a]">
            <i data-lucide="send" class="w-4 h-4"></i>
          </div>
          <span class="text-xs font-bold text-white mt-1 group-hover:text-[#ff8fa3] transition-colors">Telegram</span>
          <span class="text-[10px] text-zinc-400">@bellxss</span>
        </a>
      </div>

    </div>

    <!-- Quick Message Composer Card (Right) -->
    <div class="lg:col-span-7 flex flex-col justify-between" data-aos="fade-left">
      <div class="bg-[#121217] border border-[#27272a] p-5 sm:p-6 rounded-2xl shadow-xl h-full flex flex-col justify-between">
        <div>
          <h3 class="text-base font-bold text-white tracking-tight mb-1">
            Send a Direct Dispatch
          </h3>
          <p class="text-xs text-zinc-400 mb-4">
            Fill in your message and it will compose a pre-formatted email directly in your client.
          </p>

          <form id="contact-form" onsubmit="window.handleContactSubmit && window.handleContactSubmit(event)" class="space-y-3">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label for="contact-name" class="block text-xs font-medium text-zinc-300 mb-1">Your Name</label>
                <input 
                  type="text" 
                  id="contact-name" 
                  required 
                  placeholder="e.g. Jane Doe"
                  class="w-full px-3 py-2 rounded-xl border border-[#27272a] bg-[#181820] text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#800020] transition-colors"
                />
              </div>
              <div>
                <label for="contact-subject" class="block text-xs font-medium text-zinc-300 mb-1">Topic / Subject</label>
                <input 
                  type="text" 
                  id="contact-subject" 
                  required 
                  placeholder="e.g. Project Collaboration"
                  class="w-full px-3 py-2 rounded-xl border border-[#27272a] bg-[#181820] text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#800020] transition-colors"
                />
              </div>
            </div>

            <div>
              <label for="contact-message" class="block text-xs font-medium text-zinc-300 mb-1">Message</label>
              <textarea 
                id="contact-message" 
                rows="4" 
                required 
                placeholder="Share your requirements, ideas, or questions..."
                class="w-full px-3 py-2 rounded-xl border border-[#27272a] bg-[#181820] text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-[#800020] transition-colors resize-none"
              ></textarea>
            </div>

            <button 
              type="submit"
              class="w-full py-2.5 rounded-xl bg-[#800020] hover:bg-[#9b111e] text-white text-xs font-semibold transition-all shadow-lg shadow-[#800020]/25 active:scale-98 cursor-pointer flex items-center justify-center gap-1.5 border border-[#9b111e]/40"
            >
              <i data-lucide="send" class="w-3.5 h-3.5"></i>
              <span>Transmit Message via Email</span>
            </button>
          </form>
        </div>

        <div class="mt-4 pt-3 border-t border-[#27272a] flex items-center justify-between text-[11px] text-zinc-400">
          <span>Protected Privacy</span>
          <span>Zero Server Storage</span>
        </div>
      </div>
    </div>

  </div>

</section>
`;

export const initContactForm = () => {
  window.handleContactSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById("contact-name")?.value || "";
    const subject = document.getElementById("contact-subject")?.value || "";
    const message = document.getElementById("contact-message")?.value || "";

    const mailtoUrl = `mailto:${profile.social.emailRaw}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${subject}`,
    )}&body=${encodeURIComponent(`From: ${name}\n\nMessage:\n${message}`)}`;

    window.location.href = mailtoUrl;
  };
};
