export const initNav = () => {
  const toggleBtn = document.getElementById("mobile-menu-toggle") || document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobile-menu") || document.getElementById("mobileMenu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link, .mobile-link");

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    mobileLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }

  // Active Navbar Indicator on Scroll
  const handleActiveNavbar = () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let currentSection = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 180) {
        currentSection = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      const isCurrent = link.getAttribute("data-section") === currentSection;
      if (isCurrent) {
        link.classList.add("text-white", "bg-[#800020]/25", "border", "border-[#800020]/40", "font-semibold");
        link.classList.remove("text-zinc-400");
      } else {
        link.classList.remove("text-white", "bg-[#800020]/25", "border", "border-[#800020]/40", "font-semibold");
        link.classList.add("text-zinc-400");
      }
    });
  };

  window.addEventListener("scroll", handleActiveNavbar, { passive: true });
  handleActiveNavbar();
};
