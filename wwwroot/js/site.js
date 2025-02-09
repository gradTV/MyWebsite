document.addEventListener('mousemove', (e) => {
    const particleContainer = document.querySelector('.particle-container');
    const particles = document.createElement('div');
    particles.classList.add('particle');
    particles.style.left = `${e.pageX - 5}px`;
    particles.style.top = `${e.pageY - 5}px`;
    particleContainer.appendChild(particles);

    particles.style.backgroundColor = e.target.closest("a") ? "#8000ff": rgb(226, 215, 215);


    setTimeout(() => {
        particles.remove();
    }, 1000);
})
document.querySelectorAll("a, button, .hover-effect").forEach(el => {
    el.style.cursor = "none"; // Убираем стандартный курсор
});
/* реакция на круг */
// document.querySelectorAll("h1, p, a").forEach((element) => {
//     element.addEventListener("mouseenter", (e) => {
//         let circle = document.createElement("div");
//         circle.classList.add("circle-effect");
//         document.body.appendChild(circle);

//         const rect = e.target.getBoundingClientRect();
//         circle.style.left = `${rect.left + rect.width / 2 - 30}px`;
//         circle.style.top = `${rect.top + rect.height / 2 - 30}px`;
//         circle.style.opacity = "1";
//         circle.style.transform = "scale(1.2)";

//         e.target.addEventListener("mouseleave", () => {
//             circle.style.opacity = "0";
//             setTimeout(() => circle.remove(), 200);
//         });
//     });
// });