# 🪐 Developer Solar System Portfolio — Abbel

An interactive 3D developer portfolio featuring a full-viewport **Developer Solar System** powered by **Three.js (WebGL)**, paired with a modern, high-contrast dark obsidian & maroon aesthetic.

The background solar system renders 20 sculpted 3D technology stack emblems revolving across 6 concentric, dynamically gapped orbital rings (`----icon----`), accompanied by an interactive **Live Orbit Radar** for featured projects.

[🌐 Live Portfolio](https://nottbell.vercel.app) • [🐙 GitHub Repository](https://github.com/notbell1/portfolio)

---

## ✨ Key Highlights

- **3D Developer Solar System (`SolarSystem.js`):**
  - Full-screen (`100vh`) fixed ambient WebGL background that stays seamlessly in view across all sections down to the footer.
  - **6 Spacious Concentric Orbit Rings** with dynamic angular line segmentation (`----icon----`) and WebGL depth-buffer occlusion masks so orbit lines never overlap or cut through icons.
  - **20 Sculpted 3D Tech Stack Emblems:** High-resolution 512×512 vector logos (`Path2D`) with 16-step solid isometric 3D block extrusion and directional specular lighting, locked upright facing the camera in world space.
  - **40% Directional Gradient Shadow Overlay:** Ensures optimal text legibility on the left while showcasing the 3D solar system on the right.
- **Interactive Projects Live Orbit Radar (`Project.js`):**
  - Synchronized orbital radar visualizer where each featured project orbits the core as a live interactive satellite capsule.
  - **Independent Hover-to-Pause:** Hovering over any individual project satellite pauses only that specific satellite for inspection and one-click modal deep-dives while all other satellites continue orbiting smoothly.
  - Dynamic category filtering (`All`, `Cyber Security & Audit`, `Developer Tools & CTF`, `VS Code Extension`, `Browser Extension`, `Fullstack Web App`, etc.) that synchronizes both the orbital radar and project cards in real time.
- **Technical Skills & Technology Stack Index (`Skill.js` & `techIcons.js`):**
  - Categorized breakdown of all 20 technologies with custom official vector SVG icons.

---

## 🛠️ Technology Stack (20 Orbiting Technologies)

### 1. Programming Languages & Web
- **TypeScript (TS)** • **JavaScript (JS)** • **PHP** • **Python** • **Lua / Luau** • **HTML5** • **CSS3**

### 2. Framework, Library & Development Tools
- **React** • **Laravel** • **Node.js** • **Vite** • **Tailwind CSS** • **Bootstrap**

### 3. Database & Backend Services
- **MySQLi** • **PostgreSQL** • **Supabase**

### 4. Deployment & Version Control
- **Vercel** • **Git** • **GitHub** • **Wuaze**

---

## 🚀 Featured Projects

1. **[XeooAuditor — Web Security & Visibility](https://xeooauditor.xo.je/)** *(October 2026)*  
   *Cyber Security & Audit* — Automated web diagnostics with zero-PII ephemeral retention, server-side SSRF boundary firewall, and 5-pillar audit engine.
2. **[XeooTools — Developer & Cyber Suite](https://xeootools.site.je/)** *(October 2026)*  
   *Developer Tools & CTF* — 30+ interactive developer tools, client-side media lab, and an isolated Defacement CTF cyber security platform.
3. **[Xeoo Theme Suite — VS Code Studio](https://github.com/notbell1/zx-theme)** *(October 2026)*  
   *VS Code Extension* — 15 color families and 43 variants with full UI elevation and 1-Click Studio Switcher.
4. **[Core Vitality — Coding Health Tracker](https://github.com/notbell1/core-vitality)** *(October 2026)*  
   *Developer Experience* — Real-time health tracker in VS Code with dynamic evolving SVG avatar companion and automated error incident logger.
5. **[Nttbell Assistant — Screen Shield](https://github.com/notbell1/nttbell-assistant)** *(October 2026)*  
   *Browser Extension* — WhatsApp Web anti-shoulder surfing shield with real-time blur engine, hover-to-reveal, and 100% local processing.
6. **[Balai Gadang Village Web Profile](https://balai-gadang.vercel.app/)** *(August 2026)*  
   *Web GIS & Portal* — Official profile mapping public facilities, MSME catalogs, and RW demographics in Padang City.
7. **[Balai Gadang KKN Digital Portal](https://kkn-uisb-balaigadang.vercel.app/)** *(August 2026)*  
   *Web Application* — Digital journal and work program documentation platform for university community service initiatives.
8. **Puskeswan Apps — Veterinary Record System** *(March 2026)*  
   *Fullstack Web App* — Centralized veterinary electronic medical record system engineered with Laravel 12, MySQL, and Alpine JS for Diskominfo Kota Pariaman.

---

## 💻 Local Development

```bash
# Clone the repository
git clone https://github.com/notbell1/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.
