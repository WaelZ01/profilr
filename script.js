document.querySelector('.list-icon').addEventListener('click', function () {
  document.querySelector('.navbar').classList.toggle('active');
});

window.addEventListener('scroll', function() {
  var scrollTop = window.scrollY;
  var windowHeight = window.innerHeight;
  var documentHeight = document.body.clientHeight;
  var scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;
  var scrollWatcher = document.querySelector('.scroll-watcher');
  scrollWatcher.style.width = scrollPercentage + '%';
});

// document.addEventListener('DOMContentLoaded', () => {
//   const sections = document.querySelectorAll('.animation ');
//   function checkPosition() {
//       sections.forEach((animation) => {

//       const windowHeight = window.innerHeight;
//       // This gets the height of the viewport (the visible area of the browser window).
//       const sectionTop = animation.getBoundingClientRect().top;
//       // This gets the distance between the top of the section and the top of the viewport.

//       if (sectionTop < windowHeight * 0.75) {
//         // If the top of the section is less than 75% of the viewport height from the top of the viewport...
        
//         animation.classList.add('active');
//         // ...the 'active' class is added to the section, making it visible with a fade-in effect.
//       } else {
//         // If the top of the section is more than 75% of the viewport height from the top of the viewport...
        
//         animation.classList.remove('active');
//         // ...the 'active' class is removed from the section, hiding it.
//       }
//     });
//   }

//   window.addEventListener('scroll', checkPosition);
//   // This adds an event listener to the window that listens for scroll events. When the user scrolls, the 'checkPosition' function is called.
  
//   window.addEventListener('resize', checkPosition);
//   // This adds an event listener to the window that listens for resize events. When the window is resized, the 'checkPosition' function is called.

//   checkPosition();
//   // This initially calls the 'checkPosition' function to determine the initial state of the sections when the page loads.
// });



const the_animation = document.querySelectorAll('.animation')
const the_animation1 = document.querySelectorAll('.text')
const the_animation2 = document.querySelectorAll('.skillAnime1')
const the_animation3 = document.querySelectorAll('.skillAnime2')
const the_animation4 = document.querySelectorAll('.serviesAnime')
const the_animation5 = document.querySelectorAll('.serviesAnime1')
const the_animation6 = document.querySelectorAll('.projectAnime')
const portfolioBoxes = document.querySelectorAll('.portfolio-box');



const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
      if (entry.isIntersecting) {
          entry.target.classList.add('active')
      }
          else {
              entry.target.classList.remove('active')
          }

           if (entry.isIntersecting) {
          entry.target.classList.add('textAnime')
      }
          else {
              entry.target.classList.remove('textAnime')
          }


          if (entry.isIntersecting) {
            entry.target.classList.add('active')
        }
            else {
                entry.target.classList.remove('active')
            }

  
             if (entry.isIntersecting) {
            entry.target.classList.add('skillActive1')
        }
            else {
                entry.target.classList.remove('skillActive1')
            } 
            
            
            if (entry.isIntersecting) {
              entry.target.classList.add('skillActive2')
          }
              else {
                  entry.target.classList.remove('skillActive2')
              }    

              if (entry.isIntersecting) {
                entry.target.classList.add('serviesActive');
              } else {
                entry.target.classList.remove('serviesActive');
              }

              if (entry.isIntersecting) {
                entry.target.classList.add('serviesActive1');
              } else {
                entry.target.classList.remove('serviesActive1');
              }

              if (entry.isIntersecting) {
                entry.target.classList.add('projectActive');
              } else {
                entry.target.classList.remove('projectActive');
              }
              if (entry.isIntersecting) {
                entry.target.classList.add('active');
              } else {
                entry.target.classList.remove('active');
              }
           
  })
},{ threshold: 0.5
});

for (let i = 0; i < the_animation.length; i++) {
  const elements = the_animation[i];

   observer.observe(elements);
 } 
 
 for (let i = 0; i < the_animation1.length; i++) {
  const elements = the_animation1[i];

   observer.observe(elements);
 } 

 for (let i = 0; i < the_animation2.length; i++) {
  const elements = the_animation2[i];

   observer.observe(elements);
 } 

 
 for (let i = 0; i < the_animation3.length; i++) {
  const elements = the_animation3[i];

   observer.observe(elements);
 } 

 for (let i = 0; i < the_animation4.length; i++) {
  const elements = the_animation4[i];

   observer.observe(elements);
 } 


 for (let i = 0; i < the_animation5.length; i++) {
  const elements = the_animation5[i];

   observer.observe(elements);
 } 

//  for (let i = 0; i < the_animation6.length; i++) {
//   const elements = the_animation6[i];

//    observer.observe(elements);
//  } 
the_animation6.forEach(element => {
  observer.observe(element);
});

portfolioBoxes.forEach((box, index) => {
  observer.observe(box);
  box.classList.add(`project${index + 1}`);
});