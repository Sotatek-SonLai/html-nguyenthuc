
// slide-flash
$('.slide-banner-top').slick({
    dots: true,
    prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><i class="fa-solid fa-angle-left"></i></button>',
    nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><i class="fa-solid fa-angle-right"></i></button>',
});
const widthScreen = $(document).width();

if(widthScreen < 560){

    $(".slider-mobile-only").slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
        arrows: false,
    })

}