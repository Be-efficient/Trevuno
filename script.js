// Calculate card positions on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.card').forEach(card => {
    const angle = parseFloat(card.style.getPropertyValue('--angle'));
    const rad = angle * Math.PI / 180;
    const x = Math.cos(rad) * 240;
    const y = Math.sin(rad) * 240;
    card.style.setProperty('--x', `${x}px`);
    card.style.setProperty('--y', `${y}px`);
  });

  // Trigger orb lift + card burst
  const orb = document.querySelector('.lift-orb');
  orb.classList.add('active');
});

// Optional: orb button click adds extra lift effect
document.getElementById("orbBtn").addEventListener("click", () => {
  document.getElementById("crystalOrb").classList.add("active");
});




const cards = document.querySelectorAll('.card');
const total = cards.length;
cards.forEach((card, i) => {
  const angle = (i / total) * 360; // evenly around a circle
  card.style.setProperty('--angle', angle);
});



