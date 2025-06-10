// Scroll animation
window.addEventListener("scroll", () => {
    const reveals = document.querySelectorAll(".scroll-reveal");
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (top < windowHeight - 100) {
            el.classList.add("active");
        }
    });
});
