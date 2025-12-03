// =============================================================
// GSAP ANIMATIONS - CONSCIENTIZA (ENGLISH)
// =============================================================

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// =============================================================
// HEADER ANIMATION (LOGO)
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
// NAVIGATION ANIMATION (FIXED)
// =============================================================
gsap.from("nav", {
  duration: 1,
  y: -80,
  opacity: 0,
  ease: "power3.out",
  delay: 0.3
});

gsap.from("nav a", {
  duration: 0.6,
  y: -30,
  opacity: 0,
  stagger: 0.08,
  ease: "back.out(1.7)",
  delay: 0.8
});

// =============================================================
// LANGUAGE SELECTOR ANIMATION (FIXED)
// =============================================================
gsap.from("#idioma", {
  duration: 1,
  y: -80,
  opacity: 0,
  ease: "power3.out",
  delay: 0.5
});

// Smooth hover animation on language selector
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
// SECTION TITLES ANIMATION
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
// CAROUSEL CARDS ANIMATION
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
// PROFILES ANIMATION (SCROLL FROM LEFT TO RIGHT)
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
// VIDEOS SECTION ANIMATION
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
// REPORTS SECTION ANIMATION
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
// ABOUT US SECTION ANIMATION
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
// FOOTER ANIMATION
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
// ARROW BUTTON ANIMATION (BACK TO TOP)
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

// Hover animation on arrow button
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
// CONCEPTS CAROUSEL
// =============================================================
let currentIndex = 0;
const carouselWrapper = document.querySelector('.carrossel-wrapper');
const cardsArray = document.querySelectorAll('.Card');
const dotsContainer = document.getElementById('carousel-dots');
const totalCards = cardsArray.length;

// Create dots
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

// Click on cards to open modal
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
    title: "Ethnic-Racial Relations",
    subtitle: "Understanding social interactions",
    content: `
      <p class="modal-paragraph">Ethnic-racial relations refer to interactions between different ethnic and racial groups in a society. In Brazil, these relations have been historically marked by colonization, slavery, and miscegenation.</p>
      <p class="modal-paragraph">Understanding these relations is fundamental to recognizing structural inequalities, valuing cultural diversity, and promoting a more just and inclusive society.</p>
      <p class="modal-paragraph">Education for ethnic-racial relations, established by Law 10.639/03, made the teaching of Afro-Brazilian history and culture mandatory in schools, representing an important milestone in valuing diversity.</p>
    `
  },
  {
    title: "Structural Racism",
    subtitle: "System that perpetuates inequalities",
    content: `
      <p class="modal-paragraph">Structural racism is a form of discrimination rooted in social, economic, and political structures. Unlike individual racism, it manifests through institutions, laws, and practices that perpetuate racial inequalities.</p>
      <p class="modal-paragraph">This concept, widely discussed by jurist Silvio Almeida, explains how racism is not an isolated act, but a system that benefits certain groups at the expense of others, maintaining privileges and inequalities over time.</p>
      <p class="modal-paragraph">Combating structural racism requires profound changes in public policies, institutions, and the way society is organized, going beyond individual actions.</p>
    `
  },
  {
    title: "Intersectionality",
    subtitle: "Multiple identities and oppressions",
    content: `
      <p class="modal-paragraph">Intersectionality is a concept developed by Kimberlé Crenshaw that analyzes how different forms of discrimination (race, gender, class, sexual orientation, etc.) intertwine and create unique experiences of oppression.</p>
      <p class="modal-paragraph">A Black woman, for example, does not experience racism and sexism separately, but rather in an integrated manner, creating specific challenges that cannot be understood by analyzing only one dimension of her identity.</p>
      <p class="modal-paragraph">This perspective is fundamental to developing more effective public policies and social movements that consider the complexity of experiences of discrimination and exclusion.</p>
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
// SMOOTH SCROLL FOR ANCHORS
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

console.log("✨ GSAP animations loaded successfully!");