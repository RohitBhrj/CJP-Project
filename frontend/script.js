// script.js
document.addEventListener('DOMContentLoaded', function () {
    const sideNav = document.getElementById('sideNav');
    const toggleBtn = document.getElementById('toggleBtn');
    const mainContent = document.querySelector('.main-content');

    toggleBtn.addEventListener('click', function () {
        sideNav.classList.toggle('active');
        mainContent.classList.toggle('active');
    });
});

