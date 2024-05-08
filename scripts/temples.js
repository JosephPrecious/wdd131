// temples.js

// Get the footer element
const footer = document.querySelector('footer');

// Update the footer with current year and date last modified
footer.innerHTML += `<div class="dynamic-info">Copyright &copy; ${new Date().getFullYear()} - Last modified: ${document.lastModified}</div>`;

// Responsive hamburger menu
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu');
});
