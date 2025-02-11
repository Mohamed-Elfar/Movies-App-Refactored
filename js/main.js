let nav = document.querySelector("nav");
let navIcon = document.querySelector(".navbar-toggler-icon");

window.addEventListener("scroll", () => {
  nav.classList.toggle("shadow", window.scrollY > 0);
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navIcon.classList.add("invert--icon");
  } else {
    navIcon.classList.remove("invert--icon");
  }
});
window.addEventListener("scroll", () => {}, { passive: true });
