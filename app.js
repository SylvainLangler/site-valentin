$(document).ready(function () {

    

    $(".hamburger").click(function(){
        $(".menu2").slideToggle();
    });
    
    $(".menu2 a").click(function(){
        $(".menu2").slideToggle();
        var target = $(this).attr("href");
        $('html, body').stop().animate({scrollTop: $(target).offset().top}, 500 ); 
    });

    $(".menu a").click(function(){
        var target = $(this).attr("href");
        $('html, body').stop().animate({scrollTop: $(target).offset().top}, 500 ); 
    });


    
    mixitup('#projets', {// #projets
        load: {
            sort: 'order:asc'
        },
          animation: {
          effects: 'fade',
          duration: 700
        },
        classNames: {
          block: 'filtres', // filtres
          elementFilter: 'filter-btn'
        },
        selectors: {
          target: '.mix-target'
        }
    });

});