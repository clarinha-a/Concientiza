// =============================================================
// ANIMAÇÕES GSAP - CONSCIENTIZA (PORTUGUÊS)
// =============================================================

// Registrar plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// =============================================================
// ANIMAÇÃO DO HEADER (LETREIRO)
// =============================================================
gsap.from(".letreiro", {
  duration: 1.5,
  y: -100,
  opacity: 0,
  ease: "power3.out"
});

gsap.from(".sombra", {
  duration: 1.5,
  opacity: 0,
  ease: "power2.inOut"
});

// =============================================================
// ANIMAÇÃO DA NAVEGAÇÃO (CORRIGIDA)
// =============================================================
// Entrada do container <nav>
gsap.from("nav", {
  duration: 0.9,
  y: -40,
  opacity: 0,
  ease: "power3.out",
  delay: 0.3
});

// Entrada dos <a> sem empurrar para fora da tela
gsap.from("nav a", {
  duration: 0.6,
  opacity: 0,
  scale: 0.8,
  stagger: 0.07,
  ease: "back.out(1.7)",
});
// =============================================================
// ANIMAÇÃO DO SELETOR DE IDIOMAS (CORRIGIDA)
// =============================================================
gsap.from("#idioma", {
  duration: 1,
  y: -80,
  opacity: 0,
  ease: "power3.out",
  delay: 0.5
});

// Animação de hover suave no idioma
const idiomaElement = document.querySelector("#idioma");
if (idiomaElement) {
  idiomaElement.addEventListener("mouseenter", () => {
    gsap.to("#idioma", {
      duration: 0.3,
      scale: 1.08,
      ease: "power2.out"
    });
  });

  idiomaElement.addEventListener("mouseleave", () => {
    gsap.to("#idioma", {
      duration: 0.3,
      scale: 1,
      ease: "power2.out"
    });
  });
}

// =============================================================
// ANIMAÇÃO DOS TÍTULOS DAS SEÇÕES
// =============================================================
const titles = document.querySelectorAll(".title, .section-title");
titles.forEach(title => {
  gsap.from(title, {
    scrollTrigger: {
      trigger: title,
      start: "top 90%",
      toggleActions: "play none none reverse"
    },
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out"
  });
});

// =============================================================
// ANIMAÇÃO DOS CARDS DO CARROSSEL
// =============================================================
const cards = document.querySelectorAll(".Card");
cards.forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: "#Carrossel",
      start: "top 80%",
      toggleActions: "play none none reverse"
    },
    scale: 0.8,
    opacity: 0,
    duration: 1,
    delay: index * 0.2,
    ease: "power3.out"
  });
});

// =============================================================
// ANIMAÇÃO DOS PERFIS (SCROLL DA ESQUERDA PARA DIREITA)
// =============================================================
const perfis = document.querySelectorAll(".perfil");

perfis.forEach((perfil, index) => {
  gsap.from(perfil, {
    scrollTrigger: {
      trigger: perfil,
      start: "top 85%",
      end: "top 50%",
      toggleActions: "play none none reverse"
    },
    x: -200,
    opacity: 0,
    duration: 1,
    delay: index * 0.2,
    ease: "power3.out"
  });
});

// =============================================================
// ANIMAÇÃO DA SEÇÃO DE VÍDEOS
// =============================================================
const videos = document.querySelectorAll(".video");
videos.forEach((video, index) => {
  gsap.from(video, {
    scrollTrigger: {
      trigger: video,
      start: "top 90%",
      toggleActions: "play none none reverse"
    },
    y: 100,
    opacity: 0,
    duration: 0.8,
    delay: index * 0.1,
    ease: "power2.out"
  });
});

