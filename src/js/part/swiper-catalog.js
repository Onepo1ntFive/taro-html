(function () {
    const swiper = new Swiper('.swiper-catalog', {
        parallax: true,
        loop: true,
        spaceBetween: 30,
        slidesPerView: 4,
        navigation: {
            nextEl: '.swiper-button-next-inner',
            prevEl: '.swiper-button-prev-inner',
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

})();