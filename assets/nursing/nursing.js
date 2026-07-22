(function () {
  const icon = (paths) => `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths}</svg>`;

  const highlights = [
    {
      title: '50–70 хүний хүчин чадал',
      icon: icon('<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/>'),
    },
    {
      title: 'Энгийн, хагас люкс, люкс өрөө',
      icon: icon('<path d="M3 20V9l9-6 9 6v11"/><path d="M8 20v-7h8v7M3 20h18"/>'),
    },
    {
      title: 'Өвөл, зуны шавар гэрийн сонголт',
      icon: icon('<path d="M4 19h16M6 19v-4a6 6 0 0 1 12 0v4M9 19v-4a3 3 0 0 1 6 0v4"/><path d="M12 5v4"/>'),
    },
    {
      title: 'Хүртээмжтэй, тав тухтай орчин',
      text: 'Ахмад настан, хөгжлийн бэрхшээлтэй иргэдэд зориулсан',
      icon: icon('<circle cx="12" cy="5" r="2"/><path d="M10 9h4l2 5h3M12 9v5l-3 6M14 14l-1 6"/>'),
    },
  ];

  const rooms = [
    { image: './assets/nursing/room-standard.webp', title: 'Энгийн өрөө' },
    { image: './assets/nursing/room-semilux.webp', title: 'Хагас люкс өрөө' },
    { image: './assets/nursing/room-luxury.webp', title: 'Люкс өрөө' },
    { image: './assets/nursing/room-mud-ger.webp', title: 'Шавар гэр' },
  ];

  const treatments = [
    {
      number: '01',
      title: 'Сэргээн засах эмчилгээ',
      text: 'Биеийн хөдөлгөөн, үйл ажиллагааг сэргээж, өдөр тутмын идэвхийг дэмжих эмчилгээний сонголтууд.',
      items: ['Физик эмчилгээ', 'Хөдөлгөөн засал', 'Шавар эмчилгээ', 'Усан эмчилгээ'],
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&h=700&fit=crop',
      alt: 'Сэргээн засах эмчилгээний орчин',
    },
    {
      number: '02',
      title: 'Уламжлалт эмчилгээ',
      text: 'Биеийн онцлог, хэрэгцээнд нийцүүлэн уламжлалт аргаар алжаал тайлах үйлчилгээ.',
      items: ['Дэвтээлэг', 'Шивүүр', 'Жин засал', 'Төөнүүр', 'Бариа засал', 'Зүү эмчилгээ', 'Бумба'],
      image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=900&h=700&fit=crop',
      alt: 'Уламжлалт эмчилгээний тайван орчин',
    },
  ];

  class EmjjNursingPage extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;
      this.dataset.ready = 'true';
      this.innerHTML = `
        <div class="nursing-page">
          <div class="nursing-main" id="nursing-content" tabindex="-1">
            <section class="nursing-hero" aria-labelledby="nursing-title">
              <picture>
                <source media="(max-width:720px)" srcset="./assets/nursing/nursing-hero-v2-960.webp" />
                <img src="./assets/nursing/nursing-hero-v2-1800.webp" srcset="./assets/nursing/nursing-hero-v2-960.webp 960w, ./assets/nursing/nursing-hero-v2-1800.webp 1800w" sizes="100vw" width="1800" height="810" fetchpriority="high" alt="Төв аймгийн Баянчандмань сум дахь ЭМЖЖ сэргээн засах сувиллын барилга, ногоон орчин" />
              </picture>
              <div class="nursing-hero-overlay"></div>
              <div class="nursing-hero-content">
                <span class="nursing-eyebrow">ЭМЖЖ · Сэргээн засах сувилал</span>
                <h1 id="nursing-title">Байгальд<br /><em>биеэ сэргээ.</em></h1>
                <p>Эрүүл мэндээ сэргээж, эрч хүчээ сэлбэх хамгийн тохиромжтой газар.</p>
                <div class="nursing-actions">
                  <a class="nursing-button nursing-button--primary" href="/contact" data-route>Захиалга, мэдээлэл авах <span aria-hidden="true">↗</span></a>
                  <button class="nursing-button nursing-button--glass" type="button" data-scroll="nursing-treatments">Эмчилгээ үзэх</button>
                </div>
              </div>
              <div class="nursing-location-pill">
                ${icon('<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/>')}
                <span><small>Байршил</small><strong>Төв аймаг · Баянчандмань сум</strong></span>
              </div>
            </section>

            <section class="nursing-overview" aria-labelledby="nursing-overview-title">
              <div class="nursing-overview-copy">
                <span class="nursing-section-label">Тав тухтай сувилгаа</span>
                <h2 id="nursing-overview-title">Амралт, эмчилгээ,<br />эрүүл хооллолт.</h2>
                <p>Байгалд ээлтэй, тав тухтай орчинд мэргэжлийн эмчилгээ, амралт, эрүүл хоололт бүхий цогц үйлчилгээг үзүүлж байна.</p>
              </div>
              <div class="nursing-highlights">
                ${highlights.map((item) => `
                  <article>
                    <span>${item.icon}</span>
                    <div><h3>${item.title}</h3>${item.text ? `<p>${item.text}</p>` : ''}</div>
                  </article>`).join('')}
              </div>
            </section>

            <section class="nursing-rooms" id="nursing-rooms" aria-labelledby="nursing-rooms-title">
              <div class="nursing-section-head">
                <div><span class="nursing-section-label">Таны амралтын орон зай</span><h2 id="nursing-rooms-title">Өрөөний сонголт</h2></div>
                <p>Хэрэгцээ, тав тухын сонголтдоо нийцүүлэн байрлах өрөөгөө сонгоорой.</p>
              </div>
              <div class="nursing-room-grid">
                ${rooms.map((room, index) => `
                  <article class="nursing-room-card">
                    <img src="${room.image}" width="900" height="650" loading="lazy" decoding="async" alt="${room.title}" />
                    <div><span>0${index + 1}</span><h3>${room.title}</h3></div>
                  </article>`).join('')}
              </div>
            </section>

            <section class="nursing-treatments" id="nursing-treatments" aria-labelledby="nursing-treatments-title">
              <div class="nursing-section-head nursing-section-head--light">
                <div><span class="nursing-section-label">Мэргэжлийн тусламж</span><h2 id="nursing-treatments-title">Эмчилгээний чиглэл</h2></div>
                <p>Эмчилгээний тохирох хэлбэрийг мэргэжлийн үнэлгээ, зөвлөгөөнд үндэслэн сонгоно.</p>
              </div>
              <div class="nursing-treatment-list">
                ${treatments.map((treatment) => `
                  <article class="nursing-treatment-card">
                    <div class="nursing-treatment-image"><img src="${treatment.image}" width="900" height="700" loading="lazy" decoding="async" alt="${treatment.alt}" /></div>
                    <div class="nursing-treatment-copy">
                      <span>${treatment.number}</span>
                      <h3>${treatment.title}</h3>
                      <p>${treatment.text}</p>
                      <ul>${treatment.items.map((item) => `<li>${icon('<path d="m5 12 4 4L19 6"/>')}<span>${item}</span></li>`).join('')}</ul>
                    </div>
                  </article>`).join('')}
              </div>
            </section>

            <section class="nursing-food" aria-labelledby="nursing-food-title">
              <div class="nursing-food-icon">${icon('<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>')}</div>
              <div><span class="nursing-section-label">Өдөр тутмын арчилгаа</span><h2 id="nursing-food-title">Эрүүл хүнс,<br />цэвэр агаар</h2></div>
              <p>Өөрсдийн аж ахуйгаас бэлтгэсэн органик хүнс, эмчилгээний хоол, гүүний саам, цагаан идээгээр үйлчилдэг.</p>
            </section>

            <section class="nursing-place" aria-labelledby="nursing-place-title">
              <div class="nursing-place-copy">
                <span class="nursing-section-label">Хотын чимээнээс зайдуу</span>
                <h2 id="nursing-place-title">Дарцагт уулын<br />энгэрт.</h2>
                <p>Улаанбаатар хотоос 50 км зайд, Төв аймгийн Баянчандмань сумын Дарцагт уулын энгэрт байрлана.</p>
                <div class="nursing-distance"><strong>50</strong><span>км<br />Улаанбаатар хотоос</span></div>
              </div>
              <div class="nursing-place-quote">
                <span aria-hidden="true">“</span>
                <p>Та залуу ойгоор хүрээлэгдсэн, байгалийн үзэсгэлэнт тайван орчинд гэр бүл, найз нөхөд, хамт олон, хайртай дотны хүмүүстэйгээ амарч, алжаал ядаргаагаа тайлж, сувилуулаарай.</p>
              </div>
            </section>

            <section class="nursing-cta" aria-labelledby="nursing-cta-title">
              <span>Амралт, сувилгаагаа төлөвлөе</span>
              <h2 id="nursing-cta-title">Биеэ сэргээх аяллаа<br />өнөөдөр эхлүүлээрэй.</h2>
              <div><a class="nursing-button nursing-button--primary" href="/contact" data-route>Холбоо барих <span aria-hidden="true">↗</span></a><a href="tel:19009999">1900-9999</a></div>
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

  if (!customElements.get('emjj-nursing-page')) customElements.define('emjj-nursing-page', EmjjNursingPage);

  const currentRoutePath = () => {
    const hashPath = window.location.hash.replace(/^#/, '').split('?')[0];
    return hashPath.startsWith('/') ? hashPath : window.location.pathname;
  };

  let mounting = false;
  const mountNursingPage = () => {
    if (mounting) return;
    mounting = true;
    const main = document.querySelector('#main');
    const root = document.querySelector('#root');
    const target = main || root;
    const isNursingPage = currentRoutePath().replace(/\/$/, '').endsWith('/nursing');
    let mounted = document.querySelector('emjj-nursing-page');

    if (target && isNursingPage) {
      root?.classList.toggle('nursing-route-mounted', target === root);
      main?.classList.toggle('nursing-route-mounted', target === main);
      if (!mounted) mounted = document.createElement('emjj-nursing-page');
      if (mounted.parentElement !== target) target.appendChild(mounted);
      document.title = 'Сэргээн засах сувилал | ЭМЖЖ Эмнэлэг';
    } else if (!isNursingPage) {
      root?.classList.remove('nursing-route-mounted');
      main?.classList.remove('nursing-route-mounted');
      mounted?.remove();
      if (document.title.startsWith('Сэргээн засах сувилал |')) document.title = 'EMJJ Hospital';
    }
    mounting = false;
  };

  const startMounting = () => {
    mountNursingPage();
    const root = document.querySelector('#root');
    if (root) new MutationObserver(mountNursingPage).observe(root, { childList: true, subtree: true });
    window.addEventListener('popstate', mountNursingPage);
    window.addEventListener('hashchange', mountNursingPage);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', startMounting, { once: true });
  else startMounting();
})();
