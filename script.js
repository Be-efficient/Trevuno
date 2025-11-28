window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const total = cards.length;
  const radius = 240; // distance from orb

  // Position cards evenly around the orb
  cards.forEach((card, i) => {
    const angle = (i / total) * 360;
    const rad = angle * Math.PI / 180;
    const x = Math.cos(rad) * radius;
    const y = Math.sin(rad) * radius;

    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);

    // Optional: set z-index so front cards overlap nicely
    card.style.zIndex = total - i;
  });

  // Trigger orb lift + card burst
  const orb = document.querySelector('.lift-orb');
  orb.classList.add('active');
});

// Orb button click adds extra lift effect
document.getElementById("orbBtn").addEventListener("click", () => {
  document.getElementById("crystalOrb").classList.add("active");
});









