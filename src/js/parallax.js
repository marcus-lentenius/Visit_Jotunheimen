$(document).ready(function () {
    var width = $(window).width();
    if (width < 500) {
        $('head').append($('<link rel="stylesheet" type="text/css" />')
            .attr('href', 'styles/hiking_smartphone.css'));
    } else if (width < 800) {
        $('head').append($('<link rel="stylesheet" type="text/css" />')
            .attr('href', 'styles/hiking_tablet.css'));
    } else {
        $('head').append($('<link rel="stylesheet" type="text/css" />')
            .attr('href', 'styles/hiking.css'));
    }

    if (width > 500) {
        $(window).bind('scroll', function () {
            var scrolledY = $(window).scrollTop();
            $('.bg_image_1').css('top', '+' + (scrolledY * 0.9) + 'px');
            $('.bg_image_2').css('top', '+' + (scrolledY * 0.1) - 130 + 'px');
            $('.bg_image_3').css('top', '+' + (scrolledY * 0.1) - 250 + 'px');

        });
    }

    function scrollTo(scrollTarget) {
        var page = $('html, body');

        page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function () {
            page.stop();
        });

        page.animate({
            scrollTop: $(scrollTarget).offset().top
        }, 1000);
    }

    $(window).on("load", function () {
        if (window.location.hash === "#skiing") {
            scrollTo("#skiing_anchor");
        } else if (window.location.hash === "#lodging") {
            scrollTo("#lodging_anchor");
        } else if (window.location.hash === "#trailing") {
            scrollTo("#trailing_anchor");
        }
    });
});


