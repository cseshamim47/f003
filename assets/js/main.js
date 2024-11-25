// Example of smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});

// Mobile menu functionality
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('translate-x-full');
});

closeMenu.addEventListener('click', () => {
  mobileMenu.classList.add('translate-x-full');
});
