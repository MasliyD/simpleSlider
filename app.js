let slideIndex = 1;
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let dotsParrent = document.querySelector('.dots');
let dots = document.querySelectorAll('.dot');

showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.querySelectorAll('.slider__item');
    let dots = document.querySelectorAll('.dot');

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].classList.add('active');
    }

    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].className += 'active';
}

prev.addEventListener('click', () => plusSlides(-1));
next.addEventListener('click', () => plusSlides(1));

dotsParrent.addEventListener('click', (e) => {
    const target = e.target;

    if (target && target.classList.contains('dot')) {
        dots.forEach( (item, i) => {
            if (target == item) {
                currentSlide(i + 1);
            }
        });
    }
});