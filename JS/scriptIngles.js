// GSAP ANIMATIONS - CONSCIENTIZA (EN)

// Register plugins
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// HEADER ANIMATION - BANNER
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

// DESKTOP NAVIGATION ANIMATION
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

// DESKTOP LANGUAGE SELECTOR ANIMATION
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

// SECTION TITLES ANIMATION
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

// CONCEPTS CARDS ANIMATION
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

// PROFILES ANIMATION
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

// VIDEOS SECTION ANIMATION (ENTRY ONLY, CAROUSEL IS CSS)
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

// REPORT SECTION ANIMATION
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

// ABOUT US SECTION ANIMATION
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

// FOOTER ANIMATION
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

// BACK TO TOP BUTTON ANIMATION
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

const modalData = [
    {
        title: "Ethnic-Racial Relations",
        subtitle: "Understanding social interactions",
        content: `
            <p class="modal-paragraph">
                Ethnic-racial relations refer to the interactions between different ethnic and racial groups in a society.
                In Brazil, these relations were historically shaped by colonization, slavery and miscegenation.
            </p>
            <p class="modal-paragraph">
                Understanding these relations is essential to recognize structural inequalities, value cultural diversity
                and promote a fair and inclusive society.
            </p>
            <p class="modal-paragraph">
                Education for ethnic-racial relations, established by Law 10.639/03, made the teaching of Afro-Brazilian
                history and culture mandatory in schools, marking an important step in valuing diversity.
            </p>
        `
    },
    {
        title: "Structural Racism",
        subtitle: "System that perpetuates inequalities",
        content: `
            <p class="modal-paragraph">
                Structural racism is a form of discrimination rooted in social, economic and political structures.
                Unlike individual racism, it manifests through institutions, laws and practices that perpetuate racial
                inequalities.
            </p>
            <p class="modal-paragraph">
                This concept helps explain how racism is not an isolated act, but a system that benefits certain groups
                to the detriment of others, maintaining privileges and inequalities over time.
            </p>
            <p class="modal-paragraph">
                Combating structural racism requires deep changes in public policies, institutions and in how society
                is organized, going beyond individual actions.
            </p>
        `
    },
    {
        title: "Intersectionality",
        subtitle: "Multiple identities and oppressions",
        content: `
            <p class="modal-paragraph">
                Intersectionality analyzes how different forms of discrimination — race, gender, class, sexual orientation,
                among others — intertwine and create unique experiences of oppression.
            </p>
            <p class="modal-paragraph">
                A Black woman, for instance, does not experience racism and sexism separately, but in an integrated way,
                which brings specific challenges that cannot be understood by looking at only one dimension of identity.
            </p>
            <p class="modal-paragraph">
                This perspective is key to developing more effective public policies and social movements that consider
                the complexity of discrimination and exclusion experiences.
            </p>
        `
    }
];

// Open modal
function openModal(index) {
    console.log("Opening modal with index:", index); // Debug

    if (!modal || !modalTitle || !modalSubtitle || !modalContent) {
        console.error("Modal elements not found!");
        return;
    }

    const data = modalData[index];
    if (!data) {
        console.error("Modal data not found for index:", index);
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

// Close modal
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

// Modal listeners
if (closeBtn) {
    closeBtn.addEventListener("click", closeModal);
}

if (modal) {
    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal && modal.style.display === "flex") {
        closeModal();
    }
});

/* -------------------------------------------------------------
   CONCEPTS CAROUSEL
-------------------------------------------------------------- */
let currentIndex = 0;
const carouselWrapper = document.querySelector(".carrossel-wrapper");
const cardsArray = document.querySelectorAll(".Card");
const dotsContainer = document.getElementById("carousel-dots");
const totalCards = cardsArray.length;

// Create dots
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

// Autoplay
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
        console.log("Card clicked:", index); // Debug
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
   SMOOTH SCROLL FOR ANCHORS
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
   REVIEW SECTION ANIMATION
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
   MOBILE MENU (OPEN / CLOSE)
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
   SEND FEEDBACK BUTTON
-------------------------------------------------------------- */
const btnEnviar = document.getElementById("btn-enviar");

if (btnEnviar) {
    btnEnviar.addEventListener("click", () => {
        window.location.reload();
    });
}

/* Final logs */
console.log("GSAP animations and mobile menu loaded successfully!");
console.log("Total cards found:", cardsArray.length);
console.log("Modal configured and ready!");

/* -------------------------------------------------------------
   CHARTS - CHART.JS
-------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
    const feminicidioCanvas = document.getElementById("graficoFeminicidio");
    const homicidiosCanvas = document.getElementById("graficoHomicidios");
    const desocupacaoCanvas = document.getElementById("graficoDesocupacao");
    const informalidadeCanvas = document.getElementById("graficoInformalidade");

    if (!feminicidioCanvas || !homicidiosCanvas || !desocupacaoCanvas || !informalidadeCanvas) {
        console.warn("Some chart elements were not found on the page.");
        return;
    }

    // 1. Feminicide by race/color
    new Chart(feminicidioCanvas, {
        type: "bar",
        data: {
            labels: ["Black (Black + Brown)", "Non-Black"],
            datasets: [
                {
                    label: "% of feminicide victims (2023)",
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

    // 2. Homicides of women by race/color
    new Chart(homicidiosCanvas, {
        type: "bar",
        data: {
            labels: ["Black", "Non-Black"],
            datasets: [
                {
                    label: "% of homicides of women (2023)",
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

    // 3. Unemployment rate by race/color
    new Chart(desocupacaoCanvas, {
        type: "bar",
        data: {
            labels: ["White", "Black and Brown"],
            datasets: [
                {
                    label: "Unemployment rate (2019)",
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

    // 4. Informal work by race/color
    new Chart(informalidadeCanvas, {
        type: "bar",
        data: {
            labels: ["White", "Black and Brown"],
            datasets: [
                {
                    label: "% in informal occupations (2019)",
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