(function () {
  const LEVELS = ['7IX', '5IX', '3IX', '2IX', '1IX'];

  const sharedFeatures = [
    { name: 'Processing Channels / Gain & MPO handles', desc: 'Дуу боловсруулах суваг', values: ['48/20', '36/18', '32/16', '24/12', '16/8'] },
    { name: 'Custom', desc: 'Таны чихнээс хэв авч хийгддэг. Зөвхөн таны сувагт тохирсон загвар', values: ['check', 'check', 'check', 'check', 'check'] },
    { name: 'Fitting range', desc: 'Өсгөх хүч', values: ['113/50-124/60дБ', '113/50-124/60дБ', '113/50-124/60дБ', '113/50-124/60дБ', '113/50-124/60дБ'] },
    { name: 'SpeechStabilizer', desc: 'Хэт их шуугиантай орчинд ярианы давтамжийг тодотгож өсгөнө', values: ['check', 'check', 'check', 'check', 'check'] },
    { name: 'Dynamic Soundscape Processing 3.0', desc: 'Акустик мэдрэгч, хөдөлгөөн мэдрэгч, SNR анализ, болон бодит цагийн харилцан ярианы сайжруулалтын мэдээллүүдийг нэгтгэн ажиллуулна.', values: ['dots5', 'dots4', 'dots3', 'dots2', 'dots2'] },
    { name: 'Speech and Noise Management', desc: 'Яриа болон шуугианыг тусад нь нарийвчлан боловсруулж, сонсох гэж хичээснээс үүсэх ядрагааг багасгана', values: ['check', 'check', 'check', 'check', 'check'] },
    { name: 'e2e wireless 4.0', desc: 'Утасгүй холболтын удирдлага, синхрончлол болон хоёр чихний дууны чиглэлийг зохицуулна. (Spatial Speech Focus, CROS/BiCROS дэмжинэ).', values: ['check', 'check', 'check', 'check', 'check'] },
    { name: 'eWindScreen™', desc: 'Гадаа байх үед салхины чимээг бууруулна', values: ['dots5', 'dots5', 'dots3', 'dots1', 'dots1'] },
    { name: 'Extended bandwidth', desc: '12 кГц хүртэлх өргөн давтамжийн дууг хүлээн авснаар хүрээлэн буй орчны дуу чимээг илүү сайн боловсруулна', values: ['check', 'none', 'none', 'none', 'none'] },
    { name: 'SoundSmoothing™', desc: 'Гэнэтийн, хурц, чанга чимээнээс үүсэх таагүй байдлыг багасгана', values: ['dots5', 'dots5', 'dots3', 'dots1', 'dots1'] },
    { name: 'Frequency Compression', desc: 'Өндөр давтамжийн сонсож чадахгүй байгаа чимээг таны сонсож байгаа давтамжинд хувиргаснаар үг ялгах чадвар сайжирна.', values: ['check', 'check', 'check', 'check', 'check'] },
    { name: 'Auto EchoShield', desc: 'Цуурайтай орчинд яриа болон дуу чимээний цуурайг автоматаар бууруулдаг.', values: ['check', 'none', 'none', 'none', 'none'] },
    { name: 'Static Therapy Signal (channels / presets)', desc: 'Чихний шуугианыг дарах зөөлөн, намуухан статик эмчилгээний чимээнүүд сонгоно.', values: ['4', '4', '4', '4', '4'] },
    { name: 'Notch Therapy', desc: 'Чихний шуугианы эсрэг Signia-гийн патентлагдсан, өвөрмөц эмчилгээ юм. Тодорхой давтамжтай (тон) чих шуугилтын үед ашиглана.', values: ['check', 'check', 'check', 'check', 'none'] },
    { name: 'Charger and Go', desc: 'Нэг удаагийн цэнэглэлтээр ажиллах хугацаа', values: ['35 цаг', '35 цаг', '35 цаг', '35 цаг', '35 цаг'] },
    { name: 'Signia Assistant — AI', desc: 'Таны сонсголын аппараттай холбоотой асуудлыг ухаалгаар шийдэж өгнө.', values: ['check', 'check', 'check', 'check', 'check'] },
    { name: 'Цэнэглэгч', desc: 'Зөөврийн pocket болон суурин хатаагчтай цэнэглэгчийн сонголтуудтай', values: ['check', 'check', 'check', 'check', 'check'] },
  ];

  const products = {
    'insio-cic-ix': {
      name: 'Insio Charge&Go CIC IX',
      tag: 'Захиалгат CIC',
      image: './assets/signia/insio-cic-ix.png',
      alt: 'Insio Charge&Go CIC IX чихний сувагт байрлах аппарат болон зөөврийн цэнэглэгч',
      intro: 'Чихний хэлбэрт тохируулан хийдэг, жижиг бөгөөд цэнэглэдэг CIC аппарат. Яриаг чиглүүлэн сонсоход зориулсан ухаалаг технологитой.',
      fitting: 'Mold — таны чихний сувагт тохируулан хийгддэг захиалгат хэв',
      prices: { '1IX': '3.640.000', '2IX': '4.950.000', '3IX': '6.620.000', '5IX': '9.600.000', '7IX': '14.870.000' },
    },
    'motion-sp-ix': {
      name: 'Motion Charge&Go SP IX',
      tag: 'Super Power BTE',
      image: './assets/signia/motion-sp-ix.png',
      alt: 'Motion Charge&Go SP IX супер хүчирхэг сонсголын аппарат болон цэнэглэгч',
      intro: 'Илүү өндөр өсгөлт шаардлагатай хэрэглэгчдэд зориулсан Super Power шийдэл. 82 дБ хүртэл өсгөлттэй, цэнэглэдэг загвар.',
      fitting: 'Earhook + mold',
      prices: { '1IX': '3.640.000', '2IX': '4.600.000', '3IX': '6.260.000', '5IX': '9.580.000', '7IX': '13.550.000' },
    },
    'motion-p-ix': {
      name: 'Motion Charge&Go P IX',
      tag: 'Хүчирхэг BTE',
      image: './assets/signia/motion-p-ix.png',
      alt: 'Motion Charge&Go P IX сонсголын аппарат болон цэнэглэгч',
      intro: 'Цэнэглэдэг, өдөр тутмын найдвартай хэрэглээнд зориулсан хүчирхэг загвар. Яриаг чимээтэй орчинд илүү тод сонсоход дэмжлэг үзүүлнэ.',
      fitting: 'ThinTube 3.0 + Eartip 3.0 Open · ThinTube 3.0 P + Sleeve 3.0 Power · Earhook + mold',
      prices: { '1IX': '3.280.000', '2IX': '4.275.000', '3IX': '5.930.000', '5IX': '9.250.000', '7IX': '13.250.000' },
    },
  };

  const renderValue = (value) => {
    if (value === 'check') return '<span class="sgp-check" aria-label="Байгаа">✓</span>';
    if (value === 'none') return '<span class="sgp-none" aria-label="Байхгүй">—</span>';
    if (value.startsWith('dots')) {
      const filled = Number(value.slice(4));
      const dots = Array.from({ length: 5 }, (_, i) => `<i class="${i < filled ? 'on' : ''}"></i>`).join('');
      return `<span class="sgp-dots" aria-label="${filled}/5">${dots}</span>`;
    }
    return `<span class="sgp-text">${value}</span>`;
  };

  class EmjjSigniaProduct extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;
      this.dataset.ready = 'true';
      const slug = this.getAttribute('product');
      const product = products[slug];
      if (!product) return;

      this.innerHTML = `
        <div class="sgp-page">
          <header class="sgp-header">
            <a class="sgp-emjj-brand" href="/home-2" data-route aria-label="ЭМЖЖ Эмнэлэг Нүүр 2">
              <span class="sgp-emjj-mark" aria-hidden="true">◉</span>
              <span><strong>EMJJ</strong><small>HOSPITAL</small></span>
            </a>
            <nav aria-label="Бүтээгдэхүүний хуудасны цэс">
              <a href="/signia" data-route>Бүх бүтээгдэхүүн</a>
              <a href="/contact" data-route>Холбоо барих</a>
            </nav>
            <a class="sgp-header-phone" href="tel:19009999">1900-9999</a>
          </header>

          <div class="sgp-main">
            <section class="sgp-hero" aria-labelledby="sgp-title">
              <div class="sgp-hero-copy">
                <a class="sgp-back" href="/signia" data-route><span aria-hidden="true">←</span> Сонсголын аппарат</a>
                <span class="sgp-tag">${product.tag}</span>
                <h1 id="sgp-title">${product.name}</h1>
                <p>${product.intro}</p>
                <div class="sgp-hero-actions">
                  <a href="/contact" data-route>Зөвлөгөө авах</a>
                  <a href="tel:19009999">1900-9999</a>
                </div>
              </div>
              <div class="sgp-hero-image">
                <img src="${product.image}" alt="${product.alt}" fetchpriority="high" />
              </div>
            </section>

            <section class="sgp-pricing" aria-labelledby="sgp-pricing-title">
              <div class="sgp-section-heading">
                <span>Үзүүлэлтийн түвшин</span>
                <h2 id="sgp-pricing-title">Үнийн мэдээлэл</h2>
                <p>IX платформын 5 түвшингээс хэрэгцээ болон боломжид тохируулан сонгоно.</p>
              </div>
              <div class="sgp-price-grid">
                ${LEVELS.map((level) => `
                  <article class="sgp-price-card${level === '3IX' ? ' sgp-price-card--featured' : ''}">
                    ${level === '3IX' ? '<span class="sgp-price-badge">Санал болгох</span>' : ''}
                    <strong>${level}</strong>
                    <span>${product.prices[level]}₮</span>
                  </article>`).join('')}
              </div>
              <p class="sgp-fitting-note"><strong>Тохируулгын хэлбэр:</strong> ${product.fitting}</p>
            </section>

            <section class="sgp-specs" aria-labelledby="sgp-specs-title">
              <div class="sgp-section-heading">
                <span>Техникийн үзүүлэлт</span>
                <h2 id="sgp-specs-title">Функцийн харьцуулалт</h2>
                <p>Үзүүлэлтийн түвшин бүрт агуулагдах функцүүдийг харьцуулан харууллаа.</p>
              </div>
              <div class="sgp-table-wrap">
                <table class="sgp-table">
                  <thead>
                    <tr>
                      <th scope="col">Функц</th>
                      <th scope="col">Тайлбар</th>
                      ${LEVELS.map((level) => `<th scope="col">${level}</th>`).join('')}
                    </tr>
                  </thead>
                  <tbody>
                    ${sharedFeatures.map((feature) => `
                      <tr>
                        <th scope="row">${feature.name}</th>
                        <td>${feature.desc}</td>
                        ${feature.values.map((value) => `<td>${renderValue(value)}</td>`).join('')}
                      </tr>`).join('')}
                  </tbody>
                </table>
              </div>
            </section>

            <section class="sgp-cta">
              <div>
                <span>Мэргэжлийн зөвлөгөө</span>
                <h2>${product.name} танд тохирох эсэхийг шинжилгээгээр тодорхойлъё</h2>
                <p>Сонсголын шинжилгээ болон мэргэжлийн үнэлгээний дараа тохирох загвар, түвшинг сонгоно.</p>
              </div>
              <div>
                <a href="tel:19009999">1900-9999</a>
                <a href="/contact" data-route>Цаг захиалах</a>
              </div>
            </section>
          </div>

          <footer class="sgp-footer"><span>© EMJJ Hospital</span><a href="/signia" data-route>Бүх бүтээгдэхүүн рүү буцах</a></footer>
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
    }
  }

  if (!customElements.get('emjj-signia-product')) customElements.define('emjj-signia-product', EmjjSigniaProduct);

  const currentRoutePath = () => {
    const hashPath = window.location.hash.replace(/^#/, '').split('?')[0];
    return hashPath.startsWith('/') ? hashPath : window.location.pathname;
  };

  const currentSlug = () => {
    const path = currentRoutePath().replace(/\/$/, '');
    const match = path.match(/^\/signia\/([^/]+)$/);
    return match && products[match[1]] ? match[1] : null;
  };

  let mounting = false;
  let lastSlug = null;
  const mountProductPage = () => {
    if (mounting) return;
    mounting = true;
    const main = document.querySelector('#main');
    const root = document.querySelector('#root');
    const target = main || root;
    const slug = currentSlug();
    let mounted = document.querySelector('emjj-signia-product');

    if (target && slug) {
      root?.classList.toggle('sgp-route-mounted', target === root);
      main?.classList.toggle('sgp-route-mounted', target === main);
      if (!mounted) mounted = document.createElement('emjj-signia-product');
      if (mounted.getAttribute('product') !== slug) {
        mounted.setAttribute('product', slug);
        delete mounted.dataset.ready;
      }
      if (mounted.parentElement !== target) target.appendChild(mounted);
      document.title = `${products[slug].name} | ЭМЖЖ Эмнэлэг`;
      if (lastSlug !== slug) window.scrollTo(0, 0);
      lastSlug = slug;
    } else if (!slug) {
      root?.classList.remove('sgp-route-mounted');
      main?.classList.remove('sgp-route-mounted');
      mounted?.remove();
      lastSlug = null;
      if (Object.values(products).some((p) => document.title.startsWith(p.name))) document.title = 'EMJJ Hospital';
    }
    mounting = false;
  };

  const startMounting = () => {
    mountProductPage();
    const root = document.querySelector('#root');
    if (root) new MutationObserver(mountProductPage).observe(root, { childList: true, subtree: true });
    window.addEventListener('popstate', mountProductPage);
    window.addEventListener('hashchange', mountProductPage);
  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', startMounting, { once: true });
  else startMounting();
})();
