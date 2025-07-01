// Animate elements when they come into view

// Show animations when elements come into view
const animatedElements = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.animationPlayState = "running";
      }
    });
  },
  { threshold: 0.1 }
);

animatedElements.forEach((element) => {
  observer.observe(element);
  element.style.animationPlayState = "paused";
});
const contactBtn1 = document.getElementById("contactBtn1");
const popupOverlay1 = document.getElementById("popupOverlay1");
const closeBtn1 = document.getElementById("closeBtn1");

contactBtn1.addEventListener("click", () => {
  popupOverlay1.style.display = "flex";
});

closeBtn1.addEventListener("click", () => {
  popupOverlay1.style.display = "none";
});
const contactBtn2 = document.getElementById("contactBtn2");
const popupOverlay2 = document.getElementById("popupOverlay2");
const closeBtn2 = document.getElementById("closeBtn2");

contactBtn2.addEventListener("click", () => {
  popupOverlay2.style.display = "flex";
});

closeBtn2.addEventListener("click", () => {
  popupOverlay2.style.display = "none";
});
