// Fonction pour l'animation progressive au défilement
document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            } else {
                entry.target.classList.remove("visible");
            }
        });
    });

    document.querySelectorAll('.task').forEach(task => {
        observer.observe(task);
    });
});

// Fonction pour le bouton de retour en haut
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Ajoute un bouton de retour en haut dynamiquement
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    const scrollToTopButton = document.getElementById('scrollToTopBtn');
    if (scrolled > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});




// carousel
document.addEventListener("DOMContentLoaded", function() {
    let carouselImages = document.querySelector(".carousel-images");
    let slides = carouselImages.getElementsByTagName("img");
    let slideIndex = 0;

    // Position initiale du carrousel
    carouselImages.style.transform = `translateX(${-slideIndex * 100}%)`;

    function moveSlide(n) {
        slideIndex += n;
        if (slideIndex >= slides.length) { slideIndex = 0; }
        if (slideIndex < 0) { slideIndex = slides.length - 1; }
        carouselImages.style.transform = `translateX(${-slideIndex * 100}%)`;
    }

    document.querySelector('.prev').addEventListener('click', function() {
        moveSlide(-1);
    });

    document.querySelector('.next').addEventListener('click', function() {
        moveSlide(1);
    });
});




