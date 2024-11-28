let currentIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll(".slide");
    const totalSlides = slides.length;

    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    updateCarousel();
}

function updateCarousel() {
    const carousel = document.querySelector(".slides");
    const slideWidth = document.querySelector(".slide").clientWidth;
    carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`; 
}

setInterval(() => {
    moveSlide(1);
}, 5000); 
    