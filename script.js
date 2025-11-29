window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const total = cards.length;
  const radius = 240; // distance from orb center (unchanged)

  // Calculate card positions (original math preserved)
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

  // Orb lift animation on load (unchanged)
  const orb = document.querySelector('.lift-orb');
  if (orb) orb.classList.add('active');

  // Staggered card reveal (timing unchanged)
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.classList.add('active');
    }, i * 200);
  });

  // Optional: subtle floating micro-motion for the orb and glow (visual only — does not change card emergence)
  // We keep it lightweight and visual-only so the core animation behavior (emerge math/timing) stays identical.
  (function microFloat(){
    const el = document.querySelector('.orb');
    if(!el) return;
    let t = 0;
    function frame(){
      t += 0.01;
      // tiny, non-intrusive movement
      el.style.transform = `translateY(${Math.sin(t) * 2 - 28}px) scale(1.18)`;
      requestAnimationFrame(frame);
    }
    // only run microFloat after a small delay so it doesn't interfere with initial lift
    setTimeout(() => requestAnimationFrame(frame), 700);
  })();
});
