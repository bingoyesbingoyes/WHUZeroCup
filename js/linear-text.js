$(function() {
    $("#bg-video-2").hide();
    $("#bg-video-3").hide();
    $("#pos-one .content").animate({
        opacity: 0,
        left: -200
    })
    $("#pos-two").fadeTo(0, 0);
    $("#pos-three").fadeTo(0, 0);
    $("#pos-four").fadeTo(0, 0);
    $("#pos-five").fadeTo(0, 0);
    $('.card-box-2').animate({
        bottom: -300,
        left: -200,
        opacity: 0
    }, 0);
    $(".comment-board").animate({
        opacity: 0,
    })
    var linearText = $("section .linear-text");
    $(window).on("scroll", function() {
        if (window.scrollY >= 3200) {
            $('.card-box-2').animate({
                bottom: 0,
                left: 0,
                opacity: 1
            }, 2000);
        }
        if (window.scrollY >= 6300 && window.scrollY <= 6400) {
            var letters =  linearText.text().split("");
            linearText.text("");
            $(letters).each(function (i, letter) {
                var span = $("<span></span>");
                span.text(letter);
                span.css("animation", "animateLinearText 3s ease-out both");
                span.css("animation-delay", `${i * 0.15}s`);
                linearText.append(span);
            });
            $("#bg-video-3").css({"filter": "none", "transition": "6s"});
        };
        if (window.scrollY  < 6000) {
            $("#bg-video-3").css({"filter": "grayscale()", "transition": "3s"});
        };
        if (window.scrollY >= 100 && window.scrollY <= 600) {
            $('#pos-one .content').animate({
                left: 0,
                opacity: 1
            }, 2000);
            $("#index-one").css("border-bottom", "2px solid rgba(3,233,244,.4)");
            $("#index-one").css("border-radius", "12px");
            $("#index-one").css("background-color", "var(--color-header-li-bg)");       
            $("#index-one").css("transition", "2s");     
        } else {
            $("#index-one").css("border", "inherit");
            $("#index-one").css("background-color", "inherit");
        }
        if (window.scrollY >= 601 && window.scrollY <= 1500) {
            $("#pos-two").fadeTo(2000, 1);
            $('#pos-two .content').animate({
                left: 0,
                opacity: 1
            }, 2000);
            $("#index-two").css("border-bottom", "2px solid rgba(3,233,244,.4)");
            $("#index-two").css("border-right", "0px solid rgba(3,233,244,.4)");
            $("#index-two").css("border-radius", "12px");
            $("#index-two").css("transition", "2s");
            $("#index-two").css("background-color", "var(--color-header-li-bg)");            
        } else {
            $("#index-two").css("border", "inherit");
            $("#index-two").css("background-color", "inherit");
        }
        if (window.scrollY >= 1501 && window.scrollY <= 2200) {
            $("#pos-three").fadeTo(2000, 1);
            $("#pos-three .content").animate({
                left: 0,
                opacity: 1
            }, 2000);
            $("#index-three").css("border-bottom", "2px solid rgba(3,233,244,.4)");
            $("#index-three").css("border-right", "0px solid rgba(3,233,244,.4)");
            $("#index-three").css("border-radius", "12px");
            $("#index-three").css("background-color", "var(--color-header-li-bg)");            
            $("#index-three").css("transition", "2s");
        } else {
            $("#index-three").css("border", "inherit");
            $("#index-three").css("background-color", "inherit");
        }
        if (window.scrollY >= 2201 && window.scrollY <= 2900) {
            $("#pos-four").fadeTo(2000, 1);
            $('#pos-four .content').animate({
                left: 0,
                opacity: 1
            }, 2000);
            $("#index-four").css("border-bottom", "2px solid rgba(3,233,244,.4)");
            $("#index-four").css("border-right", "0px solid rgba(3,233,244,.4)");
            $("#index-four").css("border-radius", "12px");
            $("#index-four").css("background-color", "var(--color-header-li-bg)");            
            $("#index-four").css("transition", "2s");
        } else {
            $("#index-four").css("border", "inherit");
            $("#index-four").css("background-color", "inherit");
        }
        if (window.scrollY >= 3600 && window.scrollY <= 5000) {
            $("#index-five").css("border-bottom", "2px solid rgba(3,233,244,.4)");
            $("#index-five").css("border-right", "0px solid rgba(3,233,244,.4)");
            $("#index-five").css("border-radius", "12px");
            $("#index-five").css("background-color", "var(--color-header-li-bg)");            
            $("#index-five").css("transition", "2s");            
        } else {
            $("#index-five").css("border", "inherit");
            $("#index-five").css("background-color", "inherit");
        }
        if (window.scrollY >= 5200 && window.scrollY <= 6200) {
            $("#index-six").css("border-bottom", "2px solid rgba(3,233,244,.4)");
            $("#index-six").css("border-right", "0px solid rgba(3,233,244,.4)");
            $("#index-six").css("border-radius", "12px");
            $("#index-six").css("background-color", "var(--color-header-li-bg)");            
            $("#index-six").css("transition", "2s");            
        } else {
            $("#index-six").css("border", "inherit");
            $("#index-six").css("background-color", "inherit");
        }
        if (window.scrollY >= 6600) {
            $(".comment-board").animate({
                opacity: 1,
            }, 2000)        
            $("#intro-author").css("border-bottom", "2px solid rgba(3,233,244,.4)");
            $("#intro-author").css("border-right", "0px solid rgba(3,233,244,.4)");
            $("#intro-author").css("border-radius", "12px");
            $("#intro-author").css("background-color", "var(--color-header-li-bg)");            
            $("#intro-author").css("transition", "2s");
        } else {
            $("#intro-author").css("border", "inherit");
            $("#intro-author").css("background-color", "inherit");
        }

        if (window.scrollY <= 4400) {
            $("#bg-video-1").show();
            $("#bg-video-2").hide();
            $("#bg-video-3").hide();
        } else if (window.scrollY > 4400 && window.scrollY < 5600) {
            $("#bg-video-2").show();
            $("#bg-video-1").hide();
            $("#bg-video-3").hide();
        } else {
            $("#bg-video-3").show();
            $("#bg-video-1").hide();
            $("#bg-video-2").hide();
        }
    });
})