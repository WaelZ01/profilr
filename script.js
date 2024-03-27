const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})




document.addEventListener("DOMContentLoaded", function() {
  // Get references to the menu icon and the navigation menu
  const menuIcon = document.getElementById("menu-icon");
  const navbar = document.querySelector(".navbar");

  // Check if menu icon and navbar exist
  if (menuIcon && navbar) {
    // Toggle the 'active' class on the navigation menu when the menu icon is clicked
    menuIcon.addEventListener("click", function() {
      navbar.classList.toggle("active");
    });
  } else {
    console.error("Menu icon or navbar not found!");
  }
});



let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');



ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});





