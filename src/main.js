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

// Render
app.innerHTML = `
    ${Header}
    <main class="overflow-x-hidden pt-20"> ${Home}
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

// Init
if (window.lucide) {
  window.lucide.createIcons();
}

initNav();
initTyping();
initAge(2002, 6, 20);
initProjectDetail();
initNewsDetail();
initContactForm();

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
