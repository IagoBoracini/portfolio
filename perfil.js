// ===============================
// PORTFÓLIO IAGO BORACINI
// JAVASCRIPT PROFISSIONAL
// ===============================


/* ========= MENU MOBILE ========= */

const header = document.querySelector(".header");
const navbar = document.querySelector(".navbar");

// cria botão hambúrguer dinamicamente
const menuBtn = document.createElement("div");
menuBtn.classList.add("menu-toggle");
menuBtn.innerHTML = "☰";
header.prepend(menuBtn);

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");
});


/* ========= SCROLL SUAVE ========= */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            // fecha menu no mobile ao clicar
            navbar.classList.remove("active");
        }
    });
});


/* ========= SCROLL SPY (menu ativo) ========= */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }
    });
});


/* ========= ANIMAÇÃO AO SCROLL ========= */

const elements = document.querySelectorAll(".project-card, .info-card, .about-container");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

elements.forEach(el => observer.observe(el));


/* ========= BOTÃO VOLTAR AO TOPO ========= */

const topBtn = document.createElement("button");
topBtn.innerHTML = "↑";
topBtn.classList.add("top-button");
document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
});

topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


/* ========= PEQUENO EFEITO DE ENTRADA ========= */

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});