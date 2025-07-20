let textSlideIndex = 0;

function showTextSlides() {
  const slides = document.querySelectorAll(".slide-text");
  slides.forEach(slide => slide.style.display = "none");

  textSlideIndex++;
  if (textSlideIndex > slides.length) {
    textSlideIndex = 1;
  }

  slides[textSlideIndex - 1].style.display = "block";
  setTimeout(showTextSlides, 3000); // Faster switch: 3 seconds
}

// Start immediately
document.addEventListener("DOMContentLoaded", showTextSlides);
