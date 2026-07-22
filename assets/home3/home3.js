(function () {
  const icon = (paths) => `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths}</svg>`;

  const services = [
    {
      number: '01',
      title: 'Чих, хамар, хоолойн үзлэг',
      text: 'Нарийн мэргэжлийн эмчийн үзлэг, оношилгоо, эмчилгээний зөвлөгөө.',
      href: '/services/ambulatory',
      icon: icon('<path d="M12 3a6 6 0 0 0-6 6c0 4 3 4 3 7a3 3 0 0 0 6 0v-1"/><path d="M9 9a3 3 0 0 1 6 0c0 2-2 2-2 4"/>'),
    },
    {
      number: '02',
      title: 'Сонсголын шинжилгээ',
      text: 'Сонсголын түвшинг үнэлж, тохирох дараагийн алхмыг мэргэжлийн түвшинд тодорхойлно.',
      href: '/services/sonsgol',
      icon: icon('<path d="M4 12a8 8 0 0 1 16 0"/><path d="M7 12a5 5 0 0 1 10 0c0 4-5 3-5 7a2 2 0 0 1-4 0"/>'),
    },
    {
      number: '03',
      title: 'Сонсголын аппарат',
      text: 'Signia брэндийн албан ёсны бүтээгдэхүүн, тохируулга болон засвар үйлчилгээ.',
      href: '/signia',
      icon: icon('<path d="M7 9a5 5 0 0 1 10 0c0 5-5 4-5 9a2 2 0 0 1-4 0"/><path d="M4 8a8 8 0 0 1 16 0"/>'),
    },
    {
      number: '04',
      title: 'Мэс засал, хэвтэн эмчилгээ',
      text: 'Онош, эмчилгээний төлөвлөгөөнд нийцсэн мэс заслын болон хэвтэн эмчлүүлэх тусламж.',
      href: '/services/inpatient',
      icon: icon('<path d="M4 20h16M6 20V9h12v11M9 9V5h6v4M9 14h6M12 11v6"/>'),
    },
    {
      number: '05',
      title: 'Дун хэл заслын төв',
      text: 'Хүүхдийн хэл яриа, харилцаа болон хөгжлийг дэмжих сургалт, засал.',
      href: '/dun',
      icon: icon('<path d="M20 11a8 8 0 1 0-8 8h2"/><path d="M10 11a3 3 0 1 0 3-3c0 5-5 4-5 8"/>'),
    },
    {
      number: '06',
      title: 'Оношилгоо, шинжилгээ',
      text: 'Эмчилгээний шийдвэрт шаардлагатай шинжилгээ, оношилгооны үйлчилгээ.',
      href: '/services/diagnostics',
      icon: icon('<path d="M4 20h16M9 4h6M10 4v5l-4 8a2 2 0 0 0 2 3h8a2 2 0 0 0 2-3l-4-8V4"/><path d="M8 15h8"/>'),
    },
  ];

  const branches = [
    ['01', 'ЭМЖЖ Төв эмнэлэг', 'Сүхбаатар дүүрэг'],
    ['02', 'Мишээл клиник', 'Хан-Уул дүүрэг'],
    ['03', '10-р хороолол клиник', 'Баянгол дүүрэг'],
    ['04', 'Халдварт клиник', 'Баянзүрх дүүрэг'],
  ];

  class EmjjHomeThree extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;
      this.dataset.ready = 'true';
      this.innerHTML = `
        <div class="home3-page">
          <div class="home3-main" id="home3-content" tabindex="-1">
            <section class="home3-hero" aria-labelledby="home3-title">
              <div class="home3-orbit" aria-hidden="true">
                <span class="home3-orbit-ring home3-orbit-ring--one"></span>
                <span class="home3-orbit-ring home3-orbit-ring--two"></span>
                <span class="home3-orbit-ring home3-orbit-ring--three"></span>
                <span class="home3-orbit-core"></span>
                <span class="home3-orbit-dot home3-orbit-dot--one"></span>
                <span class="home3-orbit-dot home3-orbit-dot--two"></span>
              </div>
              <div class="home3-hero-copy">
                <span class="home3-eyebrow"><i></i> Чих · Хамар · Хоолой · Сонсгол</span>
                <h1 id="home3-title">Эрүүл мэндийн<br /><em>чимээгүй хүч.</em></h1>
                <p>Сонсох, амьсгалах, харилцах өдөр тутмын чанарыг тань нарийн мэргэжлийн тусламжаар дэмжинэ.</p>
                <div class="home3-hero-actions">
                  <a class="home3-button home3-button--primary" href="/contact" data-route>Үзлэгийн цаг авах <span aria-hidden="true">↗</span></a>
                  <button class="home3-button home3-button--ghost" type="button" data-scroll="home3-services">Үйлчилгээ үзэх</button>
                </div>
              </div>
              <div class="home3-hero-meta" aria-label="Холбоо барих мэдээлэл">
                <a href="tel:19009999"><small>Нэгдсэн утас</small><strong>1900-9999</strong></a>
                <span><small>Үйлчилгээ</small><strong>Нарийн мэргэжлийн тусламж</strong></span>
                <span><small>Байршил</small><strong>4 салбар клиник</strong></span>
              </div>
            </section>

            <section class="home3-intro" aria-labelledby="home3-intro-title">
              <span class="home3-section-index">01 — Бидний чиглэл</span>
              <div>
                <h2 id="home3-intro-title">Танд хэрэгтэй тусламжийг<br />нэг дороос.</h2>
                <p>ЭМЖЖ Эмнэлэг нь чих, хамар, хоолой, сонсголын чиглэлээр үзлэгээс эхлээд оношилгоо, эмчилгээ, нөхөн сэргээх үйлчилгээ хүртэл уялдаатай тусламж үзүүлнэ.</p>
              </div>
            </section>

            <section class="home3-services" id="home3-services" aria-labelledby="home3-services-title">
              <div class="home3-section-head">
                <div><span class="home3-section-index">02 — Үйлчилгээ</span><h2 id="home3-services-title">Танд тохирох тусламж</h2></div>
                <a href="/services" data-route>Бүх үйлчилгээг үзэх <span aria-hidden="true">↗</span></a>
              </div>
              <div class="home3-service-grid">
                ${services.map((service) => `
                  <a class="home3-service-card" href="${service.href}" data-route>
                    <span class="home3-card-number">${service.number}</span>
                    <span class="home3-card-icon">${service.icon}</span>
                    <h3>${service.title}</h3>
                    <p>${service.text}</p>
                    <span class="home3-card-link">Дэлгэрэнгүй <i aria-hidden="true">↗</i></span>
                  </a>`).join('')}
              </div>
            </section>

            <section class="home3-feature" aria-labelledby="home3-feature-title">
              <div class="home3-feature-copy">
                <span class="home3-section-index">03 — Албан ёсны дистрибьютер</span>
                <div class="home3-signia-mark"><i>S</i><strong>signia</strong></div>
                <h2 id="home3-feature-title">Дуу хоолой бүрийг<br />илүү ойр мэдэр.</h2>
                <p>Signia сонсголын аппарат, мэргэжлийн тохируулга болон засвар үйлчилгээг нэг дороос аваарай.</p>
                <a class="home3-button home3-button--dark" href="/signia" data-route>Signia бүтээгдэхүүн үзэх <span aria-hidden="true">↗</span></a>
              </div>
              <div class="home3-feature-visual" aria-hidden="true">
                <div class="home3-wave home3-wave--one"></div>
                <div class="home3-wave home3-wave--two"></div>
                <div class="home3-wave home3-wave--three"></div>
                <div class="home3-device"><span></span><i></i></div>
              </div>
            </section>

            <section class="home3-branches" id="home3-branches" aria-labelledby="home3-branches-title">
              <div class="home3-section-head">
                <div><span class="home3-section-index">04 — Салбарууд</span><h2 id="home3-branches-title">Танд хамгийн ойр</h2></div>
                <a href="/branches" data-route>Бүх байршил <span aria-hidden="true">↗</span></a>
              </div>
              <div class="home3-branch-list">
                ${branches.map(([number, name, district]) => `
                  <a href="/branches" data-route>
                    <span>${number}</span><strong>${name}</strong><small>${district}</small><i aria-hidden="true">↗</i>
                  </a>`).join('')}
              </div>
            </section>

            <section class="home3-dun" aria-labelledby="home3-dun-title">
              <div class="home3-dun-symbol" aria-hidden="true"><span></span></div>
              <div><span class="home3-section-index">05 — Хөгжил, харилцаа</span><h2 id="home3-dun-title">Дун хэл заслын<br />сургалтын төв</h2></div>
              <div><p>Хүүхдийн хэл яриа, харилцаа, хөгжлийг дэмжих сургалт, засал болон гэр бүлд чиглэсэн зөвлөгөө.</p><a href="/dun" data-route>ДУН төвтэй танилцах <span aria-hidden="true">↗</span></a></div>
            </section>

            <section class="home3-contact" aria-labelledby="home3-contact-title">
              <span>Таны эрүүл мэндийн дараагийн алхам</span>
              <h2 id="home3-contact-title">Мэргэжлийн эмчтэй<br />цаг товлоё.</h2>
              <div><a class="home3-button home3-button--primary" href="/contact" data-route>Цаг захиалах <span aria-hidden="true">↗</span></a><a href="tel:19009999">1900-9999</a></div>
            </section>
          </div>
        </div>`;

      const navigateTo = (destination) => {
        if (window.location.hash.startsWith('#/')) window.location.hash = destination;
        else {
          window.history.pushState({}, '', destination);
          window.dispatchEvent(new PopStateEvent('popstate'));
        }
      };

      this.querySelectorAll('[data-route]').forEach((link) => {
        link.addEventListener('click', (event) => {
          if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
          event.preventDefault();
          navigateTo(link.getAttribute('href'));
        });
      });

      this.querySelectorAll('[data-scroll]').forEach((control) => {
        control.addEventListener('click', () => this.querySelector(`#${control.dataset.scroll}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' }));
      });
    }
  }

  if (!customElements.get('emjj-home-three')) customElements.define('emjj-home-three', EmjjHomeThree);

  const currentRoutePath = () => {
    const hashPath = window.location.hash.replace(/^#/, '').split('?')[0];
    return hashPath.startsWith('/') ? hashPath : window.location.pathname;
  };

  let mounting = false;
  const mountHomeThree = () => {
    if (mounting) return;
    mounting = true;
    const main = document.querySelector('#main');
    const root = document.querySelector('#root');
    const target = main || root;
    const isHomeThree = currentRoutePath().replace(/\/$/, '').endsWith('/home-3');
    let mounted = document.querySelector('emjj-home-three');

    if (target && isHomeThree) {
      root?.classList.toggle('home3-route-mounted', target === root);
      main?.classList.toggle('home3-route-mounted', target === main);
      if (!mounted) mounted = document.createElement('emjj-home-three');
      if (mounted.parentElement !== target) target.appendChild(mounted);
      document.title = 'Нүүр 3 | ЭМЖЖ Эмнэлэг';
    } else if (!isHomeThree) {
      root?.classList.remove('home3-route-mounted');
      main?.classList.remove('home3-route-mounted');
      mounted?.remove();
      if (document.title.startsWith('Нүүр 3 |')) document.title = 'EMJJ Hospital';
    }
    mounting = false;
  };

  const startMounting = () => {
    mountHomeThree();
    const root = document.querySelector('#root');
    if (root) new MutationObserver(mountHomeThree).observe(root, { childList: true, subtree: true });
    window.addEventListener('popstate', mountHomeThree);
    window.addEventListener('hashchange', mountHomeThree);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', startMounting, { once: true });
  else startMounting();
})();
