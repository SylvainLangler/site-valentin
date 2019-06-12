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

  
// HOVER SPRITESHEETS //

if(window.innerWidth > 1200){
  $(".up img").mouseover(function(){
    TweenMax.to('.up img', 0.7, {repeat: -1,x: -1000,ease: SteppedEase.config(10)})
  });
}

$(".up img").mouseleave(function(){
 	TweenMax.to('.up img  ', 0, {x: 0})
});

$(".hover_project").mouseover(function(){
  TweenMax.to($('img',this),0.3,{x:-3850, ease:SteppedEase.config(11)});
});

$(".hover_project").mouseleave(function(){
  TweenMax.to($('img',this),0,{x:0, ease:SteppedEase.config(11)});
});


if(window.innerWidth > 1200){
  $(".next img").mouseover(function(){
    TweenMax.to('.next img', 0.7, {repeat: -1,x: -1000,ease: SteppedEase.config(10)})
  });
}

$(".next img").mouseleave(function(){
 	TweenMax.to('.next img  ', 0, {x: 0})
});

if(window.innerWidth > 1200){
  $(".previous img").mouseover(function(){
    TweenMax.to('.previous img', 0.7, {repeat: -1,x: -1000,ease: SteppedEase.config(10)})
  });
}

$(".previous img").mouseleave(function(){
 	TweenMax.to('.previous img  ', 0, {x: 0})
});

if(window.innerWidth > 1200){
  $(".croix img").mouseover(function(){
    TweenMax.to('.croix img', 0.4, {repeat: -1,x: -225,ease: SteppedEase.config(3)})
  });
}

$(".croix img").mouseleave(function(){
 	TweenMax.to('.croix img  ', 0, {x: 0})
});

if(window.innerWidth > 1200){
  $("#socialnetwork img").mouseover(function(){
    TweenMax.to('#socialnetwork img', 0.4, {repeat: -1,x: -25,ease: SteppedEase.config(1)})
  });
}

$("#socialnetwork img").mouseleave(function(){
 	TweenMax.to('#socialnetwork img  ', 0, {x: 0})
});


if(window.innerWidth > 1200){
  $("#socialnetwork2 img").mouseover(function(){
    TweenMax.to('#socialnetwork2 img', 0.4, {repeat: -1,x: -25,ease: SteppedEase.config(1)})
  });
}

$("#socialnetwork2 img").mouseleave(function(){
 	TweenMax.to('#socialnetwork2 img  ', 0, {x: 0})
});


function animateHamburger(){
  if($(".hamburger").hasClass("active")){
    TweenMax.to(".hamburger img",0.3,{x:0, ease:SteppedEase.config(8)});
    $(".hamburger").removeClass("active");
    $("body").css("overflow", "initial");
    TweenMax.to(".menu-sprite",1,{x:0, ease:SteppedEase.config(12)});
    setTimeout(function(){ $(".menu2").hide();}, 1500);
  }
  else{
    TweenMax.to(".hamburger img",0.3,{x:-400, ease:SteppedEase.config(8)});
    $(".hamburger").addClass("active");
    $("body").css("overflow", "hidden");
    $(".menu2").show(); 
    TweenMax.to(".menu-sprite",1,{x:-8160, ease:SteppedEase.config(12)});
  }
}


});
