// Mobile Navigation

// const mainNav = document.querySelector(".main-nav");
const headerEl = document.querySelector(".header");
const btnMobileEl = document.querySelector(".btn-mobile-nav");

btnMobileEl.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

// ANIMACAO SUAVE NO SCROLL

const allLinks = document.querySelectorAll("a:link");

allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (link.classList.contains("main-nav-link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});

/*
allLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    // e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll voltando pro topo
    if (href === "#") {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }

    // Scroll para outros links
    if (href !== "#" && href.startsWith("#")) {
      e.preventDefault();
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    // Fechar navegacao mobile
    if (link.classList.contains("main-nav-link")) {
      e.preventDefault();
      headerEl.classList.toggle("nav-open");
    }
  });
});
*/
// ------------ NAVEGACAO STICKY ----------------

const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (!ent.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // Dentro da viewport
    root: null,
    threshold: 0.4,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
