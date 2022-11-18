$(function() {
    let sideLeft = $("#side-left");
    let sideRight = $("#side-right");
    $(window).on("scroll", function() {
        $(sideLeft).css("left", window.pageYOffset + "px");
        $(sideRight).css("left", -window.pageYOffset + "px");

        if (window.scrollY >= 1500 && window.scrollY < 1600) {
            $("#side-video-box .side-video .content").fadeTo(1000, .5);
        }
        if (window.scrollY >= 2000) {
            $("#side-video-box .side-video .content").fadeOut(1000);
        }
    })
})