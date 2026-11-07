/* Progressive enhancement: content remains readable without JavaScript. */
(() => {
  const about = document.querySelector('[data-about]');
  if (!about) return;

  const focus = about.querySelector('[data-focus]');
  const tablist = focus.querySelector('.about-focus__tabs');
  const tabs = [...tablist.querySelectorAll('button')];
  const panels = tabs.map((tab) => document.getElementById(tab.getAttribute('aria-controls')));

  function selectTab(index, moveFocus = false) {
    tabs.forEach((tab, i) => {
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
      panels[i].hidden = i !== index;
    });
    if (moveFocus) tabs[index].focus();
  }

  tablist.setAttribute('role', 'tablist');
  tablist.setAttribute('aria-orientation', 'vertical');
  tabs.forEach((tab, i) => {
    tab.setAttribute('role', 'tab');
    panels[i].setAttribute('role', 'tabpanel');
    panels[i].setAttribute('aria-labelledby', tab.id);
    panels[i].tabIndex = 0;
    tab.addEventListener('click', () => selectTab(i));
    tab.addEventListener('keydown', (event) => {
      let next;
      if (event.key === 'ArrowDown') next = (i + 1) % tabs.length;
      if (event.key === 'ArrowUp') next = (i - 1 + tabs.length) % tabs.length;
      if (event.key === 'Home') next = 0;
      if (event.key === 'End') next = tabs.length - 1;
      if (next === undefined) return;
      event.preventDefault();
      selectTab(next, true);
    });
  });
  selectTab(0);
  tablist.hidden = false;
  focus.classList.add('is-interactive');

  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const sections = [...about.querySelectorAll('[data-reveal]')];
  if (!motion.matches && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (!isIntersecting) return;
        target.classList.remove('reveal-pending');
        observer.unobserve(target);
      });
    }, { threshold: 0.08 });
    sections.forEach((section) => {
      section.classList.add('reveal-pending');
      observer.observe(section);
    });
    motion.addEventListener('change', () => {
      if (!motion.matches) return;
      sections.forEach((section) => section.classList.remove('reveal-pending'));
      observer.disconnect();
    });
    about.addEventListener('focusin', (event) => {
      event.target.closest('[data-reveal]')?.classList.remove('reveal-pending');
    });
  }
})();
