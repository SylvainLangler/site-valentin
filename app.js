$(document).ready(function () {
    
  // Animation du menu avec un hamburger pour le menu sur format téléphone
  $(".hamburger").click(function(){
      animateHamburger();
  });
  
  $(".menu2 a").click(function(){
      $(".menu2").slideToggle();
      var target = $(this).attr("href");
      $('html, body').stop().animate({scrollTop: $(target).offset().top}, 700 ); 
      $("body").css("overflow", "initial");
  });

  $(".menu a").click(function(){
      var target = $(this).attr("href");
      $('html, body').stop().animate({scrollTop: $(target).offset().top}, 700 ); 
  });

  // Animations tri portfolio

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

  $(".filter-item").click(function(){
    $(".filter-item").removeClass("selected-cat-color");
      $(this).addClass("selected-cat-color", 400);
  });
  
  mixitup('#projets', {
      load: {
          sort: 'order:asc'
      },
        animation: {
        effects: 'fade',
        duration: 700
      },
      classNames: {
        block: 'filtres', 
        elementFilter: 'filter-btn'
      },
      selectors: {
        target: '.mix-target'
      }
  });

  $(document).keydown(
    function (event) {
        var key = event.keyCode;
        var actualPopup = $(".popup-actif");
        if(key == 39){
          showNextProject(actualPopup);
        }
        if(key == 37){
          showPreviousProject(actualPopup);
        }
        if(key == 27){
          closeProject(actualPopup);
        }
    }
  );

  $(".projets div a").on('click', function(){
    // on récupère l'id du projet cliqué
    var id = $(this).attr("id");
    animateProject(id);
  });

  // au clic sur la croix en haut à droite du pop up
  $(".croix").click(function(){
    var project = $(this).closest(".popup");
    closeProject(project);
  });

  $(".next").click(function(){
    var actualPopup = $(this).closest(".popup");
    showNextProject(actualPopup);
  });

  $(".previous").click(function(){
    var actualPopup = $(this).closest(".popup");
    showPreviousProject(actualPopup);
  });

  function animateProject(id){
    
    // on fait remonter un peu plus haut le popup
    $(".popup").css("margin-top","-100px");

    // on scroll vers le titre portfolio si jamais l'utilisateur a cliqué sur un projet un peu plus bas dans la page
    $('html, body').stop().animate({scrollTop: $("#portfolio").offset().top}, 1000 ); 

    // on fait descendre le popup et on lui rajoute un display flex
    $(id).slideToggle(700);
    $(id).addClass("popup-actif");
    $(id).css('display', 'flex');
    
    // en même temps on cache tous les autres projets et on affiche la div vide qui permet d'éviter de voir la partie CV 
    $(".projets").hide();
    $(".cache").show();
    
    // on affiche les boutons de navigation (flèche droite et gauche)
    $(".btn-nav").show(300);

    // on cache les catégories permettant de trier et on attends un peu et on recache la div vide
    $(".work").fadeTo(300,0);
    setTimeout(function(){ $(".cache").hide();}, 1000);

    $(".up").click(function(){
      $('html, body').stop().animate({scrollTop: $("#portfolio").offset().top}, 1000 );
    });
  }

  function closeProject(project){

    project.removeClass("popup-actif");
    // on ferme le popup
    $(".popup").slideUp(700);

    // on re-affiche tous les projets
    $(".projets").show();

    // on attends un peu et on refait apparaître le menu de tri
    setTimeout(function(){ $(".work").fadeTo(300,1);}, 500);

    $(".btn-nav").hide(500);
  }

  function showNextProject(actualPopup){
    $(actualPopup).removeClass("popup-actif");
    $(actualPopup).hide(300);
    
    var test_actif = $(actualPopup).next().is(".popup");

    if(!test_actif){
      $(".projets").show();
      setTimeout(function(){ $(".work").fadeTo(300,1);}, 500);
    }
    else{
      var nextPopup = $(actualPopup).next();
      nextPopup.addClass("popup-actif");
      nextPopup.show(300);
    }
  }

  function showPreviousProject(actualPopup){
    $(actualPopup).removeClass("popup-actif");
    $(actualPopup).hide(300);

    var test_actif = $(actualPopup).prev().is(".popup");

    if(!test_actif){
      $(".projets").show();
      setTimeout(function(){ $(".work").fadeTo(300,1);}, 500);
    }
    else{
      var previousPopup = $(actualPopup).prev();
      previousPopup.addClass("popup-actif");
      previousPopup.show(300);
    }
  }

  function animateHamburger(){
    if($(".hamburger").hasClass("active")){
      TweenMax.to(".hamburger img",0.3,{x:0, ease:SteppedEase.config(8)});
      $(".hamburger").removeClass("active");
      $("body").css("overflow", "initial");
    }
    else{
      TweenMax.to(".hamburger img",0.3,{x:-400, ease:SteppedEase.config(8)});
      $(".hamburger").addClass("active");
      $("body").css("overflow", "hidden");
    }
    $(".menu2").slideToggle();
  }
  
  // ANIMATION SKILLS //

  $(".images_skills img").hide();

  // au clic sur une des catégories, on demande à animer l'image correspondante
  $(".anim img").bind("click", function(){
    var selected = $(this).parent().attr('id');
    animate(selected);
    $(".images_skills img").hide();
    showImage(selected);
  });

  $(".anim .title").bind("click",function(){
    var selected = $(this).parent().siblings().children().attr('id');
    animate(selected);
    $(".images_skills img").hide();
    showImage(selected)
  })
  
  
  var previousAnimated = null;

  // trois cas différents: si c'est la première fois qu'une image est animée, si on clique sur une image qui a déjà été animée, et le reste
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

  function showImage(selected){
    var img = "img_"+selected;
    $("#"+img).fadeIn(300);
    if(window.innerWidth < 769){
      $('html, body').stop().animate({scrollTop: $(".images_skills").offset().top}, 1000 );
    }
  }
  
});