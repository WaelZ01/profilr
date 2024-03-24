const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})



// let progress = document.querySelectorAll('.prgress span')
//     spans = document.querySelectorAll('.progress-title span')
// progress.forEach((prog)=>{
//     prog.style.width = prog.dataset.width;
// });
// spans.forEach((span)=>{
// span.style.left = span.dataset.num;
// span.style.opacity.visibility = 'visible'
// })

// Get all progress bars
// const progressBars = document.querySelectorAll('.progress-bar .progress span');

// Animate each progress bar to its specified width
// progressBars.forEach(progress => {
//     const width = progress.dataset.width;
//     progress.style.width = width;
// });

// const scriptURL = 'https://script.google.com/macros/s/AKfycbzFPVGxI-75Ilkm2z_EMuI9ubPlp8-7dQmMzzdPiIunLPPzj3bcY1ohMdT_DfZ3zPwhTA/exec'
// const form = document.forms['submit-to-google-sheet']
// const msg=document.getElementById("msg")



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

// window.onscroll = () => {
//     sections.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height){
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
//             });
//         };

//     });
//     let header=document.querySelector('header');

//     header.classList.toggle('sticky',window.screenY>100);
//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');
// };

ScrollReveal({
    reset:true,
    distance:'80px',
    duration:2000,
    delay:200
});





