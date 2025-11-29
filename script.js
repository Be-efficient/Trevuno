window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const total = cards.length;
  const radius = 240; // distance from orb center

  // Calculate card positions
  cards.forEach((card, i) => {
    const angle = (i / total) * 360;
    const rad = angle * Math.PI / 180;
    const x = Math.cos(rad) * radius;
    const y = Math.sin(rad) * radius;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
    card.style.setProperty('--i', i);
    card.style.zIndex = total - i;
  });

  // Orb lift on load
  const orb = document.querySelector('.lift-orb');
  if (orb) orb.classList.add('active');

  // Stagger card animations
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.classList.add("active");
    }, i * 200);
  });
});
