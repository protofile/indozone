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
        $(".sticky-share").addClass("scrolled");
        $('.skycrapper-ads').addClass("sticky");
    } else {
        header.classList.remove('hide');
        $(".sticky-share").removeClass("scrolled");
        $('.skycrapper-ads').removeClass("sticky");
    }
    lastScrollTop = st <= 0 ? 0 : st;
    }

    // TAB
    $(".tab-nav a").click(function(tn){
        tn.preventDefault();
        $(".tab-nav a").removeClass("active");
        $(this).addClass("active")
        $(".tab-ct").removeClass("show");
        $($(this).attr("href")).addClass("show");
    });

    $(".author-group button").click(function(agb){
        agb.preventDefault();
        $(".author-popup").toggleClass("show");
    });

    //SEARCH TOGGLE
    $(".src-form").click(function(){
        $(this).addClass("active");
        $(".src-form input").focus();
    });
    window.addEventListener('mouseup',function(event){
        if(event.target != $(".src-form") && event.target.parentNode != $(".src-form")){
            $(".src-form").removeClass("active");
        }
    });  

    //NETWORK MENU
    $(".bt-network-menu").click(function(nm){
        nm.preventDefault();
        $($(this).attr("href")).addClass("show");
    });
    window.addEventListener('mouseup',function(event){
        if(event.target != $(".mega-menu") && event.target.parentNode != $(".mega-menu")){
            $(".mega-menu").removeClass("show");
        }
    });

    //STICKY SHARE
    $(".comment-bt-2").click(function(cb) {
        cb.preventDefault();
        $('html,body').animate({                                                          //  fine in moz, still quicker in chrome. 
            scrollTop: $("#comment-field").offset().top},
            'slow');
    });


});