export const createConfetti = (container) => {
    const confettiPieces = Array.from({ length: 50 });

    confettiPieces.forEach(() => {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.pointerEvents = 'none';

        const emoji = ['❤️', '💖', '✨', '🌹', '🌸', '💕', '🎀', '💝'][
            Math.floor(Math.random() * 8)
        ];
        confetti.textContent = emoji;
        confetti.style.fontSize = `${Math.random() * 20 + 20}px`;
        confetti.style.left = Math.random() * window.innerWidth + 'px';
        confetti.style.top = '-30px';

        document.body.appendChild(confetti);

        const duration = Math.random() * 2 + 2;
        const xDrift = (Math.random() - 0.5) * 400;

        const animation = confetti.animate(
            [
                {
                    transform: 'translateY(0px) translateX(0px) rotate(0deg)',
                    opacity: 1
                },
                {
                    transform: `translateY(${window.innerHeight + 50}px) translateX(${xDrift}px) rotate(${Math.random() * 360}deg)`,
                    opacity: 0
                },
            ],
            duration * 1000
        );

        animation.onfinish = () => {
            confetti.remove();
        };
    });
};

export const createHeartRain = (container) => {
    const hearts = Array.from({ length: 20 });

    hearts.forEach(() => {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.style.position = 'fixed';
        heart.style.pointerEvents = 'none';
        heart.style.fontSize = `${Math.random() * 15 + 15}px`;
        heart.style.left = Math.random() * window.innerWidth + 'px';
        heart.style.top = '-30px';

        document.body.appendChild(heart);

        const duration = Math.random() * 3 + 3;
        const xDrift = (Math.random() - 0.5) * 200;

        const animation = heart.animate(
            [
                {
                    transform: 'translateY(0px) translateX(0px)',
                    opacity: 1
                },
                {
                    transform: `translateY(${window.innerHeight + 50}px) translateX(${xDrift}px)`,
                    opacity: 0
                },
            ],
            duration * 1000
        );

        animation.onfinish = () => {
            heart.remove();
        };
    });
};

export const createFlowerPetals = (container) => {
    const petals = Array.from({ length: 30 });

    petals.forEach(() => {
        const petal = document.createElement('div');
        petal.innerHTML = '🌸';
        petal.style.position = 'fixed';
        petal.style.pointerEvents = 'none';
        petal.style.fontSize = `${Math.random() * 20 + 15}px`;
        petal.style.left = Math.random() * window.innerWidth + 'px';
        petal.style.top = '-30px';

        document.body.appendChild(petal);

        const duration = Math.random() * 4 + 3;
        const xDrift = (Math.random() - 0.5) * 300;
        const rotation = Math.random() * 720;

        const animation = petal.animate(
            [
                {
                    transform: `translateY(0px) translateX(0px) rotate(0deg)`,
                    opacity: 1
                },
                {
                    transform: `translateY(${window.innerHeight + 50}px) translateX(${xDrift}px) rotate(${rotation}deg)`,
                    opacity: 0
                },
            ],
            duration * 1000
        );

        animation.onfinish = () => {
            petal.remove();
        };
    });
};
