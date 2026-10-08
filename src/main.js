// Import CSS
import "./style.css";

// Import components
import { Header } from "./components/Header.js";
import { Home, initTyping } from "./components/Home.js";
import { About, initAge } from "./components/About.js";
import { Education } from "./components/Education.js";
import { Skill } from "./components/Skill.js";
import { Experience } from "./components/Experience.js";
import { Project } from "./components/Project.js";
import { Contact } from "./components/Contact.js";
import { Footer } from "./components/Footer.js";

// Import handlers
import { initProjectDetail } from "./utils/projectHandler.js";
import { initNav } from "./utils/navHandler.js";

const app = document.querySelector("#app");

// Render UI
app.innerHTML = `
    ${Header}
    <main class="w-full"> 
        ${Home}
        ${About}
        ${Education}
        ${Skill}
        ${Experience}
        ${Project}
        ${Contact}
    </main>
    ${Footer}
`;

// Initialize Icons
if (window.lucide) {
  window.lucide.createIcons();
}

// Initialize Interactive Handlers
initNav();
initTyping();
initAge(2002, 6, 20);
initProjectDetail();

// Active Navbar Indicator on Scroll
const handleActiveNavbar = () => {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-link");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 200) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    const underline = link.querySelector(".nav-underline");
    const isCurrent = link.getAttribute("data-section") === currentSection;

    if (isCurrent) {
      link.classList.add("text-neutral-950", "font-semibold");
      link.classList.remove("text-neutral-600");
      if (underline) underline.classList.replace("scale-x-0", "scale-x-100");
    } else {
      link.classList.remove("text-neutral-950", "font-semibold");
      link.classList.add("text-neutral-600");
      if (underline) underline.classList.replace("scale-x-100", "scale-x-0");
    }
  });
};

window.addEventListener("scroll", handleActiveNavbar);

// Smooth Scrolling Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (!href || href === "#") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// AOS Animation Library
if (window.AOS) {
  window.AOS.init({
    duration: 700,
    once: false,
    offset: 50,
    easing: "ease-out",
  });

  setTimeout(() => {
    window.AOS.refresh();
  }, 400);
}
