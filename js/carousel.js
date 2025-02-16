document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.getElementById('carousel');
    const carouselInner = document.getElementById('carousel-inner');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slides = document.querySelectorAll('.carousel-item');
    const indicators = document.querySelectorAll('.indicador');

    let currentSlide = 0;
    const totalSlides = slides.length;

    function goToSlide(index) {
        if (index < 0) index = totalSlides - 1;
        if (index >= totalSlides) index = 0;

        currentSlide = index;
        const offset = -100 * currentSlide;
        carouselInner.style.transform = `translateX(${offset}%)`;

        indicators.forEach((indicator, i) => {
            indicator.classList.toggle('bg-white', i === currentSlide);
            indicator.classList.toggle('bg-gray-400', i !== currentSlide);
        });
    }

    prevBtn.addEventListener('click', () => {
        goToSlide(currentSlide - 1);
    });

    nextBtn.addEventListener('click', () => {
        goToSlide(currentSlide + 1);
    });

    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            goToSlide(index);
        });
    });

    setInterval(() => {
        goToSlide(currentSlide + 1);
    }, 5000);

    goToSlide(0);
});