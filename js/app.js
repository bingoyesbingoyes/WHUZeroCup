const app = Vue.createApp({
    data() {
        return {
            starsShow: false
        }
    },
    methods: {
        starsShowFn() {
            this.starsShow = !this.starsShow;
        }
    },
    mounted() {
        $(function () {
            this.starsShow = !this.starsShow;
            $("img").on("click", function () {
                $("section .shell h2").css("visibility", "visible");
                $("section .shell h2").css("animation", "animateFly 20s ease-in-out 1");
                $("#unfire-rocket").css("visibility", "hidden");
                $("#fire-rocket").css("visibility", "visible");
                $("#fire-rocket").css("animation", "animateRocket 7s ease-in forwards");
                setTimeout(function () {
                    $(window).attr('location', "main.html");
                }, 19500);
            });
        })
    }
});

app.mount("#app");