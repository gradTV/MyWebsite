document.addEventListener("DOMContentLoaded", function () {
    let bubbleContainer = document.querySelector(".bubble-container");

    function createBubble() {
        let bubble = document.createElement("div");
        bubble.classList.add("bubble");

        let size = Math.random() * 40 + 20; // Size Bubble
        let duration = Math.random() * 3 + 2;
        let delay = Math.random() * 2;

        // Create Bubble
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `calc(${Math.random() * 100}% - ${size / 2}px)`;
        bubble.style.animationDuration = `${duration}s`;
        bubble.style.animationDelay = `${delay}s`;

        // Create element blic
        let highlight = document.createElement("div");
        highlight.classList.add("highlight");
        highlight.style.width = `${size}px`;
        highlight.style.height = `${size}px`;

        bubble.appendChild(highlight); // inside the bubble
        bubbleContainer.appendChild(bubble);

        setTimeout(() => {
            bubble.remove();
        }, (duration + delay) * 1000);
    }

    setInterval(createBubble, 500);
});