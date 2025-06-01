$(document).ready(function () {

    // NIGHTMODE
    $(".colormode-btn button").click(function (cbt) {
        cbt.preventDefault();
        $($(this).children("i")).toggleClass("ri-sun-fill ri-moon-fill");
        $($(this).parent()).toggleClass("day night");
        $("body").toggleClass("night day");
    });

    // SCROLLTOP
    $(window).scroll(function () {
        if ($(this).scrollTop() > 240) {
            $('.skycrapper-ads').addClass("sticky");
        }
        else {
            $('.skycrapper-ads').removeClass("sticky");
        }
    });

    // BURGER
    $(".burger").click(function () {
        $(".main-menu").toggleClass("show");
        $(this).children("i").toggleClass("ri-close-large-line ri-menu-line");
    });


    var header = document.querySelector("header");
    var navbarHeight = header.offsetHeight;
    var lastScrollTop = 420;

    window.onscroll = function () { scrollHide() };

    function scrollHide() {
        var st = window.pageYOffset || document.documentElement.scrollTop;
        // console.log(st);
        if (st > lastScrollTop) {
            //header.classList.add('hide');
            $(".sticky-share").addClass("scrolled");
        } else {
            //header.classList.remove('hide');
            $(".sticky-share").removeClass("scrolled");
        }
        lastScrollTop = st <= 420 ? 420 : st;
    }

    $(window).scroll(function () {
        if ($(this).scrollTop() > 420) {
            $('header').addClass("sticky");
            if ($("body").hasClass("has-billboard")) {
                $('body').css("padding-top", "420px");
                $('.skycrapper-ads').addClass("sticky");
            } else {
                $('body').css("padding-top", "120px");
                $('.skycrapper-ads').removeClass("sticky");
            }
        }
        else {
            $('header').removeClass("sticky");
            //$('body').css("padding-top", "0");
        }
    });

    // TAB
    $(".tab-nav a").click(function (tn) {
        tn.preventDefault();
        $(".tab-nav a").removeClass("active");
        $(this).addClass("active")
        $(".tab-ct").removeClass("show");
        $($(this).attr("href")).addClass("show");
    });

    $(".author-group button").click(function (agb) {
        agb.preventDefault();
        $(".author-popup").toggleClass("show");
    });

    //SEARCH TOGGLE
    $(".src-form").click(function () {
        $(this).addClass("active");
        $(".src-form input").focus();
    });
    window.addEventListener('mouseup', function (event) {
        if (event.target != $(".src-form") && event.target.parentNode != $(".src-form")) {
            $(".src-form").removeClass("active");
        }
    });

    //NETWORK MENU
    $(".bt-network-menu").click(function (nm) {
        nm.preventDefault();
        $($(this).attr("href")).addClass("show");
    });
    window.addEventListener('mouseup', function (event) {
        if (event.target != $(".mega-menu") && event.target.parentNode != $(".mega-menu")) {
            $(".mega-menu").removeClass("show");
        }
    });

    //STICKY SHARE
    $(".comment-bt-2").click(function (cb) {
        cb.preventDefault();
        $('html,body').animate({                                                          //  fine in moz, still quicker in chrome. 
            scrollTop: $("#comment-field").offset().top
        },
            'slow');
    });

    // BILLBOARD DETECTOR
    if ($(".billboard").length >= 1) {
        $("body").addClass("has-billboard");
        console.log("ada billboard");
    }

});