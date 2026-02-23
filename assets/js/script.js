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