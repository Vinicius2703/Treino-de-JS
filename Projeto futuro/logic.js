const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.btn-next');
const prevButton = document.querySelector('.btn-prev');
const dotsNav = document.querySelector('.carousel-nav');
const dots = Array.from(dotsNav.children);

let currentIndex = 0;

// Função que move o carrossel
const updateCarousel = (index) => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    // Move o trilho para a esquerda baseado no índice
    track.style.transform = `translateX(-${index * slideWidth}px)`;
    
    // Atualiza os pontinhos (dots)
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
    
    currentIndex = index;
};

// Evento de clique no botão "Próximo"
nextButton.addEventListener('click', () => {
    let nextIndex = currentIndex + 1;
    if (nextIndex >= slides.length) nextIndex = 0; // Volta ao início
    updateCarousel(nextIndex);
});

// Evento de clique no botão "Anterior"
prevButton.addEventListener('click', () => {
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) prevIndex = slides.length - 1; // Vai para o último
    updateCarousel(prevIndex);
});

// Evento de clique nos indicadores (pontinhos)
dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;

    const targetIndex = dots.findIndex(dot => dot === targetDot);
    updateCarousel(targetIndex);
});

// Ajuste automático caso a janela mude de tamanho
window.addEventListener('resize', () => updateCarousel(currentIndex));