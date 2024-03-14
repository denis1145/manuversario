document.addEventListener('DOMContentLoaded', function () {
    // Adiciona um ouvinte de evento de clique ao botÃ£o
    document.querySelector('.custom-button').addEventListener('click', function () {
        // Cria confetes dinamicamente
        for (let i = 0; i < 50; i++) {
            const confetti = document.createElement('div');
            confetti.classList.add('confetti');
            // Define uma cor aleatÃ³ria entre branco e rosa claro
            const randomColor = Math.random() > 0.5 ? '#FFFFFF' : '#FFC0CB';
            confetti.style.backgroundColor = randomColor;
            confetti.style.left = Math.random() * 100 + 'vw'; // PosiÃ§Ã£o horizontal aleatÃ³ria
            confetti.style.animationDelay = Math.random() * 2 + 's'; // Atraso aleatÃ³rio para animaÃ§Ã£o
            // Adiciona uma forma aleatÃ³ria entre cÃ­rculo e quadrado
            if (Math.random() > 0.5) {
                confetti.style.borderRadius = '50%'; // Forma de cÃ­rculo
            } else {
                confetti.style.borderRadius = '0'; // Forma de quadrado
            }
            document.body.appendChild(confetti);
        }
        
        // Oculta os elementos apÃ³s 2 segundos
        setTimeout(function () {
            // Oculta todos os elementos com as classes background1 e background2
            document.querySelector('.background1').classList.add('hidden');
            document.querySelector('.background2').classList.add('hidden');
            
            // Exibe o GIF da Hello Kitty apÃ³s ocultar os outros elementos
            document.querySelector('.hello-kitty-container').classList.remove('hidden');
            
            // Altera diretamente o background do corpo do documento
            document.body.style.backgroundImage = "url('imagens/hellokitybackground.jpg')";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundRepeat = "no-repeat";
            document.body.style.backgroundPosition = "center center";
        }, 2000); // 2000 milissegundos = 2 segundos
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const audioPlayer = document.getElementById('audioPlayer');
    const playButton = document.getElementById('playButton');

    playButton.addEventListener('click', function () {
        if (audioPlayer.paused) {
            audioPlayer.play();
            playButton.textContent = 'Pause';
        } else {
            audioPlayer.pause();
            playButton.textContent = 'Play';
        }
    });
});
