// 实现轮播图的
$(function() {
    var cardLength = $("#card-one .card").length - 1;
    var now = cardLength;
    $("#button-one .button-left").on("click", function() {
        $('#card-one span').eq(`${now}`).animate({width:'toggle'}, 450);
        --now;
        if (now < 0) {
            now = cardLength;
            $("#card-one span").animate({width:"toggle"}, 0);
            $("#card-one span:last").animate({width:"toggle"}, 0);
            $("#card-one span:last").animate({width:"toggle"}, 450);
        }
        // console.log(`${now}`);
    });
    $("#button-one .button-right").on("click", function() {
        ++now;
        if (now > cardLength) {
            now = 0;
            $("#card-one span").animate({width:"toggle"}, 0);
            $("#card-one span:first").animate({width:"toggle"}, 0);
            $("#card-one span:first").animate({width:"toggle"}, 450);
        }
        $("#card-one span").eq(`${now}`).animate({width:'toggle'}, 450);
    });
})