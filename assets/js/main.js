$(document).ready(function(){

    // NIGHTMODE
    $(".colormode-btn button").click(function(cbt){
        cbt.preventDefault();
        $($(this).children("i")).toggleClass("ri-sun-fill ri-moon-fill");
        $($(this).parent()).toggleClass("day night");
        $("body").toggleClass("night day");
    });

});