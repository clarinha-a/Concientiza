const carrossel = document.querySelector("#Carrossel");
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


// ⚡ Função com animação suave de verdade
function scrollToSlide(index) {
    const slide = cards[index];
    const leftOffset =
        slide.offsetLeft - (carrossel.offsetWidth - slide.offsetWidth) / 2;

    // animação de empurrão
    carrossel.classList.add("slide-push");

    setTimeout(() => {
        carrossel.classList.remove("slide-push");

        carrossel.scrollTo({
            left: leftOffset,
            behavior: "smooth"
        });
        
    }, 150); // o efeito de “empurrar” antes da troca real
}


// Atualiza bolinhas
function updateDots() {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentSlide].classList.add("active");
}


// Detecta automaticamente qual slide está centralizado
carrossel.addEventListener("scroll", () => {
    let center = carrossel.scrollLeft + carrossel.offsetWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    cards.forEach((card, index) => {
        let cardCenter = card.offsetLeft + card.offsetWidth / 2;
        let dist = Math.abs(center - cardCenter);

        if (dist < minDistance) {
            minDistance = dist;
            closestIndex = index;
        }
    });

    currentSlide = closestIndex;
    updateDots();
});


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
