/* Page interactions enhance the static content; every entry remains readable without JS. */
(() => {
  document.querySelectorAll('[data-collection]').forEach((collection) => {
    const controls = collection.querySelector('[data-filter-controls]');
    const buttons = [...collection.querySelectorAll('[data-filter]')];
    const groups = [...collection.querySelectorAll('[data-filter-item]')];
    const status = collection.querySelector('[data-filter-status]');
    const noun = collection.dataset.collectionLabel || 'projects';
    controls.hidden = false;
    buttons.forEach((button) => button.addEventListener('click', () => {
      let total = 0;
      buttons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
      groups.forEach((group) => {
        group.hidden = button.dataset.filter !== 'all' && group.dataset.filterItem !== button.dataset.filter;
        if (group.hidden) return;
        total += Number(group.dataset.itemCount);
        group.querySelectorAll('.reveal-pending').forEach((item) => item.classList.remove('reveal-pending'));
      });
      status.textContent = `${total} ${total === 1 ? noun.replace(/s$/, '') : noun}`;
    }));
  });

  const search = document.querySelector('[data-skill-search]');
  if (search) {
    search.hidden = false;
    const input = search.querySelector('input');
    const groups = [...document.querySelectorAll('[data-skill-group]')];
    const status = search.querySelector('[data-skill-status]');
    const empty = document.querySelector('[data-skill-empty]');
    const update = () => {
      const query = input.value.trim().toLocaleLowerCase();
      let count = 0;
      let categories = 0;
      groups.forEach((group) => {
        let visible = 0;
        const categoryMatch = group.dataset.skillGroup.toLocaleLowerCase().includes(query);
        group.querySelectorAll('[data-skill]').forEach((skill) => {
          skill.hidden = !categoryMatch && !skill.dataset.skill.toLocaleLowerCase().includes(query);
          if (!skill.hidden) visible++;
        });
        group.hidden = visible === 0;
        group.querySelector('.portfolio-count').textContent = String(visible);
        if (visible) {
          categories++;
          count += visible;
          if (query) group.classList.remove('reveal-pending');
        }
      });
      status.textContent = `${count} ${count === 1 ? 'skill' : 'skills'} across ${categories} ${categories === 1 ? 'category' : 'categories'}`;
      empty.hidden = count !== 0;
    };
    input.addEventListener('input', update);
    update();
  }

  const timelineControls = document.querySelector('[data-timeline-controls]');
  if (timelineControls) {
    timelineControls.hidden = false;
    timelineControls.querySelectorAll('[data-expand]').forEach((button) => {
      button.addEventListener('click', () => {
        const expand = button.dataset.expand === 'true';
        document.querySelectorAll('details.timeline-entry').forEach((entry) => { entry.open = expand; });
        timelineControls.querySelector('[data-timeline-status]').textContent = expand ? 'All timeline entries expanded.' : 'All timeline entries collapsed.';
      });
    });
  }

  const copy = document.querySelector('[data-copy-email]');
  if (copy && navigator.clipboard) {
    copy.hidden = false;
    copy.addEventListener('click', async () => {
      const status = document.querySelector('[data-copy-status]');
      try {
        await navigator.clipboard.writeText(copy.dataset.copyEmail);
        status.textContent = 'Email address copied.';
      } catch {
        status.textContent = 'Copy unavailable. You can select the email address above to copy it manually.';
      }
    });
  }

  const root = document.querySelector('.portfolio-page');
  if (!root) return;
  root.querySelectorAll('.categories, #archives li, .card-wrapper').forEach((card) => card.setAttribute('data-reveal', ''));
  const sections = [...root.querySelectorAll('[data-reveal]')];
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (motion.matches || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (!isIntersecting) return;
      target.classList.remove('reveal-pending');
      observer.unobserve(target);
    });
  }, { threshold: 0.06 });
  sections.forEach((section) => {
    section.classList.add('reveal-pending');
    observer.observe(section);
  });
  root.addEventListener('focusin', (event) => {
    event.target.closest('[data-reveal]')?.classList.remove('reveal-pending');
  });
  motion.addEventListener('change', () => {
    if (!motion.matches) return;
    sections.forEach((section) => section.classList.remove('reveal-pending'));
    observer.disconnect();
  });
})();
