const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.getElementById('sidebar');

menuBtn.addEventListener('click', () => {
    sidebar.classList.remove('-translate-y-full');
    sidebar.classList.add('translate-x-0');
});

closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('translate-x-0');
    sidebar.classList.add('-translate-y-full');
});


// carousel
const carousel = document.getElementById('carousel');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function updateCarousel(index) {
  const translateValue = -100 * index;
  carousel.style.transform = `translateX(${translateValue}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle('bg-gray-500', i === index);
    dot.classList.toggle('bg-gray-300', i !== index);
  });
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel(index);
  });
});

// Auto Slide
setInterval(() => {
  currentIndex = (currentIndex + 1) % 3;
  updateCarousel(currentIndex);
}, 4000);

// Initialize
updateCarousel(currentIndex);

