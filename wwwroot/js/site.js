//mouse effect
document.addEventListener('mousemove', (e) => {
    const particleContainer = document.querySelector('.particle-container');
    const particles = document.createElement('div');
    particles.classList.add('particle');
    particles.style.left = `${e.pageX - 5}px`;
    particles.style.top = `${e.pageY - 5}px`;
    particleContainer.appendChild(particles);

    // particles.style.backgroundColor = e.target.closest("a") ? "#8000ff": rgb(226, 215, 215); // style link


    setTimeout(() => {
        particles.remove();
    }, 1000);
})
//Event leave in site
document.addEventListener("mouseleave", () => {
    customCursor.style.display = "none"; 
    document.body.style.cursor = "default";
});
//Event enter on site
document.addEventListener("mouseenter", () => {
    customCursor.style.display = "block"; 
    document.body.style.cursor = "none";
});

//End of standart cursor
document.querySelectorAll("a, button, .hover-effect").forEach(el => {
    el.style.cursor = "none";
});

/* React  */
document.querySelectorAll("a").forEach((element) => {
    element.addEventListener("mouseenter", (e) => {
        let box = document.createElement("div");
        box.classList.add("box-effect");
        document.body.appendChild(box);

        const rect = e.target.getBoundingClientRect();
        box.style.left = `${rect.left + window.scrollX}px`;
        box.style.top = `${rect.top + window.scrollY}px`;
        box.style.width = `${rect.width}px`;
        box.style.height = `${rect.height}px`;
        box.style.opacity = "1";
        box.style.transform = "scale(1.1)";

        e.target.addEventListener("mouseleave", () => {
            box.style.opacity = "0";
            setTimeout(() => box.remove(), 200);
        }, { once: true });
    });
});