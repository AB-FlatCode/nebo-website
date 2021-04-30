const bodyEl = document.querySelector('.body');
const homeSlide = document.querySelector('.home-slide');
const navButton = document.querySelector('#nav-toggle');
const navOverlay = document.querySelector('#nav-overlay');
const navCta = document.querySelector('.modal-popup');
const siteHeader = document.querySelector('.header');
const slideNav = document.querySelector('.slide-section__navigation');
const slideSection = document.querySelector('.slide-section');
const slideColumns = document.querySelector('.slide-section__columns');
const slideButtonCta = document.querySelectorAll('.button-cta');
const slideButtonCtaImg = document.querySelector('.slide-button__cta-img');

/*home loader selectors*/
const loader = document.querySelector(".loader");
const loaderContent = document.querySelector(".loader__content");
const loaderLogo = document.querySelector(".loader-logo");


if (document.querySelector('body.homepage')) {
  window.addEventListener("load", loadOut);

  function loadOut() {
    loader.classList.add("loader-close");
    loader.getElementsByClassName.visibility = "hidden";
  }
}

/*Navigation*/

navButton.addEventListener('click', function () {
  navButton.classList.toggle('active');
  navOverlay.classList.toggle('open');
  siteHeader.classList.toggle('nav-active');
  navCta.classList.add('animate__animated', 'animate__fadeInUp', 'animate__slow', 'animate__delay-1s');
  bodyEl.classList.toggle('no-scroll');
});

/** Header classes */

if (document.querySelector('body.page') && (window.matchMedia('screen and (max-width: 900px)').matches)) {
  siteHeader.classList.add('page-header');
} else {
  siteHeader.classList.remove('page-header');
}

/*Newsletter modal*/

(() => {
  const $modal = document.querySelector('.modal-frame');
  const $modalPopup = document.querySelector('.modal-popup');
  const $modalOverlay = document.querySelector('.modal-overlay');
  const $close = document.getElementById('modal-close');

  function closeModal() {
    $modal.classList.remove('active');
    $modal.classList.add('leave');
    siteHeader.classList.toggle('active-modal');
  }

  $modalPopup.addEventListener('click', (e) => {
    $modal.classList.toggle('active');
    siteHeader.classList.toggle('active-modal');
    $modal.classList.remove('leave');

  })

  $modalOverlay.addEventListener('click', (e) => {
    closeModal();
  })

  $close.addEventListener('click', (e) => {
    closeModal();
  })

})();

let dotsCircle = document.querySelector(".slide-section__dots");

/*Home slider*/
if (homeSlide) {
  const swiperAnimation = new SwiperAnimation();
  const swiper = new Swiper('.swiper-container', {
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
    on: {
      init: function () {
        swiperAnimation.init(this).animate();
      },
      slideChange: function () {
        swiperAnimation.init(this).animate();
        //dotsCircle.style.transform = "rotate(11deg)";


      },
    },
    navigation: {
      nextEl: '.slide-section__next',
      prevEl: '.slide-section__prev',
    },
  });

  /*Hide slide navigation on last*/
  swiper.on('transitionStart', function () {
    //console.log('*** mySwiper.realIndex', swiper.realIndex);

    //dotsCircle.style.transform = "rotate(11deg)";

    if (swiper.realIndex == 9) {
      slideNav.classList.add('hide-slide-nav');
      document.querySelector('.slide-section__dots').classList.add('remove');
    }

    if (swiper.realIndex == 8) {
      slideNav.classList.remove('hide-slide-nav');
      document.querySelector('.slide-section__dots').classList.remove('remove');
    }


  });

  /*Dots slide rotation*/
  swiper.on('slidePrevTransitionStart', function () {

    let activeSlide = document.querySelector('.swiper-slide-active');
    activeSlide.querySelector('.slide-section').classList.toggle('reverse');

  });

}
/** Enable custom scrollbar only on mobile (team-page) */

if (document.querySelector('.page-team') && window.matchMedia('screen and (min-width: 900px)').matches) {
  console.log('desktop');
  const simpleBar = new SimpleBar(document.querySelector('.team-list__wrapp'), {
    autoHide: false
  });
}

/** Cta slide links (cloud rotating) */

slideButtonCta.forEach(item => {

  item.addEventListener("mouseenter", function (e) {

    if (item.querySelector("img").classList.contains('link-rotate-reverse')) {
      item.querySelector('img').classList.remove('link-rotate-reverse');
    }
    item.querySelector('img').classList.add('link-rotate');
  });

  item.addEventListener("mouseleave", function () {
    item.querySelector('img').classList.remove('link-rotate');
    item.querySelector('img').classList.toggle('link-rotate-reverse');
  });

});