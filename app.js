// MCCG demo v4 — no network calls, no backend, no storage.
// Demo form: validate required fields, then show an on-page notice only.
(function () {
  "use strict";

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
    });
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.setAttribute("aria-label", "Open menu");
      });
    });
  }

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Scroll reveals.
  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && !reduced) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // Gentle hero parallax: the split-hero card photo drifts a few pixels while
  // it is on screen. Drift is capped (0.02 * 600 = 12px) well inside the
  // 1.08 baseline scale's headroom, so no edge ever shows inside the card.
  var heroPhoto = document.querySelector(".hero-photo");
  var ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(function () {
      var y = window.scrollY || 0;
      if (!reduced && y < 600 && heroPhoto) {
        heroPhoto.style.transform = "translateY(" + (y * 0.02).toFixed(1) + "px) scale(1.08)";
      }
      drawRoad();
      ticking = false;
    });
  }

  // Steps road: line draws itself as the section scrolls into view.
  var road = document.getElementById("steps-road-path");
  var roadDot = document.getElementById("steps-road-dot");
  var steps = document.getElementById("steps");
  function drawRoad() {
    if (!road || !steps) return;
    var rect = steps.getBoundingClientRect();
    var vh = window.innerHeight || 800;
    var progress = (vh * 0.85 - rect.top) / (vh * 0.6 + rect.height);
    progress = Math.max(0, Math.min(1, progress));
    if (reduced) progress = 1;
    road.style.strokeDashoffset = String(100 - progress * 100);
    if (roadDot) roadDot.setAttribute("cx", String(10 + progress * 880));
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);
  drawRoad();

  // Demo form: prevent submit, validate required fields first, never send anything.
  var form = document.getElementById("demo-contact-form");
  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      var error = document.getElementById("form-error");
      var notice = document.getElementById("demo-notice");
      var fields = Array.prototype.slice.call(form.querySelectorAll("[required]"));
      var isInvalid = function (field) {
        var value = field.value.trim();
        if (!value) return true;
        if (field.type === "email") return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        return false;
      };
      var missing = fields.filter(isInvalid);
      fields.forEach(function (field) {
        field.setAttribute("aria-invalid", isInvalid(field) ? "true" : "false");
      });
      if (missing.length > 0) {
        if (error) error.hidden = false;
        if (notice) notice.hidden = true;
        missing[0].focus();
        return;
      }
      if (error) error.hidden = true;
      if (notice) {
        notice.hidden = false;
        notice.focus();
      }
    });
  }
})();
