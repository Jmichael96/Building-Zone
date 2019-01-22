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
$(document).on("click", "#submit-valve", function () {

  // Make an ajax call to find the note
  // This uses the data-id of the p-tag, which is linked to the specific note
  $.ajax({
    type: "POST",
    url: "/update-valve/" + selected.attr("data-id"),
    success: function (data) {
      // Fill the inputs with the data that the ajax call collected
      $("#valve-date").val(data.date);
      $("#city").val(data.city);
      $("#company").val(data.company);
      $("#job_desc").val(data.job_desc);
      $("#valve-description").val(data.valve_desc);
      $("#valve-description2").val(data.valve_desc2);
      $("#valve-description3").val(data.valve_desc3);
      // Make the #action-button an update button, so user can
      // Update the note s/he chooses
    }
  });
});