export const initNav = () => {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  const l1 = document.getElementById("line1");
  const l2 = document.getElementById("line2");
  const l3 = document.getElementById("line3");

  const mobileLinks = document.querySelectorAll(".mobile-link");

  if (!menuBtn || !mobileMenu) return;

  const toggleMenu = () => {
    const isClosed =
      mobileMenu.style.maxHeight === "0px" || mobileMenu.style.maxHeight === "";

    if (isClosed) {
      mobileMenu.style.maxHeight = "500px";

      // Animasi hamburger
      l1.style.transform = "translateY(7px) rotate(45deg)";
      l2.style.opacity = "0";
      l3.style.transform = "translateY(-7px) rotate(-45deg)";
    } else {
      closeMenu();
    }
  };

  const closeMenu = () => {
    mobileMenu.style.maxHeight = "0px";

    // Kembalikan hamburger
    l1.style.transform = "translateY(0) rotate(0)";
    l2.style.opacity = "1";
    l3.style.transform = "translateY(0) rotate(0)";
  };

  menuBtn.addEventListener("click", toggleMenu);
  mobileLinks.forEach((link) => link.addEventListener("click", closeMenu));
};
