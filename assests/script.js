const elements = document.querySelectorAll('.fade-in, .fade-in-delay, .fade-in-right');

function showOnScroll() {
    elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.style.animationPlayState = "running";
        }
    });
}

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);