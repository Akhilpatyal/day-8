const card = document.querySelector('.card');

card.addEventListener('mousemove', (event) => {
  const cardRect = card.getBoundingClientRect();
  const x = event.clientX - cardRect.left;
  const y = event.clientY - cardRect.top;

  const centerX = cardRect.width / 2;
  const centerY = cardRect.height / 2;

  const rotateX = (y - centerY) / 15;
  const rotateY = (centerX - x) / 15;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

card.addEventListener('mouseleave', () => {
  card.style.transform = `rotateX(0deg) rotateY(0deg)`;
});
