'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar-list");
  const navToggler = document.querySelector(".menu-toggle");

  navToggler.addEventListener("click", () => {
    navbar.classList.toggle("active");
  });

  /* ---------------- HEADER SCROLL STATE ---------------- */

  const header = document.querySelector("[data-header]");

  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("active", window.scrollY > 50);
    });
  }

  /* ---------------- HERO SLIDER ---------------- */

  const slides = document.querySelectorAll(".hero-slide");

  if (slides.length > 0) {
    let currentSlide = 0;

    setInterval(() => {
      slides[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
    }, 6000);
  }

  /* ---------------- COUNTERS ---------------- */

  const counters = document.querySelectorAll('.card-title-s');

  counters.forEach(counter => {
    const updateCount = () => {
      const target = Number(counter.dataset.target);
      const current = Number(counter.innerText.replace(/\D/g, '')) || 0;
      const increment = Math.ceil(target / 200);

      if (current < target) {
        counter.innerText = `${current + increment}${counter.innerText.includes('+') ? '+' : '%'}`;
        setTimeout(updateCount, 10);
      } else {
        counter.innerText = `${target}${counter.innerText.includes('+') ? '+' : '%'}`;
      }
    };

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        updateCount();
        observer.unobserve(counter);
      }
    }, { threshold: 0.5 });

    observer.observe(counter);
  });

});
