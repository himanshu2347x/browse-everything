// JavaScript for hamburger menu functionality
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
});

(function () {
    const centerNav = document.getElementById('centerNav');
    if (!centerNav) return;

    const SCROLL_THRESHOLD = 80; // px

    function onScroll() {
        const scrolled = window.scrollY || window.pageYOffset;
        if (scrolled > SCROLL_THRESHOLD) {
            centerNav.classList.add('backdrop-blur-sm', 'bg-white/30', 'shadow-sm');
            centerNav.classList.remove('px-4', 'py-3');
            centerNav.classList.add('px-6', 'py-5');
        } else {
            // revert to neutral appearance
            centerNav.classList.remove('backdrop-blur-sm', 'bg-white/30', 'shadow-sm');
            centerNav.classList.remove('px-6', 'py-5');
            centerNav.classList.add('px-4', 'py-3');
        }
    }
    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
})();
