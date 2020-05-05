$(document).ready(function () {


    // var width = $(window).width();
    // if (width < 500) {
    //     $('head').append($('<link rel="stylesheet" type="text/css" />')
    //         .attr('href', 'styles/hiking_smartphone.css'));
    // } else if (width < 800) {
    //     $('head').append($('<link rel="stylesheet" type="text/css" />')
    //         .attr('href', 'styles/hiking_tablet.css'));
    // } else {
    //     $('head').append($('<link rel="stylesheet" type="text/css" />')
    //         .attr('href', 'styles/hiking.css'));
    // }

    function disableScroll() {
        // Get the current page scroll position
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

            // if any scroll is attempted, set this to the previous value
            window.onscroll = function () {
                window.scrollTo(scrollLeft, scrollTop);
            };
    }

    // if (width > 500) {
        $(window).bind('scroll', function () {

            var height = $(window).scrollTop();
            var base = window.innerHeight * 3.5;
            if (height < base) {
                var scrolledY = $(window).scrollTop();
                $('.hiking_bg_image').css('top', '+' + (scrolledY * 0.9) + 'px');
                $('.skiing_bg_image').css('top', '+' + (scrolledY * 0.1) - 130 + 'px');
                $('.lodge_bg_image').css('top', '+' + (scrolledY * 0.1) - 250 + 'px');
                // $('.bg_image_4').css('top', '+' + (scrolledY * 0.1) - 350 + 'px');

                disableScroll();
            } else {


            }
        });
    // }

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


