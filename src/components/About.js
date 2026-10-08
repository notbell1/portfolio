import { projects } from "../data/projects.js";

export const About = `
<section id="about" class="bg-[#fafbfc] relative py-6 sm:py-8 md:py-10 px-4 sm:px-6 md:px-8">
  <div class="max-w-6xl w-full mx-auto flex flex-col justify-center">
    
    <!-- Section Header -->
    <div class="mb-3 sm:mb-5" data-aos="fade-down" data-aos-duration="600">
      <span class="text-neutral-500 font-mono text-[10px] sm:text-xs uppercase tracking-widest block mb-1">About Me</span>
      <h2 class="text-2xl sm:text-3xl md:text-4xl font-extrabold text-neutral-900 tracking-tight">
        Personal &amp; Professional
      </h2>
    </div>

    <!-- Content Grid -->
    <div class="grid lg:grid-cols-12 gap-4 sm:gap-6 items-stretch">
      
      <!-- Identity Card (Left) -->
      <div class="lg:col-span-5 flex flex-col" data-aos="fade-right" data-aos-duration="700">
        <div class="bg-white border border-neutral-200/90 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xs flex flex-col justify-between h-full">
          <div>
            <h3 class="text-xs font-bold uppercase tracking-wider text-neutral-400 font-mono mb-3 sm:mb-4 flex items-center gap-1.5">
              <i data-lucide="user" class="w-4 h-4 text-neutral-600"></i>
              Personal Information
            </h3>

            <div class="space-y-2.5 sm:space-y-4 text-xs sm:text-sm">
              <div class="flex justify-between items-center pb-2 border-b border-neutral-100">
                <span class="text-neutral-500 text-xs">Full Name</span>
                <span class="text-neutral-900 font-medium">Abbel</span>
              </div>
              <div class="flex justify-between items-center pb-2 border-b border-neutral-100">
                <span class="text-neutral-500 text-xs">Birthday</span>
                <span class="text-neutral-900 font-medium">June 20, 2002</span>
              </div>
              <div class="flex justify-between items-center pb-2 border-b border-neutral-100">
                <span class="text-neutral-500 text-xs">Age</span>
                <span class="text-neutral-900 font-medium font-mono"><span id="realtime-age">--</span> Years</span>
              </div>
              <div class="flex justify-between items-center pb-2 border-b border-neutral-100">
                <span class="text-neutral-500 text-xs">Location</span>
                <span class="text-neutral-900 font-medium text-right">Padang Pariaman, ID</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="text-neutral-500 text-xs">Status</span>
                <span class="text-neutral-900 font-medium text-right">React &amp; Systems</span>
              </div>
            </div>
          </div>

          <div class="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-500">
            <span>Education</span>
            <span class="px-2 py-0.5 rounded bg-neutral-100 text-neutral-700 font-medium">S1 Information Systems</span>
          </div>
        </div>
      </div>

      <!-- Narrative & Highlights (Right) -->
      <div class="lg:col-span-7 flex flex-col justify-between" data-aos="fade-left" data-aos-duration="700">
        <div class="bg-white border border-neutral-200/90 p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-xs flex flex-col justify-between h-full space-y-4 sm:space-y-5">
          <div>
            <h3 class="text-base sm:text-lg font-bold text-neutral-900 tracking-tight mb-2 sm:mb-3">
              Lifelong Learner Driven by Purpose &amp; Focus.
            </h3>
            
            <div class="text-neutral-600 text-xs sm:text-sm leading-relaxed space-y-2.5 sm:space-y-3">
              <p>
                I specialize in frontend technologies with a primary focus on React, TypeScript, and modern component systems. I engineer web applications that are responsive, accessible, and fast.
              </p>
              <p>
                Beyond frontend interfaces, I build fullstack applications with Laravel backend APIs and relational databases. I believe in clean code, disciplined architecture, and purposeful design.
              </p>
            </div>
          </div>

          <!-- Quick Highlight Metrics (Synchronized) -->
          <div class="grid grid-cols-3 gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-neutral-100 text-center">
            <div class="p-2 sm:p-3 bg-neutral-50 rounded-xl">
              <span class="block text-base sm:text-2xl font-bold text-neutral-900 font-mono">02+</span>
              <span class="text-[9px] sm:text-xs text-neutral-500">Years Craft</span>
            </div>
            <div class="p-2 sm:p-3 bg-neutral-50 rounded-xl">
              <span class="block text-base sm:text-2xl font-bold text-neutral-900 font-mono">${String(projects.length).padStart(2, "0")}</span>
              <span class="text-[9px] sm:text-xs text-neutral-500">Projects</span>
            </div>
            <div class="p-2 sm:p-3 bg-neutral-50 rounded-xl">
              <span class="block text-base sm:text-2xl font-bold text-neutral-900 font-mono">100%</span>
              <span class="text-[9px] sm:text-xs text-neutral-500">Integrity</span>
            </div>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>
`;

export const initAge = (year, month, day) => {
  const ageElement = document.getElementById("realtime-age");
  if (!ageElement) return;

  const today = new Date();
  const birthDate = new Date(year, month - 1, day);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  ageElement.innerText = age;
};
