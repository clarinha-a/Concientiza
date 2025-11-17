const carrosselWrapper = document.querySelector(".carrossel-wrapper");
const cards = document.querySelectorAll(".Card");
const dotsContainer = document.querySelector("#carousel-dots");

let currentSlide = 0;
let totalSlides = cards.length;

// Criar bolinhas automaticamente
cards.forEach((_, index) => {
    let dot = document.createElement("div");
    dot.classList.add("dot");
    if (index === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
        currentSlide = index;
        scrollToSlide(index);
        updateDots();
        resetAutoSlide();
    });

    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

// Função para ir até o slide
function scrollToSlide(index) {
    const percentage = index * -100;
    carrosselWrapper.style.transform = `translateX(${percentage}%)`;
}

// Atualiza bolinhas
function updateDots() {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentSlide].classList.add("active");
}

// AUTO-PLAY: muda a cada 10 segundos
let autoSlide = setInterval(nextSlide, 10000);

// Função que vai para o próximo slide automaticamente
function nextSlide() {
    currentSlide++;
    if (currentSlide >= totalSlides) currentSlide = 0;

    scrollToSlide(currentSlide);
    updateDots();
}

// Reinicia o timer quando clicar nas bolinhas
function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 10000);
}

// Inicializar no primeiro slide
scrollToSlide(0);
updateDots();