const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {

    nav.classList.toggle("active");

    if (nav.classList.contains("active")) {
        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-label", "Fechar menu");
    } else {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Abrir menu");
    }

});


const menuLinks = document.querySelectorAll("nav a");

menuLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("active");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-label", "Abrir menu");

    });

});