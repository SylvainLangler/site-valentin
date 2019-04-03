$(document).ready(function () {

    $(".hamburger").click(function(){
        $(".menu2").slideToggle();
    });
    
    $(".menu2 a").click(function(){
        $(".menu2").slideToggle();
        var target = $(this).attr("href");
        console.log(target);
        $('html, body').stop().animate({scrollTop: $(target).offset().top}, 500 ); 
    });
    

});