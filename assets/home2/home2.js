(function () {
  const icon = (paths) => `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      ${paths}
    </svg>`;

  const icons = {
    calendar: icon('<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M8 3v4M16 3v4M3 10h18"/><path d="m9 15 2 2 4-4"/>'),
    package: icon('<path d="M4 7h16l-1.5 13h-13z"/><path d="M8 7a4 4 0 0 1 8 0M9 12h6M12 9v6"/>'),
    screening: icon('<rect x="6" y="3" width="12" height="18" rx="2"/><path d="M9 7h6M9 11h2M13 11h2M9 15h6"/><path d="m17 17 3 3"/>'),
    protection: icon('<path d="M12 3a7 7 0 0 0-7 7v5a3 3 0 0 0 3 3h1v-7H6"/><path d="M12 3a7 7 0 0 1 7 7v5a3 3 0 0 1-3 3h-1v-7h3"/><path d="M15 18c0 2-1 3-3 3"/>'),
    equipment: icon('<rect x="4" y="5" width="16" height="11" rx="2"/><path d="M8 20h8M12 16v4M8 10h2l2-3 2 6 2-3h2"/>'),
    hearing: icon('<path d="M16.5 12.5c0-3-1.7-5-4.5-5a4.5 4.5 0 0 0-4.5 4.5"/><path d="M12 3a9 9 0 0 1 9 9c0 3-1.5 5-4 7-1 .7-1.5 2-3 2-2 0-3-1.2-3-3"/><path d="M10 13c0-1.2.7-2 2-2s2 .8 2 2c0 2-3 2.2-3 5"/>'),
  };

  const services = [
    ['calendar', 'Цаг захиалга', '/contact'],
    ['package', 'Багц үйлчилгээ', '/services'],
    ['screening', 'Сонсголын урьдчилсан тест', '/services/sonsgol'],
    ['protection', 'Сонсгол хамгаалах өдөр', '/ent-health'],
    ['equipment', 'Тоног төхөөрөмж худалдаа', '/services/sonsgol'],
    ['hearing', 'Сонсголын аппарат', '/services/sonsgol'],
  ];

  const branches = [
    {
      name: 'ЭМЖЖ Төв эмнэлэг',
      image: './assets/home2/branch-central.webp',
      hours: 'Даваа – Баасан: 08:00 – 20:00|Бямба: 10:00 – 14:00',
      phone: '1900-9999',
      address: 'Сүхбаатар дүүрэг, 1-р төрөх эмнэлгийн зүүн талд',
    },
    {
      name: 'Мишээл клиник',
      image: './assets/home2/branch-misheel.webp',
      hours: 'Даваа – Баасан: 08:00 – 17:00|Бямба: 10:00 – 14:00',
      phone: '1900-9999',
      address: 'ХУД, Мишээл Сити цогцолбор, М1 блок, 3 давхар',
    },
    {
      name: '10-р хороолол клиник',
      image: './assets/home2/branch-10.webp',
      hours: 'Даваа – Баасан: 08:00 – 17:00|Бямба: 10:00 – 14:00',
      phone: '1900-9999',
      address: 'БГД, 10-р хороолол, “Хаан банк”-ны баруун талд, 89-р байрны 1 давхар',
    },
    {
      name: 'Халдварт клиник',
      image: './assets/home2/branch-infectious.webp',
      hours: 'Даваа – Баасан: 08:00 – 17:00|Бямба: 10:00 – 14:00',
      phone: '1900-9999',
      address: 'БЗД, ХӨСҮТ эцсийн буудал, RAPID MED төвийн 5 давхар',
    },
  ];

  class EmjjHomeTwo extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;
      this.dataset.ready = 'true';
      this.innerHTML = `
        <div class="home2-campaign">
          <section class="home2-hero" aria-label="ЭМЖЖ эмнэлгийн сонсголын тусламж үйлчилгээ">
            <a href="/contact" data-route aria-label="Онлайнаар цаг захиалах">
              <img src="./assets/home2/hero-cover.webp" alt="ЭМЖЖ эмнэлгийн сонсголын аппарат, нарийн мэргэжлийн үзлэг болон онлайн цаг захиалгын мэдээлэл" />
            </a>
            <div class="home2-mobile-cta">
              <p>Сонсголын нарийн мэргэжлийн тусламж үйлчилгээг нэг дороос</p>
              <a href="/contact" data-route>Цаг захиалах</a>
            </div>
          </section>

          <section class="home2-services" aria-labelledby="home2-services-title">
            <div class="home2-section-heading">
              <span>Танд хэрэгтэй үйлчилгээ</span>
              <h1 id="home2-services-title">Үйлчилгээгээ хурдан сонгоорой</h1>
            </div>
            <div class="home2-service-grid">
              ${services.map(([key, label, href]) => `
                <a class="home2-service-card" href="${href}" data-route>
                  <span class="home2-service-icon">${icons[key]}</span>
                  <strong>${label}</strong>
                  <span class="home2-card-arrow" aria-hidden="true">→</span>
                </a>`).join('')}
            </div>
          </section>

          <section class="home2-booking" aria-label="Онлайн цаг захиалга">
            <div class="home2-section-heading home2-section-heading--compact">
              <span>Онлайн үйлчилгээ</span>
              <h2>Дараалал хүлээх шаардлагагүй</h2>
            </div>
            <a class="home2-banner-link" href="/contact" data-route aria-label="Онлайнаар цаг захиалах">
              <img src="./assets/home2/online-booking-banner.webp" alt="ЭМЖЖ эмнэлгийн онлайн цаг захиалгын QR код бүхий мэдээлэл" loading="lazy" />
            </a>
            <a class="home2-booking-button" href="/contact" data-route>Онлайнаар цаг захиалах</a>
          </section>

          <section class="home2-branches" aria-labelledby="home2-branches-title">
            <div class="home2-section-heading home2-section-heading--light">
              <span>Танд хамгийн ойр</span>
              <h2 id="home2-branches-title">Манай салбар эмнэлгүүд</h2>
              <p>Нэгдсэн утас: <a href="tel:19009999">1900-9999</a></p>
            </div>
            <div class="home2-branch-grid">
              ${branches.map((branch) => `
                <article class="home2-branch-card">
                  <div class="home2-building-wrap">
                    <img src="${branch.image}" alt="${branch.name} салбарын дүрслэл" loading="lazy" />
                  </div>
                  <div class="home2-branch-copy">
                    <h3>${branch.name}</h3>
                    ${branch.hours.split('|').map((line) => `<p><span aria-hidden="true">◷</span>${line}</p>`).join('')}
                    <p><span aria-hidden="true">☎</span><a href="tel:19009999">${branch.phone}</a></p>
                    <p><span aria-hidden="true">⌖</span>${branch.address}</p>
                    <a class="home2-branch-link" href="/contact" data-route>Байршил, холбоо барих <span aria-hidden="true">→</span></a>
                  </div>
                </article>`).join('')}
            </div>
          </section>
        </div>`;

      this.querySelectorAll('[data-route]').forEach((link) => {
        link.addEventListener('click', (event) => {
          if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
          event.preventDefault();
          const destination = link.getAttribute('href');
          if (window.location.hash.startsWith('#/')) {
            window.location.hash = destination;
          } else {
            window.history.pushState({}, '', destination);
            window.dispatchEvent(new PopStateEvent('popstate'));
          }
        });
      });
    }
  }

  if (!customElements.get('emjj-home-two')) {
    customElements.define('emjj-home-two', EmjjHomeTwo);
  }

  const currentRoutePath = () => {
    const hashPath = window.location.hash.replace(/^#/, '').split('?')[0];
    return hashPath.startsWith('/') ? hashPath : window.location.pathname;
  };

  let mounting = false;
  const mountHomeTwo = () => {
    if (mounting) return;
    mounting = true;
    const main = document.querySelector('#main');
    const isHomeTwo = currentRoutePath().replace(/\/$/, '').endsWith('/home-2');
    const mounted = main && main.querySelector(':scope > emjj-home-two');

    if (main && isHomeTwo && !mounted) {
      main.classList.add('home2-route-mounted');
      main.appendChild(document.createElement('emjj-home-two'));
    } else if (main && !isHomeTwo) {
      main.classList.remove('home2-route-mounted');
      mounted?.remove();
    }
    mounting = false;
  };

  const startMounting = () => {
    mountHomeTwo();
    const root = document.querySelector('#root');
    if (root) {
      new MutationObserver(mountHomeTwo).observe(root, { childList: true, subtree: true });
    }
    window.addEventListener('popstate', mountHomeTwo);
    window.addEventListener('hashchange', mountHomeTwo);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startMounting, { once: true });
  } else {
    startMounting();
  }
})();
