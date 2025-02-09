document.addEventListener('mousemove', (e) => {
    const particleContainer = document.querySelector('.particle-container');
    const particles = document.createElement('div');
    particles.classList.add('particle');
    particles.style.left = `${e.pageX - 5}px`;
    particles.style.top = `${e.pageY - 5}px`;
    particleContainer.appendChild(particles);

    setTimeout(() => {
        particles.remove();
    }, 1000);
});
