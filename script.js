const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".nav-menu");
const menuLinks = document.querySelectorAll(".nav-link");

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
});

menuLinks.forEach((btn) => {
    btn.addEventListener('click', () => {
        menuBtn.classList.toggle("active");
        menu.classList.toggle("active");
    });
});