// =============================================================
// ANIMAÇÃO DA SEÇÃO DE DENÚNCIAS
// =============================================================
gsap.from(".denuncias-box", {
  scrollTrigger: {
    trigger: ".denuncias-box",
    start: "top 85%",
    toggleActions: "play none none reverse"
  },
  y: 80,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

const denunciaItems = document.querySelectorAll(".denuncias-list li");
denunciaItems.forEach((item, index) => {
  gsap.from(item, {
    scrollTrigger: {
      trigger: item,
      start: "top 90%",
      toggleActions: "play none none reverse"
    },
    x: -100,
    opacity: 0,
    duration: 0.8,
    delay: index * 0.15,
    ease: "power2.out"
  });
});

// =============================================================
// ANIMAÇÃO DA SEÇÃO SOBRE NÓS
// =============================================================
gsap.from(".sobre-nos .container", {
  scrollTrigger: {
    trigger: ".sobre-nos",
    start: "top 85%",
    toggleActions: "play none none reverse"
  },
  y: 60,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

// =============================================================
// ANIMAÇÃO DO FOOTER
// =============================================================
const footerColumns = document.querySelectorAll(".footer-column");
footerColumns.forEach((column, index) => {
  gsap.from(column, {
    scrollTrigger: {
      trigger: column,
      start: "top 95%",
      toggleActions: "play none none reverse"
    },
    y: 60,
    opacity: 0,
    duration: 1,
    delay: index * 0.2,
    ease: "power2.out"
  });
});

// =============================================================
// ANIMAÇÃO DO BOTÃO SETA (VOLTAR AO TOPO)
// =============================================================
gsap.from("#seta", {
  scrollTrigger: {
    trigger: "#Perfis",
    start: "top 50%",
    toggleActions: "play none none reverse"
  },
  scale: 0,
  rotation: 360,
  duration: 0.8,
  ease: "back.out(1.7)"
});

// Animação de hover no botão seta
const setaElement = document.querySelector("#seta");
if (setaElement) {
  setaElement.addEventListener("mouseenter", () => {
    gsap.to("#seta", {
      duration: 0.3,
      scale: 1.15,
      rotation: 360,
      ease: "power2.out"
    });
  });

  setaElement.addEventListener("mouseleave", () => {
    gsap.to("#seta", {
      duration: 0.3,
      scale: 1,
      rotation: 0,
      ease: "power2.out"
    });
  });
}

// =============================================================
// CARROSSEL DE CONCEITOS
// =============================================================
let currentIndex = 0;
const carouselWrapper = document.querySelector('.carrossel-wrapper');
const cardsArray = document.querySelectorAll('.Card');
const dotsContainer = document.getElementById('carousel-dots');
const totalCards = cardsArray.length;

// Criar dots
for (let i = 0; i < totalCards; i++) {
  const dot = document.createElement('div');
  dot.classList.add('dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goToSlide(i));
  dotsContainer.appendChild(dot);
}

const dots = document.querySelectorAll('.dot');

function updateCarousel() {
  const offset = -currentIndex * 100;
  gsap.to(carouselWrapper, {
    x: `${offset}%`,
    duration: 0.8,
    ease: "power2.inOut"
  });
  
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

function goToSlide(index) {
  currentIndex = index;
  updateCarousel();
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalCards;
  updateCarousel();
}

// Autoplay
setInterval(nextSlide, 5000);

// Click nos cards para abrir modal
cardsArray.forEach((card, index) => {
  card.addEventListener('click', () => openModal(index));
});

// =============================================================
// MODAL
// =============================================================
const modal = document.getElementById('modal01');
const closeBtn = document.getElementById('closeBtn');
const modalTitle = document.getElementById('modalTitle');
const modalSubtitle = document.getElementById('modalSubtitle');
const modalContent = document.getElementById('modalContent');

const modalData = [
  {
    title: "Relações Étnico-Raciais",
    subtitle: "Compreensão das interações sociais",
    content: `
      <p class="modal-paragraph">As relações étnico-raciais referem-se às interações entre diferentes grupos étnicos e raciais em uma sociedade. No Brasil, essas relações foram historicamente marcadas pela colonização, escravidão e miscigenação.</p>
      <p class="modal-paragraph">Compreender essas relações é fundamental para reconhecer desigualdades estruturais, valorizar a diversidade cultural e promover uma sociedade mais justa e inclusiva.</p>
      <p class="modal-paragraph">A educação para as relações étnico-raciais, estabelecida pela Lei 10.639/03, tornou obrigatório o ensino de história e cultura afro-brasileira nas escolas, representando um marco importante na valorização da diversidade.</p>
    `
  },
  {
    title: "Racismo Estrutural",
    subtitle: "Sistema que perpetua desigualdades",
    content: `
      <p class="modal-paragraph">O racismo estrutural é uma forma de discriminação enraizada nas estruturas sociais, econômicas e políticas. Diferente do racismo individual, ele se manifesta através de instituições, leis e práticas que perpetuam desigualdades raciais.</p>
      <p class="modal-paragraph">Este conceito, amplamente discutido pelo jurista Silvio Almeida, explica como o racismo não é um ato isolado, mas um sistema que beneficia determinados grupos em detrimento de outros, mantendo privilégios e desigualdades ao longo do tempo.</p>
      <p class="modal-paragraph">Combater o racismo estrutural exige mudanças profundas nas políticas públicas, nas instituições e na forma como a sociedade se organiza, indo além de ações individuais.</p>
    `
  },
  {
    title: "Interseccionalidade",
    subtitle: "Múltiplas identidades e opressões",
    content: `
      <p class="modal-paragraph">A interseccionalidade é um conceito desenvolvido por Kimberlé Crenshaw que analisa como diferentes formas de discriminação (raça, gênero, classe, orientação sexual, etc.) se entrelaçam e criam experiências únicas de opressão.</p>
      <p class="modal-paragraph">Uma mulher negra, por exemplo, não experiencia o racismo e o sexismo de forma separada, mas sim de maneira integrada, criando desafios específicos que não podem ser compreendidos analisando apenas uma dimensão de sua identidade.</p>
      <p class="modal-paragraph">Esta perspectiva é fundamental para desenvolver políticas públicas e movimentos sociais mais efetivos, que considerem a complexidade das experiências de discriminação e exclusão.</p>
    `
  }
];

function openModal(index) {
  const data = modalData[index];
  modalTitle.textContent = data.title;
  modalSubtitle.textContent = data.subtitle;
  modalContent.innerHTML = data.content;
  
  modal.style.display = 'flex';
  gsap.from('.modal-content', {
    duration: 0.5,
    scale: 0.8,
    opacity: 0,
    ease: "back.out(1.7)"
  });
}

closeBtn.addEventListener('click', () => {
  gsap.to('.modal-content', {
    duration: 0.3,
    scale: 0.8,
    opacity: 0,
    ease: "power2.in",
    onComplete: () => {
      modal.style.display = 'none';
    }
  });
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    gsap.to('.modal-content', {
      duration: 0.3,
      scale: 0.8,
      opacity: 0,
      ease: "power2.in",
      onComplete: () => {
        modal.style.display = 'none';
      }
    });
  }
});

// =============================================================
// SCROLL SUAVE PARA ÂNCORAS
// =============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      gsap.to(window, {
        duration: 1,
        scrollTo: {
          y: target,
          offsetY: 100
        },
        ease: "power2.inOut"
      });
    }
  });
});

console.log("✨ Animações GSAP carregadas com sucesso!");