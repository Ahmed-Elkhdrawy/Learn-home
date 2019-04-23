/*global $, window, wow*/

$(function () {
    "use strict";
    $(".our-slider").height($(window).height());
    $(window).resize(function () {
        $(".our-slider").height($(window).height());
    });
    $(".navbar-toggle").on("click", function () {
        $(".icon-bar").toggleClass("icon-barx");
    });

    $(window).on("load", function () {
        $("body").css("overflow", "auto");
        $(".loader").fadeOut(1000);
    });

    $('.collapse .nav li a').on("click", function () {
        $(this).parent().addClass('active').siblings().removeClass('active');
    });

    $('.collapse .nav li a').on("click", function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: ($("#" + $(this).data("scroll")).offset().top - $(".main-nav").height() + 1)
        }, 1000);

    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > $("#work").offset().top - 200) {
            $(".main-nav").css({
                position: "fixed",
                boxShadow: "0px 0px 10px 0px #000",
                top: "0"
            }, 1000);
        } else if ($(window).scrollTop() < $("#work").offset().top) {
            $(".main-nav").css({
                position: "static",
                boxShadow: "none",
                top: "-200px"
            }, 1000);
        }
    });

});

wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 0, // default
    mobile: true, // default
    live: true // default
});
wow.init();