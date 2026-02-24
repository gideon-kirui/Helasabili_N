const toggle = document.querySelector(".data-nav-toggler");
const navMenu = document.querySelector(".data-navbar");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

/* ================== PROPERTY FILTER TABS ================== */

const propertyTabs = document.querySelectorAll(".tab-r");
const propertyCards = document.querySelectorAll(".proj-card");

if (propertyTabs.length && propertyCards.length) {

  propertyTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const filter = tab.dataset.tab;

      // Active tab toggle
      propertyTabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");

      // Filter cards
      propertyCards.forEach(card => {
        const category = card.dataset.category;

        if (filter === "all" || category === filter) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

}

const slides = document.querySelectorAll('.slide');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const dotsContainer = document.querySelector('.dots');
const thumbs = document.querySelectorAll('.thumb');

let index = 0;
let interval;

// Create dots
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.addEventListener('click', () => showSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.dots span');

function showSlide(i) {
  slides.forEach(slide => slide.classList.remove('active'));
  dots.forEach(dot => dot.classList.remove('active'));
  thumbs.forEach(thumb => thumb.classList.remove('active'));

  slides[i].classList.add('active');
  dots[i].classList.add('active');
  thumbs[i].classList.add('active');

  index = i;
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + slides.length) % slides.length;
  showSlide(index);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

thumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    showSlide(parseInt(thumb.dataset.index));
  });
});

function startAutoSlide() {
  interval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
  clearInterval(interval);
}

document.querySelector('.slider').addEventListener('mouseover', stopAutoSlide);
document.querySelector('.slider').addEventListener('mouseout', startAutoSlide);

showSlide(index);
startAutoSlide();