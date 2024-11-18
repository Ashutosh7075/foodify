// JavaScript to handle page navigation
document.addEventListener('DOMContentLoaded', () => {
    const welcomeScreen = document.getElementById('welcome-screen');
    const loginScreen = document.getElementById('login-screen');
    const mainApp = document.getElementById('main-app');

    // Show Login Page after Welcome
    document.getElementById('welcome-next').addEventListener('click', () => {
        welcomeScreen.classList.remove('active');
        loginScreen.classList.add('active');
    });

    // Show Main App after Login
    document.getElementById('login-form').addEventListener('submit', (event) => {
        event.preventDefault();
        loginScreen.classList.remove('active');
        mainApp.classList.add('active');
    });

    // Navigation within Main App
    const navLinks = document.querySelectorAll('nav a');
    const pages = document.querySelectorAll('#main-app .page');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-page');

            pages.forEach(page => page.classList.remove('active'));
            document.getElementById(target).classList.add('active');
        });
    });
});
