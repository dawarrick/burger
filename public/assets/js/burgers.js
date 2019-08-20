// Make sure we wait to attach our handlers until the DOM is fully loaded.

//update the burger to devoured
$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevour
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  //adding a new burger
  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),
      devoured: 0
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
