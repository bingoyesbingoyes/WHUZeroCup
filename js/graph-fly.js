$(function() {
    // var blocks = $(".blocks");
    var blocks = document.getElementsByClassName("blocks");
    for (var i = 1; i < 400; ++i) {
        // 这里必须用单引号，否则与前面"构成歧义
        // banner.html($("<div class='blocks'></div>"));
        // var block = $("<div class='blocks'></div>");
        $(".banner")[0].innerHTML += "<div class='blocks'></div>";
        // $(".banner")[0].append(block);
        blocks[i].style.animationDelay = `${i * 0.04}s`;
        // blocks[i].css("animation-delay", `${i * 0.04}` + "s");
    }
})