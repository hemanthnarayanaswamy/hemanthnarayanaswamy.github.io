(() => {
  const panda = document.querySelector('[data-panda]');
  if (!panda) return;
  const read = (key) => { try { return sessionStorage.getItem(key); } catch { return null; } };
  const save = (key, value) => { try { sessionStorage.setItem(key, value); } catch { /* The controls also work without storage. */ } };
  if (read('portfolio.panda.hidden') === 'true') {
    panda.hidden = true;
    document.body.classList.remove('has-panda');
    return;
  }

  const pause = panda.querySelector('[data-panda-pause]');
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let paused = read('portfolio.panda.paused') === 'true';
  const update = () => {
    panda.dataset.animated = String(!motion.matches);
    panda.dataset.paused = String(paused);
    pause.hidden = motion.matches;
    const label = paused ? 'Resume panda animation' : 'Pause panda animation';
    pause.setAttribute('aria-label', label);
    pause.title = label;
    pause.querySelector('i').className = paused ? 'fas fa-play' : 'fas fa-pause';
  };
  pause.addEventListener('click', () => {
    paused = !paused;
    save('portfolio.panda.paused', String(paused));
    update();
  });
  panda.querySelector('[data-panda-hide]').addEventListener('click', () => {
    save('portfolio.panda.hidden', 'true');
    panda.hidden = true;
    document.body.classList.remove('has-panda');
  });
  motion.addEventListener('change', update);
  panda.querySelector('[data-panda-controls]').hidden = false;
  update();
})();
