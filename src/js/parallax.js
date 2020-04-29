$(document).ready(function () {
    $(window).bind('scroll', function (e) {
        parallaxScroll();
    });

    function parallaxScroll() {
        var scrolledY = $(window).scrollTop();
        $('.bg_image_1').css('top', '+' + (scrolledY * 0.9) + 'px');
        $('.bg_image_2').css('top', '+' + (scrolledY * 0.1) - 130 + 'px');
        $('.bg_image_3').css('top', '+' + (scrolledY * 0.1) - 250 + 'px');
        $('.bg_image_4').css('top', '+' + (scrolledY * 0.1) - 500 + 'px');
    }
});