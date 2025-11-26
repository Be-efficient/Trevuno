// script.js - smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target) {
            target.scrollIntoView({behavior: 'smooth'});
        }
    });
});

window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".card");
    let delay = 200;

    cards.forEach(card => {
        setTimeout(() => {
            card.classList.add("fly");
        }, delay);
        delay += 250;
    });
});
