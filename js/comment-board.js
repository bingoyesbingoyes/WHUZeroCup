$(function() {
    $(".comment-button").on("click", function( e ) {
        var p = $("<p></p>");
        var name = $("<span></span>");
        name.text($("#name").val() + " :");
        p.append(name);
        $("#name").val("");
        
        var text = $("<span></span");
        text.text($("textarea").val());
        p.append(text);
        $("textarea").val("");
        
        var change = $("<button></button>");
        change.text("修改");
        change.addClass("change");
        change.on("click", clickChangeFn);
        
        var del = $("<button></button>");
        del.text("删除");
        del.addClass("del");
        del.on("click", clickChangeFn);

        p.append(change);
        p.append(del);
        
        $(".comment-box").append(p);
    })
    
    function clickChangeFn( e ){
        if ($(e.target).hasClass("change")) {
            var span = e.target.parentElement.firstElementChild.nextElementSibling;
            var value = prompt("your comment is: " + $(span).text());
            $(span).text(value);
        } else if ($(e.target).hasClass("del")) {
            $(e.target).parent().remove();
        }
    }
})