console.log("Ready to go!");

//listen for add new item button click
$(function() {
  $("#add").on("click", function(e) {
    e.preventDefault();
    let value = $("input").val();
    if (value !== "") {
      let element = $("<li></li>").text(value).addClass("normal");
      $(element).prepend("<button>Remove</button>");
      $("#todolist").append(element);
      $("#words").val("");
      $("button").on("click", function() {
        $(this).closest("li").remove();
      })
    }
  });
});

$(function() {
  $(document).on("click", ".normal", function() {
    $(this).toggleClass("priority");
  })
})

// Code below strikes through an item after remove button click
// $("button").on("click", function() {
//   $(this).closest('li').addClass("priority");
// }
