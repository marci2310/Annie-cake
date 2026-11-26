const STORE_CONFIG = {
  phoneDisplay: '(81) 99680-3230',
  phoneDigits: '5581996803230',
  instagramUrl: 'https://www.instagram.com/anniecakeshop/',
  cardapioWebUrl: 'https://app.cardapioweb.com/anniecakeshop',
  ifoodUrl: 'https://www.ifood.com.br/delivery/jaboatao-dos-guararapes-pe/annie-cake-shop-piedade-piedade/25b638b0-333a-4cb1-9f01-446eb66b88ee',
  googleReviewUrl: 'https://search.google.com/local/writereview?placeid=ChIJwei9JsbhqgcRpum7amTFgXA',
  mapsUrl: 'https://maps.app.goo.gl/1DZePw4N8cyt5A679',
  routeUrl: 'https://www.google.com/maps/dir/?api=1&destination=R.%20Jo%C3%A3o%20Dourado%20Filho%2C%201131%2C%20Piedade%2C%20Jaboat%C3%A3o%20dos%20Guararapes%2C%20PE',
  wazeUrl: 'https://www.waze.com/ul?q=R.%20Jo%C3%A3o%20Dourado%20Filho%2C%201131%2C%20Piedade%2C%20Jaboat%C3%A3o%20dos%20Guararapes%2C%20PE&navigate=yes',
  hours: {
    weekday: { open: 11, close: 20 },
    weekend: { open: 11, close: 21 }
  }
};

const REVIEWS = [
  { quote: '“O cantinho mais gostoso para adoçar a tarde. Tudo caprichado e o atendimento é um carinho só!”', name: 'Cliente exemplo', initial: 'C' },
  { quote: '“Os doces são lindos, mas o sabor consegue ser ainda melhor. Já quero voltar para provar tudo.”', name: 'Cliente exemplo', initial: 'A' },
  { quote: '“Pedi para uma comemoração e foi um sucesso. A Annie entendeu exatamente o que eu imaginava.”', name: 'Cliente exemplo', initial: 'M' },
  { quote: '“Ambiente acolhedor, café gostoso e aquela sobremesa que melhora qualquer dia.”', name: 'Cliente exemplo', initial: 'R' }
];

function whatsappLink(message) {
  return `https://wa.me/${STORE_CONFIG.phoneDigits}?text=${encodeURIComponent(message)}`;
}

function setConfiguredLinks() {
  document.querySelectorAll('[data-whatsapp]').forEach((link) => {
    link.href = whatsappLink(link.dataset.message || 'Olá! Vim pelo site e gostaria de falar com a Annie Cake Shop.');
    link.target = '_blank';
    link.rel = 'noreferrer';
  });
  document.querySelectorAll('[data-phone]').forEach((link) => { link.href = `tel:+${STORE_CONFIG.phoneDigits}`; });
  document.querySelectorAll('[data-order]').forEach((link) => { link.href = STORE_CONFIG.cardapioWebUrl; link.target = '_blank'; link.rel = 'noreferrer'; });
  document.querySelectorAll('[data-ifood]').forEach((link) => { link.href = STORE_CONFIG.ifoodUrl; link.target = '_blank'; link.rel = 'noreferrer'; });
  document.querySelectorAll('[data-google-review]').forEach((link) => { link.href = STORE_CONFIG.googleReviewUrl; link.target = '_blank'; link.rel = 'noreferrer'; });
  document.querySelectorAll('[data-maps]').forEach((link) => { link.href = STORE_CONFIG.mapsUrl; link.target = '_blank'; link.rel = 'noreferrer'; });
  document.querySelectorAll('[data-route]').forEach((link) => { link.href = STORE_CONFIG.routeUrl; link.target = '_blank'; link.rel = 'noreferrer'; });
  document.querySelectorAll('[data-waze]').forEach((link) => { link.href = STORE_CONFIG.wazeUrl; link.target = '_blank'; link.rel = 'noreferrer'; });
}

