// Carrossel com 3 cards visíveis, movimento de 1 em 1 e destaque no card central
document.addEventListener('DOMContentLoaded', () => {
    const carrossel = document.getElementById('carrossel');
    const cards = Array.from(document.querySelectorAll('.tema-card'));
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const cardsPorVez = 3;
    let indice = 0;
  
    if (!carrossel || cards.length === 0) return;
  
    const atualizarEstado = () => {
      const cardWidth = cards[0].offsetWidth;
      const gap = parseFloat(getComputedStyle(carrossel).gap) || 0;
      const deslocamento = indice * (cardWidth + gap);
      carrossel.style.transform = `translateX(-${deslocamento}px)`;
  
      // Habilita/desabilita botões
      prevBtn.disabled = indice === 0;
      nextBtn.disabled = indice >= cards.length - cardsPorVez;
  
      prevBtn.style.opacity = prevBtn.disabled ? '0.45' : '1';
      nextBtn.style.opacity = nextBtn.disabled ? '0.45' : '1';
      prevBtn.style.cursor = prevBtn.disabled ? 'not-allowed' : 'pointer';
      nextBtn.style.cursor = nextBtn.disabled ? 'not-allowed' : 'pointer';
  
      // Atualiza destaque do card central
      cards.forEach(c => c.classList.remove('center'));
      const centro = indice + 1; // o card do meio do trio
      if (cards[centro]) cards[centro].classList.add('center');
    };
  
    const mover = (delta) => {
      const novoIndice = indice + delta;
      if (novoIndice < 0 || novoIndice > cards.length - cardsPorVez) return;
      indice = novoIndice;
      atualizarEstado();
    };
  
    prevBtn.addEventListener('click', () => mover(-1));
    nextBtn.addEventListener('click', () => mover(1));
    window.addEventListener('resize', atualizarEstado);
  
    atualizarEstado();
  });
  