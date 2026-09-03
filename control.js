const layers = document.querySelectorAll(".layer");
const icons = document.querySelectorAll(".icon");

const lerp = (start, end, t) => start + (end - start) * t;

function ready() {
    icons.forEach(icon => {
        const bgColor = icon.dataset.color;
        icon.style.backgroundColor = bgColor;
    });
}

function updateParallax() {
    const scroll = window.scrollY + window.innerHeight/2;

    layers.forEach(layer => {
        const depth = Number(layer.dataset.layer);

        const speed = 1.0 + (depth * 0.1);

        const scale = 1.0 + (depth * 0.1);

        const y = -(scroll * speed);

        // const r = lerp(230,245,(depth+1)/6);
        // const g = lerp(207,201,(depth+1)/6);
        // const b = lerp(184,236,(depth+1)/6);
        
        layer.style.transform =
            `translateY(${y + window.innerHeight/2}px) scale(${scale})`;
        // layer.style.fill =
        //     `rgb(${r}, ${g}, ${b})`;
        layer.style.opacity = (depth + 1) / 6;
    });
}

window.addEventListener("DOMContentLoaded", ready);
window.addEventListener("scroll", updateParallax);

ready();
updateParallax();