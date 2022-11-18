$(function() {
    let video = $("video");
    console.log(video.length);
    for (let i = 0; i < video.length; ++i) {
        $(video[i]).on("mouseenter", function( e ) {
            video[i].play();
        })
        $(video[i]).on("mouseout", function( e ) {
            video[i].pause();
        })
    }
})