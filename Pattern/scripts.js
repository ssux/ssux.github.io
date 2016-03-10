

for (var i = 0; i < 25; i++) {
    $("body").append("<div class='sheep'></div>");
};

var randomNum = Math.floor(Math.random()*200) + "px";

$("#sheep").mouseenter(function(){
    $(this).css("background-color", "blue" )
    $(this).css('transform', 'translate(-' + randomNum + 'px)');
});