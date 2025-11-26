// ==========================================
// script.js — Código totalmente comentado
// ==========================================

// Aguarda o carregamento completo do DOM antes de executar qualquer função
// Isso garante que todos os elementos existam antes de o JS manipulá-los

document.addEventListener('DOMContentLoaded', function() {

  // =============================================================
  // ANIMAÇÕES DE ENTRADA DO HEADER USANDO GSAP
  // =============================================================

  // Anima o quadrado decorativo inicial
  gsap.from('.quadrado', {
    duration: 1.5,      // duração da animação
    scale: 0,           // começa pequeno
    rotation: -180,     // começa girado
    ease: 'elastic.out(1, 0.5)' // efeito elástico
  });

  // Anima o círculo da logo
  gsap.from('.logo', {
    duration: 1,
    scale: 0,
    rotation: 360,       // giro completo
    delay: 0.5,          // atraso para aparecer depois do quadrado
    ease: 'back.out(1.7)'
  });

  // Anima o letreiro do título
  gsap.from('.letreiro', {
    duration: 1.2,
    y: -100,             // entra de cima
    opacity: 0,
    delay: 0.8,
    ease: 'power3.out'
  });

  // Animação da barra de navegação
  gsap.from('nav', {
    duration: 1,
    y: -50,
    opacity: 0,
    delay: 1.2,
    ease: 'power2.out'
  });

  // =============================================================
  // CONFIGURAÇÃO DO CARROSSEL DE CONCEITOS
  // =============================================================

  const carrosselWrapper = document.querySelector(".carrossel-wrapper");
  const cards = document.querySelectorAll(".Card");
  const dotsContainer = document.querySelector("#carousel-dots");
  const prevBtn = document.querySelector(".carousel-btn.prev");
  const nextBtn = document.querySelector(".carousel-btn.next");

  // Verifica se os elementos realmente existem antes de prosseguir
  if (carrosselWrapper && cards.length > 0) {
    let currentSlide = 0;                  // slide atual
    let totalSlides = cards.length;        // quantidade total de slides
    let autoSlide;                         // controle do auto avanço

    // -----------------------------------------------------------
    // Criar automaticamente as bolinhas abaixo do carrossel
    // -----------------------------------------------------------
    cards.forEach((_, index) => {
      let dot = document.createElement("div");
      dot.classList.add("dot");
      if (index === 0) dot.classList.add("active"); // primeira ativa
      dot.addEventListener("click", () => {
        goToSlide(index); // vai direto para o slide clicado
      });
      dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    // -----------------------------------------------------------
    // Função para ir até o slide indicado
    // -----------------------------------------------------------
    function goToSlide(index) {
      currentSlide = index; // define qual slide vai exibir

      // pega a largura visível do container
      const containerWidth = carrosselWrapper.parentElement.offsetWidth;

      // valor de deslocamento baseado no slide
      const translateValue = currentSlide * containerWidth;

      // anima o deslocamento usando GSAP
      gsap.to(carrosselWrapper, {
        x: -translateValue,       // deslocamento para a esquerda
        duration: 0.8,
        ease: 'power2.inOut'
      });

      updateDots();        // atualiza bolinhas
      resetAutoSlide();    // reinicia o timer automático
    }

    // -----------------------------------------------------------
    // Atualiza o estado visual das bolinhas
    // -----------------------------------------------------------
    function updateDots() {
      dots.forEach(dot => dot.classList.remove("active"));
      if (dots[currentSlide]) dots[currentSlide].classList.add("active");
    }

    // -----------------------------------------------------------
    // Avança para o próximo slide
    // -----------------------------------------------------------
    function nextSlide() {
      currentSlide++;
      if (currentSlide >= totalSlides) currentSlide = 0; // volta ao início
      goToSlide(currentSlide);
    }

    // -----------------------------------------------------------
    // Volta para o slide anterior
    // -----------------------------------------------------------
    function prevSlide() {
      currentSlide--;
      if (currentSlide < 0) currentSlide = totalSlides - 1;
      goToSlide(currentSlide);
    }

    // -----------------------------------------------------------
    // Reinicia o timer de troca automática
    // -----------------------------------------------------------
    function resetAutoSlide() {
      clearInterval(autoSlide);
      autoSlide = setInterval(nextSlide, 20000); // troca a cada 20s
    }

    // Atacha eventos nos botões (caso existam)
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);

    // -----------------------------------------------------------
    // Suporte para gesto de swipe no celular
    // -----------------------------------------------------------
    let touchStartX = 0;
    let touchEndX = 0;

    carrosselWrapper.addEventListener('touchstart', e => {
      touchStartX = e.changedTouches[0].screenX;
    });

    carrosselWrapper.addEventListener('touchend', e => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    });

    // Detecta se o usuário puxou para esquerda/direita
    function handleSwipe() {
      if (touchEndX < touchStartX - 50) nextSlide();
      if (touchEndX > touchStartX + 50) prevSlide();
    }

    // Ajusta o slide atual se a tela for redimensionada
    window.addEventListener('resize', () => {
      goToSlide(currentSlide);
    });

    // Inicialização do carrossel
    goToSlide(0);
    autoSlide = setInterval(nextSlide, 20000);

    // -----------------------------------------------------------
    // Anima cada card quando o usuário faz scroll até a seção
    // -----------------------------------------------------------
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

  // =============================================================
  // ANIMAÇÃO DOS CARDS DE PERFIS
  // =============================================================

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

  // =============================================================
  // CARROSSEL INFINITO DOS VÍDEOS
  // =============================================================

  const videosCarousel = document.querySelector('.videos-carousel');

  if (videosCarousel) {
    const videos = Array.from(videosCarousel.children);

    // Duplica os vídeos para dar efeito de looping infinito
    videos.forEach(v => videosCarousel.appendChild(v.cloneNode(true)));

    let scrollAmount = 0;
    let speed = 0.5; // velocidade do loop
    let animationId;

    // Função que faz o carrossel "andar"
    function animateCarousel() {
      scrollAmount += speed;

      // Reinicia quando chega na metade (onde começam os clones)
      if (scrollAmount >= videosCarousel.scrollWidth / 2) {
        scrollAmount = 0;
      }

      videosCarousel.scrollLeft = scrollAmount;
      animationId = requestAnimationFrame(animateCarousel);
    }

    // Pausa quando o mouse entra no carrossel
    videosCarousel.addEventListener('mouseenter', () => {
      cancelAnimationFrame(animationId);
    });

    // Retoma quando o mouse sai
    videosCarousel.addEventListener('mouseleave', () => {
      animateCarousel();
    });

    animateCarousel(); // inicia
  }

  // =============================================================
  // SISTEMA DE FRASES ALEATÓRIAS COM ANIMAÇÃO
  // =============================================================

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

  // Animação da entrada da seção de frases
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

  // Botão que gera uma frase aleatória
  if (btnFrase && fraseDiv) {
    btnFrase.addEventListener('click', function() {

      // Animação de saída da frase atual
      gsap.to(fraseDiv, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        onComplete: () => {

          // Escolhe nova frase aleatória
          const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

          // Troca o texto
          fraseDiv.textContent = fraseAleatoria;

          // Anima a frase nova entrando
          gsap.fromTo(fraseDiv,
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)' }
          );
        }
      });
    });
  }

  // =============================================================
  // ANIMAÇÕES DA SEÇÃO OBJETIVO
  // =============================================================

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

  // =============================================================
  // SMOOTH SCROLL PARA OS LINKS DO MENU
  // =============================================================

  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Verifica se é um link interno
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

  // =============================================================
  // ANIMAÇÃO DO FOOTER
  // =============================================================

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

  // =============================================================
  // EFEITO PARALLAX NO HEADER
  // =============================================================

  gsap.to('.quadrado', {
    scrollTrigger: {
      trigger: 'header',
      start: 'top top',
      end: 'bottom top',
      scrub: true         // anima conforme o scroll
    },
    rotation: '+=180',    // gira continuamente
    scale: 1.2,
    ease: 'none'
  });

});

