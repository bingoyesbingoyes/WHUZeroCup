$(function() {
    $(window).on("scroll", function() {
        $("header").toggleClass("sticky", this.window.scrollY > 0);
    })
})