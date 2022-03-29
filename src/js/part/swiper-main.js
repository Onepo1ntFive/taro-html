(function () {
    if (!!document.querySelector('.swiper-main')) {
        let windowWidth = window.innerWidth;
        let swiperMain = undefined;

        function initMainSwiper() {
            windowWidth = window.innerWidth;

            if (windowWidth < 1601 && swiperMain !== undefined) {
                let styleElements = document.querySelectorAll('.swiper-main [style]');
                styleElements.forEach(styleElement => {
                    styleElement.removeAttribute('style');
                });
                console.log()
                swiperMain.destroy(true, false);
                swiperMain = undefined;

            } else if (windowWidth >= 1601 && swiperMain === undefined) {
                swiperMain = new Swiper('.swiper-main', {
                    direction: 'vertical',
                    mousewheel: true,
                    speed: 1500,
                    parallax: true,
                    slidesPerView: 1,
                    allowTouchMove: false,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    navigation: {
                        nextEl: '.swiper-button-next-main',
                        prevEl: '.swiper-button-prev-main',
                    },
                });
            }
        }

        initMainSwiper();
        window.addEventListener('resize', function () {
            initMainSwiper()
        }, true);
    }

})();