window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const total = cards.length;
  const radius = 240; // distance from orb center

  // Pre‑calculate positions for each card
  cards.forEach((card, i) => {
    const angle = (i / total) * 360; // evenly spaced
    const rad = angle * Math.PI / 180;
    const x = Math.cos(rad) * radius;
    const y = Math.sin(rad) * radius;

    // Store positions in CSS variables
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
    card.style.setProperty('--i', i); // useful for staggered animations
    card.style.zIndex = total - i;
  });

  // Orb lift + burst trigger on page load
  const orb = document.querySelector('.lift-orb');
  if (orb) {
    orb.classList.add('active');
  }
});

// Handle orb button click
document.getElementById("orbBtn").addEventListener("click", () => {
  const orb = document.getElementById("crystalOrb");
  orb.classList.add("active");

  const cards = document.querySelectorAll('.card');

  // Animate cards outward with staggered timing
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.classList.add("active");
    }, i * 200); // 200ms delay between each card
  });
});


