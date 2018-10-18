$(document).ready(function() {
  $("#lengths").submit(function(event) {
    event.preventDefault();
    // $("p").hide();

    var side1 = parseInt($("#side1").val());
    var side2 = parseInt($("#side2").val());
    var side3 = parseInt($("#side3").val());

    $(".side1").text(side1);
    $(".side2").text(side2);
    $(".side3").text(side3);


    if ((side1 + side2) <= side3)  {
      $("p#answer").text("NOT A TRIANGLE");
    }
    else if ((side2 + side3) <= side1)  {
      $("p#answer").text("NOT A TRIANGLE");
    }
    else if ((side1 + side3) <= side2)  {
      $("p#answer").text("NOT A TRIANGLE");
    }
    // equilateral
    else if ((side1 === side2) && (side2 === side3)) {
      // $("#equilateral").show();
      $("p#answer").text("Equilateral");
    }
    // scalene
    else if ((side1 != side2 && side1 != side3) && (side3 != side2)) {
      $("p#answer").text("Scalene");
    }
  // isocelese
    else if (side1 != side3) {
      $("p#answer").text("Isosceles");
    }
    else if (side3 != side2) {
      $("p#answer").text("Isosceles");
    } else {
      $("p#answer").text("Whelp. You stumped us.")
    }


  });
});

















// if ((side1 === side2) && (side2 === side3)) {
//   // $("#equilateral").show();
//   $("p#answer").text("Equilateral");
// }
//
// if (side1  side3) {
//   $("p#answer").text("Isosceles");
// }
//
// if ((side1 != side2 && side1 != side3) && (side3 != side2)) {
//   $("p#answer").text("Scalene");
// }
//
// if ((side1 + side2) <= side3)  {
//   $("p#answer").text("NOT A TRIANGLE");
// }
// else if ((side2 + side3) <= side1)  {
//   $("p#answer").text("NOT A TRIANGLE");
// }
// else if ((side1 + side3) <= side2)  {
//   $("p#answer").text("NOT A TRIANGLE");
// }




// experimental
