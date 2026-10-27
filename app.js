// MCCG homepage demo — interaction only. No tracking, no network calls.
// DEMO FORM: The contact form below has no backend. Submit only reveals an
// on-page demo notice; nothing is sent or stored.

(function () {
  "use strict";

  var prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Footer year (display only).
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  // Mobile nav toggle.
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      toggle.textContent = open ? "Close" : "Menu";
    });
  }

  // Subtle scroll reveals.
  var revealEls = document.querySelectorAll(".reveal");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
  }

  // Parallax hero: transform only, requestAnimationFrame, layered speeds.
  // Simplified/disabled on small screens and when reduced motion is requested.
  var ridge = document.querySelector(".parallax-ridge");
  var highway = document.querySelector(".parallax-highway");
  var hero = document.querySelector(".hero");
  var ticking = false;

  function updateParallax() {
    ticking = false;
    if (!hero || !ridge || !highway) return;
    if (prefersReducedMotion || window.innerWidth < 640) {
      ridge.style.transform = "";
      highway.style.transform = "";
      return;
    }
    var rect = hero.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) return;
    // Hero is at the top of the page, so scrollY is its progress.
    var progress = Math.max(0, window.scrollY);
    // Ridge (far layer) moves slowest, highway (near layer) moves fastest.
    ridge.style.transform = "translate3d(0, " + (progress * 0.12) + "px, 0)";
    highway.style.transform = "translate3d(0, " + (progress * 0.28) + "px, 0)";
  }

  function requestParallax() {
    if (!ticking) {
      ticking = true;
      window.requestAnimationFrame(updateParallax);
    }
  }

  var parallaxEnabled = !prefersReducedMotion && window.innerWidth >= 640;
  if (parallaxEnabled) {
    window.addEventListener("scroll", requestParallax, { passive: true });
    window.addEventListener("resize", function () {
      if (window.innerWidth < 640) {
        ridge.style.transform = "";
        highway.style.transform = "";
      }
    });
    updateParallax();
  }

  // 3-step road line: draws itself with scroll progress through the steps block.
  var roadPath = document.getElementById("steps-road-path");
  var steps = document.getElementById("steps");
  if (roadPath && steps) {
    var length = 0;
    try { length = roadPath.getTotalLength(); } catch (e) { length = 880; }
    if (prefersReducedMotion) {
      roadPath.style.strokeDashoffset = "0";
    } else {
      // Keep the dashed look, but reveal it by offsetting the dash pattern.
      // Use a solid overlay trick: set dasharray to the full length for the draw,
      // then restore the dashed pattern once fully drawn.
      roadPath.style.strokeDasharray = String(length);
      roadPath.style.strokeDashoffset = String(length);
      var drawing = false;
      var updateRoad = function () {
        drawing = false;
        if (window.innerWidth < 820) return;
        var rect = steps.getBoundingClientRect();
        var viewport = window.innerHeight;
        var start = viewport * 0.9;
        var end = viewport * 0.3;
        var total = start - end;
        var travelled = start - rect.top;
        var p = Math.min(1, Math.max(0, travelled / total));
        roadPath.style.strokeDashoffset = String(length * (1 - p));
        if (p >= 1) {
          roadPath.style.strokeDasharray = "14 12";
          roadPath.style.strokeDashoffset = "0";
        }
      };
      var requestRoad = function () {
        if (!drawing) {
          drawing = true;
          window.requestAnimationFrame(updateRoad);
        }
      };
      window.addEventListener("scroll", requestRoad, { passive: true });
      updateRoad();
    }
  }

  // Demo contact form: never pretends to send.
  var form = document.getElementById("demo-contact-form");
  var notice = document.getElementById("demo-notice");
  if (form && notice) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      notice.hidden = false;
      notice.focus();
    });
  }
})();
