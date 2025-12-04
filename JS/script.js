// ANIMAÇÕES GSAP - CONSCIENTIZA (PT)

// Registrar plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ANIMAÇÃO DO HEADER - BANNER
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

// ANIMAÇÃO DA NAVEGAÇÃO DESKTOP
gsap.from(".navegacao-desktop nav", {
    duration: 0.9,
    y: -40,
    opacity: 0,
    ease: "power3.out",
    delay: 0.3
});

gsap.from(".navegacao-desktop nav a", {
    duration: 0.6,
    opacity: 1,
    scale: 0.8,
    stagger: 0.07,
    ease: "back.out(1.7)"
});

// ANIMAÇÃO DO SELETOR DE IDIOMA
gsap.from("#idioma", {
    duration: 1,
    y: -80,
    opacity: 0,
    ease: "power3.out",
    delay: 0.5
});

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

// ANIMAÇÃO DOS TÍTULOS
const titles = document.querySelectorAll(".title, .section-title");

titles.forEach((title) => {
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

// ANIMAÇÃO DOS CARDS DE CONCEITOS
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

// PERFIS – ANIMAÇÃO
const perfis = document.querySelectorAll(".perfil");

perfis.forEach((perfil, index) => {
    gsap.from(perfil, {
        scrollTrigger: {
            trigger: ".perfil",
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

// ANIMAÇÃO DOS VÍDEOS
const videos = document.querySelectorAll(".video");

videos.forEach((video, index) => {
    gsap.from(video, {
        scrollTrigger: {
            trigger: ".Videos",
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        delay: index * 0.05,
        ease: "power2.out"
    });
});

// ANIMAÇÃO DA SEÇÃO DE DENÚNCIAS
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

// ANIMAÇÃO SOBRE NÓS
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

// ANIMAÇÃO DO FOOTER
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

// BOTÃO VOLTAR AO TOPO
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

/* -------------------------------------------------------------
   MODAL
-------------------------------------------------------------- */
const modal = document.getElementById("modal01");
const closeBtn = document.getElementById("closeBtn");
const modalTitle = document.getElementById("modalTitle");
const modalSubtitle = document.getElementById("modalSubtitle");
const modalContent = document.getElementById("modalContent");

// Tradução do conteúdo dos modais
const modalData = [
    {
        title: "Relações Étnico-Raciais",
        subtitle: "Compreendendo as interações sociais",
        content: `
            <p class="modal-paragraph">
                As relações étnico-raciais referem-se às interações entre diferentes grupos étnicos e raciais na sociedade.
                No Brasil, essas relações foram historicamente influenciadas pela colonização, escravidão e miscigenação.
            </p>
            <p class="modal-paragraph">
                Compreender essas relações é essencial para reconhecer desigualdades estruturais, valorizar a diversidade cultural
                e promover uma sociedade mais justa e inclusiva.
            </p>
            <p class="modal-paragraph">
                A educação para as relações étnico-raciais, estabelecida pela Lei 10.639/03, tornou obrigatório o ensino de história
                e cultura afro-brasileira nas escolas, representando um avanço na valorização da diversidade.
            </p>
        `
    },
    {
        title: "Racismo Estrutural",
        subtitle: "Sistema que perpetua desigualdades",
        content: `
            <p class="modal-paragraph">
                Racismo estrutural é uma forma de discriminação enraizada nas estruturas sociais, econômicas e políticas.
                Diferente do racismo individual, ele se manifesta por meio de instituições, leis e práticas que mantêm desigualdades raciais.
            </p>
            <p class="modal-paragraph">
                Esse conceito mostra que o racismo não é um ato isolado, mas um sistema que beneficia alguns grupos
                em detrimento de outros, mantendo privilégios ao longo do tempo.
            </p>
            <p class="modal-paragraph">
                Combater o racismo estrutural requer mudanças profundas em políticas públicas, instituições e na organização da sociedade,
                indo além de ações individuais.
            </p>
        `
    },
    {
        title: "Interseccionalidade",
        subtitle: "Múltiplas identidades e opressões",
        content: `
            <p class="modal-paragraph">
                A interseccionalidade analisa como diferentes formas de discriminação — raça, gênero, classe, orientação sexual,
                entre outras — se cruzam e criam experiências únicas de opressão.
            </p>
            <p class="modal-paragraph">
                Uma mulher negra, por exemplo, não vivencia racismo e machismo separadamente, mas de forma integrada,
                o que gera desafios específicos.
            </p>
            <p class="modal-paragraph">
                Essa perspectiva é essencial para desenvolver políticas públicas e movimentos sociais mais eficazes,
                considerando a complexidade das experiências de exclusão.
            </p>
        `
    }
];

// Abrir modal
function openModal(index) {
    console.log("Abrindo modal com índice:", index);

    if (!modal || !modalTitle || !modalSubtitle || !modalContent) {
        console.error("Elementos do modal não encontrados!");
        return;
    }

    const data = modalData[index];
    if (!data) {
        console.error("Dados do modal não encontrados para o índice:", index);
        return;
    }

    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle;
    modalContent.innerHTML = data.content;

    modal.style.display = "flex";

    gsap.fromTo(".modal-content", {
        scale: 0.8,
        opacity: 0
    }, {
        duration: 0.5,
        scale: 1,
        opacity: 1,
        ease: "back.out(1.7)"
    });
}

// Fechar modal
function closeModal() {
    gsap.to(".modal-content", {
        duration: 0.3,
        scale: 0.8,
        opacity: 0,
        ease: "power2.in",
        onComplete: () => {
            if (modal) {
                modal.style.display = "none";
            }
        }
    });
}

if (closeBtn) closeBtn.addEventListener("click", closeModal);
if (modal) {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.style.display === "flex") {
        closeModal();
    }
});

/* -------------------------------------------------------------
   CARROSSEL DE CONCEITOS
-------------------------------------------------------------- */
let currentIndex = 0;
const carouselWrapper = document.querySelector(".carrossel-wrapper");
const cardsArray = document.querySelectorAll(".Card");
const dotsContainer = document.getElementById("carousel-dots");
const totalCards = cardsArray.length;

// Criar bolinhas
if (dotsContainer) {
    for (let i = 0; i < totalCards; i++) {
        const dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");

        dot.addEventListener("click", () => goToSlide(i));
        dotsContainer.appendChild(dot);
    }
}

const dots = document.querySelectorAll(".dot");

function updateCarousel() {
    const offset = -currentIndex * 100;
    gsap.to(carouselWrapper, {
        x: offset + "%",
        duration: 0.8,
        ease: "power2.inOut"
    });

    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
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

// autoplay
let autoplayInterval = setInterval(nextSlide, 5000);

function resetAutoplay() {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(nextSlide, 5000);
}

cardsArray.forEach((card, index) => {
    card.style.cursor = "pointer";

    card.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log("Card clicado:", index);
        openModal(index);
        resetAutoplay();
    });

    card.addEventListener("mouseenter", () => {
        gsap.to(card, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    card.addEventListener("mouseleave", () => {
        gsap.to(card, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

/* -------------------------------------------------------------
   SCROLL SUAVE PARA ÂNCORAS
-------------------------------------------------------------- */
document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        const href = this.getAttribute("href");
        if (!href || href === "#") return;

        const target = document.querySelector(href);
        if (!target) return;

        e.preventDefault();

        gsap.to(window, {
            duration: 1,
            scrollTo: {
                y: target,
                offsetY: 100
            },
            ease: "power2.inOut"
        });
    });
});

/* -------------------------------------------------------------
   ANIMAÇÃO DA SEÇÃO RESENHA
-------------------------------------------------------------- */
const resenhaSection = document.querySelector("#resenha");
if (resenhaSection) {
    gsap.from("#resenha", {
        scrollTrigger: {
            trigger: "#resenha",
            start: "top 85%",
            toggleActions: "play none none reverse"
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });
}

/* -------------------------------------------------------------
   MENU MOBILE (ABRIR/FECHAR)
-------------------------------------------------------------- */
const btnMenuMobile = document.getElementById("btn-menu-mobile");
const btnFecharMenu = document.getElementById("btn-fechar-menu");
const btnSairMenu = document.getElementById("btn-sair-menu");
const menuMobile = document.getElementById("menu-mobile");
const overlayMenu = document.getElementById("overlay-menu");
const menuLinks = document.querySelectorAll(".menu-mobile .menu-link");

let menuAberto = false;

function abrirMenu() {
    if (!menuMobile || !overlayMenu) return;

    menuAberto = true;

    gsap.to(menuMobile, {
        x: 0,
        duration: 0.4,
        ease: "power3.out"
    });

    gsap.to(overlayMenu, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
        onStart: () => {
            overlayMenu.style.pointerEvents = "auto";
        }
    });
}

function fecharMenu() {
    if (!menuMobile || !overlayMenu) return;

    menuAberto = false;

    gsap.to(menuMobile, {
        x: "-100%",
        duration: 0.4,
        ease: "power3.in"
    });

    gsap.to(overlayMenu, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
            overlayMenu.style.pointerEvents = "none";
        }
    });
}

if (btnMenuMobile) {
    btnMenuMobile.addEventListener("click", abrirMenu);
}

if (btnFecharMenu) {
    btnFecharMenu.addEventListener("click", fecharMenu);
}

if (btnSairMenu) {
    btnSairMenu.addEventListener("click", fecharMenu);
}

if (overlayMenu) {
    overlayMenu.addEventListener("click", fecharMenu);
}

menuLinks.forEach((link) => {
    link.addEventListener("click", fecharMenu);
});

/* -------------------------------------------------------------
   BOTÃO ENVIAR FEEDBACK
-------------------------------------------------------------- */
const btnEnviar = document.getElementById("btn-enviar");

if (btnEnviar) {
    btnEnviar.addEventListener("click", () => {
        window.location.reload();
    });
}

// Logs finais
console.log("Animações GSAP e menu mobile carregados com sucesso!");
console.log("Total de cards encontrados:", cardsArray.length);
console.log("Modal configurado e pronto!");

/* -------------------------------------------------------------
   GRÁFICOS - CHART.JS
-------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    const feminicidioCanvas = document.getElementById("graficoFeminicidio");
    const homicidiosCanvas = document.getElementById("graficoHomicidios");
    const desocupacaoCanvas = document.getElementById("graficoDesocupacao");
    const informalidadeCanvas = document.getElementById("graficoInformalidade");

    if (!feminicidioCanvas || !homicidiosCanvas || !desocupacaoCanvas || !informalidadeCanvas) {
        console.warn("Alguns elementos dos gráficos não foram encontrados na página.");
        return;
    }

    // 1. Feminicídio por raça/cor
    new Chart(feminicidioCanvas, {
        type: "bar",
        data: {
            labels: ["Negra (Pretas + Pardas)", "Não Negra"],
            datasets: [
                {
                    label: "% de vítimas de feminicídio (2023)",
                    data: [63.6, 36.4],
                    backgroundColor: ["#cc600a", "var(--paleta3)", "#ffd070", "var(--paleta5)"]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: "#6d3607"
                    },
                    grid: {
                        color: "rgba(0,0,0,0.08)"
                    }
                },
                x: {
                    ticks: {
                        color: "#6d3607"
                    },
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: "#6d3607"
                    }
                }
            }
        }
    });

    // 2. Homicídios de mulheres por raça/cor
    new Chart(homicidiosCanvas, {
        type: "bar",
        data: {
            labels: ["Negras", "Não Negras"],
            datasets: [
                {
                    label: "% de homicídios de mulheres (2023)",
                    data: [68.6, 31.4],
                    backgroundColor: ["#ae3928", "var(--paleta2)", "#ffd070", "var(--paleta5)"]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: "#6d3607"
                    },
                    grid: {
                        color: "rgba(0,0,0,0.08)"
                    }
                },
                x: {
                    ticks: {
                        color: "#6d3607"
                    },
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: "#6d3607"
                    }
                }
            }
        }
    });

    // 3. Taxa de desocupação por raça/cor
    new Chart(desocupacaoCanvas, {
        type: "bar",
        data: {
            labels: ["Brancas", "Negras e Pardas"],
            datasets: [
                {
                    label: "Taxa de desocupação (2019)",
                    data: [9.3, 13.6],
                    backgroundColor: ["#eb9142", "var(--paleta4)", "#cc600a", "var(--paleta3)"]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: "#6d3607"
                    },
                    grid: {
                        color: "rgba(0,0,0,0.08)"
                    }
                },
                x: {
                    ticks: {
                        color: "#6d3607"
                    },
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: "#6d3607"
                    }
                }
            }
        }
    });

    // 4. Trabalho informal por raça/cor
    new Chart(informalidadeCanvas, {
        type: "bar",
        data: {
            labels: ["Brancas", "Negras e Pardas"],
            datasets: [
                {
                    label: "% em ocupações informais (2019)",
                    data: [34.5, 47.4],
                    backgroundColor: ["#ffd070", "var(--paleta5)", "#ae3928", "var(--paleta2)"]
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                    max: 100,
                    ticks: {
                        color: "#6d3607"
                    },
                    grid: {
                        color: "rgba(0,0,0,0.08)"
                    }
                },
                x: {
                    ticks: {
                        color: "#6d3607"
                    },
                    grid: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    labels: {
                        color: "#6d3607"
                    }
                }
            }
        }
    });
});