function getOpenStatus(now = new Date()) {
  const day = now.getDay();
  const schedule = day === 0 || day === 6 ? STORE_CONFIG.hours.weekend : STORE_CONFIG.hours.weekday;
  const current = now.getHours() + now.getMinutes() / 60;
  return { isOpen: current >= schedule.open && current < schedule.close, schedule };
}

function renderOpenStatus() {
  const status = document.querySelector('#open-status');
  if (!status) return;
  const { isOpen, schedule } = getOpenStatus();
  status.dataset.state = isOpen ? 'open' : 'closed';
  status.querySelector('.status-text').textContent = isOpen ? `Aberto agora · até ${schedule.close}h` : `Fechado agora · abre às ${schedule.open}h`;
}

function renderMenu() {
  const tabs = document.querySelector('#menu-tabs');
  if (!tabs || !Array.isArray(MENU_DATA)) return;
  MENU_DATA.forEach((group, index) => {
    const tab = document.createElement('button');
    tab.className = 'menu-tab';
    tab.type = 'button';
    tab.setAttribute('role', 'tab');
    tab.setAttribute('aria-selected', String(index === 0));
    tab.innerHTML = `<span class="menu-tab-icon" aria-hidden="true">${group.icon}</span>${group.category}`;
    tab.addEventListener('click', () => selectTab(index));
    tab.addEventListener('keydown', (e) => {
      if (!['ArrowRight', 'ArrowLeft'].includes(e.key)) return;
      selectTab((index + (e.key === 'ArrowRight' ? 1 : -1) + MENU_DATA.length) % MENU_DATA.length, true);
    });
    tabs.appendChild(tab);
  });
  renderMenuItems(0);
}

function selectTab(index, focus) {
  const tabs = [...document.querySelectorAll('.menu-tab')];
  tabs.forEach((tab, i) => tab.setAttribute('aria-selected', String(i === index)));
  tabs[index].scrollIntoView({ inline: 'center', block: 'nearest', behavior: 'smooth' });
  if (focus) tabs[index].focus();
  renderMenuItems(index);
}

function renderMenuItems(gi) {
  const grid = document.querySelector('#menu-grid');
  const group = MENU_DATA[gi];
  if (!grid || !group) return;
  grid.innerHTML = group.items.map((item, i) => `
    <article class="menu-card" style="--i:${i}">
      <div class="menu-card-image">
        <img src="${item.image}" alt="${item.alt}" loading="lazy" />
        ${item.isExample ? '<span class="menu-badge">[exemplo]</span>' : ''}
      </div>
      <div class="menu-card-body">
        <h3>${item.name}</h3>
        <p>${item.description}</p>
        <div class="menu-card-foot"><span class="menu-price">${item.price}</span><a class="menu-add" href="${STORE_CONFIG.cardapioWebUrl}" target="_blank" rel="noreferrer">Pedir online <span aria-hidden="true">↗</span></a></div>
      </div>
    </article>`).join('');
}

function setupScrollUI() {
  const progress = document.querySelector('#scroll-progress');
  const header = document.querySelector('.site-header');
  const links = [...document.querySelectorAll('.site-nav > a[href^="#"]:not(.nav-cta)')];
  const sections = links.map((link) => document.querySelector(link.getAttribute('href')));
  let ticking = false;
  const update = () => {
    const max = document.documentElement.scrollHeight - innerHeight;
    if (progress) progress.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
    if (header) header.classList.toggle('is-scrolled', scrollY > 12);
    links.forEach((link, i) => {
      const rect = sections[i]?.getBoundingClientRect();
      const active = rect && rect.top < innerHeight * .4 && rect.bottom > innerHeight * .4;
      if (active) link.setAttribute('aria-current', 'true'); else link.removeAttribute('aria-current');
    });
    ticking = false;
  };
  addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
  update();
}

