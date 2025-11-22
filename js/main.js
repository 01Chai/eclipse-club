gsap.registerPlugin(Draggable);

const track = document.querySelector(".carousel-track");
const images = track.querySelectorAll("img");
const totalWidth = images.length / 2 * (images[0].offsetWidth + 30); // 30 = gap

// Infinite seamless loop
gsap.to(track, {
  x: -totalWidth,
  ease: "none",
  duration: 120,
  repeat: -1,
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % -totalWidth)
  }
});

// Draggable swipe (mobile + desktop)
Draggable.create(track, {
  type: "x",
  inertia: true,
  dragResistance: 0.4,
  onDrag: function() {
    gsap.set(track, { x: this.x });
  },
  onThrowUpdate: function() {
    gsap.set(track, { x: this.x });
  }
});

