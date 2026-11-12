const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");

const syncHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
};

const setMenuOpen = (isOpen) => {
  nav.classList.toggle("is-open", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
};

const animateCount = (element) => {
  const target = Number(element.dataset.countTo);
  const duration = 1400;
  const startedAt = performance.now();

  const tick = (now) => {
    const progress = Math.min((now - startedAt) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 4);
    element.textContent = Math.round(target * eased);
    if (progress < 1) requestAnimationFrame(tick);
  };

  requestAnimationFrame(tick);
};

const revealOnScroll = () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        if (!prefersReducedMotion) {
          entry.target.querySelectorAll("[data-count-to]").forEach(animateCount);
        }
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px" }
  );

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
};

window.addEventListener("scroll", syncHeaderState, { passive: true });
menuToggle.addEventListener("click", () => setMenuOpen(!nav.classList.contains("is-open")));
nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenuOpen(false);
});

syncHeaderState();
revealOnScroll();
