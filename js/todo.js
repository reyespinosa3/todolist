console.log("Ready to go!");

//listen for add new item button click
$(function() {
  $("#add").on("click", function(e) {
    e.preventDefault();
    console.log("New Item Button Clicked");
    let value = $("input").val();
    if (value !== "") {
      let element = $("<li></li>").text(value);
      $(element).append("<button>Remove</button>");
      $("#todolist").append(element);
      $("#words").val("");
      $("button").on("click", function() {
       $(this).closest('li').addClass("strike");
        });
    }
  });
});
