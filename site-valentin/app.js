$(document).ready(function () {
    
  // Animation du menu avec un hamburger pour le menu sur format téléphone
  $(".hamburger").click(function(){
      animateHamburger();
  });
  
  $(".menu2 a").click(function(){
      animateHamburger();
      var target = $(this).attr("href");
      $('html, body').stop().animate({scrollTop: $(target).offset().top}, 700 ); 
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
    $(actualPopup).removeClass("popup-actif").hide(300);
    
    // on vérifie s'il existe un prochain popup
    var test_actif = $(actualPopup).next().is(".popup");

    if(!test_actif){
      $(".projets").show();
      setTimeout(function(){ $(".work").fadeTo(300,1);}, 500);
    }
    else{
      var nextPopup = $(actualPopup).next();
      nextPopup.addClass("popup-actif").show(300).css("display","flex");
    }
  }

  function showPreviousProject(actualPopup){
    $(actualPopup).removeClass("popup-actif").hide(300);

    var test_actif = $(actualPopup).prev().is(".popup");

    if(!test_actif){
      $(".projets").show();
      setTimeout(function(){ $(".work").fadeTo(300,1);}, 500);
    }
    else{
      var previousPopup = $(actualPopup).prev();
      previousPopup.addClass("popup-actif").show(300).css("display","flex");
    }
  }

/*function injectStyles(rule) {
  var div = $("<div />", {
    html: '&shy;<style>' + rule + '</style>'
  }).appendTo("body");    
} */

   

 
    
$(".menu2-nav").hide(); 
  function animateHamburger(){
    
    if($(".hamburger").hasClass("active")){
        $(this).clearQueue();
        TweenMax.to(".hamburger img",0.3,{x:0, ease:SteppedEase.config(8)});
        $(".hamburger").removeClass("active");
        $("body").css("overflow", "initial");
        TweenMax.to(".menu-sprite",1,{x:0, ease:SteppedEase.config(12)});
        setTimeout(function(){ $(".menu-sprite").hide();}, 1000);
        setTimeout(function(){ $(".menu2-nav").hide();}, 400);
         
    }
    else{
        $(this).clearQueue();
        TweenMax.to(".hamburger img",0.3,{x:-400, ease:SteppedEase.config(8)});
        $(".hamburger").addClass("active");
        $("body").css("overflow", "hidden");
        $(".menu-sprite").show(); 
        setTimeout(function(){ $(".menu2-nav").show();}, 500); 
        $(".menu2").show(); 
        TweenMax.to(".menu-sprite",1,{x:-8160, ease:SteppedEase.config(12)});
        //injectStyles('.disableclic{visibility: visible!important;}'),5000;    

        
    }
       
    
    
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

// FIN Animation skills //


// HOVER SPRITESHEETS //

if(window.innerWidth > 1200){
  $("#flecheup").mouseover(function(){
    TweenMax.to('#flecheup', 0.7, {repeat: -1,x: -1000,ease: SteppedEase.config(10)})
  });
}

$("#flecheup").mouseleave(function(){
 	TweenMax.to('#flecheup', 0, {x: 0})
});

$(".hover_project").mouseover(function(){
  TweenMax.to($('img',this),0.5,{x:-7350, ease:SteppedEase.config(21)});
});

$(".hover_project").mouseleave(function(){
  TweenMax.to($('img',this),0,{x:0, ease:SteppedEase.config(21)});
});

/////// JS comparaison d'images ///////

var dragging = false,
    scrolling = false,
    resizing = false;
//cache jQuery objects
var imageComparisonContainers = $('.cd-image-container');
//check if the .cd-image-container is in the viewport 
//if yes, animate it
checkPosition(imageComparisonContainers);
$(window).on('scroll', function(){
    if( !scrolling) {
        scrolling =  true;
        ( !window.requestAnimationFrame )
            ? setTimeout(function(){checkPosition(imageComparisonContainers);}, 100)
            : requestAnimationFrame(function(){checkPosition(imageComparisonContainers);});
    }
});

//make the .cd-handle element draggable and modify .cd-resize-img width according to its position
imageComparisonContainers.each(function(){
    var actual = $(this);
    drags(actual.find('.cd-handle'), actual.find('.cd-resize-img'), actual, actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-image-label[data-type="modified"]'));
});

//upadate images label visibility
$(window).on('resize', function(){
    if( !resizing) {
        resizing =  true;
        ( !window.requestAnimationFrame )
            ? setTimeout(function(){checkLabel(imageComparisonContainers);}, 100)
            : requestAnimationFrame(function(){checkLabel(imageComparisonContainers);});
    }
});

function checkPosition(container) {
    container.each(function(){
        var actualContainer = $(this);
        if( $(window).scrollTop() + $(window).height()*0.5 > actualContainer.offset().top) {
            actualContainer.addClass('is-visible');
        }
    });

    scrolling = false;
}

function checkLabel(container) {
    container.each(function(){
        var actual = $(this);
        updateLabel(actual.find('.cd-image-label[data-type="modified"]'), actual.find('.cd-resize-img'), 'left');
        updateLabel(actual.find('.cd-image-label[data-type="original"]'), actual.find('.cd-resize-img'), 'right');
    });

    resizing = false;
}

//draggable funtionality - credits to http://css-tricks.com/snippets/jquery/draggable-without-jquery-ui/
function drags(dragElement, resizeElement, container, labelContainer, labelResizeElement) {
    dragElement.on("mousedown vmousedown", function(e) {
        dragElement.addClass('draggable');
        resizeElement.addClass('resizable');

        var dragWidth = dragElement.outerWidth(),
            xPosition = dragElement.offset().left + dragWidth - e.pageX,
            containerOffset = container.offset().left,
            containerWidth = container.outerWidth(),
            minLeft = containerOffset + 10,
            maxLeft = containerOffset + containerWidth - dragWidth - 10;
        
        dragElement.parents().on("mousemove vmousemove", function(e) {
            if( !dragging) {
                dragging =  true;
                ( !window.requestAnimationFrame )
                    ? setTimeout(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);}, 100)
                    : requestAnimationFrame(function(){animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement);});
            }
        }).on("mouseup vmouseup", function(e){
            dragElement.removeClass('draggable');
            resizeElement.removeClass('resizable');
        });
        e.preventDefault();
    }).on("mouseup vmouseup", function(e) {
        dragElement.removeClass('draggable');
        resizeElement.removeClass('resizable');
    });
}

function animateDraggedHandle(e, xPosition, dragWidth, minLeft, maxLeft, containerOffset, containerWidth, resizeElement, labelContainer, labelResizeElement) {
    var leftValue = e.pageX + xPosition - dragWidth;   
    //constrain the draggable element to move inside his container
    if(leftValue < minLeft ) {
        leftValue = minLeft;
    } else if ( leftValue > maxLeft) {
        leftValue = maxLeft;
    }

    var widthValue = (leftValue + dragWidth/2 - containerOffset)*100/containerWidth+'%';
    
    $('.draggable').css('left', widthValue).on("mouseup vmouseup", function() {
        $(this).removeClass('draggable');
        resizeElement.removeClass('resizable');
    });

    $('.resizable').css('width', widthValue); 

    updateLabel(labelResizeElement, resizeElement, 'left');
    updateLabel(labelContainer, resizeElement, 'right');
    dragging =  false;
}

function updateLabel(label, resizeElement, position) {
    if(position == 'left') {
        ( label.offset().left + label.outerWidth() < resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
    } else {
        ( label.offset().left > resizeElement.offset().left + resizeElement.outerWidth() ) ? label.removeClass('is-hidden') : label.addClass('is-hidden') ;
    }
}

