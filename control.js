const layers = document.querySelectorAll('[class^="layer-"]');

document.addEventListener("DOMContentLoaded", function() {
    layers.forEach(layer => {
        const i = Number(layer.dataset.layer);

        layer.style.transform = 
            `scaleX(${1.0 + (i * 0.1)}px)`
            `scaleY(${1.0 + (i * 0.1)}px)`;
    })
});

window.addEventListener("scroll", () => {
    const scroll = window.scrollY;

    layers.forEach(layer => {
        const i = Number(layer.dataset.layer);

        const speed = i * 0.1;

        layer.style.transform =
            `translateY(${scroll * speed}px)`;

    });
});