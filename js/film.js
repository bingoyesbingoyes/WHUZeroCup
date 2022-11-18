$(function() {
    $("#film .right-part video").hide();
    $("#open-button").on("click", function() {
        if (! $("#open-button").hasClass("tmp-class")) {
            $("#open-button").text("关闭视频");
            $("#film .left-part").animate({
                left: -500
            }, 2000);
            $("#film .left-part p").hide();
            $("#film .left-part h2").hide();
            $("#open-button").addClass("tmp-class");
            $("#film .right-part").animate({
                left: -500
            }, 2000);
            $("#film .right-part video").delay(1000).fadeIn(2000);
            $("#film .right-part video").animate({
                left: 250
            }, 500);
            $("#film .right-part video").get(0).play();
            $("#film .right-part").css("position", "fixed");
        } else {
            $("#open-button").text("开启视频");
            $("#film .right-part").css("position", "relative");               
            $("#film .right-part video").get(0).remove();
            $("#film .right-part video").animate({
                left: 0
            }, 500);
            $("#film .right-part video").delay(1000).fadeOut(2000);
            $("#film .right-part").animate({
                left: 0
            }, 2000);
            $("#film .left-part p").show();
            $("#film .left-part h2").show();
            $("#open-button").removeClass("tmp-class");
            $("#film .left-part").animate({
                left: 0
            }, 2000);
        }
    })
    $("#more-button").on("click", function() {
        window.location.href = "flow.html";
    })
})