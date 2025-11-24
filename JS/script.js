const carrosselWrapper = document.querySelector(".carrossel-wrapper");
const cards = document.querySelectorAll(".Card");
const dotsContainer = document.querySelector("#carousel-dots");

let currentSlide = 0;
let totalSlides = cards.length;
let autoSlide;

// Criar bolinhas automaticamente
cards.forEach((_, index) => {
  let dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) dot.classList.add("active");
  dot.addEventListener("click", () => {
    goToSlide(index);
  });
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

// Função para ir até o slide específico
function goToSlide(index) {
  currentSlide = index;
  // Como cada card ocupa 25% do wrapper, precisamos mover 25% por slide
  carrosselWrapper.style.transform = `translateX(-${currentSlide * 25}%)`;
  updateDots();
  resetAutoSlide();
}

// Atualiza bolinhas
function updateDots() {
  dots.forEach(dot => dot.classList.remove("active"));
  dots[currentSlide].classList.add("active");
}

// Função que vai para o próximo slide automaticamente (um por vez)
function nextSlide() {
  currentSlide++;
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  // Como cada card ocupa 25% do wrapper, precisamos mover 25% por slide
  carrosselWrapper.style.transform = `translateX(-${currentSlide * 25}%)`;
  updateDots();
}

// Reinicia o timer quando clicar nas bolinhas
function resetAutoSlide() {
  clearInterval(autoSlide);
  autoSlide = setInterval(nextSlide, 10000);
}

// Inicializar no primeiro slide
goToSlide(0);
autoSlide = setInterval(nextSlide, 10000);


