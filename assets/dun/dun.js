(function () {
  const spiralMark = `
    <svg viewBox="0 0 120 120" aria-hidden="true" focusable="false">
      <path d="M93 37c-10-17-33-23-51-14C19 34 10 62 23 84c14 24 48 30 69 12 17-15 20-43 5-59-12-13-33-14-44-2-10 11-8 29 4 37 10 7 25 3 29-8 3-9-3-19-12-20-7-1-13 5-13 12 0 5 4 9 9 9" />
    </svg>`;

  const serviceIcon = (content) => `
    <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">${content}</svg>`;

  const programs = [
    {
      icon: serviceIcon('<circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M16 7h5M18.5 4.5v5"/>'),
      title: 'Ганцаарчилсан хэл засал',
      text: 'Хүүхэд бүрийн хөгжлийн үнэлгээнд тулгуурласан хувь хүний сургалтын төлөвлөгөө.'
    },
    {
      icon: serviceIcon('<circle cx="8" cy="8" r="3"/><circle cx="17" cy="9" r="2.5"/><path d="M2 20v-2a6 6 0 0 1 12 0v2M14 15a5 5 0 0 1 8 4v1"/>'),
      title: 'Бүлгийн сургалт',
      text: 'Харилцаа, хамтын ажиллагаа, нийгэмшихүйн чадварыг дэмжих хөгжүүлэх сургалт.'
    },
    {
      icon: serviceIcon('<path d="M4 20v-8a8 8 0 0 1 16 0v8M8 20v-7M16 20v-7M8 9h8"/>'),
      title: 'Эцэг эхийн сургалт',
      text: 'Гэр бүлийн оролцоог дэмжиж, хөгжлийг гэрийн орчинд үргэлжлүүлэх арга зүй.'
    },
    {
      icon: serviceIcon('<path d="M17 13c0-4-2-7-6-7a6 6 0 0 0-6 6"/><path d="M11 2a10 10 0 0 1 10 10c0 4-2 6-5 8-2 1-3 2-5 2-3 0-4-2-4-4"/><path d="M9 14c0-2 1-3 3-3s3 1 3 3c0 3-4 3-4 6"/>'),
      title: 'Сонсголын нөхөн сэргээх сургалт',
      text: 'Дунгийн суулгац болон сонсголын аппарат хэрэглэдэг хүүхдийн сонсгол, хэл ярианы хөгжил.'
    }
  ];

  class EmjjDunPage extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;
      this.dataset.ready = 'true';
      this.innerHTML = `
        <div class="dun-page">
          <section class="dun-hero" aria-labelledby="dun-title">
            <img src="./assets/dun/dun-hero.webp" alt="Хэл засалч багш дунгийн суулгацтай хүүхэдтэй зурагт карт ашиглан ажиллаж байна" />
            <div class="dun-hero-shade"></div>
            <div class="dun-hero-content">
              <div class="dun-mark">${spiralMark}<span>Дун</span></div>
              <p class="dun-eyebrow">Хүүхэд бүрийн харилцааны ирээдүйн төлөө</p>
              <h1 id="dun-title">ДУН хэл заслын<br />сургалтын төв</h1>
              <p class="dun-lead">Сонсох боломжийг харилцах чадвар болгон, харилцах чадварыг аз жаргалтай ирээдүй болгон хөгжүүлнэ.</p>
              <div class="dun-hero-actions">
                <a href="/contact" data-route>Анхны үнэлгээ захиалах</a>
                <button type="button" data-scroll="dun-programs">Үйлчилгээтэй танилцах <span aria-hidden="true">→</span></button>
              </div>
            </div>
          </section>

          <section class="dun-donation" aria-label="ЭМЖЖ Эмнэлгийн дэмжлэг">
            <div class="dun-donation-mark">${spiralMark}</div>
            <div>
              <span>Хамтын үнэ цэнэ</span>
              <h2>ЭМЖЖ Эмнэлэг орлогынхоо <strong>1%-ийг</strong> ДУН төвийн үйл ажиллагаанд зориулдаг.</h2>
              <p>Хүүхдийн сургалт, нөхөн сэргээх үйлчилгээ болон төвийн өдөр тутмын үйл ажиллагааг тогтвортой дэмжин ажилладаг.</p>
            </div>
          </section>

          <section class="dun-intro">
            <div class="dun-section-heading">
              <span>Бидний тухай</span>
              <h2>Сонсгол, хэл яриа, хөгжлийг нэг дор дэмжинэ</h2>
              <p>Сонсголын бэрхшээлтэй, дунгийн суулгац болон сонсголын аппарат хэрэглэдэг, мөн хэл ярианы хөгжлийн дэмжлэг шаардлагатай хүүхэд, насанд хүрэгчдэд мэргэжлийн сургалт, зөвлөгөө, нөхөн сэргээх үйлчилгээ үзүүлдэг.</p>
            </div>
            <div class="dun-stats">
              <article><strong>2007</strong><span>оноос эхэлсэн туршлага</span></article>
              <article><strong>12</strong><span>хүүхэд суралцаж байна</span></article>
              <article><strong>3</strong><span>мэргэжлийн багш</span></article>
              <article><strong>1%</strong><span>ЭМЖЖ Эмнэлгийн дэмжлэг</span></article>
            </div>
          </section>

          <section class="dun-programs" id="dun-programs" aria-labelledby="dun-programs-title">
            <div class="dun-section-heading">
              <span>Бидний үйлчилгээ</span>
              <h2 id="dun-programs-title">Хүүхэд бүрт тохирсон хөгжлийн зам</h2>
              <p>Хүүхдийн нас, сонсгол, хэл яриа, танин мэдэхүй болон нийгэмшихүйн онцлогт тохируулан сургалтыг зохион байгуулна.</p>
            </div>
            <div class="dun-program-grid">
              ${programs.map((program) => `
                <article class="dun-program-card">
                  <span class="dun-program-icon">${program.icon}</span>
                  <h3>${program.title}</h3>
                  <p>${program.text}</p>
                </article>`).join('')}
            </div>
          </section>

          <section class="dun-timeline" aria-labelledby="dun-timeline-title">
            <div class="dun-section-heading dun-section-heading--light">
              <span>Түүхэн замнал</span>
              <h2 id="dun-timeline-title">Туршлагаас үндэсний жишиг төв рүү</h2>
            </div>
            <div class="dun-timeline-grid">
              <article><strong>2007</strong><i></i><h3>Хэл заслын тасаг</h3><p>Сонсголын бууралтаас шалтгаалсан хэл ярианы нөхөн сэргээх сургалт эхэлсэн.</p></article>
              <article><strong>2009</strong><i></i><h3>Дунгийн суулгацын дараах сургалт</h3><p>Сонсголоор хэл яриа хөгжүүлэх сургалтыг тогтмол хэрэгжүүлж эхэлсэн.</p></article>
              <article><strong>2016</strong><i></i><h3>ДУН төв байгуулагдав</h3><p>Б.Эрдэнэчулууны санаачилгаар ДУН хэл заслын сургалтын төв байгуулагдсан.</p></article>
              <article><strong>2023</strong><i></i><h3>ДУН ЭМЖЖ цэцэрлэг</h3><p>Сургуулийн өмнөх боловсрол, хэл заслын үйлчилгээг хослуулан үзүүлж эхэлсэн.</p></article>
            </div>
          </section>

          <section class="dun-environment" aria-labelledby="dun-environment-title">
            <div class="dun-section-heading">
              <span>Хүүхэд төвтэй орчин</span>
              <h2 id="dun-environment-title">Сурах, тоглох, хөгжих аюулгүй орон зай</h2>
              <p>Хэл засал, сургалт, хөдөлгөөн, амралт болон өдөр тутмын хөгжлийг нэг орчинд уялдуулдаг.</p>
            </div>
            <div class="dun-environment-grid">
              <article><span>01</span><h3>Хэл заслын тусгай өрөө</h3><p>Ганцаарчилсан үнэлгээ, сургалтад зориулсан тайван орчин.</p></article>
              <article><span>02</span><h3>Сургалтын анги</h3><p>Нас, хөгжлийн онцлогт тохирсон хэрэглэгдэхүүн, ном, тоглоом.</p></article>
              <article><span>03</span><h3>Хөдөлгөөн хөгжүүлэх хэсэг</h3><p>Тэнцвэр, зохицуулалт, өөртөө итгэх чадварыг дэмжинэ.</p></article>
              <article><span>04</span><h3>Өдөрт таван удаагийн хоол</h3><p>Нас, өсөлт хөгжилд тохирсон шим тэжээлтэй хоол, цай.</p></article>
            </div>
          </section>

          <section class="dun-family">
            <div>
              <span>Гэр бүл бол хөгжлийн хамгийн чухал түнш</span>
              <h2>Эцэг эхтэй хамтдаа хүүхдийн ахицыг үргэлжлүүлнэ</h2>
              <p>Хөгжлийн явцыг тогтмол мэдээлж, зөвлөгөө өгч, гэрийн орчинд сургалтыг үргэлжлүүлэх арга зүйгээр дэмжин ажилладаг.</p>
            </div>
            <a href="/contact" data-route>Зөвлөгөө авах <span aria-hidden="true">→</span></a>
          </section>

          <section class="dun-cta">
            <div class="dun-cta-mark">${spiralMark}</div>
            <div>
              <span>Хүүхдийн харилцааны ирээдүйг хамтдаа бүтээе</span>
              <h2>Анхны үнэлгээ, сургалтын мэдээлэл аваарай</h2>
              <p>Одоогоор бусад салбартай ижил холбоо барих мэдээллээр үйлчилж байна.</p>
            </div>
            <div class="dun-cta-actions">
              <a href="tel:19009999">1900-9999</a>
              <a href="/contact" data-route>Цаг захиалах</a>
            </div>
          </section>
        </div>`;

      const navigateTo = (destination) => {
        if (window.location.hash.startsWith('#/')) {
          window.location.hash = destination;
        } else {
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

      this.querySelectorAll('[data-scroll]').forEach((button) => {
        button.addEventListener('click', () => {
          this.querySelector(`#${button.dataset.scroll}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
      });
    }
  }

  if (!customElements.get('emjj-dun-page')) customElements.define('emjj-dun-page', EmjjDunPage);

  const currentRoutePath = () => {
    const hashPath = window.location.hash.replace(/^#/, '').split('?')[0];
    return hashPath.startsWith('/') ? hashPath : window.location.pathname;
  };

  let mounting = false;
  const mountDunPage = () => {
    if (mounting) return;
    mounting = true;
    const main = document.querySelector('#main');
    const root = document.querySelector('#root');
    const target = main || root;
    const isDunPage = currentRoutePath().replace(/\/$/, '').endsWith('/dun');
    let mounted = document.querySelector('emjj-dun-page');

    if (target && isDunPage) {
      root?.classList.toggle('dun-route-mounted', target === root);
      main?.classList.toggle('dun-route-mounted', target === main);
      if (!mounted) mounted = document.createElement('emjj-dun-page');
      if (mounted.parentElement !== target) target.appendChild(mounted);
      document.title = 'ДУН хэл заслын сургалтын төв | ЭМЖЖ Эмнэлэг';
    } else if (!isDunPage) {
      root?.classList.remove('dun-route-mounted');
      main?.classList.remove('dun-route-mounted');
      mounted?.remove();
      if (document.title.startsWith('ДУН хэл заслын')) document.title = 'EMJJ Hospital';
    }
    mounting = false;
  };

  const startMounting = () => {
    mountDunPage();
    const root = document.querySelector('#root');
    if (root) new MutationObserver(mountDunPage).observe(root, { childList: true, subtree: true });
    window.addEventListener('popstate', mountDunPage);
    window.addEventListener('hashchange', mountDunPage);
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', startMounting, { once: true });
  } else {
    startMounting();
  }
})();
