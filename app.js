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

  /* Animations tri portfolio */

  if(window.innerWidth < 740){
    $(".filter-group").addClass("is-active");
  }

  if($(".filter-group").hasClass("is-active")){

    $(".selected-cat, .fa-angle-down").click(function(){
      $(".fa-angle-down").toggleClass('fa-rotate-180');
      $(".filter-list").slideToggle();
    });

    $(".filter-item").click(function(){
      $(".selected-cat").text("");
      $(".selected-cat").text($(this).text());
      $(".fa-angle-down").toggleClass('fa-rotate-180');
      $(".filter-list").slideToggle();
    });
  }
  
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

  $(".projets div a").click(function(){

    var id = $(this).attr("id");
    $(id).slideToggle();
    $(id).css('display', 'flex');

    //.hide().fadeIn();
    
    $(".projets").hide();

    $(".croix").click(function(){
      $(id).slideUp();
      $(".projets").show();
    });

  });

  

});