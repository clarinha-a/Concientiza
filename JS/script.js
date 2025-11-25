// Aguarda o carregamento completo do DOM
document.addEventListener('DOMContentLoaded', function() {

  // ===== ANIMAÇÕES DE ENTRADA COM GSAP =====
  // Animar header ao carregar
  gsap.from('.quadrado', {
    duration: 1.5,
    scale: 0,
    rotation: -180,
    ease: 'elastic.out(1, 0.5)'
  });

  gsap.from('.logo', {
    duration: 1,
    scale: 0,
    rotation: 360,
    delay: 0.5,
    ease: 'back.out(1.7)'
  });

  gsap.from('.letreiro', {
    duration: 1.2,
    y: -100,
    opacity: 0,
    delay: 0.8,
    ease: 'power3.out'
  });

  gsap.from('nav', {
    duration: 1,
    y: -50,
    opacity: 0,
    delay: 1.2,
    ease: 'power2.out'
  });

// ===== CARROSSEL DE CONCEITOS CORRIGIDO =====
const carrosselWrapper = document.querySelector(".carrossel-wrapper");
const cards = document.querySelectorAll(".Card");
const dotsContainer = document.querySelector("#carousel-dots");
const prevBtn = document.querySelector(".carousel-btn.prev");
const nextBtn = document.querySelector(".carousel-btn.next");

if (carrosselWrapper && cards.length > 0) {
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
    // Garante que o índice está dentro dos limites
    currentSlide = index;
    
    // Calcula o deslocamento baseado na largura do container
    const containerWidth = carrosselWrapper.parentElement.offsetWidth;
    const translateValue = currentSlide * containerWidth;
    
    // Usa GSAP para animação suave
    gsap.to(carrosselWrapper, {
      x: -translateValue,
      duration: 0.8,
      ease: 'power2.inOut'
    });
    
    updateDots();
    resetAutoSlide();
  }

  // Atualiza bolinhas
  function updateDots() {
    dots.forEach(dot => dot.classList.remove("active"));
    if (dots[currentSlide]) {
      dots[currentSlide].classList.add("active");
    }
  }

  // Função que vai para o próximo slide (um por vez)
  function nextSlide() {
    currentSlide++;
    if (currentSlide >= totalSlides) {
      currentSlide = 0; // Volta para o primeiro
    }
    goToSlide(currentSlide);
  }

  // Função que vai para o slide anterior (um por vez)
  function prevSlide() {
    currentSlide--;
    if (currentSlide < 0) {
      currentSlide = totalSlides - 1; // Vai para o último
    }
    goToSlide(currentSlide);
  }

  // Reinicia o timer de 20 segundos
  function resetAutoSlide() {
    clearInterval(autoSlide);
    autoSlide = setInterval(nextSlide, 20000); // 20 segundos
  }

  // Event listeners para os botões
  if (prevBtn) {
    prevBtn.addEventListener('click', prevSlide);
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', nextSlide);
  }

  // Suporte a swipe em mobile
  let touchStartX = 0;
  let touchEndX = 0;

  carrosselWrapper.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  });

  carrosselWrapper.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  });

  function handleSwipe() {
    if (touchEndX < touchStartX - 50) {
      nextSlide(); // Swipe left
    }
    if (touchEndX > touchStartX + 50) {
      prevSlide(); // Swipe right
    }
  }

  // Atualizar ao redimensionar a janela
  window.addEventListener('resize', () => {
    goToSlide(currentSlide);
  });

  // Inicializar
  goToSlide(0);
  autoSlide = setInterval(nextSlide, 20000); // 20 segundos

  // Animação dos cards ao scroll usando GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);
  
  cards.forEach((card, index) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: '#Carrossel',
        start: 'top center',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      scale: 0.8,
      duration: 0.6,
      delay: index * 0.1,
      ease: 'back.out(1.7)'
    });
  });
}
  // ===== ANIMAÇÕES DE SCROLL PARA PERFIS =====
  const perfis = document.querySelectorAll('.perfil');
  
  perfis.forEach((perfil, index) => {
    gsap.from(perfil, {
      scrollTrigger: {
        trigger: perfil,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      rotation: -5,
      duration: 0.8,
      delay: index * 0.15,
      ease: 'power3.out'
    });
  });

  // ===== CARROSSEL INFINITO DOS VÍDEOS =====
  const videosCarousel = document.querySelector('.videos-carousel');
  if (videosCarousel) {
    const videos = Array.from(videosCarousel.children);
    
    // Clone vídeos para efeito de roda infinita
    videos.forEach(v => videosCarousel.appendChild(v.cloneNode(true)));

    let scrollAmount = 0;
    let speed = 0.5;
    let animationId;

    function animateCarousel() {
      scrollAmount += speed;
      
      // Reset seamless quando chegar na metade (onde estão os clones)
      if (scrollAmount >= videosCarousel.scrollWidth / 2) {
        scrollAmount = 0;
      }
      
      videosCarousel.scrollLeft = scrollAmount;
      animationId = requestAnimationFrame(animateCarousel);
    }

    // Pausar animação ao passar o mouse
    videosCarousel.addEventListener('mouseenter', () => {
      cancelAnimationFrame(animationId);
    });

    videosCarousel.addEventListener('mouseleave', () => {
      animateCarousel();
    });

    animateCarousel();
  }

  // ===== FRASES ALEATÓRIAS COM ANIMAÇÃO GSAP =====
  const frases = [
    "A conscientização começa com uma boa conversa.",
    "Conhecimento é a base para a transformação.",
    "Diversidade é riqueza cultural.",
    "Respeito é o caminho para uma sociedade justa.",
    "Juntos, somos mais fortes.",
    "Educação é o melhor investimento para o futuro.",
    "O silêncio diante da injustiça é cumplicidade.",
    "Antirracismo é uma prática diária.",
    "A igualdade racial não é uma utopia, é um direito.",
    "Reconhecer privilégios é o primeiro passo para a mudança."
  ];

  const btnFrase = document.getElementById('soltaFrase');
  const fraseDiv = document.querySelector('.frase');
  
  // Animação de entrada da seção de frases
  gsap.from('.frase-container', {
    scrollTrigger: {
      trigger: '#Frases',
      start: 'top center',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    scale: 0.9,
    duration: 0.8,
    ease: 'power2.out'
  });
  
  if (btnFrase && fraseDiv) {
    btnFrase.addEventListener('click', function() {
      // Animação de saída com GSAP
      gsap.to(fraseDiv, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        onComplete: () => {
          // Seleciona frase aleatória
          const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];
          fraseDiv.textContent = fraseAleatoria;
          
          // Animação de entrada com GSAP
          gsap.fromTo(fraseDiv, 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)' }
          );
        }
      });
    });
  }

  // ===== ANIMAÇÃO DA SEÇÃO OBJETIVO =====
  gsap.from('.objetivo-content > p', {
    scrollTrigger: {
      trigger: '#Objetivo',
      start: 'top center',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power2.out'
  });

  const features = document.querySelectorAll('.feature');
  features.forEach((feature, index) => {
    gsap.from(feature, {
      scrollTrigger: {
        trigger: feature,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      },
      opacity: 0,
      y: 50,
      rotation: 5,
      duration: 0.8,
      delay: index * 0.2,
      ease: 'back.out(1.7)'
    });
  });

  // ===== SMOOTH SCROLL PARA NAVEGAÇÃO =====
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Verifica se é um link interno (começa com #)
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          gsap.to(window, {
            duration: 1,
            scrollTo: {
              y: targetElement,
              offsetY: 20
            },
            ease: 'power2.inOut'
          });
        }
      }
    });
  });

  // ===== ANIMAÇÃO DO FOOTER =====
  gsap.from('footer', {
    scrollTrigger: {
      trigger: 'footer',
      start: 'top bottom',
      toggleActions: 'play none none reverse'
    },
    opacity: 0,
    y: 50,
    duration: 0.8,
    ease: 'power2.out'
  });

  // ===== EFEITO PARALLAX NO HEADER =====
  gsap.to('.quadrado', {
    scrollTrigger: {
      trigger: 'header',
      start: 'top top',
      end: 'bottom top',
      scrub: true
    },
    rotation: '+=180',
    scale: 1.2,
    ease: 'none'
  });

});