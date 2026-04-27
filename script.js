(() => {
  'use strict';

  const themes = new Set(['dusk', 'sunset']);
  const defaultTheme = 'dusk';

  const panelLinks = Array.from(document.querySelectorAll('[data-panel-link]'));
  const panels = Array.from(document.querySelectorAll('.content-panel'));
  const growthCard = document.querySelector('.growth-card-standalone');
  const themeToggle = document.querySelector('.theme-toggle');
  const themeToggleLabel = themeToggle?.querySelector('.visually-hidden');
  const skipLink = document.querySelector('.skip-link');
  const mainContent = document.querySelector('#main-content');
  const githubThemeIcons = Array.from(document.querySelectorAll('[data-theme-icon="github"]'));
  const growthCandle = document.querySelector('.growth-candle');

  if (!panelLinks.length || !panels.length) {
    return;
  }

  const panelIds = new Set(panels.map((panel) => panel.id));
  const defaultPanelId = panels.find((panel) => panel.classList.contains('active-panel'))?.id || panels[0].id;

  const savedTheme = localStorage.getItem('theme');
  const migratedTheme = savedTheme === 'dark' ? 'dusk' : savedTheme;
  if (savedTheme === 'dark') {
    localStorage.setItem('theme', migratedTheme);
  }
  const startingTheme = themes.has(migratedTheme) ? migratedTheme : defaultTheme;
  document.documentElement.dataset.theme = startingTheme;

  function showPanel(panelId) {
    if (!panelIds.has(panelId)) {
      return;
    }

    panels.forEach((panel) => {
      const isActive = panel.id === panelId;
      panel.classList.toggle('active-panel', isActive);
      panel.hidden = !isActive;
      panel.inert = !isActive;
      panel.setAttribute('aria-hidden', String(!isActive));
    });

    panelLinks.forEach((link) => {
      const isActive = link.dataset.panelLink === panelId;
      link.classList.toggle('active-link', isActive);

      if (isActive) {
        link.setAttribute('aria-current', 'page');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    if (growthCard) {
      const showGrowthCard = panelId === 'projects';
      growthCard.hidden = !showGrowthCard;
      growthCard.inert = !showGrowthCard;
      growthCard.setAttribute('aria-hidden', String(!showGrowthCard));
    }
  }

  function getPanelIdFromHash() {
    const hashValue = window.location.hash.slice(1);
    return panelIds.has(hashValue) ? hashValue : defaultPanelId;
  }

  panelLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const panelId = link.dataset.panelLink;

      if (!panelIds.has(panelId)) {
        return;
      }

      showPanel(panelId);
      history.replaceState(null, '', `#${panelId}`);
    });
  });

  window.addEventListener('hashchange', () => {
    showPanel(getPanelIdFromHash());
  });

  showPanel(getPanelIdFromHash());

  skipLink?.addEventListener('click', () => {
    mainContent?.focus({ preventScroll: true });
  });

  function updateThemeButton(theme) {
    if (!themeToggle) return;

    const nextThemeLabel = theme === 'sunset' ? 'dusk' : 'sunset';
    const label = `Switch to ${nextThemeLabel} theme`;

    themeToggle.setAttribute('aria-pressed', String(theme === 'sunset'));
    themeToggle.setAttribute('aria-label', label);

    if (themeToggleLabel) {
      themeToggleLabel.textContent = label;
    }
  }

  function updateThemeIcons(theme) {
    const githubIconSrc = theme === 'sunset'
      ? 'assets/GitHub_Invertocat_Black.svg'
      : 'assets/GitHub_Invertocat_White.svg';

    githubThemeIcons.forEach((icon) => {
      icon.setAttribute('src', githubIconSrc);
    });
  }

  updateThemeButton(startingTheme);
  updateThemeIcons(startingTheme);

  growthCandle?.addEventListener('click', () => {
    const isOut = growthCandle.classList.toggle('is-out');
    growthCandle.setAttribute(
      'aria-label',
      isOut ? 'Relight candle' : 'Blow out candle'
    );

    if (isOut) {
      growthCandle.classList.remove('is-smoking');
      void growthCandle.offsetWidth;
      growthCandle.classList.add('is-smoking');
      window.setTimeout(() => {
        growthCandle.classList.remove('is-smoking');
      }, 900);
    }
  });

  themeToggle?.addEventListener('click', () => {
    const currentTheme = document.documentElement.dataset.theme;
    const nextTheme = currentTheme === 'sunset' ? 'dusk' : 'sunset';

    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem('theme', nextTheme);
    updateThemeButton(nextTheme);
    updateThemeIcons(nextTheme);
  });
})();
