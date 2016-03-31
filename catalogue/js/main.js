var totalPatterns = [];

// for (var i = 0; i < 24; i++) {
//     var randomNum = [Math.floor(Math.random()*totalPatterns.length)]
//     $("body").append("<div class='center><a href="totalPatterns[randomNum]+ ".html ><img src="totalPatterns[randomNum]+.html"></div>");
// };



$(".item").each(function() {
    totalPatterns.push($(this).html());
});

console.log(totalPatterns);

var usedPatterns = [];

$(".item").each(function() {
    var currentKey = Math.floor(Math.random()*totalPatterns.length);
    while (usedPatterns.indexOf(currentKey) > -1) {
        currentKey = Math.floor(Math.random()*totalPatterns.length);
    }
    usedPatterns.push(currentKey);
   $(this).html(totalPatterns[currentKey]); 
});