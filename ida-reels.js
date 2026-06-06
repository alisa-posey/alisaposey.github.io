function currentSlide(n) {
  clearTimeout(slideshowTimer); 
  slideIndex = n;             
  

  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  

  slideshowTimer = setTimeout(showSlides, 5000);
}

let slideIndex = 0;
let slideshowTimer; 

showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";

  slideshowTimer = setTimeout(showSlides, 5000); 
}

function stopSlideshow() {
    clearTimeout(slideshowTimer); 
}


function resumeSlideshow() {
    
    if (!slideshowTimer) {
        showSlides();
    }
}

let video = document.getElementById('myVideo');
let video2 = document.getElementById('myVideo2');
let video3 = document.getElementById('myVideo3');




video.addEventListener('play', stopSlideshow);    // Stop when video plays
video.addEventListener('pause', resumeSlideshow);  // Resume when video pauses
video.addEventListener('ended', resumeSlideshow);  // Resume when video finishes

video2.addEventListener('play', stopSlideshow);    // Stop when video plays
video2.addEventListener('pause', resumeSlideshow);  // Resume when video pauses
video2.addEventListener('ended', resumeSlideshow);  // Resume when video finishes

video3.addEventListener('play', stopSlideshow);    // Stop when video plays
video3.addEventListener('pause', resumeSlideshow);  // Resume when video pauses
video3.addEventListener('ended', resumeSlideshow);  // Resume when video finishes



