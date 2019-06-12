// ANIMATION SKILLS //

$(document).ready(function () {
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
        showImage(selected);
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