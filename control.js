const layers = document.querySelectorAll(".layer");

function updateParallax() {

    const scroll = window.scrollY + window.innerHeight/2;

    layers.forEach(layer => {
        const depth = Number(layer.dataset.layer);

        const speed = 1.0 + (depth * 0.05);

        const scale = 1.0 + (depth * 0.05);

        const y = -(scroll * speed);

        layer.style.transform =
            `translateY(${y + window.innerHeight/2}px) scale(${scale})`;
    });
}

window.addEventListener("scroll", updateParallax);

updateParallax();