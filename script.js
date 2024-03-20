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
const progressBars = document.querySelectorAll('.progress-bar .progress span');

// Animate each progress bar to its specified width
progressBars.forEach(progress => {
    const width = progress.dataset.width;
    progress.style.width = width;
});



