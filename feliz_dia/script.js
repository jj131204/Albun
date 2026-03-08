document.addEventListener('DOMContentLoaded', () => {
    const starsContainer = document.getElementById('starsContainer');
    const heartsContainer = document.getElementById('heartsContainer');
    const flowerTrigger = document.getElementById('flowerTrigger');
    const flowerModal = document.getElementById('flowerModal');
    const closeModal = document.getElementById('closeModal');

    // Create Background Particles
    function createParticle(container, type) {
        const particle = document.createElement('div');
        particle.className = type === 'star' ? 'star' : 'heart-particle';
        
        if (type === 'star') {
            particle.textContent = '⭐';
            particle.style.fontSize = Math.random() * 10 + 10 + 'px';
        } else {
            particle.textContent = ['❤️', '💖', '💕', '🌸'][Math.floor(Math.random() * 4)];
            particle.style.fontSize = Math.random() * 15 + 15 + 'px';
        }

        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = Math.random() * 3 + 5 + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        
        container.appendChild(particle);

        particle.addEventListener('animationiteration', () => {
            particle.style.left = Math.random() * 100 + 'vw';
        });
    }

    // Initialize Particles
    for (let i = 0; i < 20; i++) {
        createParticle(starsContainer, 'star');
        createParticle(heartsContainer, 'heart');
    }

    // Modal Interaction
    flowerTrigger.addEventListener('click', () => {
        flowerModal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    });

    closeModal.addEventListener('click', () => {
        flowerModal.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable scrolling
    });

    window.addEventListener('click', (event) => {
        if (event.target === flowerModal) {
            flowerModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Subtle parallax effect on hero
    document.addEventListener('mousemove', (e) => {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
    });
});
