(function () {
  const THEME_KEY = "typohub_theme";
  const htmlEl = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");
  const moonIcon = document.getElementById("theme-icon-moon");
  const sunIcon = document.getElementById("theme-icon-sun");

  function applyTheme(theme) {
    const isDark = theme === "dark";
    htmlEl.classList.toggle("dark", isDark);
    if (moonIcon) moonIcon.style.display = isDark ? "none" : "block";
    if (sunIcon) sunIcon.style.display = isDark ? "block" : "none";
  }

  // Light mode is primary by default
  const savedTheme = localStorage.getItem(THEME_KEY) || "light";
  applyTheme(savedTheme);

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      const next = htmlEl.classList.contains("dark") ? "light" : "dark";
      localStorage.setItem(THEME_KEY, next);
      applyTheme(next);
    });
  }

  // Sticky header scroll elevation + scroll-to-top visibility
  const headerEl = document.getElementById("th-header");
  const scrollBtn = document.getElementById("scroll-top-btn");

  window.addEventListener("scroll", function () {
    const y = window.scrollY;
    if (headerEl) headerEl.classList.toggle("scrolled", y > 8);
    if (scrollBtn) scrollBtn.classList.toggle("visible", y > 200);
  });

  if (scrollBtn) {
    scrollBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Layouts dropdown toggle
  const dropdown = document.getElementById("layouts-dropdown");
  const dropdownBtn = document.getElementById("layouts-dropdown-btn");

  if (dropdown && dropdownBtn) {
    dropdownBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      const isOpen = dropdown.classList.toggle("open");
      dropdownBtn.setAttribute("aria-expanded", String(isOpen));
    });

    document.addEventListener("click", function (e) {
      if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
        dropdownBtn.setAttribute("aria-expanded", "false");
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        dropdown.classList.remove("open");
        dropdownBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Mobile navigation drawer toggle
  const mobileBtn = document.getElementById("mobile-menu-btn");
  const mobileDrawer = document.getElementById("mobile-drawer");

  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener("click", function () {
      const isHidden = mobileDrawer.hasAttribute("hidden");
      if (isHidden) {
        mobileDrawer.removeAttribute("hidden");
        mobileBtn.setAttribute("aria-expanded", "true");
      } else {
        mobileDrawer.setAttribute("hidden", "");
        mobileBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Global toast notification helper
  let toastTimer = null;
  window.showTypoToast = function (msg) {
    const el = document.getElementById("th-toast");
    if (!el) return;
    el.textContent = msg;
    el.classList.add("show");
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
  };
})();