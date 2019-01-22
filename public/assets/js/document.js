$(document).ready(function(){
    $('.datepicker').datepicker({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false // Close upon selecting a date,
      });

      $('.modal').modal();
})

$(document).on("click", "#submit-document", function () {

    // Make an ajax call to find the note
    // This uses the data-id of the p-tag, which is linked to the specific note
    $.ajax({
      type: "POST",
      url: "/update-document/" + selected.attr("data-id"),
      success: function (data) {
        // Fill the inputs with the data that the ajax call collected
        $("#document-date").val(data.date);
        $("#name").val(data.name);
        $("#log1").val(data.log1);
        $("#log2").val(data.log2);
        $("#log3").val(data.log3);
        // Make the #action-button an update button, so user can
        // Update the note s/he chooses
      }
    });
  });