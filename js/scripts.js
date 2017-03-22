$(function(){
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var nameInput = $("input#name").val();
    var birthdate = $("input#birthdate").val();
    var beer = $("input:radio[name=beer]:checked").val();
    var cuisine = $("#cuisine").val();
    var color = $("#color").val();

    $("#feedback").text("Thank you " + nameInput + " for your feedback!" );
    $("#feedback").append(" We've recorded your birthdate as "+ birthdate+ ", your favorite beer as " + beer + ", your favorite cuisine as " + cuisine + " and your favorite hex color as " + color + ".");
  });

  $("#reset-form").on("click", function(){
    $("form#survey").trigger("reset");

    $("#feedback").detach();
  });
});