function setupHeroTilt() {
  const visual = document.querySelector('.hero-visual');
  if (!visual || !matchMedia('(hover: hover) and (prefers-reduced-motion: no-preference)').matches) return;
  const vars = ['--rx', '--ry', '--mx', '--my'];
  visual.addEventListener('pointermove', (e) => {
    const r = visual.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    visual.style.setProperty('--ry', `${x * 8}deg`);
    visual.style.setProperty('--rx', `${-y * 8}deg`);
    visual.style.setProperty('--mx', `${x * -22}px`);
    visual.style.setProperty('--my', `${y * -22}px`);
  });
  visual.addEventListener('pointerleave', () => vars.forEach((v) => visual.style.removeProperty(v)));
}

function setupLightbox() {
  const dialog = document.querySelector('#lightbox');
  const items = [...document.querySelectorAll('.gallery-item')];
  if (!dialog || !items.length) return;
  const img = dialog.querySelector('img');
  const caption = dialog.querySelector('figcaption');
  let idx = 0;
  const show = (i) => {
    idx = (i + items.length) % items.length;
    const photo = items[idx].querySelector('img');
    img.src = photo.src.replace(/w=\d+/, 'w=1400');
    img.alt = photo.alt;
    caption.textContent = items[idx].querySelector('figcaption').textContent;
  };
  items.forEach((item, i) => {
    const open = () => { show(i); dialog.showModal(); };
    item.tabIndex = 0;
    item.setAttribute('role', 'button');
    item.setAttribute('aria-label', 'Ampliar foto');
    item.addEventListener('click', open);
    item.addEventListener('keydown', (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); } });
  });
  dialog.querySelector('[data-prev]').addEventListener('click', () => show(idx - 1));
  dialog.querySelector('[data-next]').addEventListener('click', () => show(idx + 1));
  dialog.querySelector('[data-close]').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (e) => { if (e.target === dialog) dialog.close(); });
  dialog.addEventListener('keydown', (e) => { if (e.key === 'ArrowRight') show(idx + 1); if (e.key === 'ArrowLeft') show(idx - 1); });
}

function renderReviews() {
  const list = document.querySelector('#reviews-list');
  if (!list) return;
  list.innerHTML = REVIEWS.map((review) => `
    <article class="review-card reveal">
      <div class="review-stars" aria-label="5 estrelas">★★★★★</div>
      <blockquote>${review.quote}</blockquote>
      <cite><span class="review-avatar" aria-hidden="true">${review.initial}</span>${review.name}</cite>
    </article>
  `).join('');
}

function setupNavigation() {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#site-nav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}

function setupReveal() {
  const revealItems = document.querySelectorAll('.reveal:not(.is-visible)');
  if (!('IntersectionObserver' in window)) {
    revealItems.forEach((item) => item.classList.add('is-visible'));
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      currentObserver.unobserve(entry.target);
    });
  }, { threshold: .13 });
  revealItems.forEach((item) => observer.observe(item));
}

function addLocalBusinessSchema() {
  const schema = document.querySelector('#local-business-schema');
  if (!schema) return;
  schema.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Bakery',
    name: 'Annie Cake Shop — Piedade',
    description: 'Doceria e confeitaria com tortas, doces, picolés trufados, salgados e lanches.',
    url: 'https://anniecakeshop.com.br/',
    telephone: STORE_CONFIG.phoneDisplay,
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1200&q=85',
    sameAs: [STORE_CONFIG.instagramUrl],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'R. João Dourado Filho, 1131',
      addressLocality: 'Jaboatão dos Guararapes',
      addressRegion: 'PE',
      postalCode: '54400-150',
      addressCountry: 'BR'
    },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '11:00', closes: '20:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday', 'Sunday'], opens: '11:00', closes: '21:00' }
    ],
    priceRange: '$$'
  });
}

function init() {
  setConfiguredLinks();
  renderOpenStatus();
  renderMenu();
  renderReviews();
  setupNavigation();
  addLocalBusinessSchema();
  document.querySelector('#current-year').textContent = new Date().getFullYear();
  setupReveal();
  setupScrollUI();
  setupHeroTilt();
  setupLightbox();
  window.setInterval(renderOpenStatus, 60000);
}

document.addEventListener('DOMContentLoaded', init);
