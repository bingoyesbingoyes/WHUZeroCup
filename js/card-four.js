$(function() {
    var cardLength = $("#card-four .card").length - 1;
    var now = cardLength;
    $("#button-four .button-left").on("click", function() {
        $('#card-four span').eq(`${now}`).animate({width:'toggle'}, 450);
        --now;
        if (now < 0) {
            now = cardLength;
            $("#card-four span").animate({width:"toggle"}, 0);
            $("#card-four span:last").animate({width:"toggle"}, 0);
            $("#card-four span:last").animate({width:"toggle"}, 450);
        }
    });
    $("#button-four .button-right").on("click", function() {
        ++now;
        if (now > cardLength) {
            now = 0;
            $("#card-four span").animate({width:"toggle"}, 0);
            $("#card-four span:first").animate({width:"toggle"}, 0);
            $("#card-four span:first").animate({width:"toggle"}, 450);
        }
        $("#card-four span").eq(`${now}`).animate({width:'toggle'}, 450);
    });
})