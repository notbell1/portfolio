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

// Import Data untuk Dynamic Meta
import { news } from "./data/news.js";
import { projects } from "./data/projects.js";

const app = document.querySelector("#app");

/**
 * LOGIK DYNAMIC META
 */
const updateDynamicMeta = () => {
  const path = window.location.pathname;
  const createSlug = (text) =>
    text
      .toLowerCase()
      .replace(/[^\w ]+/g, "")
      .replace(/ +/g, "-");

  let title = "Nottbell Portfolio";
  let desc =
    "Professional Creative Developer specializing in high-performance web experiences.";
  let img = "https://nottbell.vercel.app/profile/profile_1.jpg";

  if (path.startsWith("/news/")) {
    const slug = path.split("/")[2];
    const item = news.find((n) => createSlug(n.title) === slug);
    if (item) {
      title = `${item.title} | Nottbell News`;
      desc = item.excerpt;
      img = item.image.startsWith("http")
        ? item.image
        : `https://nottbell.vercel.app${item.image}`;
    }
  } else if (path.startsWith("/project/")) {
    const slug = path.split("/")[2];
    const item = projects.find((p) => createSlug(p.title) === slug);
    if (item) {
      title = `${item.title} | Project`;
      desc = item.longDescription;
      img = item.mainImage.startsWith("http")
        ? item.mainImage
        : `https://nottbell.vercel.app${item.mainImage}`;
    }
  }

  document.title = title;
  const setMeta = (selector, content) => {
    const el = document.querySelector(selector);
    if (el) el.setAttribute("content", content);
  };

  setMeta('meta[name="title"]', title);
  setMeta('meta[name="description"]', desc);
  setMeta('meta[property="og:title"]', title);
  setMeta('meta[property="og:description"]', desc);
  setMeta('meta[property="og:image"]', img);
  setMeta('meta[property="twitter:title"]', title);
  setMeta('meta[property="twitter:description"]', desc);
  setMeta('meta[property="twitter:image"]', img);
};

/**
 * RENDER ENGINE
 */
const render = () => {
  const path = window.location.pathname;

  // Update Meta Tag setiap kali render (untuk SEO & Browser Title)
  updateDynamicMeta();

  if (path === "/" || path === "/index.html") {
    // Render Halaman Utama
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
    // Init script khusus halaman utama
    initTyping();
    initAge(2002, 6, 20);
  } else {
    // Render Halaman Detail (Blank Container agar diisi oleh handler)
    app.innerHTML = `
        ${Header}
        <main id="content-detail" class="overflow-x-hidden pt-20">
            </main>
        ${Footer}
    `;
  }

  // Init global icons & nav
  if (window.lucide) window.lucide.createIcons();
  initNav();
  initContactForm();

  // Handler untuk mendeteksi rute detail
  initProjectDetail();
  initNewsDetail();
};

// Jalankan aplikasi
render();

// Handle navigasi (Tombol Back/Forward Browser)
window.addEventListener("popstate", render);

// Smooth Scroll Global
document.addEventListener("click", (e) => {
  const anchor = e.target.closest('a[href^="#"]');
  if (anchor) {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }
});
