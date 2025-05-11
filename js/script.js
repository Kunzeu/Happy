document.addEventListener('DOMContentLoaded', () => {
  const envelope = document.getElementById('envelope');

  // Abrir el sobre al hacer clic
  envelope.addEventListener('click', () => {
      envelope.classList.toggle('open');
      if (envelope.classList.contains('open')) {
          createHearts();
      }
  });

  // Función para crear corazones animados
  function createHearts() {
      for (let i = 0; i < 30; i++) { // Aumentamos la cantidad de corazones
          const heart = document.createElement('div');
          heart.classList.add('heart');

          // Posición aleatoria en toda la pantalla
          heart.style.left = `${Math.random() * 100}vw`;
          heart.style.bottom = `${Math.random() * 20}vh`; // Comienzan desde diferentes alturas

          // Tamaño aleatorio entre 10px y 30px
          const size = Math.random() * 20 + 10;
          heart.style.width = `${size}px`;
          heart.style.height = `${size}px`;
          heart.style.setProperty('--before-width', `${size}px`);
          heart.style.setProperty('--before-height', `${size}px`);
          heart.style.setProperty('--after-width', `${size}px`);
          heart.style.setProperty('--after-height', `${size}px`);

          // Velocidad aleatoria entre 4s y 7s
          heart.style.animationDuration = `${Math.random() * 3 + 4}s`;

          // Retraso aleatorio para desincronizar
          heart.style.animationDelay = `${Math.random() * 2}s`;

          document.body.appendChild(heart);

          // Eliminar corazones después de la animación
          setTimeout(() => {
              heart.remove();
          }, 7000); // Ajustado para coincidir con la duración máxima
      }
  }

  // Ajustar los pseudo-elementos ::before y ::after para los tamaños dinámicos
  const styleSheet = document.styleSheets[0];
  styleSheet.insertRule(`
      .heart::before {
          width: var(--before-width);
          height: var(--before-height);
          top: calc(var(--before-height) / -2);
          left: 0;
      }
  `, styleSheet.cssRules.length);
  styleSheet.insertRule(`
      .heart::after {
          width: var(--after-width);
          height: var(--after-height);
          left: calc(var(--after-width) / 2);
          top: 0;
      }
  `, styleSheet.cssRules.length);
});