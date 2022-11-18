$(function() {
    $("#intro-author").on("click", function() {
        var details = $("details");
        var commentBoard = $(".comment-board");
        if (!details.attr("open")) {
            details.attr("open", "open");
            commentBoard.css("opacity", "0");
            commentBoard.css("visibility", "hidden");
            if (window.matchMedia("(max-width: 720px)").matches) {
                $("#last-sentense").css("visibility", "visible");
            } else {
                $("#last-sentense").css("visibility", "hidden");
            }
            var footerLinearText = $("#footer-linear-text");
            var letters =  footerLinearText.text().split("");
            footerLinearText.text("");
            $(letters).each(function (i, letter) {
                var span = $("<span></span>");
                span.text(letter);
                span.css({"font-size": "3em", "font-weight": "700", "color": "#fff", "white-space": "pre"})
                span.css("animation", "animateLinearText 3s ease-out both");
                if (i <= 5) {
                    span.css("animation-delay", `${i * 0.01}s`);
                }
                else {
                    span.css("animation-delay", `${i * 0.2}s`);
                }
                footerLinearText.append(span);
            });
        } else {
            details.removeAttr("open");
            commentBoard.css("opacity", "1");
            commentBoard.css("visibility", "visible");
            $("#last-sentense").css("visibility", "hidden");
        }
    })

})