// =============================================================
// SISTEMA DE MODAL PARA OS CARDS DO CARROSSEL
// =============================================================

// Dados dos temas para cada card
const themeData = {
  card01: {
    title: "Relações Étnico-Raciais",
    subtitle: "Compreensão das interações sociais entre diferentes grupos",
    content: [
      "As relações étnico-raciais constituem um campo fundamental para compreender as dinâmicas sociais contemporâneas. Elas abrangem as interações, tensões e negociações entre diferentes grupos étnicos e raciais dentro de uma sociedade, moldadas por contextos históricos, políticos e culturais específicos.",
      "No Brasil, país marcado por séculos de escravidão e colonização, as relações étnico-raciais carregam profundas complexidades. A miscigenação foi historicamente utilizada como narrativa de harmonia racial, mascarando estruturas de poder e desigualdade que persistem até hoje. Compreender essas relações exige olhar crítico sobre como raça e etnia influenciam acesso a recursos, oportunidades e reconhecimento social.",
      "Promover relações étnico-raciais mais justas e equitativas passa por educação, políticas públicas afirmativas e transformação cultural. É necessário reconhecer as diferenças sem hierarquizá-las, valorizar a diversidade como patrimônio coletivo e combater todas as formas de discriminação e preconceito que ainda permeiam nossa sociedade."
    ]
  },
  card02: {
    title: "Racismo Estrutural",
    subtitle: "As raízes profundas da desigualdade racial",
    content: [
      "O racismo estrutural não se manifesta apenas em atos individuais de discriminação, mas está enraizado nas instituições, políticas e práticas que moldam nossa sociedade. É um sistema que perpetua desigualdades através de mecanismos que muitas vezes são invisíveis ou normalizados, tornando-se parte da própria estrutura social.",
      "Esta forma de racismo opera através de disparidades em acesso à educação de qualidade, oportunidades de emprego, moradia digna, saúde e justiça. As estatísticas revelam um padrão consistente de desvantagens que afetam desproporcionalmente as populações negras e outras minorias raciais, evidenciando que não se trata de casos isolados, mas de um problema sistêmico.",
      "Combater o racismo estrutural exige mais do que boas intenções individuais. Requer uma transformação profunda das instituições, políticas afirmativas, reparações históricas e um compromisso coletivo com a justiça racial. É um trabalho árduo e contínuo que demanda conscientização, educação e ação em todos os níveis da sociedade."
    ]
  },
  card03: {
    title: "Interseccionalidade",
    subtitle: "Compreendendo as múltiplas camadas de opressão",
    content: [
      "A interseccionalidade é um conceito fundamental para compreender como diferentes formas de discriminação e opressão se entrelaçam e se sobrepõem na experiência de indivíduos e grupos. Cunhado pela jurista Kimberlé Crenshaw, este conceito nos ajuda a entender que raça, gênero, classe social, orientação sexual e outras identidades não existem de forma isolada, mas interagem de maneiras complexas.",
      "Quando analisamos questões sociais através de uma lente interseccional, percebemos que uma mulher negra não enfrenta simplesmente o racismo e o sexismo de forma separada, mas uma experiência única que emerge da intersecção dessas identidades. Esta compreensão é essencial para desenvolver políticas públicas e movimentos sociais mais inclusivos e efetivos.",
      "Reconhecer a interseccionalidade significa aceitar que nossas lutas por justiça devem considerar todas as formas de opressão simultaneamente. É um chamado para a solidariedade que reconhece e valoriza a diversidade de experiências dentro dos movimentos por igualdade e justiça social."
    ]
  }
};

