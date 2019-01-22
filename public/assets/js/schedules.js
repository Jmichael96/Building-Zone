$(document).ready(function(){
    $('.dropdown-trigger').dropdown();
    //side nav trigger
    $('.sidenav').sidenav();
    $('.modal').modal();
});

$(document).on("click", "#submit-schedule", function () {

    // Make an ajax call to find the note
    // This uses the data-id of the p-tag, which is linked to the specific note
    $.ajax({
      type: "POST",
      url: "/update-schedule/" + selected.attr("data-id"),
      success: function (data) {
        // Fill the inputs with the data that the ajax call collected
        $("#from-date").val(data.from_date);
        $("#to-date").val(data.to_date);
        $("#description").val(data.description);
      }
    });
  });