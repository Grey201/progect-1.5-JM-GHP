var swiper = new Swiper('.swiper-container', {
    cssMode: true,
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
    slidesPerView:1.23,
    spaceBetween: 10,
    // slidesOffsetBefore: 10,
    pagination: {
      el: '.swiper-pagination'
    },
    mousewheel: true,
    keyboard: true,
  });