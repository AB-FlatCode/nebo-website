const bodyEl = document.querySelector('.body');
const navButton = document.querySelector('#nav-toggle');
const navOverlay = document.querySelector('#nav-overlay');
const siteHeader = document.querySelector('.header');
const slideNav = document.querySelector('.slide-section__navigation');
/*home loader selectors*/
const loaderInner = document.querySelector('.loader .inner');
const loader = document.querySelector('.loader');
const loaderContent = document.querySelector('.loader__content');
const loaderLogo = document.querySelector('.loader-logo');

/*Navigation*/

navButton.addEventListener('click', function () {
  navButton.classList.toggle('active');
  navOverlay.classList.toggle('open');
  siteHeader.classList.toggle('nav-active');
  bodyEl.classList.toggle('no-scroll');
});

/*Home slider*/

var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  slidesPerView: 1,

  mousewheel: {
    invert: false,
    forceToAxis: true,
    releaseOnEdges: true,
  },

  keyboard: {
    enabled: true,
    onlyInViewport: true,
    freeMode: true,
    freeModeSticky: true,
  },
  effect: 'fade',
  navigation: {
    nextEl: '.slide-section__next',
    prevEl: '.slide-section__prev',
  },
});

/*Hide slide navigation on last*/

swiper.on('transitionStart', function () {
  //console.log('*** mySwiper.realIndex', swiper.realIndex);

  if (swiper.realIndex == 9) {
    slideNav.classList.add('hide-slide-nav');
  }

  if (swiper.realIndex == 8) {
    slideNav.classList.remove('hide-slide-nav');
  }
});

/*Home Loader
function initLoader() {
  const tlLoaderIn = gsap.timeline({
    defaults: {
      duration: 1.1,
      ease: 'power2.out',
    },
    onComplete: () => bodyEl.classList.remove('is-loading'),
  });

  tlLoaderIn.from(
    loaderLogo,
    {
      opacity: 1,
    },
    1.2
  );
  //.from(loaderTextMask, { y: '-100%', stagger: 0.1 });

  const tlLoaderOut = gsap.timeline({
    defaults: {
      duration: 1.2,
      ease: 'power2.out',
    },
  });

  //tlLoaderOut.to(loaderTitleMask, { y: '-100%' }).to([loader, loaderContent], { y: '-100%', stagger: 0.2 });
  tlLoaderOut.to([loader, loaderContent], { y: '-100%' }).from('.main', { y: 150 });
}

function init() {
  initLoader();
}

window.addEventListener('load', function () {
  init();
});*/
