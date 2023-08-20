// Botones

const toggleButtons = document.querySelectorAll(".toggle-button");
const displayText = document.getElementById("display-text");

toggleButtons.forEach((button) => {
  button.addEventListener("click", function () {
    toggleButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    this.classList.add("active");
    displayText.textContent = this.dataset.text;
  });
});

displayText.textContent = document.querySelector(
  ".toggle-button.active"
).dataset.text;

// Fotos

const carousel = document.querySelector(".carousel-inner");
const thumbnails = document.querySelectorAll(".thumbnail");

let currentPosition = 0;
const carouselWidth = carousel.offsetWidth;
const totalSlides = carousel.childElementCount;

function showSlide(index) {
  const newPosition = index * -carouselWidth;
  carousel.style.transform = `translateX(${newPosition}px)`;
}

function goToSlide(index) {
  currentPosition = index;
  showSlide(currentPosition);
  updateThumbnail(currentPosition);
}

function updateThumbnail(index) {
  thumbnails.forEach((thumbnail, i) => {
    if (i === index) {
      thumbnail.classList.add("active");
    } else {
      thumbnail.classList.remove("active");
    }
  });
}

thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    goToSlide(index);
  });
});
