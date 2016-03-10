

for (var i = 0; i < 25; i++) {
    $("body").append("<div class='sheep'></div>");
};

var bgArray = ["red", "blue", "black", "green", "white", "silver",
    "coral", "darkred", "orange", "gold", "ivory", "lawngreen", "lime",
    "mediumorchid", "midnightblue", "yellow", "steelblue"]


$(".sheep").mouseenter(function(){
    var randomNum = Math.floor(Math.random()*500) + "px";
    var bgColor = bgArray[Math.floor(Math.random()*bgArray.length)];
    $(this).css("background-color", bgColor)
    $(this).css('transform', 'translateY(-' + randomNum + 'px)');
});

$(".sheep").mouseleave(function(){
    var randomNum = Math.floor(Math.random()*500) + "px";
    var bgColor2 = bgArray[Math.floor(Math.random()*bgArray.length)];
    $(this).css("background-color", bgColor2)
    $(this).css('transform', 'translateY(-' + randomNum + 'px)');
});