const navbarToggle = document.querySelector('.nav-toggle');
const navbarLinks = document.querySelectorAll('.nav__link');


navbarToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});


navbarLinks.forEach(link => {
   link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
   });
});