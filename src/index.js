// JavaScript for hamburger menu functionality
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
}

// Run when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Any additional initialization code can go here
});
