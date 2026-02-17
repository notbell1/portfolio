export const About = `
<section id="about" class="min-h-screen flex items-center bg-slate-900 relative overflow-hidden py-10 lg:py-0 scroll-mt-18">
  
  <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/5 blur-[120px] rounded-full pointer-events-none"></div>
  <div class="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 blur-[100px] rounded-full pointer-events-none"></div>

  <div class="max-w-6xl mx-auto px-6 md:px-10 relative z-10 w-full">
    
    <div class="mb-8 lg:mb-12" data-aos="fade-down" data-aos-duration="1000">
      <h2 class="text-sky-400 font-mono text-xs lg:text-sm tracking-[0.3em] uppercase mb-2 italic flex items-center gap-3">
        <span class="h-[1px] w-8 bg-sky-500"></span>About Me
      </h2>
      <h3 class="text-4xl lg:text-5xl font-black text-white tracking-tighter uppercase leading-none">
        Personal <span class="text-slate-500 italic">&</span> Professional
      </h3>
    </div>

    <div class="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
      
      <div class="lg:col-span-5" data-aos="fade-right" data-aos-duration="1200" data-aos-delay="200">
        <div class="bg-slate-800/20 border border-slate-800 p-6 lg:p-8 rounded-2xl backdrop-blur-sm shadow-2xl relative overflow-hidden group">
          <div class="absolute inset-0 bg-sky-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          <h4 class="text-lg font-bold text-white mb-6 flex items-center gap-3 uppercase tracking-tight italic">
            <i data-lucide="fingerprint" class="w-5 h-5 text-sky-500"></i> Identity
          </h4>

          <div class="space-y-4 lg:space-y-5 relative z-10">
            <div class="flex flex-col border-b border-slate-800/50 pb-3">
              <span class="text-[9px] uppercase tracking-[0.2em] text-sky-500 font-black mb-1">Full Name</span>
              <span class="text-slate-200 font-medium tracking-tight uppercase text-sm lg:text-base">Abbel</span>
            </div>

            <div class="grid grid-cols-2 gap-4 border-b border-slate-800/50 pb-3">
              <div class="flex flex-col">
                <span class="text-[9px] uppercase tracking-[0.2em] text-sky-500 font-black mb-1">Birthday</span>
                <span class="text-slate-200 text-xs lg:text-sm">June 20, 2002</span>
              </div>
              <div class="flex flex-col">
                <span class="text-[9px] uppercase tracking-[0.2em] text-sky-500 font-black mb-1">Age</span>
                <span class="text-slate-200 text-xs lg:text-sm"><span id="realtime-age">--</span> Years</span>
              </div>
            </div>

            <div class="flex flex-col border-b border-slate-800/50 pb-3">
              <span class="text-[9px] uppercase tracking-[0.2em] text-sky-500 font-black mb-1">Address</span>
              <span class="text-slate-200 italic flex items-center gap-2 text-xs lg:text-sm">
                <i data-lucide="map-pin" class="w-3 h-3 text-sky-500"></i> Padang Pariaman, West Sumatera, Indonesia
              </span>
            </div>

            <div class="flex flex-col">
              <span class="text-[9px] uppercase tracking-[0.2em] text-sky-500 font-black mb-1">Current Status</span>
              <span class="text-slate-200 leading-relaxed font-light italic text-xs lg:text-sm tracking-tight">Focusing on Deep Learning & Development</span>
            </div>
          </div>
        </div>
      </div>

      <div class="lg:col-span-7" data-aos="fade-left" data-aos-duration="1200" data-aos-delay="400">
        <div class="space-y-5 lg:space-y-6">
          <h4 class="text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tighter uppercase italic">
            A Lifelong Learner <span class="text-sky-500 font-black">Driven by Focus.</span>
          </h4>
          
          <div class="text-slate-400 text-sm lg:text-[15px] xl:text-base leading-relaxed font-light space-y-4 italic text-justify">
            <p>
              I am a <span class="text-white font-medium border-b border-sky-500/30">Frontend Developer</span> dedicated to mastering immersive interfaces. My technical curiosity extends beyond the surface; I have a deep interest in backend systems like <span class="text-white">Laravel</span> and <span class="text-white">MySQL</span>, and I am actively exploring <span class="text-white">Ethical Hacking</span> and <span class="text-white">Roblox Luau</span>.
            </p>
            <p>
              I am a man of few words, possessing a <span class="text-sky-400 font-semibold uppercase">Perfectionist Mindset</span>. I am highly attentive to small details, ensuring that every line of logic serves a clear purpose. I thrive in <span class="text-sky-400 font-semibold uppercase">Deep Focus</span>; when I am in the zone, I prefer an undisturbed environment to maintain peak cognitive momentum and efficiency.
            </p>
            <p>
              While I am a quiet individual who cherishes solitary work, I am a highly capable <span class="text-white font-medium italic">team player</span>. I bring boundless enthusiasm to projects I love, valuing integrity and the collective growth of the team above all else.
            </p>
          </div>

          <div class="flex gap-10 pt-5 border-t border-slate-800" data-aos="fade-up" data-aos-offset="0" data-aos-delay="600">
            <div>
              <p class="text-3xl lg:text-4xl font-black text-white tracking-tighter">02+</p>
              <p class="text-[9px] uppercase tracking-widest text-slate-500 font-bold mt-1">Years of Craft</p>
            </div>
            <div>
              <p class="text-3xl lg:text-4xl font-black text-white tracking-tighter">03+</p>
              <p class="text-[9px] uppercase tracking-widest text-slate-500 font-bold mt-1">Global Projects</p>
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
  if (ageElement) {
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
  }
};
