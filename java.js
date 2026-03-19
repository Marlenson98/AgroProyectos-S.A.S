let index = 0;

function moverSlide(direccion) {

    const slides = document.getElementById("slides");
    const totalSlides = slides.children.length;

    index += direccion;

    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;

    slides.style.transform = `translateX(-${index * 100}%)`;
}

/* AUTOMÁTICO */
setInterval(() => {
    moverSlide(1);
}, 4000);