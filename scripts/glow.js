let glow = document.getElementById('glow-item');

let mouseX = 0, mouseY = 0;
let itemX = 0, itemY = 0;

const lerp_factor = 0.1;

window.addEventListener('mousemove', (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

function lerp() {
    itemX += (mouseX - itemX) * lerp_factor;
    itemY += (mouseY - itemY) * lerp_factor;

    glow.style.transform = `translate(${itemX - 300}px, ${itemY - 300}px)`;

    requestAnimationFrame(lerp);
}

lerp();

