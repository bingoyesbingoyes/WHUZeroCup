$(function() {
    var cardLength = $("#card-two .card").length - 1;
    var now = cardLength;
    $("#button-two .button-left").on("click", function() {
        $('#card-two span').eq(`${now}`).animate({width:'toggle'}, 450);
        --now;
        if (now < 0) {
            now = cardLength;
            $("#card-two span").animate({width:"toggle"}, 0);
            $("#card-two span:last").animate({width:"toggle"}, 0);
            $("#card-two span:last").animate({width:"toggle"}, 450);
        }
    });
    $("#button-two .button-right").on("click", function() {
        ++now;
        if (now > cardLength) {
            now = 0;
            $("#card-two span").animate({width:"toggle"}, 0);
            $("#card-two span:first").animate({width:"toggle"}, 0);
            $("#card-two span:first").animate({width:"toggle"}, 450);
        }
        $("#card-two span").eq(`${now}`).animate({width:'toggle'}, 450);
    });
})