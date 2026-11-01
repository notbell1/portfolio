const VALID_SECTIONS = ["home", "about", "project", "skill", "experience", "contact"];

const normalizeSectionSlug = (raw) => {
  const cleaned = String(raw || "")
    .replace(/^[/#]+|\/+$/g, "")
    .toLowerCase();
  if (!cleaned || cleaned === "home") return "home";
  if (cleaned === "projects") return "project";
  if (cleaned === "skills") return "skill";
  return VALID_SECTIONS.includes(cleaned) ? cleaned : null;
};

const getPathForSection = (sectionId) => {
  return sectionId === "home" ? "/" : `/${sectionId}`;
};

export const initNav = () => {
  const toggleBtn = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  let lockedSection = null;
  let lockTimer = null;

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  const applyActiveNavUI = (currentSection) => {
    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach((link) => {
      const isCurrent = link.getAttribute("data-section") === currentSection;
      if (isCurrent) {
        link.classList.add(
          "text-white",
          "bg-[#800020]/25",
          "border",
          "border-[#800020]/40",
          "font-semibold"
        );
        link.classList.remove("text-zinc-400");
      } else {
        link.classList.remove(
          "text-white",
          "bg-[#800020]/25",
          "border",
          "border-[#800020]/40",
          "font-semibold"
        );
        link.classList.add("text-zinc-400");
      }
    });
  };

  const syncUrlWithSection = (sectionId, push = false) => {
    if (window.location.search.includes("id=")) return;
    const targetPath = getPathForSection(sectionId);
    if (window.location.pathname !== targetPath || window.location.hash) {
      if (push) {
        window.history.pushState({}, "", targetPath);
      } else {
        window.history.replaceState({}, "", targetPath);
      }
    }
  };

  const scrollToSectionElement = (sectionId, behavior = "smooth") => {
    if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior });
      return;
    }
    const targetEl = document.getElementById(sectionId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior });
    }
  };

  const navigateToSection = (sectionId, pushHistory = true) => {
    const validId = normalizeSectionSlug(sectionId) || "home";

    lockedSection = validId;
    if (lockTimer) clearTimeout(lockTimer);
    lockTimer = setTimeout(() => {
      lockedSection = null;
    }, 750);

    applyActiveNavUI(validId);
    syncUrlWithSection(validId, pushHistory);

    if (mobileMenu) {
      mobileMenu.classList.add("hidden");
    }

    scrollToSectionElement(validId, "smooth");
  };

  window.navigateToSection = navigateToSection;

  document.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (!link) return;

    let routeSection = link.getAttribute("data-route");
    if (!routeSection) {
      const href = link.getAttribute("href") || "";
      if (href.startsWith("/") || href.startsWith("#")) {
        routeSection = normalizeSectionSlug(href);
      }
    }
    if (!routeSection) return;

    e.preventDefault();
    navigateToSection(routeSection, true);
  });

  const handleScrollSync = () => {
    if (lockedSection) return;

    const sections = document.querySelectorAll("section[id], footer[id]");
    let currentSection = "home";
    const scrollPivot = window.scrollY + window.innerHeight * 0.32;

    sections.forEach((section) => {
      if (scrollPivot >= section.offsetTop) {
        currentSection = section.getAttribute("id");
      }
    });

    if (
      window.innerHeight + window.scrollY >=
      document.documentElement.scrollHeight - 80
    ) {
      currentSection = "contact";
    }

    applyActiveNavUI(currentSection);
    syncUrlWithSection(currentSection, false);
  };

  const syncFromLocation = (isInitialLoad = false) => {
    if (window.location.hash) {
      const hashSection = normalizeSectionSlug(window.location.hash);
      if (hashSection) {
        const cleanPath = getPathForSection(hashSection) + window.location.search;
        window.history.replaceState({}, "", cleanPath);
        applyActiveNavUI(hashSection);
        scrollToSectionElement(hashSection, isInitialLoad ? "auto" : "smooth");
        return;
      }
    }

    if (!isInitialLoad && window.location.search.includes("id=")) {
      return;
    }

    const pathSection = normalizeSectionSlug(window.location.pathname);
    if (pathSection && pathSection !== "home") {
      lockedSection = pathSection;
      if (lockTimer) clearTimeout(lockTimer);
      lockTimer = setTimeout(() => {
        lockedSection = null;
      }, 750);
      applyActiveNavUI(pathSection);
      scrollToSectionElement(pathSection, isInitialLoad ? "auto" : "smooth");
    } else if (!isInitialLoad && pathSection === "home" && !window.location.search) {
      applyActiveNavUI("home");
      scrollToSectionElement("home", "smooth");
    } else {
      handleScrollSync();
    }
  };

  window.addEventListener("popstate", () => syncFromLocation(false));
  window.addEventListener("scroll", handleScrollSync, { passive: true });
  syncFromLocation(true);
};
