directions = ["images/kawasaki.png", "images/kawasakirose/kawasaki1.jpg", "images/kawasakirose/kawasaki2.jpg",
              "images/kawasakirose/kawasaki3.jpg", "images/kawasakirose/kawasaki4.jpg", "images/kawasakirose/kawasaki5.jpg", 
              "images/kawasakirose/kawasaki6.jpg", "images/kawasakirose/kawasaki7.jpg","images/kawasakirose/kawasaki8.jpg", 
              "images/kawasakirose/kawasaki9.jpg", "images/kawasakirose/kawasaki10.jpg", "images/kawasakirose/kawasaki11.jpg"]

captions = ["", "Make these creases.", "Form the four corners.", "Flatten while rotating counter-clockwise.", "Turn over.", 
            "Turn the 3D rose by taking each top right corner and folding to the next quadrant counter-clockwise.",
            "It should look like this.", "Form the rose within the palm of your hand.", 
            "Turn over and smooth the inside of the rose by pressing down slightly at the base.", 
            "Fold down edges and tuck in to form the bottom of the rose.", "Turn over, open the center of the flower, and smooth.",
            "Roll the petals down to curl them."]

var step = 0

$(".clickme").click(function() {
  if (step < (directions.length - 1)) {
    step++;
    $(".image").html("<img src=" + directions[step] + ">");
    $(".caption").html(captions[step]);
    }

        //$(".image").slideUp(.25, )
})
    
$("#up").click(function() {
     if (step > 0) {
    step--;
    $(".image").html("<img src="+directions[step]+">");
    $(".caption").html(captions[step]);
     }
})
    
//$("#item").click(function(){
//    $("this").animate({
//        top: "400px"
//    }; {
//        duration: 2000,
//        easing: "linear"
//        complete: function() {
//            $(this).css("top", "0px"); 
//        }
//    });
//);
//)}