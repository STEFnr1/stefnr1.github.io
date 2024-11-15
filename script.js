// Loader Animat
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    loader.style.display = 'none';
});

// Carusel Scroll Automat
const carousel = document.querySelector('.carousel');
setInterval(() => {
    carousel.scrollBy({ left: carousel.offsetWidth, behavior: 'smooth' });
}, 3000);
