$(document).ready(function(){

    // NIGHTMODE
    $(".colormode-btn button").click(function(cbt){
        cbt.preventDefault();
        $($(this).children("i")).toggleClass("ri-sun-fill ri-moon-fill");
        $($(this).parent()).toggleClass("day night");
        $("body").toggleClass("night day");
    });

    // SCROLLTOP
    $(window).scroll(function() {
        if ($(this).scrollTop() > 240){  
            $('.skycrapper-ads').addClass("sticky");
        }
        else{
            $('.skycrapper-ads').removeClass("sticky");
        }
    });

    // BURGER
    $(".burger").click(function(){
        $(".main-menu").toggleClass("show");
    });


    var header = document.querySelector("header");
    var navbarHeight = header.offsetHeight;
    var lastScrollTop = 0;

    window.onscroll = function() {scrollHide()};

    function scrollHide() {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    console.log(st);
    if (st > lastScrollTop) {
        header.classList.add('hide');
        $('.skycrapper-ads').addClass("sticky");
    } else {
        header.classList.remove('hide');
        $('.skycrapper-ads').removeClass("sticky");
    }
    lastScrollTop = st <= 0 ? 0 : st;
    }

});