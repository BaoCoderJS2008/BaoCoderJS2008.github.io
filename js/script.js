$(document).ready(function() {
    var sound = new Audio();
    var n = 5;
    var time = setInterval(() => {
        n--;
        if (n <= 0) {
            clearInterval(time);
            $(".start").hide();
            $(".main").show();
            sound.src = "./sound/start.mp3";
            sound.play();
        }
    }, 1000);
    $(".main #taskbar_logo").click(function() {
        $(".main #taskbar_menu").toggle();
    });
});