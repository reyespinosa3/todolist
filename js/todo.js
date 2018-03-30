console.log("Ready to go!");

//listen for add new item button click
$(function() {
  $("#add").on("click", function(e) {
    e.preventDefault();
// Code below set new list item text as a variable
    let value = $("input").val();
// Code below confirms the new list item field is not empty
    if (value !== "") {
// Code below adds list html tag and includes text from input field
      let element = $("<li></li>").text(value);
// Code below add remove button after new li tag
      $(element).prepend("<button>Remove</button>");
// Code below add new item, li tag and remove button to ordered list
      $("#todolist").append(element);
// Code below clears the new item input field
      $("#words").val("");
// Code below removes list item and remove button
      $("button").on("click", function() {
        $(this).closest('li').remove();
      })
// Code below strikes through an item after remove button click
      // $("button").on("click", function() {
      //  $(this).closest('li').addClass("strike");
      //   });
    }
  });
});
