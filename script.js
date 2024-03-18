// document.addEventListener('DOMContentLoaded', function () {
//     const menuIcon = document.querySelector('.menu-icon');
//     const navLinks = document.querySelector('.nav-links');

//     menuIcon.addEventListener('click', function () {
//         navLinks.classList.toggle('active');
//     });
// });


const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})