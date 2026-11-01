import { technologies } from "../solar/technologies.js";

export const initCinematicEngine = (solarSystem) => {
  document.documentElement.setAttribute("data-theme", "crimson");
  localStorage.removeItem("abbel_multiverse_theme");

  const hudContainer = document.createElement("div");
  hudContainer.id = "cinematic-hud-layer";
  hudContainer.innerHTML = `
    <div
      id="planet-3d-tooltip"
      class="fixed pointer-events-none z-50 hidden px-3 py-2 rounded-xl holo-spatial-panel text-left"
      style="left: 0px; top: 0px; transform: translate(14px, -50%);"
    >
      <div class="flex items-center gap-2">
        <span id="tooltip-planet-dot" class="w-2.5 h-2.5 rounded-xs bg-[#ff8fa3]"></span>
        <span id="tooltip-planet-name" class="text-xs font-extrabold text-white tracking-tight">TypeScript</span>
      </div>
      <p id="tooltip-planet-role" class="text-[10px] text-zinc-400 font-mono mt-0.5">Type-Safe Development</p>
    </div>
  `;
  document.body.appendChild(hudContainer);

  const updateScroll = () => {
    const maxScroll = Math.max(
      1,
      document.documentElement.scrollHeight - window.innerHeight
    );
    const prog = Math.max(0, Math.min(1, window.scrollY / maxScroll));
    if (solarSystem) {
      solarSystem.setScrollFlightProgress(prog);
    }
  };

  window.addEventListener("scroll", updateScroll, { passive: true });
  updateScroll();

  const originalSelectProject = window.selectOrbitProject;
  window.selectOrbitProject = (projectId) => {
    if (originalSelectProject) {
      originalSelectProject(projectId);
    }
    if (solarSystem) {
      solarSystem.focusOnProject(projectId);
    }
  };

  const tooltipEl = document.getElementById("planet-3d-tooltip");
  const tooltipName = document.getElementById("tooltip-planet-name");
  const tooltipRole = document.getElementById("tooltip-planet-role");
  const tooltipDot = document.getElementById("tooltip-planet-dot");

  if (solarSystem) {
    solarSystem.onPlanetHover = (tech, clientX, clientY) => {
      if (!tooltipEl) return;
      if (!tech) {
        tooltipEl.classList.add("hidden");
        return;
      }
      tooltipEl.classList.remove("hidden");
      tooltipEl.style.left = `${Math.min(window.innerWidth - 220, clientX)}px`;
      tooltipEl.style.top = `${Math.max(40, clientY)}px`;

      if (tooltipName) tooltipName.textContent = tech.name;
      if (tooltipRole) tooltipRole.textContent = tech.role || tech.category;
      if (tooltipDot) tooltipDot.style.backgroundColor = tech.color;
    };
  }

  document.querySelectorAll(".skill-planet-trigger").forEach((el) => {
    const techId = el.getAttribute("data-skill-tech");
    el.addEventListener("mouseenter", () => {
      if (solarSystem && techId) {
        solarSystem.setHighlightedTech(techId);
      }
    });
    el.addEventListener("mouseleave", () => {
      if (solarSystem) {
        solarSystem.setHighlightedTech(null);
      }
    });
    el.addEventListener("click", () => {
      const found = technologies.find((t) => t.id === techId);
      if (found && solarSystem) {
        solarSystem.setHighlightedTech(techId);
      }
    });
  });
};
