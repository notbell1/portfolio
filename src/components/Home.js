export const Home = `
<section id="home" class="min-h-screen flex items-center bg-slate-900 relative overflow-hidden pt-20 font-mono">
  <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
    <div class="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-sky-500/10 blur-[130px] rounded-full animate-pulse"></div>
    <div class="absolute bottom-[10%] right-[5%] w-[30%] h-[30%] bg-red-500/5 blur-[100px] rounded-full"></div>
  </div>

  <div class="max-w-7xl mx-auto px-6 md:px-10 relative z-10 w-full">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      
      <div class="text-center lg:text-left order-2 lg:order-1">
        <h2 class="text-sky-400 font-mono text-sm tracking-[0.4em] uppercase mb-6 italic flex justify-center lg:justify-start items-center">
          <span class="text-white mr-2">></span> 
          <span id="typing-text" class="border-r-2 border-sky-400 pr-1 min-h-[1.2em]"></span>
        </h2>

        <h1 class="text-4xl md:text-5xl lg:text-5xl font-black text-white leading-[1.05] mb-8 tracking-tighter uppercase">
          Let's Learn 
          <br class="hidden lg:block" /> 
          <span class="text-sky-500 animate-pulse">Code</span> 
          to Make 
          <br class="hidden lg:block" /> 
          More 
          <span class="text-red-500 animate-pulse">Exploitation!</span>
        </h1>

        <p class="text-slate-400 text-base md:text-lg leading-relaxed mb-10 opacity-80 max-w-lg mx-auto lg:mx-0 border-l-2 border-slate-800 pl-6 italic">
          I am a Frontend Developer, dedicated to mastering immersive interfaces. My technical curiosity extends beyond the surface. I have a deep interest in backend systems like Laravel and MySQL, and I am actively exploring Ethical Hacking and Roblox Luau.
        </p>
        
        <div class="space-y-10">
          <div class="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
            <a href="#project" class="group relative px-10 py-4 bg-slate-800 text-white font-bold rounded-xl transition-all duration-500 overflow-hidden border border-slate-700 hover:border-sky-500 hover:shadow-[0_0_25px_rgba(56,189,248,0.3)] text-center">
              <span class="relative z-10 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-[10px]">
                View My Work 
                <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300"></i>
              </span>
              <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </a>

            <a href="/cv/abbel-cv.pdf" download="Abbel_CV.pdf" class="group relative px-10 py-4 bg-sky-500 text-slate-950 font-bold rounded-xl transition-all duration-500 overflow-hidden hover:bg-sky-400 hover:shadow-[0_0_25px_rgba(56,189,248,0.4)] hover:scale-105 active:scale-95 text-center">
              <span class="relative z-10 flex items-center justify-center gap-3 uppercase tracking-[0.2em] text-[10px]">
                Download CV
                <i data-lucide="download" class="w-4 h-4 group-hover:animate-bounce"></i>
              </span>
            </a>
          </div>

          <div class="flex flex-wrap justify-center lg:justify-start items-center gap-x-2 gap-y-4 max-w-sm md:max-w-none mx-auto lg:mx-0">
            <a href="mailto:abbelkadafi@gmail.com" target="_blank" class="p-2 text-slate-500 hover:text-sky-400 transition-all duration-300 hover:-translate-y-1" title="Email"><i data-lucide="mail" class="w-5 h-5"></i></a>
            <a href="https://api.whatsapp.com/send/?phone=6282287592930&text=Halo%20Abbel%21%0A%0ASaya%20tertarik%20untuk%20berdiskusi%20terkait%20proyek%20atau%20kolaborasi%20teknis.%20Boleh%20kita%20lanjutkan%20pembicaraan%20ini%3F
            " target="_blank" class="p-2 text-slate-500 hover:text-green-400 transition-all duration-300 hover:-translate-y-1" title="WhatsApp"><i data-lucide="message-circle" class="w-5 h-5"></i></a>
            <a href="https://www.facebook.com/Zx.Marchia/" target="_blank" class="p-2 text-slate-500 hover:text-blue-600 transition-all duration-300 hover:-translate-y-1" title="Facebook"><i data-lucide="facebook" class="w-5 h-5"></i></a>
            <a href="https://www.instagram.com/_ntbbll" target="_blank" class="p-2 text-slate-500 hover:text-pink-500 transition-all duration-300 hover:-translate-y-1" title="Instagram"><i data-lucide="instagram" class="w-5 h-5"></i></a>
            <a href="https://x.com/Zxbell2/" target="_blank" class="p-2 text-slate-500 hover:text-sky-300 transition-all duration-300 hover:-translate-y-1" title="Twitter/X"><i data-lucide="twitter" class="w-5 h-5"></i></a>
            <a href="https://t.me/bellxss" target="_blank" class="p-2 text-slate-500 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1" title="Telegram"><i data-lucide="send" class="w-5 h-5"></i></a>
            <a href="https://www.roblox.com/users/9013470120/profile" target="_blank" class="p-2 text-slate-500 hover:text-indigo-500 transition-all duration-300 hover:-translate-y-1" title="Roblox"><i data-lucide="disc" class="w-5 h-5"></i></a>
            <a href="https://github.com/notbell1" target="_blank" class="p-2 text-slate-500 hover:text-white transition-all duration-300 hover:-translate-y-1" title="Github"><i data-lucide="github" class="w-5 h-5"></i></a>
            <a href="https://www.linkedin.com/in/abbel" target="_blank" class="p-2 text-slate-500 hover:text-blue-500 transition-all duration-300 hover:-translate-y-1" title="Linkedin"><i data-lucide="linkedin" class="w-5 h-5"></i></a>
            <a href="https://uisb.ac.id/" target="_blank" class="p-2 text-slate-500 hover:text-red-400 transition-all duration-300 hover:-translate-y-1" title="University"><i data-lucide="graduation-cap" class="w-5 h-5"></i></a>
          </div>
        </div>
      </div>

      <div class="relative flex items-center justify-center lg:justify-end order-1 lg:order-2">
        <div class="relative group cursor-pointer">
          <div class="absolute inset-[-60px] border border-slate-800 rounded-full animate-[spin_12s_linear_infinite] opacity-40 group-hover:opacity-100 group-hover:border-sky-500/30 transition-all duration-700">
              <div class="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-sky-400 rounded-full shadow-[0_0_15px_#38bdf8]"></div>
          </div>
          <div class="absolute inset-[-30px] border border-sky-500/10 rounded-full animate-[spin_8s_linear_infinite_reverse] group-hover:border-sky-500/40 transition-all duration-700"></div>
          
          <div class="relative w-72 h-72 md:w-96 md:h-96 transition-all duration-700 group-hover:scale-[1.03]">
            <div class="absolute inset-0 bg-sky-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div class="relative w-full h-full bg-slate-800 p-4 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden backdrop-blur-sm group-hover:border-sky-500/50 transition-colors duration-500">
              <img src="/img/profile/profile_1.jpg" alt="Abbel" class="w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-700"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<style>
  @keyframes shimmer {
    100% { transform: translateX(100%); }
  }
</style>
`;

export const initTyping = () => {
  const textElement = document.getElementById("typing-text");
  if (!textElement) return;

  const phrases = [
    "Hello, World !",
    "My Name is Abbel",
    "Frontend Developer",
    "Tech Enthusiast",
    "Roblox Luau Scripter",
    "Learning Ethical Hacking",
    "Cybersecurity Explorer",
    "Curious About New Tech",
    "Building Ideas Into Reality",
    "Passionate About Clean Code",
    "Security-Minded Developer",
    "Exploring the Future of Tech",
    "Explore Me Now...!",
  ];

  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      textElement.innerHTML = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 50;
    } else {
      textElement.innerHTML = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
  }

  type();
};
