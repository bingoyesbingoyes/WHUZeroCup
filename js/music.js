$(function() {
    $(window).on("scroll", function(event) {
        var audio = $("video");
        audio.play();
        audio.muted = false;
        // audio.prop("muted", false);
    })
})