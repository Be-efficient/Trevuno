const orb = document.getElementById('crystalOrb');
const orbBtn = document.getElementById('orbBtn');
const modal = document.getElementById('signupModal');
const modalClose = document.getElementById('modalClose');
const headerSignup = document.getElementById('headerSignup');

function openModal() { modal.style.display='flex'; }
function closeModal() { modal.style.display='none'; }

orb.addEventListener('click', openModal);
orbBtn.addEventListener('click', e => { e.stopPropagation(); openModal(); });
headerSignup.addEventListener('click', e => { e.preventDefault(); openModal(); });
modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if(e.target===modal) closeModal(); });

// Cards emergence
const cards = [
  {el:document.querySelector('.card.organize'), x:-220, y:100},
  {el:document.querySelector('.card.productivity'), x:220, y:-60},
  {el:document.querySelector('.card.motivate'), x:0, y:-180}
];

window.addEventListener('load', () => {
  cards.forEach((card, i) => {
    card.el.style.left='50%';
    card.el.style.top='50%';
    card.el.style.transform='translate(-50%, -50%)';
    card.el.style.opacity=1;
    setTimeout(()=>{
      card.el.style.transition='transform 1s ease, opacity 0.8s';
      card.el.style.transform=`translate(calc(-50% + ${card.x}px), calc(-50% + ${card.y}px))`;
    }, 300 + i*200);
  });
});
