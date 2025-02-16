const menuButton = document.querySelector('#mobile-menu')

menuButton.addEventListener('click', e => {
    const menu = document.querySelector('.mobile-links');

    menu.classList.toggle('hidden');
})

const cursor = document.getElementById("cursor");
let targetX = 0;
let targetY = 0;

document.addEventListener("mousemove", (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
});

function moveCursor() {
    const currentX = parseFloat(cursor.style.left || 0);
    const currentY = parseFloat(cursor.style.top || 0);

    const distanceX = targetX - currentX;
    const distanceY = targetY - currentY;

    cursor.style.left = `${currentX + distanceX * 0.06}px`;
    cursor.style.top = `${currentY + distanceY * 0.06}px`;

    requestAnimationFrame(moveCursor);
}

moveCursor();

document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("opacity-100", "translate-y-0");
                entry.target.classList.remove("opacity-0", "translate-y-10");
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll(".fade-in").forEach((element) => {
        observer.observe(element);
    });
});