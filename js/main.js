document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    const loader = document.querySelector(".loader-wrap");
    const nav = document.querySelector("nav");
    const logoImg = document.querySelector(".logo img");
    const dots = document.querySelectorAll(".dot");
    const boxModel = document.querySelector(".box-model");
    const boxModelImg = document.querySelector(".box-model img");
    const menuImgs = document.querySelectorAll(".menu-image-container img");
    const closeBox = document.querySelector(".box-model .close");

    // 1. Quitar Loader
    window.addEventListener("load", () => {
        loader.classList.add("remove");
        body.classList.remove("stop-scroll");
    });

    // 2. Navbar cambiante al hacer Scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.classList.add("active");
            logoImg.src = "https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988525/logo-rosa.png";
        } else {
            nav.classList.remove("active");
            logoImg.src = "https://res.cloudinary.com/abdel-rahman-ali/image/upload/v1535988515/logo-rosa-white.png";
        }

        // Actualizar Dots según la posición
        const sections = document.querySelectorAll("section, header");
        sections.forEach((section, index) => {
            const top = section.offsetTop - 100;
            if (window.scrollY >= top) {
                dots.forEach(d => d.classList.remove("active"));
                if(dots[index-1]) dots[index-1].classList.add("active");
            }
        });
    });

    // 3. Scroll Suave para Dots
    dots.forEach(dot => {
        dot.addEventListener("click", () => {
            const target = document.querySelector(dot.dataset.x);
            window.scrollTo({
                top: target.offsetTop - 60,
                behavior: "smooth"
            });
        });
    });

    // 4. Galería (Lightbox)
    menuImgs.forEach(img => {
        img.addEventListener("click", () => {
            boxModel.classList.add("active");
            boxModelImg.src = img.src;
            body.classList.add("stop-scroll");
        });
    });

    closeBox.addEventListener("click", () => {
        boxModel.classList.remove("active");
        body.classList.remove("stop-scroll");
    });

    // 5. Flecha de Footer ir arriba
    document.querySelector(".arrow-up").addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});