// Animations tri portfolio
$(document).ready(function () {

  // ajout automatique de l'attribut data-cat pour chaque projet
  $(".popup").each(function() {
    var tab = [];

    var numProject = $(this).attr("class").split(' ')[3];

    tab = $("#" + numProject).attr("class").split(' ');

    var str = "";

    for(var i = 2; i< tab.length; i++){
      if(i == (tab.length -1)){
        str = str + tab[i];
      }
      else{
        str = str + tab[i] + ' ';
      }
    }
    $(this).attr("data-cat", str);
  });

  if (window.innerWidth < 740) {
    $(".filter-group").addClass("is-active");
  }

  if ($(".filter-group").hasClass("is-active")) {

    $(".selected-cat, .fa-angle-down").click(function () {
      $(".fa-angle-down").toggleClass('fa-rotate-180');
      $(".filter-list").slideToggle();
    });

    $(".filter-item").click(function () {
      otherFilterActive = false;
      $(".selected-cat").text("");
      $(".selected-cat").text($(this).text());
      $(".fa-angle-down").toggleClass('fa-rotate-180');
      $(".filter-list").slideToggle();
    });
  }

  $(".filter-item").click(function () {
    otherFilterActive = false;
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
      if (key == 39) {
        showNextProject(actualPopup);
      }
      if (key == 37) {
        showPreviousProject(actualPopup);
      }
      if (key == 27) {
        closeProject(actualPopup);
      }
    }
  );

  $(".projets div").on('click', function () {
    // on récupère l'id du projet cliqué
    var id = $(this).attr("id");
    openProject('.' + id);
  });

  // au clic sur la croix en haut à droite du pop up
  $(".croix").click(function () {
    closeProject($(".popup-actif"));
  });

  $(".bottom-cross").click(function () {
    closeProject($(".popup-actif"));
    $(".bottom-menu").hide();
  });

  $(".next").click(function () {
    showNextProject($(".popup-actif"));
  });

  $(".previous").click(function () {
    showPreviousProject($(".popup-actif"));
  });

  $(".bottom-previous").click(function () {
    showPreviousProject($(".popup-actif"));
  });

  $(".bottom-next").click(function () {
    showNextProject($(".popup-actif"));
  });


  $(window).scroll(function (e) {
    var scrollTop = $(this).scrollTop() + ($(window).height() / 2);
    if (scrollTop > $(".timeline").offset().top) {
      $(".bottom-menu").hide();
    } else {
      if ($(".popup").hasClass("popup-actif") && innerWidth <= 768) {
        $(".bottom-menu").show();
      }
    }
  });

  function openProject(id) {

    if(!($(id).hasClass("project-visited"))){
      $(id+" img").reveal();
    }
    
    // si l'utilisateur utilise un smartphone, on affiche une interface pour naviguer
    if (innerWidth <= 768) {
      $(".bottom-menu").show();
      $(".next, .previous, .croix, .up").hide();
    }

    // on scroll vers le titre portfolio si jamais l'utilisateur a cliqué sur un projet un peu plus bas dans la page
    $('html, body').stop().animate({
      scrollTop: $("#portfolio").offset().top
    }, 0);

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
    $(".work").fadeTo(300, 0);
    setTimeout(function () {
      $(".cache").hide();
    }, 1000);

    $(id).addClass("project-visited");

    $(".up").click(function () {
      $('html, body').stop().animate({
        scrollTop: $("#portfolio").offset().top
      }, 1000);
    });
  }

  function closeProject(project) {

    project.removeClass("popup-actif");
    // on ferme le popup
    $(".popup").slideUp(700);

    // on re-affiche tous les projets
    $(".projets").show();

    // on attends un peu et on refait apparaître le menu de tri
    setTimeout(function () {
      $(".work").fadeTo(300, 1);
    }, 500);

    $(".btn-nav").hide(500);

    if (innerWidth <= 768) {
      var idProject = '#' + $(project).attr('class').split(" ")[3];
      setTimeout(function () {
        $('html, body').stop().animate({
          scrollTop: $(idProject).offset().top
        }, 0)
      }, 700);
    }

  }

  function showNextProject(actualPopup) {

    

    if (innerWidth <= 768) {
      $('html, body').stop().animate({
        scrollTop: $("#portfolio").offset().top
      }, 0);
    }

    $(actualPopup).removeClass("popup-actif").hide(300);
    // on récupère la catégorie du projet
    var cat_project = $(actualPopup).attr("data-cat");

    // on vérifie s'il existe un prochain popup
    var test_actif = $(actualPopup).next().is(".popup");

    // si une catégorie est selectionnée, on vérifie si il existe un projet suivant de ce type
    if($(".filtres-filter-btn-active").attr("data-filter") != "all"){
      var cat_filter = $(".filtres-filter-btn-active").attr("data-filter").split('.')[1];
      var test_actif = ($(actualPopup).nextAll("[data-cat~="+cat_filter+"]:first").length > 0);
    }

    if (!test_actif) {
      $(".projets").show();
      setTimeout(function () {
        $(".work").fadeTo(300, 1);
      }, 500);
      $(".bottom-menu").hide();
    } else {
        if($(".filtres-filter-btn-active").attr("data-filter") != "all"){
          var cat_filter = $(".filtres-filter-btn-active").attr("data-filter").split('.')[1];
          var nextPopup = $(actualPopup).nextAll("[data-cat~="+cat_filter+"]:first");
        }
        else{
          var nextPopup = $(actualPopup).next();
        }
        
      nextPopup.addClass("popup-actif").show(300).css("display", "flex");
      if(!(nextPopup.hasClass("project-visited"))){
        nextPopup.find("img").reveal();
      }
      nextPopup.addClass("project-visited");
    }

  }

  function showPreviousProject(actualPopup) {

    if (innerWidth <= 768) {
      $('html, body').stop().animate({
        scrollTop: $("#portfolio").offset().top
      }, 0);
    }

    $(actualPopup).removeClass("popup-actif").hide(300);

    // on récupère la catégorie du projet
    var cat_project = $(actualPopup).attr("data-cat");

    // on vérifie s'il existe un précédent popup
    var test_actif = $(actualPopup).prev().is(".popup");

    // si une catégorie est selectionnée, on vérifie si il existe un projet précédent de ce type
    if($(".filtres-filter-btn-active").attr("data-filter") != "all"){
      var cat_filter = $(".filtres-filter-btn-active").attr("data-filter").split('.')[1];
      var test_actif = ($(actualPopup).prevAll("[data-cat~="+cat_filter+"]:first").length > 0);
    }

    if (!test_actif) {
      $(".projets").show();
      setTimeout(function () {
        $(".work").fadeTo(300, 1);
      }, 500);
      $(".bottom-menu").hide();
    } else {
      if($(".filtres-filter-btn-active").attr("data-filter") != "all"){
        var cat_filter = $(".filtres-filter-btn-active").attr("data-filter").split('.')[1];
        var previousPopup = $(actualPopup).prevAll("[data-cat~="+cat_filter+"]:first");
      }
      else{
        var previousPopup = $(actualPopup).prev();
      }
      previousPopup.addClass("popup-actif").show(300).css("display", "flex");
      if(!(previousPopup.hasClass("project-visited"))){
        previousPopup.find("img").reveal();
      }
      previousPopup.addClass("project-visited");
    }

    
  }

  $("#voirplus").click(function () {
    $('html, body').stop().animate({
      scrollTop: $("#portfolio").offset().top
    }, 500);
  });

});