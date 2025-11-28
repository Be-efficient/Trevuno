// Position cards in a circle around the orb
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const total = cards.length;

  // Distance from the orb
  const radius = 240;

  // Calculate & assign positions
  cards.forEach((card, i) => {
    const angle = (i / total) * 360; // even spacing around circle
    const rad = angle * Math.PI / 180;

    const x = Math.cos(rad) * radius;
    const y = Math.sin(rad) * radius;

    // Apply card positions
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
    card.style.zIndex = total - i;

    // Trigger appearance animation
    card.classList.add("appeared");
  });

  // Orb animation begins when page loads
  const orb = document.querySelector('.lift-orb');
  orb.classList.add('active');
});

// Optional: Button that triggers additional orb animation
document.getElementById("orbBtn").addEventListener("click", () => {
  document.getElementById("crystalOrb").classList.add("active");
});
