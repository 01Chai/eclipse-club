gsap.registerPlugin(Draggable);

// Dark mode toggle
document.querySelector('.theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  document.querySelector('.theme-toggle').textContent = isDark ? 'Sun Icon' : 'Moon Icon';
});

// Carousel magic
const carousel = document.getElementById('carousel');
const images = carousel.querySelectorAll('img');
const count = images.length / 2;
const gap = 32;

// Wait for first image to load so we can measure it
images[0].addEventListener('load', () => {
  const imgWidth = images[0].offsetWidth + gap;
  const totalWidth = imgWidth * count;

  // Infinite auto-scroll
  gsap.to(carousel, {
    x: -totalWidth,
    duration: 90,
    ease: "none",
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize(x => (parseFloat(x) % -totalWidth) + "px")
    }
  });

  // Draggable
  Draggable.create(carousel, {
    type: "x",
    inertia: true,
    dragResistance: 0.35,
    bounds: { minX: -totalWidth * 1.5, maxX: 100 }
  });
});
