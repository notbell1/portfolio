// Import components
import { Header } from "./components/Header.js";
import { Home, initTyping } from "./components/Home.js";
import { About, initAge } from "./components/About.js";
import { Education } from "./components/Education.js";
import { Skill } from "./components/Skill.js";
import { Experience } from "./components/Experience.js";
import { Project } from "./components/Project.js";
import { News } from "./components/News.js";
import { Contact } from "./components/Contact.js";
import { Footer } from "./components/Footer.js";

// Import handler
import { initProjectDetail } from "./utils/projectHandler.js";
import { initNewsDetail } from "./utils/newsHandler.js";
import { initContactForm } from "./utils/contactHandler.js";
import { initNav } from "./utils/navHandler.js";

const app = document.querySelector("#app");

// Render UI
app.innerHTML = `
    ${Header}
    <main class="overflow-x-hidden pt-20"> 
        ${Home}
        ${About}
        ${Education}
        ${Skill}
        ${Experience}
        ${Project}
        ${News}
        ${Contact}
    </main>
    ${Footer}
`;

// Handler
if (window.lucide) {
  window.lucide.createIcons();
}

initNav();
initTyping();
initAge(2002, 6, 20);
initProjectDetail();
initNewsDetail();
initContactForm();

// Active Nav
const handleActiveNavbar = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");
  const underlines = document.querySelectorAll(".nav-underline");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.scrollY >= sectionTop - 150) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link, idx) => {
    link.classList.remove("text-white");
    link.querySelector("span")?.classList.add("opacity-0");
    underlines[idx].style.width = "0%";

    if (link.getAttribute("data-section") === currentSection) {
      link.classList.add("text-white");
      link.querySelector("span")?.classList.remove("opacity-0");
      underlines[idx].style.width = "100%";
    }
  });
};

window.addEventListener("scroll", handleActiveNavbar);

// Scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// AOS Library
if (window.AOS) {
  // Inisialisasi awal
  window.AOS.init({
    duration: 1000,
    once: false,
    offset: 100,
    easing: "ease-in-out",
    mirror: true,
  });

  setTimeout(() => {
    window.AOS.refresh();
  }, 500);
}
