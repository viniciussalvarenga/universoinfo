function createStars() {
    const numeroEstrelas = 200;
    const body = document.querySelector('body');

    for (let i = 0; i < numeroEstrelas; i++) {
        const estrela = document.createElement('div');
        estrela.className = 'estrela';
        estrela.style.top = `${Math.random() * 100}%`;
        estrela.style.left = `${Math.random() * 100}%`;
        estrela.style.animationDelay = `${Math.random() * 3}s`;
        body.appendChild(estrela);
    }
}

createStars();
