$(function() {
    var totalHeight = $("body").prop('scrollHeight') - $(window).height();
    $(window).on("scroll", function() {
        var progressHeight = ($(window).prop('pageYOffset') / totalHeight) * 80;
        $(".progressbar").css("height", progressHeight + "%");
        // console.log(`${document.body.scrollHeight}`);
    })
})