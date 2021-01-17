$(function(){
    $('.menu__icon').on('click', function () {
        $('.menu__icon, .menu__body').toggleClass('_active');
        $('body').toggleClass('_lock');
    });

    $('.products__slider').slick({
        arrows: false,
        dots: true,
        dotsClass: 'products__dots',
        /*autoplay: 2000,*/
        responsive: [
            /* {
                 breakpoint: 1106,
                 settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                 }
             },*/

        ]
    });
    $('.brands__slider').slick({
        arrows: true,
        dots: false,
        prevArrow: '<button class="brands__arrow brands__arrow-prev"></button>',
        nextArrow: '<button class="brands__arrow brands__arrow-next"></button>',
        /*autoplay: 2000,*/
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                 breakpoint: 1106,
                 settings: {
                     slidesToShow: 3,
                 }
             },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },

        ]
    });

    $(window).scroll(function() {

        if($(this).scrollTop() != 0) {

            $('#toTop').fadeIn();

        } else {

            $('#toTop').fadeOut();

        }

    });

    $('#toTop').click(function() {

        $('body,html').animate({scrollTop:0},0);

    });

});

let menuParents = document.querySelectorAll('.menu__parent');

for (let index = 0; index < menuParents.length; index++) {
    const menuParent = menuParents[index];
    menuParent.addEventListener('mouseenter', function () {
        menuParent.classList.add('_active');
    });
    menuParent.addEventListener('mouseleave', function () {
        menuParent.classList.remove('_active');
    });
}