let index = 0;
const carousel = document.getElementById("carousel_footer");
const images = document.querySelectorAll(".carousel_footer a");
const totalImages = images.length - 10;

function showSlide() {
  if (index >= totalImages) {
    index = 0;
  } else if (index < 0) {
    index = totalImages - 1;
  }
  carousel.style.transform = `translateX(${-index * 100}%)`;
}

function nextSlide() {
  index++;
  showSlide();
}

function prevSlide() {
  index--;
  showSlide();
}

setInterval(() => {
  nextSlide();
}, 3000);

export { nextSlide, prevSlide, showSlide };
