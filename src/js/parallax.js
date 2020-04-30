$(document).ready(function () {
    var width = $(window).width();
    if (width < 360) {
        $(".right_text_wrapper").hide();
        var text = $(".right_box_para").text();
        $(".left_text_wrapper").append(text);
    }

    $(window).bind('scroll', function (e) {
        parallaxScroll();
    });

    function parallaxScroll() {
        var scrolledY = $(window).scrollTop();
        $('.bg_image_1').css('top', '+' + (scrolledY * 0.9) + 'px');
        $('.bg_image_2').css('top', '+' + (scrolledY * 0.1) - 130 + 'px');
        $('.bg_image_3').css('top', '+' + (scrolledY * 0.1) - 250 + 'px');
    }

    // $("div").click(function () {
    //     $('html, body').animate({
    //         scrollTop: $("#lodging").offset().top
    //     }, 1000);
    // })
});


