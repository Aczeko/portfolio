const header = document.getElementById('main-header');
const burgerBtn = document.getElementById('burger-btn');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
let lastScrollY = window.scrollY;

burgerBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    navMenu.classList.toggle('open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => navMenu.classList.remove('open'));
});

document.addEventListener('click', (e) => {
    if (!header.contains(e.target) && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
    }
});

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 50) {
        header.classList.add('hide-on-scroll');
        navMenu.classList.remove('open');
    } else {
        header.classList.remove('hide-on-scroll');
    }
    lastScrollY = currentScrollY;
});
