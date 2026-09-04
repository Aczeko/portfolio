document.addEventListener('DOMContentLoaded', () => {

    const navLinks = document.querySelectorAll('.nav-link');

    const sections = Array.from(navLinks).map(link => {
        const id = link.getAttribute('href');
        return document.querySelector(id);
    });

    const header = document.getElementById('main-header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.classList.add('hide-on-scroll');
        } else {
            header.classList.remove('hide-on-scroll');
        }
        lastScrollY = currentScrollY;

        let currentSectionId = '';

        sections.forEach(section => {
            if (section) {
                const sectionTop = section.offsetTop - 150;
                if (currentScrollY >= sectionTop) {
                    currentSectionId = section.getAttribute('id');
                }
            }
        });

        if ((window.innerHeight + currentScrollY) >= document.documentElement.scrollHeight - 10) {
            currentSectionId = 'contact';
        }

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSectionId}`) {
                link.classList.add('active');
            }
        });
    });

    const burgerBtn = document.getElementById('burger-btn');
    const navMenu = document.getElementById('nav-menu');

    if (burgerBtn && navMenu) {
        burgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('open');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('open');
            });
        });
    }

    const revealElements = document.querySelectorAll('.reveal');

    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(element => {
        revealOnScroll.observe(element);
    });
});