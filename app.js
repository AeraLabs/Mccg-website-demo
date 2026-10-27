/* MCCG interactive layer. No dependencies, tracking, storage, or network requests. */
(() => {
  "use strict";
  const $ = (selector, scope = document) => scope.querySelector(selector);
  const $$ = (selector, scope = document) => Array.from(scope.querySelectorAll(selector));
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const year = $("#year");
  if (year) year.textContent = String(new Date().getFullYear());

  // Mobile navigation: click, outside click and Escape are all supported.
  const toggle = $(".nav-toggle");
  const nav = $("#nav-panel");
  const header = $("#site-header");
  function setMenu(open) {
    if (!toggle || !nav) return;
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close navigation" : "Open navigation");
  }
  if (toggle && nav) {
    toggle.addEventListener("click", () => setMenu(!nav.classList.contains("open")));
    $$("a", nav).forEach(link => link.addEventListener("click", () => setMenu(false)));
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && nav.classList.contains("open")) {
        setMenu(false);
        toggle.focus();
      }
    });
    document.addEventListener("pointerdown", event => {
      if (nav.classList.contains("open") && header && !header.contains(event.target)) setMenu(false);
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 980 && nav.classList.contains("open")) setMenu(false);
    }, { passive: true });
  }

  // Mobile/desktop: hide chrome on deliberate downward scroll, restore on upward
  // scroll, near the page top, or when a user opens/focuses navigation.
  let previousScrollY = Math.max(0, window.scrollY);
  let scrollHeaderTick = false;
  function updateHeaderVisibility() {
    if (!header) return;
    const current = Math.max(0, window.scrollY);
    const delta = current - previousScrollY;
    const menuOpen = !!(nav && nav.classList.contains("open"));
    const interactingWithHeader = header.contains(document.activeElement);
    if (current < 100 || menuOpen || interactingWithHeader) {
      header.classList.remove("header-hidden");
    } else if (delta > 5 && current > 170) {
      header.classList.add("header-hidden");
    } else if (delta < -5) {
      header.classList.remove("header-hidden");
    }
    previousScrollY = current;
    scrollHeaderTick = false;
  }
  window.addEventListener("scroll", () => {
    if (scrollHeaderTick) return;
    scrollHeaderTick = true;
    window.requestAnimationFrame(updateHeaderVisibility);
  }, { passive: true });
  if (toggle) toggle.addEventListener("click", () => header?.classList.remove("header-hidden"));

  // Reveal elements only when visible. No JS and reduced-motion fallbacks are provided in CSS/HTML.
  const reveals = $$(".reveal");
  if (reducedMotion || !("IntersectionObserver" in window)) {
    reveals.forEach(el => el.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    }, { threshold: 0.08, rootMargin: "0px 0px 30px 0px" });
    reveals.forEach(el => revealObserver.observe(el));
  }

  // Active navigation tracks the principal sections.
  if ("IntersectionObserver" in window) {
    const links = $$(".nav-link");
    const sections = links.map(link => $(link.getAttribute("href"))).filter(Boolean);
    const activeObserver = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        links.forEach(link => {
          const selected = link.getAttribute("href") === "#" + entry.target.id;
          link.classList.toggle("is-current", selected);
          if (selected) link.setAttribute("aria-current", "location");
          else link.removeAttribute("aria-current");
        });
      }
    }, { rootMargin: "-25% 0px -63% 0px", threshold: 0 });
    sections.forEach(section => activeObserver.observe(section));
  }

  // Throttle progress line + drawn road to the animation frame.
  const progressBar = $("#scroll-progress-bar");
  const road = $("#steps-road-path");
  const roadDot = $("#steps-road-dot");
  const steps = $("#steps");
  let frameRequested = false;
  function paintScroll() {
    const scrollLimit = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    const progress = Math.max(0, Math.min(1, window.scrollY / scrollLimit));
    if (progressBar) progressBar.style.width = (progress * 100).toFixed(2) + "%";
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 16);
    if (road && steps) {
      const rect = steps.getBoundingClientRect();
      const vh = window.innerHeight || 800;
      let stepProgress = (vh * 0.84 - rect.top) / (vh * 0.63 + rect.height);
      stepProgress = reducedMotion ? 1 : Math.max(0, Math.min(1, stepProgress));
      road.style.strokeDashoffset = (100 - stepProgress * 100).toFixed(2);
      if (roadDot) roadDot.setAttribute("cx", (12 + stepProgress * 976).toFixed(1));
    }
    frameRequested = false;
  }
  function requestPaint() {
    if (frameRequested) return;
    frameRequested = true;
    window.requestAnimationFrame(paintScroll);
  }
  window.addEventListener("scroll", requestPaint, { passive: true });
  window.addEventListener("resize", requestPaint, { passive: true });
  paintScroll();

  // This is intentionally ONLY a demo. Do not add fetch, mailto with form data,
  // localStorage or any other transmission without the client's approval.
  const form = $("#demo-contact-form");
  if (form) {
    const fields = $$("[required]", form);
    const error = $("#form-error");
    const notice = $("#demo-notice");
    function invalid(field) {
      const value = field.value.trim();
      if (!value) return true;
      if (field.type === "email") return !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      return false;
    }
    fields.forEach(field => {
      field.addEventListener("input", () => {
        field.removeAttribute("aria-invalid");
        if (error) error.hidden = true;
        if (notice) notice.hidden = true;
      });
    });
    form.addEventListener("submit", event => {
      event.preventDefault();
      const failed = fields.filter(field => invalid(field));
      fields.forEach(field => field.setAttribute("aria-invalid", String(invalid(field))));
      if (failed.length) {
        if (error) error.hidden = false;
        if (notice) notice.hidden = true;
        failed[0].focus();
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