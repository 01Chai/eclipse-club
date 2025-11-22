gsap.registerPlugin(Draggable);

// Dark/Light mode toggle
document.querySelector('.theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  document.querySelector('.theme-toggle').textContent = isDark ? 'Sun Icon' : 'Moon Icon';
});

// Carousel animation + drag
const carousel = document.getElementById('carousel');
const imgs = carousel.querySelectorAll('img');
const count = imgs.length / 2; // 8 unique
const gap = 34;

imgs[0].addEventListener('load', () => {
  const imgWidth = imgs[0].offsetWidth + gap;
  const totalWidth = imgWidth * count;

  // Infinite auto-scroll
  gsap.to(carousel, {
    x: -totalWidth,
    duration: 100,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => (parseFloat(x) % -totalWidth) + "px")
    }
  });

  // Draggable (mouse + touch)
  Draggable.create(carousel, {
    type: "x",
    inertia: true,
    dragResistance: 0.3,
    bounds: { minX: -totalWidth * 1.5, maxX: 100 }
  });
});
