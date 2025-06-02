 <script>
    document.addEventListener("DOMContentLoaded", () => {
      const container = document.querySelector('.snowfall-container');
      const isMobile = window.innerWidth <= 767;
      for (let i = 0; i < 50; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        const baseSize = isMobile ? 1 : 0.5; 
        const size = (Math.random() * baseSize + baseSize * 0.2).toFixed(2) + 'vw'; 
        const leftIni = (Math.random() * 20 - 10).toFixed(2) + 'vw'; 
        const leftEnd = (Math.random() * 20 - 10).toFixed(2) + 'vw'; 
        const left = Math.random() * 100 + 'vw'; // Random starting position
        const duration = (5 + Math.random() * 10).toFixed(2) + 's'; 
        const delay = -Math.random() * 10 + 's'; 
        snowflake.style.setProperty('--left-ini', leftIni);
        snowflake.style.setProperty('--left-end', leftEnd);
        snowflake.style.left = left;
        snowflake.style.width = size;
        snowflake.style.height = size;
        snowflake.style.animationDuration = duration;
        snowflake.style.animationDelay = delay;

        container.appendChild(snowflake);
      }
    });
  </script>
