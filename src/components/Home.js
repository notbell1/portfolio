export const Home = `
<section id="home" class="min-h-screen flex items-center bg-slate-900 relative overflow-hidden pt-20">
  <div class="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
    <div class="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-sky-500/5 blur-[120px] rounded-full"></div>
  </div>

  <div class="max-w-5xl mx-auto px-10 relative z-10 w-full">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      
      <div class="text-center lg:text-left">
        <h2 class="text-sky-400 font-mono text-sm tracking-[0.3em] uppercase mb-4 italic flex justify-center lg:justify-start items-center">
          > <span id="typing-text" class="ml-2 border-r-2 border-sky-400 pr-1"></span>
        </h2>
        <h1 class="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-6 tracking-tighter uppercase">
          Crafting <br/> <span class="text-slate-500 italic">Digital</span> <br/> Experiences
        </h1>
        <p class="text-slate-400 text-base md:text-lg leading-relaxed mb-8 opacity-80 max-w-md mx-auto lg:mx-0">
          I am a Frontend Developer dedicated to mastering immersive interfaces. My technical curiosity extends beyond the surface; I have a deep interest in backend systems like Laravel and MySQL, and I am actively exploring Ethical Hacking and Roblox Luau.
        </p>
        
        <div class="mt-10 space-y-8">
          <div class="flex justify-center lg:justify-start">
            <a href="#project" class="group relative px-10 py-4 bg-slate-800 text-white font-bold rounded-full transition-all duration-500 overflow-hidden border border-slate-700 hover:border-sky-500 hover:shadow-[0_0_20px_rgba(56,189,248,0.3)]">
              <span class="relative z-10 flex items-center gap-3 uppercase tracking-[0.2em] text-[10px]">
                View My Work 
                <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300"></i>
              </span>
              <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
            </a>
          </div>

          <div class="flex flex-wrap justify-center lg:justify-start items-center gap-x-2 gap-y-4 max-w-sm md:max-w-none mx-auto lg:mx-0">
            <a href="mailto:abbelkadafi@gmail.com" target="_blank" class="p-2 text-slate-500 hover:text-sky-400 transition-all duration-300 hover:-translate-y-1" title="Email"><i data-lucide="mail" class="w-5 h-5"></i></a>
            <a href="https://api.whatsapp.com/send/?phone=6282287592930&text=Halo%20Abbel%21%0A%0ASaya%20menemukan%20kontak%20ini%20dari%20website%20portfolio%20kamu.%20Saya%20tertarik%20dengan%20karya%20dan%20pengalaman%20yang%20kamu%20tampilkan%20di%20sana.%0A%0ASaya%20ingin%20mengajak%20kamu%20untuk%20bergabung%20dengan%20tim%2Fpekerjaan%2Forganisasi%20yang%20sedang%20kami%20jalankan.%20Sepertinya%20skill%20dan%20gaya%20kerja%20kamu%20cocok%20dengan%20kebutuhan%20kami.%0A%0AKalau%20kamu%20tertarik%2C%20boleh%20kita%20diskusi%20lebih%20lanjut%20ya%20%F0%9F%98%8A%0A%0ATerima%20kasih%21&type=phone_number&app_absent=0" target="_blank" class="p-2 text-slate-500 hover:text-green-400 transition-all duration-300 hover:-translate-y-1" title="WhatsApp"><i data-lucide="message-circle" class="w-5 h-5"></i></a>
            <a href="https://www.facebook.com/Zx.Marchia/" target="_blank" class="p-2 text-slate-500 hover:text-blue-600 transition-all duration-300 hover:-translate-y-1" title="Facebook"><i data-lucide="facebook" class="w-5 h-5"></i></a>
            <a href="https://www.instagram.com/_ntbbll" target="_blank" class="p-2 text-slate-500 hover:text-pink-500 transition-all duration-300 hover:-translate-y-1" title="Instagram"><i data-lucide="instagram" class="w-5 h-5"></i></a>
            <a href="https://x.com/Zxbell2/" target="_blank" class="p-2 text-slate-500 hover:text-sky-300 transition-all duration-300 hover:-translate-y-1" title="Twitter/X"><i data-lucide="twitter" class="w-5 h-5"></i></a>
            <a href="https://t.me/bellxss" target="_blank" class="p-2 text-slate-500 hover:text-blue-400 transition-all duration-300 hover:-translate-y-1" title="Telegram"><i data-lucide="send" class="w-5 h-5"></i></a>
            <a href="https://www.roblox.com/users/9013470120/profile" target="_blank" class="p-2 text-slate-500 hover:text-indigo-500 transition-all duration-300 hover:-translate-y-1" title="Roblox"><i data-lucide="disc" class="w-5 h-5"></i></a>
            <a href="#" target="_blank" class="p-2 text-slate-500 hover:text-white transition-all duration-300 hover:-translate-y-1" title="Github"><i data-lucide="github" class="w-5 h-5"></i></a>
            <a href="https://www.linkedin.com/in/abbel" target="_blank" class="p-2 text-slate-500 hover:text-blue-500 transition-all duration-300 hover:-translate-y-1" title="Linkedin"><i data-lucide="linkedin" class="w-5 h-5"></i></a>
            <a href="https://uisb.ac.id/" target="_blank" class="p-2 text-slate-500 hover:text-red-400 transition-all duration-300 hover:-translate-y-1" title="University"><i data-lucide="graduation-cap" class="w-5 h-5"></i></a>
          </div>
        </div>
      </div>

      <div class="relative flex items-center justify-center lg:justify-end">
        <div class="relative group cursor-pointer">
          <div class="absolute inset-[-50px] border border-slate-800 rounded-full animate-[spin_12s_linear_infinite] opacity-40 group-hover:opacity-100 group-hover:border-sky-500/30 transition-all duration-700">
             <div class="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-sky-400 rounded-full shadow-[0_0_15px_#38bdf8]"></div>
          </div>
          <div class="absolute inset-[-25px] border border-sky-500/10 rounded-full animate-[spin_8s_linear_infinite_reverse] group-hover:border-sky-500/40 transition-all duration-700"></div>
          <div class="relative w-64 h-64 md:w-80 md:h-80 transition-all duration-700 group-hover:scale-[1.03] group-hover:-rotate-2">
            <div class="absolute inset-0 bg-sky-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div class="relative w-full h-full bg-slate-800 p-3 rounded-2xl border border-slate-700 shadow-2xl overflow-hidden backdrop-blur-sm group-hover:border-sky-500/50 transition-colors duration-500">
              <img src="/profile/profile_1.jpg" alt="Abbel" class="w-full h-full object-cover rounded-xl grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100">
              <div class="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-700"></div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
`;

export const initTyping = () => {
  const textElement = document.getElementById("typing-text");
  if (!textElement) return;

  const phrases = [
    "Hello, World...!",
    "My Name is Abbel...!",
    "Frontend Developer...!",
    "Tech Enthusiast...!",
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
      typeSpeed = 50; // Kecepatan hapus
    } else {
      // Mengetik karakter
      textElement.innerHTML = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 100; // Kecepatan mengetik
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      isDeleting = true;
      typeSpeed = 2000; // Jeda
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length; // Loop
      typeSpeed = 500; // Jeda
    }

    setTimeout(type, typeSpeed);
  }

  type();
};
