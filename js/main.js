const toggle = document.querySelector(".nav-toggle");
const mobileNav = document.getElementById("mobile-nav");
const yearEl = document.getElementById("year");
const themeToggle = document.querySelector(".theme-toggle");
const root = document.documentElement;

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

function applyTheme(dark) {
  root.classList.remove("light", "dark");
  root.classList.add(dark ? "dark" : "light");
  localStorage.setItem("theme", dark ? "dark" : "light");
  if (themeToggle) {
    themeToggle.setAttribute(
      "aria-label",
      dark ? "Switch to light mode" : "Switch to dark mode",
    );
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    applyTheme(!root.classList.contains("dark"));
  });
  themeToggle.setAttribute(
    "aria-label",
    root.classList.contains("dark")
      ? "Switch to light mode"
      : "Switch to dark mode",
  );
}

if (toggle && mobileNav) {
  toggle.addEventListener("click", () => {
    const open = mobileNav.hidden;
    mobileNav.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    toggle.querySelector(".material-symbols-outlined").textContent = open
      ? "close"
      : "menu";
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
      toggle.querySelector(".material-symbols-outlined").textContent = "menu";
    });
  });
}
