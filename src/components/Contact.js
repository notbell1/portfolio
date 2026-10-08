export const Contact = `
<section id="contact" class="bg-[#fafbfc] relative pt-6 sm:pt-8 md:pt-10 pb-6 px-4 sm:px-6 md:px-8">
  <div class="max-w-5xl w-full mx-auto flex flex-col justify-center">
    
    <!-- Section Header -->
    <div class="mb-3 sm:mb-5 text-center max-w-xl mx-auto" data-aos="fade-down" data-aos-duration="600">
      <span class="text-neutral-500 font-mono text-[10px] sm:text-xs uppercase tracking-widest block mb-1">Get In Touch</span>
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight mb-2">
        Let's Connect &amp; Collaborate
      </h2>
      <p class="text-xs sm:text-sm text-neutral-500 leading-relaxed">
        Open for freelance projects, technical discussions, and collaborative opportunities. Reach out directly through any channel below.
      </p>
    </div>

    <!-- Responsive Grid: Natural Columns on Mobile, Tablet & Desktop (NO Swipe) -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto w-full mb-6 sm:mb-8">
      
      <!-- Card 1: Direct Messaging -->
      <div class="w-full bg-white border border-neutral-200/90 p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-xs hover:shadow-md transition-all flex flex-col justify-between" data-aos="fade-up" data-aos-delay="100">
        <div>
          <div class="flex items-center gap-2 mb-2 sm:mb-3">
            <div class="p-2 rounded-xl bg-emerald-50 text-emerald-600">
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.19 8.19 0 01-5.82 2.41c-1.47 0-2.92-.39-4.18-1.14l-.3-.18-3.11.82.83-3.03-.2-.31a8.21 8.21 0 01-1.26-4.4c0-4.54 3.7-8.24 8.22-8.24zm4.78 11.64c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.68.85-.83 1.03-.15.17-.31.2-.57.07-.26-.13-1.1-.41-2.09-1.29-.77-.69-1.3-1.54-1.45-1.8-.15-.26-.02-.4.11-.53.12-.11.26-.31.39-.46.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.07-.13-.59-1.42-.81-1.95-.21-.51-.43-.44-.59-.45h-.5c-.17 0-.45.07-.69.33-.24.26-.91.89-.91 2.17 0 1.28.93 2.52 1.06 2.7.13.17 1.83 2.8 4.44 3.93.62.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.07 1.55-.63 1.77-1.25.22-.61.22-1.14.15-1.25-.06-.11-.23-.17-.49-.3z"/></svg>
            </div>
            <h3 class="text-sm font-bold text-neutral-900">WhatsApp &amp; Chat</h3>
          </div>
          <p class="text-xs text-neutral-500 mb-3">
            Fast response for quick inquiries and project discussions.
          </p>
        </div>
        <div class="space-y-1 pt-2 border-t border-neutral-100">
          <a href="https://api.whatsapp.com/send/?phone=6282287592930" target="_blank" class="flex items-center justify-between text-xs text-neutral-700 hover:text-neutral-950 font-medium p-1.5 rounded-lg hover:bg-neutral-50 transition-colors">
            <span>+62 822-8759-2930</span>
            <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 text-neutral-400"></i>
          </a>
          <a href="https://t.me/bellxss" target="_blank" class="flex items-center justify-between text-xs text-neutral-700 hover:text-neutral-950 font-medium p-1.5 rounded-lg hover:bg-neutral-50 transition-colors">
            <span>Telegram: @bellxss</span>
            <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 text-neutral-400"></i>
          </a>
        </div>
      </div>

      <!-- Card 2: Email & Professional -->
      <div class="w-full bg-white border border-neutral-200/90 p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-xs hover:shadow-md transition-all flex flex-col justify-between" data-aos="fade-up" data-aos-delay="200">
        <div>
          <div class="flex items-center gap-2 mb-2 sm:mb-3">
            <div class="p-2 rounded-xl bg-blue-50 text-blue-600">
              <i data-lucide="mail" class="w-4 h-4"></i>
            </div>
            <h3 class="text-sm font-bold text-neutral-900">Email &amp; Professional</h3>
          </div>
          <p class="text-xs text-neutral-500 mb-3">
            Formal inquiries, documentation, or detailed technical briefs.
          </p>
        </div>
        <div class="space-y-1 pt-2 border-t border-neutral-100">
          <button onclick="navigator.clipboard.writeText('abbelkadafi@gmail.com'); alert('Email copied to clipboard!');" class="w-full flex items-center justify-between text-xs text-neutral-700 hover:text-neutral-950 font-medium p-1.5 rounded-lg hover:bg-neutral-50 transition-colors cursor-pointer text-left">
            <span class="truncate">abbelkadafi@gmail.com</span>
            <span class="text-[10px] text-neutral-400 font-mono shrink-0 ml-1">Copy</span>
          </button>
          <a href="https://www.linkedin.com/in/abbel" target="_blank" class="flex items-center justify-between text-xs text-neutral-700 hover:text-neutral-950 font-medium p-1.5 rounded-lg hover:bg-neutral-50 transition-colors">
            <span>LinkedIn Profile</span>
            <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 text-neutral-400"></i>
          </a>
        </div>
      </div>

      <!-- Card 3: Location & Community -->
      <div class="w-full bg-white border border-neutral-200/90 p-4 sm:p-5 rounded-xl sm:rounded-2xl shadow-xs hover:shadow-md transition-all flex flex-col justify-between sm:col-span-2 lg:col-span-1" data-aos="fade-up" data-aos-delay="300">
        <div>
          <div class="flex items-center gap-2 mb-2 sm:mb-3">
            <div class="p-2 rounded-xl bg-neutral-100 text-neutral-800">
              <i data-lucide="map-pin" class="w-4 h-4"></i>
            </div>
            <h3 class="text-sm font-bold text-neutral-900">Location &amp; Dev</h3>
          </div>
          <p class="text-xs text-neutral-500 mb-3">
            Based in Indonesia, working across global web timezones.
          </p>
        </div>
        <div class="space-y-1 pt-2 border-t border-neutral-100">
          <a href="https://github.com/notbell1" target="_blank" class="flex items-center justify-between text-xs text-neutral-700 hover:text-neutral-950 font-medium p-1.5 rounded-lg hover:bg-neutral-50 transition-colors">
            <span>GitHub: @notbell1</span>
            <i data-lucide="arrow-up-right" class="w-3.5 h-3.5 text-neutral-400"></i>
          </a>
          <div class="flex items-center justify-between text-xs text-neutral-500 p-1.5">
            <span>Padang Pariaman, West Sumatra</span>
            <span class="text-[10px] font-mono">WIB</span>
          </div>
        </div>
      </div>

    </div>

    <!-- Complete Social Media Strip -->
    <div class="flex flex-wrap items-center justify-center gap-2 max-w-lg mx-auto" data-aos="fade-up" data-aos-delay="400">
      <a href="https://github.com/notbell1" target="_blank" class="p-2 sm:p-2.5 rounded-xl bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:border-neutral-400 hover:bg-neutral-50 transition-all shadow-2xs" title="GitHub" aria-label="GitHub">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/></svg>
      </a>
      <a href="https://www.linkedin.com/in/abbel" target="_blank" class="p-2 sm:p-2.5 rounded-xl bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:border-neutral-400 hover:bg-neutral-50 transition-all shadow-2xs" title="LinkedIn" aria-label="LinkedIn">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.53 1.53 0 1 0 0-3.06 1.53 1.53 0 0 0 0 3.06m1.37 9.74v-8.37H5.09v8.37h2.74z"/></svg>
      </a>
      <a href="https://api.whatsapp.com/send/?phone=6282287592930" target="_blank" class="p-2 sm:p-2.5 rounded-xl bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:border-neutral-400 hover:bg-neutral-50 transition-all shadow-2xs" title="WhatsApp" aria-label="WhatsApp">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0012.04 2zm.01 1.67c4.54 0 8.24 3.7 8.24 8.24 0 2.2-.86 4.28-2.42 5.83a8.19 8.19 0 01-5.82 2.41c-1.47 0-2.92-.39-4.18-1.14l-.3-.18-3.11.82.83-3.03-.2-.31a8.21 8.21 0 01-1.26-4.4c0-4.54 3.7-8.24 8.22-8.24zm4.78 11.64c-.26-.13-1.55-.76-1.79-.85-.24-.09-.41-.13-.59.13-.17.26-.68.85-.83 1.03-.15.17-.31.2-.57.07-.26-.13-1.1-.41-2.09-1.29-.77-.69-1.3-1.54-1.45-1.8-.15-.26-.02-.4.11-.53.12-.11.26-.31.39-.46.13-.15.17-.26.26-.43.09-.17.04-.33-.02-.46-.07-.13-.59-1.42-.81-1.95-.21-.51-.43-.44-.59-.45h-.5c-.17 0-.45.07-.69.33-.24.26-.91.89-.91 2.17 0 1.28.93 2.52 1.06 2.7.13.17 1.83 2.8 4.44 3.93.62.27 1.11.43 1.49.55.63.2 1.2.17 1.65.1.5-.07 1.55-.63 1.77-1.25.22-.61.22-1.14.15-1.25-.06-.11-.23-.17-.49-.3z"/></svg>
      </a>
      <a href="https://t.me/bellxss" target="_blank" class="p-2 sm:p-2.5 rounded-xl bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:border-neutral-400 hover:bg-neutral-50 transition-all shadow-2xs" title="Telegram" aria-label="Telegram">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/></svg>
      </a>
      <a href="https://x.com/Zxbell2/" target="_blank" class="p-2 sm:p-2.5 rounded-xl bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:border-neutral-400 hover:bg-neutral-50 transition-all shadow-2xs" title="X (Twitter)" aria-label="X">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      </a>
      <a href="https://www.instagram.com/_ntbbll" target="_blank" class="p-2 sm:p-2.5 rounded-xl bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:border-neutral-400 hover:bg-neutral-50 transition-all shadow-2xs" title="Instagram" aria-label="Instagram">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
      </a>
      <a href="https://www.facebook.com/Zx.Marchia/" target="_blank" class="p-2 sm:p-2.5 rounded-xl bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:border-neutral-400 hover:bg-neutral-50 transition-all shadow-2xs" title="Facebook" aria-label="Facebook">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
      </a>
      <a href="https://www.roblox.com/users/9013470120/profile" target="_blank" class="p-2 sm:p-2.5 rounded-xl bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:border-neutral-400 hover:bg-neutral-50 transition-all shadow-2xs" title="Roblox" aria-label="Roblox">
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true"><path d="M18.926 23.998L0 18.892 5.075 0l18.925 5.106-5.074 18.892zM15.42 12.012l-2.47-.665-.666 2.472 2.47.666.666-2.473z"/></svg>
      </a>
      <a href="https://uisb.ac.id/" target="_blank" class="p-2 sm:p-2.5 rounded-xl bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:border-neutral-400 hover:bg-neutral-50 transition-all shadow-2xs" title="University" aria-label="University">
        <svg class="w-4 h-4 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
      </a>
      <a href="mailto:abbelkadafi@gmail.com" target="_blank" class="p-2 sm:p-2.5 rounded-xl bg-white border border-neutral-200 text-neutral-600 hover:text-neutral-950 hover:border-neutral-400 hover:bg-neutral-50 transition-all shadow-2xs" title="Email" aria-label="Email">
        <svg class="w-4 h-4 fill-none stroke-current" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
      </a>
    </div>

  </div>

  <!-- Integrated Simple Footer -->
  <div class="w-full border-t border-neutral-200/80 mt-6 pt-3 px-3 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-neutral-400 max-w-6xl mx-auto">
    <p>&copy; 2026 Abbel. All rights reserved.</p>
    <div class="flex items-center gap-4">
      <span>Built with Vite &amp; Tailwind</span>
      <a href="#home" class="text-neutral-600 hover:text-neutral-900 font-medium transition-colors">
        Back to top &uarr;
      </a>
    </div>
  </div>
</section>
`;