// Seleciona os elementos do DOM
const card01 = document.querySelector("#card01");
const card02 = document.querySelector("#card02");
const card03 = document.querySelector("#card03");
const modal01 = document.querySelector("#modal01");
const closeBtn = document.querySelector("#closeBtn");
const modalTitle = document.querySelector("#modalTitle");
const modalSubtitle = document.querySelector("#modalSubtitle");
const modalContent = document.querySelector("#modalContent");

// Variável de controle
let modalAtivo = false;

// Função para abrir o modal com os dados do card clicado
function abrirModal(cardId) {
  if (!modalAtivo && themeData[cardId]) {
    modalAtivo = true;
    
    const data = themeData[cardId];
    
    // Atualiza o conteúdo do modal
    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle;
    
    // Limpa e preenche os parágrafos
    modalContent.innerHTML = '';
    data.content.forEach(paragraph => {
      const p = document.createElement('p');
      p.className = 'modal-paragraph';
      p.textContent = paragraph;
      modalContent.appendChild(p);
    });
    
    // Mostra o modal
    modal01.style.display = "flex";
    
    // Animações GSAP
    const tl = gsap.timeline();
    
    tl.to(modal01, {
      opacity: 1,
      duration: 0.3
    });
    
    tl.to('.modal-content', {
      opacity: 1,
      scale: 1,
      duration: 0.5,
      ease: "back.out(1.2)"
    }, "-=0.1");
    
    tl.to('.corner-decoration', {
      opacity: 1,
      duration: 0.3,
      stagger: 0.05
    }, "-=0.2");
    
    tl.to('.modal-title', {
      opacity: 1,
      y: 0,
      duration: 0.5
    }, "-=0.2");
    
    tl.to('.modal-subtitle', {
      opacity: 1,
      duration: 0.4
    }, "-=0.3");
    
    tl.to('.modal-divider', {
      scaleX: 0,
      transformOrigin: "left",
      duration: 0
    }, "-=0.2")
    .to('.modal-divider', {
      scaleX: 1,
      duration: 0.6
    });
    
    tl.to('.modal-paragraph', {
      opacity: 1,
      duration: 0.6,
      stagger: 0.2
    }, "-=0.3");
  }
}

// Função para fechar o modal
function fecharModal() {
  gsap.to('.modal-content', {
    opacity: 0,
    scale: 0.8,
    duration: 0.3
  });
  
  gsap.to(modal01, {
    opacity: 0,
    duration: 0.3,
    delay: 0.1,
    onComplete: () => {
      modal01.style.display = "none";
      modalAtivo = false;
      
      // Reset dos elementos para próxima abertura
      gsap.set(['.modal-content', '.corner-decoration', 
               '.modal-title', '.modal-subtitle', '.modal-paragraph'], 
               { opacity: 0 });
      gsap.set('.modal-title', { y: -10 });
      gsap.set('.modal-content', { scale: 0.8 });
    }
  });
}

// Event listeners para os cards
if (card01) {
  card01.addEventListener("click", function() {
    abrirModal('card01');
  });
}

if (card02) {
  card02.addEventListener("click", function() {
    abrirModal('card02');
  });
}

if (card03) {
  card03.addEventListener("click", function() {
    abrirModal('card03');
  });
}

// Event listener para o botão de fechar
if (closeBtn) {
  closeBtn.addEventListener("click", fecharModal);
}

// Fecha o modal ao clicar fora do conteúdo
if (modal01) {
  modal01.addEventListener("click", function(e) {
    if (e.target === modal01) {
      fecharModal();
    }
  });
}

// Fecha o modal ao pressionar ESC
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape" && modalAtivo) {
    fecharModal();
  }
});