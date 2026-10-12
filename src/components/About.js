import { profile } from "../data/profile.js";
import { projects } from "../data/projects.js";

export const About = `
<section id="about" class="py-12 sm:py-16 px-4 sm:px-6 max-w-6xl mx-auto">
  
  <!-- Section Header -->
  <div class="mb-8 sm:mb-10" data-aos="fade-down">
    <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
      Personal &amp; Professional Journey
    </h2>
    <p class="text-xs sm:text-sm text-zinc-400 max-w-xl mt-1.5">
      Continuous learner dedicated to clean code, systematic architecture, and robust web applications.
    </p>
  </div>

  <!-- Content Grid -->
  <div class="grid lg:grid-cols-12 gap-5 items-stretch">
    
    <!-- Profile & Vital Info Card (Left) -->
    <div class="lg:col-span-5 flex flex-col" data-aos="fade-right">
      <div class="bg-[#121217] border border-[#27272a] p-5 sm:p-6 rounded-2xl shadow-xl flex flex-col justify-between h-full">
        <div>
          <div class="flex items-center gap-3 pb-4 mb-4 border-b border-[#27272a]">
            <div class="w-12 h-12 rounded-xl overflow-hidden border border-[#800020]/60 shadow-md shrink-0 bg-[#181820]">
              <img src="${profile.photo}" alt="${profile.name}" class="w-full h-full object-cover object-top" />
            </div>
            <div>
              <h3 class="text-base font-bold text-white tracking-tight">${profile.name}</h3>
              <p class="text-xs text-zinc-400">${profile.subtitle}</p>
            </div>
          </div>

          <div class="space-y-3 text-xs sm:text-sm">
            <div class="flex justify-between items-center py-1.5 border-b border-[#27272a]/60">
              <span class="text-zinc-400">Full Name</span>
              <span class="text-white font-medium">${profile.fullName}</span>
            </div>
            <div class="flex justify-between items-center py-1.5 border-b border-[#27272a]/60">
              <span class="text-zinc-400">Location</span>
              <span class="text-white font-medium text-right">West Sumatra, ID</span>
            </div>
            <div class="flex justify-between items-center py-1.5 border-b border-[#27272a]/60">
              <span class="text-zinc-400">Age</span>
              <span class="text-white font-medium font-mono"><span id="realtime-age">24</span> Years</span>
            </div>
            <div class="flex justify-between items-center py-1.5 border-b border-[#27272a]/60">
              <span class="text-zinc-400">Specialty</span>
              <span class="text-white font-medium text-right">Full-Stack &amp; 3D Web</span>
            </div>
            <div class="flex justify-between items-center py-1.5">
              <span class="text-zinc-400">Education</span>
              <span class="text-white font-medium text-right">B.S. in Information Systems</span>
            </div>
          </div>
        </div>

        <div class="mt-5 pt-3 border-t border-[#27272a] flex items-center justify-between text-xs text-zinc-400">
          <span>University</span>
          <span class="px-2 py-0.5 rounded bg-[#800020]/20 text-[#ff8fa3] border border-[#800020]/30 font-medium">Universitas Islam Sumatera Barat</span>
        </div>
      </div>
    </div>

    <!-- Narrative & Highlights (Right) -->
    <div class="lg:col-span-7 flex flex-col justify-between" data-aos="fade-left">
      <div class="bg-[#121217] border border-[#27272a] p-5 sm:p-6 rounded-2xl shadow-xl flex flex-col justify-between h-full space-y-4">
        <div>
          <h3 class="text-base sm:text-lg font-bold text-white tracking-tight mb-2.5">
            Lifelong Learner Driven by Purpose &amp; Focus.
          </h3>
          
          <div class="text-zinc-300 text-xs sm:text-sm leading-relaxed space-y-3">
            <p>
              I engineer web applications that are responsive, accessible, and fast. My work spans from interactive 3D virtual spaces and developer extensions to full-stack administrative platforms.
            </p>
            <p>
              Beyond the visual surface, I build resilient backend APIs with PHP/Laravel and relational databases, incorporating defensive security patterns like SSRF firewalling, CSRF validation, and input sanitization.
            </p>
            <p>
              I believe in clean architecture, purposeful design, and building software that feels intuitive and enjoyable to use.
            </p>
          </div>
        </div>

        <!-- Highlight Metrics -->
        <div class="grid grid-cols-3 gap-2.5 pt-4 border-t border-[#27272a] text-center">
          <div class="p-3 bg-[#181820] rounded-xl border border-[#27272a]">
            <span class="block text-lg sm:text-2xl font-bold text-white font-mono">${profile.yearsCraft}</span>
            <span class="text-[10px] sm:text-xs text-zinc-400">Years Craft</span>
          </div>
          <div class="p-3 bg-[#181820] rounded-xl border border-[#27272a]">
            <span class="block text-lg sm:text-2xl font-bold text-[#ff8fa3] font-mono">${String(projects.length).padStart(2, "0")}</span>
            <span class="text-[10px] sm:text-xs text-zinc-400">Projects</span>
          </div>
          <div class="p-3 bg-[#181820] rounded-xl border border-[#27272a]">
            <span class="block text-lg sm:text-2xl font-bold text-white font-mono">${profile.integrity}</span>
            <span class="text-[10px] sm:text-xs text-zinc-400">Quality</span>
          </div>
        </div>

      </div>
    </div>

  </div>
</section>
`;

export const initAge = (birthYear = 2002, birthMonth = 6, birthDay = 20) => {
  const el = document.getElementById("realtime-age");
  if (!el) return;
  const now = new Date();
  let age = now.getFullYear() - birthYear;
  const m = now.getMonth() + 1 - birthMonth;
  if (m < 0 || (m === 0 && now.getDate() < birthDay)) {
    age--;
  }
  el.textContent = age;
};
