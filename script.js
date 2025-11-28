window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const total = cards.length;

  const radius = 260; // distance from orb center

  cards.forEach((card, i) => {
    const angle = (i / total) * 360; 
    const rad = angle * Math.PI / 180;
    
    const x = Math.cos(rad) * radius;
    const y = Math.sin(rad) * radius;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);

    // Trigger animation
    setTimeout(() => {
      card.classList.add("appeared");
    }, i * 200);
  });

  document.querySelector('.orb').classList.add('active');
});
