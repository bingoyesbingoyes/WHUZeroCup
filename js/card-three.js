$(function() {
    var cardLength = $("#card-three .card").length - 1;
    var now = cardLength;
    $("#button-three .button-left").on("click", function() {
        $('#card-three span').eq(`${now}`).animate({width:'toggle'}, 450);
        --now;
        if (now < 0) {
            now = cardLength;
            $("#card-three span").animate({width:"toggle"}, 0);
            $("#card-three span:last").animate({width:"toggle"}, 0);
            $("#card-three span:last").animate({width:"toggle"}, 450);
        }
    });
    $("#button-three .button-right").on("click", function() {
        ++now;
        if (now > cardLength) {
            now = 0;
            $("#card-three span").animate({width:"toggle"}, 0);
            $("#card-three span:first").animate({width:"toggle"}, 0);
            $("#card-three span:first").animate({width:"toggle"}, 450);
        }
        $("#card-three span").eq(`${now}`).animate({width:'toggle'}, 450);
    });
})