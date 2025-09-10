const menu = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navLinks.classList.toggle('open');
}

const sr = ScrollReveal({
    distance: '65px',
    duration: 2500,
    delay: 400,
    reset: true
})

sr.reveal('.hero-text', { delay: 200, origin: 'top' });
sr.reveal('.hero-img', { delay: 450, origin: 'top' });
sr.reveal('.icons', { delay: 500, origin: 'left' });
sr.reveal('.scroll-down', { delay: 450, origin: 'right'});
