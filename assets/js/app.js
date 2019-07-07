$(document).ready(function () {

  (function($){
    // Bind the function to global jQuery object.
    $.fn.reveal = function(){
        // Arguments is a variable which is available within all functions
        // and returns an object which holds the arguments passed.
        // It is not really an array, so by calling Array.prototype
        // he is actually casting it into an array.
        var args = Array.prototype.slice.call(arguments);

        // For each elements that matches the selector:
        return this.each(function(){
            // this is the dom element, so encapsulate the element with jQuery.
            var img = $(this),
                src = img.data("src");

            // If there is a data-src attribute, set the attribute
            // src to make load the image and bind an onload event.
            src && img.attr("src", src).on('load',function(){
                // Call the first argument passed (like fadeIn, slideIn, default is 'show').
                // This piece is like doing img.fadeIn(1000) but in a more dynamic way.
                if (innerWidth <= 768) {
                  $(".next, .previous, .croix, .up").hide();
                }
                img[args[0]||"show"].apply(img, args.splice(1));
            });
        });
    }
}(jQuery));

  // Animation du menu avec un hamburger pour le menu sur format téléphone
  $(".hamburger").click(function () {
    animateHamburger();
  });

  $(".menu2 a").click(function () {
    animateHamburger();
    var target = $(this).attr("href");
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top
    }, 700);
  });

  $(".menu a").click(function () {
    var target = $(this).attr("href");
    $('html, body').stop().animate({
      scrollTop: $(target).offset().top
    }, 700);
  });

  function animateHamburger() {
    if ($(".hamburger").hasClass("active")) {
      TweenMax.to(".hamburger img", 0.3, {
        x: 0,
        ease: SteppedEase.config(5)
      });
      $(".hamburger").removeClass("active");
      $("body").css("overflow", "initial");
      TweenMax.to(".menu-sprite", 1, {
        x: 0,
        ease: SteppedEase.config(16)
      });
      setTimeout(function () {
        $(".menu2").hide();
      }, 1000);
    } else {
      TweenMax.to(".hamburger img", 0.3, {
        x: -250,
        ease: SteppedEase.config(5)
      });
      $(".hamburger").addClass("active");
      $("body").css("overflow", "hidden");
      $(".menu2").show();
      TweenMax.to(".menu-sprite", 2, {
        x: -10200,
        ease: SteppedEase.config(16)
      });
    }
  }

  // LANGAGE CHOICE //

  if($("html").attr("lang") == "en"){
    $("#english a").css("font-weight",600);
  }
  if($("html").attr("lang") == "fr"){
    $("#francais a").css("font-weight",600);
  }

  // HOVER SPRITESHEETS //

  if (window.innerWidth > 1200) {
    $(".up img").mouseover(function () {
      TweenMax.to('.up img', 0.7, {
        repeat: -1,
        x: -1000,
        ease: SteppedEase.config(10)
      })
    });
  }

  $(".up img").mouseleave(function () {
    TweenMax.to('.up img  ', 0, {
      x: 0
    })
  });

  $(".hover_project").mouseover(function () {
    TweenMax.to($('img', this), 0.3, {
      x: -3850,
      ease: SteppedEase.config(11)
    });
  });

  $(".hover_project").mouseleave(function () {
    TweenMax.to($('img', this), 0, {
      x: 0,
      ease: SteppedEase.config(11)
    });
  });


  if (window.innerWidth > 1200) {
    $(".next img").mouseover(function () {
      TweenMax.to('.next img', 0.7, {
        repeat: -1,
        x: -1000,
        ease: SteppedEase.config(10)
      })
    });
  }

  $(".next img").mouseleave(function () {
    TweenMax.to('.next img  ', 0, {
      x: 0
    })
  });

  if (window.innerWidth > 1200) {
    $(".previous img").mouseover(function () {
      TweenMax.to('.previous img', 0.7, {
        repeat: -1,
        x: -1000,
        ease: SteppedEase.config(10)
      })
    });
  }

  $(".previous img").mouseleave(function () {
    TweenMax.to('.previous img  ', 0, {
      x: 0
    })
  });

  if (window.innerWidth > 1200) {
    $(".croix img").mouseover(function () {
      TweenMax.to('.croix img', 0.4, {
        repeat: -1,
        x: -225,
        ease: SteppedEase.config(3)
      })
    });
  }

  $(".croix img").mouseleave(function () {
    TweenMax.to('.croix img  ', 0, {
      x: 0
    })
  });

  if (window.innerWidth > 1200) {
    $("#socialnetwork img").mouseover(function () {
      TweenMax.to('#socialnetwork img', 0.4, {
        repeat: -1,
        x: -25,
        ease: SteppedEase.config(1)
      })
    });
  }

  $("#socialnetwork img").mouseleave(function () {
    TweenMax.to('#socialnetwork img  ', 0, {
      x: 0
    })
  });


  if (window.innerWidth > 1200) {
    $("#socialnetwork2 img").mouseover(function () {
      TweenMax.to('#socialnetwork2 img', 0.4, {
        repeat: -1,
        x: -25,
        ease: SteppedEase.config(1)
      })
    });
  }

  $("#socialnetwork2 img").mouseleave(function () {
    TweenMax.to('#socialnetwork2 img  ', 0, {
      x: 0
    })
  });

});