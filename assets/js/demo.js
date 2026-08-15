/* Schaltet die Drei-Schritte-Demo: Klick auf einen Schritt zeigt rechts den
   passenden Screen. Ohne Nutzer-Klick laufen die Schritte automatisch durch
   (nur wenn Bewegung nicht reduziert ist); der erste Klick stoppt das. */
(function () {
  var demo = document.querySelector(".demo");
  if (!demo) return;

  var steps = Array.prototype.slice.call(demo.querySelectorAll(".step"));
  var slides = Array.prototype.slice.call(demo.querySelectorAll(".demo-slide"));
  if (steps.length === 0 || steps.length !== slides.length) return;

  var current = steps.length - 1;
  var timer = null;

  function show(index) {
    current = index;
    steps.forEach(function (step, i) {
      step.classList.toggle("is-active", i === index);
      if (i === index) {
        step.setAttribute("aria-current", "true");
      } else {
        step.removeAttribute("aria-current");
      }
    });
    slides.forEach(function (slide, i) {
      slide.classList.toggle("is-active", i === index);
      slide.setAttribute("aria-hidden", i === index ? "false" : "true");
    });
  }

  function stopAuto() {
    if (timer !== null) {
      clearInterval(timer);
      timer = null;
    }
  }

  steps.forEach(function (step, i) {
    step.addEventListener("click", function () {
      stopAuto();
      show(i);
    });
  });

  if (window.matchMedia("(prefers-reduced-motion: no-preference)").matches) {
    show(0);
    timer = setInterval(function () {
      show((current + 1) % steps.length);
    }, 3500);
  }
})();
