const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const currentYear = document.getElementById("currentYear");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("active");
});

currentYear.textContent = new Date().getFullYear();