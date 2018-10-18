$(document).ready(function() {
  $("#lengths").submit(function(event) {
    // $("p").hide();

    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());

    $(".side1").text(side1);
    $(".side2").text(side2);
    $(".side3").text(side3);

if ((side1 === side2) && (side2 === side3)) {
  $("#equilateral").show();
}

if ((side1 === side2 || side2 === side3)) {
  $("#isosceles").show();
}


    event.preventDefault();

  });
});
