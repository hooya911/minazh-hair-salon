(function () {
  'use strict';

  /* only hide the reveal targets if we're actually here to un-hide them */
  document.documentElement.classList.add('js');

  /* current year in the footer */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  /* hairline under the nav once you've scrolled past the top */
  var nav = document.getElementById('nav');
  var onScroll = function () {
    nav.classList.toggle('is-stuck', window.scrollY > 12);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* mobile menu */
  var burger = document.getElementById('burger');
  var drawer = document.getElementById('drawer');

  var setMenu = function (open) {
    drawer.hidden = !open;
    burger.setAttribute('aria-expanded', String(open));
  };

  burger.addEventListener('click', function () {
    setMenu(drawer.hidden);
  });

  drawer.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') setMenu(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !drawer.hidden) {
      setMenu(false);
      burger.focus();
    }
  });

  /* close the drawer if the viewport grows back to desktop */
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900 && !drawer.hidden) setMenu(false);
  });

  /* fade sections in as they arrive */
  var items = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach(function (el) { el.classList.add('is-in'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry, i) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      setTimeout(function () { el.classList.add('is-in'); }, i * 90);
      io.unobserve(el);
    });
  }, { rootMargin: '0px 0px -12% 0px', threshold: 0.08 });

  items.forEach(function (el) { io.observe(el); });
})();
