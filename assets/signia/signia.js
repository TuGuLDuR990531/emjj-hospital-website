(function () {
  const icon = (paths) => `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${paths}</svg>`;

  const products = [
    {
      name: 'Motion Charge&Go P IX',
      image: './assets/signia/motion-p-ix.png',
      alt: 'Motion Charge&Go P IX сонсголын аппарат болон цэнэглэгч',
      tag: 'Хүчирхэг BTE',
      text: 'Цэнэглэдэг, өдөр тутмын найдвартай хэрэглээнд зориулсан хүчирхэг загвар. Яриаг чимээтэй орчинд илүү тод сонсоход дэмжлэг үзүүлнэ.',
      facts: ['RealTime Conversation Enhancement', 'Bluetooth холболт', 'Телекоил'],
    },
    {
      name: 'Motion Charge&Go SP IX',
      image: './assets/signia/motion-sp-ix.png',
      alt: 'Motion Charge&Go SP IX супер хүчирхэг сонсголын аппарат болон цэнэглэгч',
      tag: 'Super Power BTE',
      text: 'Илүү өндөр өсгөлт шаардлагатай хэрэглэгчдэд зориулсан Super Power шийдэл. 82 дБ хүртэл өсгөлттэй, цэнэглэдэг загвар.',
      facts: ['82 дБ хүртэл өсгөлт', 'Өдөржин хэрэглэх цэнэг', 'Signia Assistant'],
    },
    {
      name: 'Insio Charge&Go IX CIC',
      image: './assets/signia/insio-cic-ix.png',
      alt: 'Insio Charge&Go IX CIC чихний сувагт байрлах аппарат болон зөөврийн цэнэглэгч',
      tag: 'Захиалгат CIC',
      text: 'Чихний хэлбэрт тохируулан хийдэг, жижиг бөгөөд цэнэглэдэг CIC аппарат. Яриаг чиглүүлэн сонсоход зориулсан ухаалаг технологитой.',
      facts: ['Захиалгат тохируулга', '35 цаг хүртэл ажиллана', 'Зөөврийн цэнэглэгч'],
    },
  ];

  class EmjjSigniaPage extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;
      this.dataset.ready = 'true';
      this.innerHTML = `
        <div class="signia-page">
          <header class="signia-header">
            <a class="signia-emjj-brand" href="/home-2" data-route aria-label="ЭМЖЖ Эмнэлэг Нүүр 2">
              <span class="signia-emjj-mark" aria-hidden="true">◉</span>
              <span><strong>EMJJ</strong><small>HOSPITAL</small></span>
            </a>
            <nav aria-label="Сонсголын аппарат хуудасны цэс">
              <button type="button" data-scroll="signia-products">Бүтээгдэхүүн</button>
              <button type="button" data-scroll="signia-services">Үйлчилгээ</button>
              <a href="/contact" data-route>Холбоо барих</a>
            </nav>
            <a class="signia-header-phone" href="tel:19009999">1900-9999</a>
          </header>

          <div class="signia-main">
            <section class="signia-hero" aria-labelledby="signia-title">
              <img src="./assets/signia/signia-hero.png" width="2031" height="774" fetchpriority="high" alt="Signia сонсголын аппаратын гурван төрлийн бүтээгдэхүүн" />
              <div class="signia-hero-overlay"></div>
              <div class="signia-hero-content">
                <div class="signia-official-badge"><span>Signia</span> брэндийн албан ёсны дистрибьютер</div>
                <h1 id="signia-title">Сонсголын<br />аппарат</h1>
                <p>Яриа бүрийг илүү тод,<br />амьдрал бүрийг илүү ойр.</p>
                <div class="signia-hero-actions">
                  <a href="/contact" data-route>Зөвлөгөө авах</a>
                  <button type="button" data-scroll="signia-products">Бүтээгдэхүүн үзэх</button>
                </div>
              </div>
              <div class="signia-wordmark" aria-label="Signia">
                <span aria-hidden="true">S</span><strong>signia</strong>
              </div>
            </section>

            <section class="signia-technology" aria-labelledby="signia-tech-title">
              <div class="signia-tech-copy">
                <span>Signia Integrated Xperience</span>
                <h2 id="signia-tech-title">Ярианы хэмнэлийг дагаж, чухал дууг тодруулна</h2>
                <p>RealTime Conversation Enhancement нь хөдөлгөөнтэй, чимээтэй орчинд олон хүний яриаг бодит цагт шинжилж, ярьж буй хүний дууг тодруулахад тусална.</p>
                <a class="signia-official-link" href="https://www.signia-pro.com/en-us/product-portfolio/integrated-xperience/" target="_blank" rel="noopener noreferrer">Signia технологийн талаар <span aria-hidden="true">↗</span></a>
              </div>
              <div class="signia-benefits">
                <article>${icon('<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 7c2 1 3 3 3 5M17 3c3 2 5 5 5 9"/>')}<strong>Яриаг бодит цагт тодруулна</strong></article>
                <article>${icon('<rect x="7" y="3" width="10" height="18" rx="2"/><path d="M10 1h4M10 17h4M13 7l-3 5h4l-3 5"/>')}<strong>Цэнэглэдэг</strong></article>
                <article>${icon('<path d="M7 7l10 10-5 5V2l5 5L7 17"/>')}<strong>Ухаалаг холболт</strong></article>
              </div>
            </section>

            <section class="signia-products" id="signia-products" aria-labelledby="signia-products-title">
              <div class="signia-section-heading">
                <span>Танд тохирох шийдэл</span>
                <h2 id="signia-products-title">Онцлох бүтээгдэхүүнүүд</h2>
                <p>Сонсголын хэрэгцээ, хэрэглээний хэв маяг болон чихний онцлогт тохируулан мэргэжлийн эмчийн зөвлөгөөгөөр сонгоно.</p>
              </div>
              <div class="signia-product-grid">
                ${products.map((product) => `
                  <article class="signia-product-card">
                    <div class="signia-product-image"><img src="${product.image}" width="1254" height="1254" alt="${product.alt}" loading="lazy" decoding="async" /></div>
                    <div class="signia-product-copy">
                      <span>${product.tag}</span>
                      <h3>${product.name}</h3>
                      <p>${product.text}</p>
                      <ul>${product.facts.map((fact) => `<li>${fact}</li>`).join('')}</ul>
                      <button type="button" data-scroll="signia-services">Тохируулгын зөвлөгөө авах <span aria-hidden="true">→</span></button>
                    </div>
                  </article>`).join('')}
              </div>
              <p class="signia-product-note">Тохирох загвар, үзүүлэлтийг сонсголын шинжилгээ болон мэргэжлийн үнэлгээнд үндэслэн сонгоно.</p>
            </section>

            <section class="signia-services" id="signia-services" aria-labelledby="signia-services-title">
              <div class="signia-section-heading">
                <span>Худалдан авалтын дараах дэмжлэг</span>
                <h2 id="signia-services-title">Мэргэжлийн үйлчилгээ</h2>
                <p>Аппарат сонгохоос эхлээд өдөр тутмын хэрэглээ, засвар үйлчилгээ хүртэл нэг дор.</p>
              </div>
              <div class="signia-service-grid">
                <article>
                  <div class="signia-service-icon">${icon('<path d="M4 4v6M4 14v6M12 4v10M12 18v2M20 4v3M20 11v9"/><path d="M1 10h6M9 14h6M17 7h6"/><path d="M16 16c0-4-2-7-6-7a6 6 0 0 0-6 6"/>')}</div>
                  <div><span>Нарийн тохируулга</span><h3>Сонсголын аппарат тохируулга</h3><p>Сонсголын шинжилгээ, чихний онцлог болон өдөр тутмын хэрэглээнд тулгуурлан аппаратыг программчилж, дууны тохиргоог шат дараатай сайжруулна.</p><a href="/contact" data-route>Цаг захиалах <span aria-hidden="true">→</span></a></div>
                </article>
                <article>
                  <div class="signia-service-icon">${icon('<path d="M14 6l4-4 4 4-4 4M10 18l-4 4-4-4 4-4"/><path d="M13 7l-6 6M16 13l5 5-3 3-5-5"/><circle cx="9" cy="5" r="3"/>')}</div>
                  <div><span>Оношилгоо, үйлчилгээ</span><h3>Сонсголын аппарат засвар</h3><p>Аппаратын ажиллагааг шалгах, цэвэрлэгээ, хэвийн ажиллагааны үнэлгээ болон боломжит засварыг мэргэжлийн түвшинд гүйцэтгэнэ.</p><a href="/contact" data-route>Засварт үзүүлэх <span aria-hidden="true">→</span></a></div>
                </article>
              </div>
            </section>

            <section class="signia-process" aria-labelledby="signia-process-title">
              <div class="signia-section-heading signia-section-heading--light"><span>Танд тохирсон сонголт</span><h2 id="signia-process-title">Зөв аппарат сонгох 3 алхам</h2></div>
              <div class="signia-process-grid">
                <article><strong>01</strong><h3>Сонсголын үнэлгээ</h3><p>Сонсголын түвшин, хэрэгцээг тодорхойлно.</p></article>
                <article><strong>02</strong><h3>Загвар сонголт</h3><p>Хэрэглээ, тав тух, боломжид нийцүүлнэ.</p></article>
                <article><strong>03</strong><h3>Тохируулга ба хяналт</h3><p>Дасах явцыг дагаж тохиргоог сайжруулна.</p></article>
              </div>
            </section>

            <section class="signia-cta">
              <div><span>Мэргэжлийн зөвлөгөө</span><h2>Танд тохирох сонсголын аппаратыг хамтдаа сонгоё</h2><p>ЭМЖЖ Эмнэлгийн сонсголын мэргэжилтэнтэй холбогдож, үзлэгийн цаг аваарай.</p></div>
              <div><a href="tel:19009999">1900-9999</a><a href="/contact" data-route>Цаг захиалах</a></div>
            </section>
          </div>

          <footer class="signia-footer"><span>© EMJJ Hospital</span><a href="/home-2" data-route>Нүүр 2 руу буцах</a></footer>
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

  if (!customElements.get('emjj-signia-page')) customElements.define('emjj-signia-page', EmjjSigniaPage);

  const currentRoutePath = () => {
    const hashPath = window.location.hash.replace(/^#/, '').split('?')[0];
    return hashPath.startsWith('/') ? hashPath : window.location.pathname;
  };

  let mounting = false;
  const mountSigniaPage = () => {
    if (mounting) return;
    mounting = true;
    const main = document.querySelector('#main');
    const root = document.querySelector('#root');
    const target = main || root;
    const isSigniaPage = currentRoutePath().replace(/\/$/, '').endsWith('/signia');
    let mounted = document.querySelector('emjj-signia-page');

    if (target && isSigniaPage) {
      root?.classList.toggle('signia-route-mounted', target === root);
      main?.classList.toggle('signia-route-mounted', target === main);
      if (!mounted) mounted = document.createElement('emjj-signia-page');
      if (mounted.parentElement !== target) target.appendChild(mounted);
      document.title = 'Signia сонсголын аппарат | ЭМЖЖ Эмнэлэг';
    } else if (!isSigniaPage) {
      root?.classList.remove('signia-route-mounted');
      main?.classList.remove('signia-route-mounted');
      mounted?.remove();
      if (document.title.startsWith('Signia сонсголын аппарат')) document.title = 'EMJJ Hospital';
    }
    mounting = false;
  };

  const startMounting = () => {
    mountSigniaPage();
    const root = document.querySelector('#root');
    if (root) new MutationObserver(mountSigniaPage).observe(root, { childList: true, subtree: true });
    window.addEventListener('popstate', mountSigniaPage);
    window.addEventListener('hashchange', mountSigniaPage);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', startMounting, { once: true });
  else startMounting();
})();
