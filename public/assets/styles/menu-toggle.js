const btn = document.querySelector(".menu-toggle");
const menu = document.querySelector(".Horizontal-Menu");
btn.addEventListener("click", () => {
  menu.classList.toggle("active");
});
