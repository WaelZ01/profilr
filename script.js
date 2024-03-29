

// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar-links')[0]


document.querySelector('.list-icon').addEventListener('click', function () {
  document.querySelector('.navbar').classList.toggle('active');
});




let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');



// ScrollReveal({
//     reset:true,
//     distance:'80px',
//     duration:2000,
//     delay:200
// });

window.addEventListener('scroll', function() {
  var scrollTop = window.scrollY;
  var windowHeight = window.innerHeight;
  var documentHeight = document.body.clientHeight;
  var scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
  var scrollWatcher = document.querySelector('.scroll-watcher');
  scrollWatcher.style.width = scrollPercentage + '%';
});





