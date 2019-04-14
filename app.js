$(document).ready(function () {
    

  $(".hamburger").click(function(){
      $(".menu2").slideToggle();
  });
  
  $(".menu2 a").click(function(){
      $(".menu2").slideToggle();
      var target = $(this).attr("href");
      $('html, body').stop().animate({scrollTop: $(target).offset().top}, 700 ); 
  });

  $(".menu a").click(function(){
      var target = $(this).attr("href");
      $('html, body').stop().animate({scrollTop: $(target).offset().top}, 700 ); 
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
    $('html, body').stop().animate({scrollTop: $("#portfolio").offset().top}, 1000 ); 
    $(id).slideToggle(700);
    $(id).css('display', 'flex');

    //.hide().fadeIn();
    
    $(".projets").hide();
    $(".cache").show();
    $(".work").hide();

    setTimeout(function(){ $(".cache").hide();}, 1000);

    $(".croix").click(function(){
      //$(".cache").hide();
      $(id).slideUp(700);
      $(".projets").show();
      setTimeout(function(){ $(".work").slideDown(300);}, 600);
      
    });

    

  });

  // ANIMATION SKILLS //

  $(".anim img").bind("click", function(){
    var selected = $(this).parent().attr('id');
    animate(selected);
  });

  var previousAnimated = null;

  function animate(selected){
    if(previousAnimated == null){
        TweenMax.to('#'+selected+' img',0.3,{x:-520, ease:SteppedEase.config(8)});
        previousAnimated = selected;
    } else if(selected == previousAnimated) {
      TweenMax.to('#'+previousAnimated+' img',0.3,{x:0, ease:SteppedEase.config(8)});
      previousAnimated = null;
    } else {
      TweenMax.to('#'+selected+' img',0.3,{x:-520, ease:SteppedEase.config(8)});
      TweenMax.to('#'+previousAnimated+' img',0.3,{x:0, ease:SteppedEase.config(8)});
      previousAnimated = selected;
    }
  }

  

});