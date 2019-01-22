$(document).ready(function () {

  $('.datepicker').datepicker({
    selectMonths: true, // Creates a dropdown to control month
    selectYears: 15, // Creates a dropdown of 15 years to control year,
    today: 'Today',
    clear: 'Clear',
    close: 'Ok',
    closeOnSelect: false // Close upon selecting a date,
  });
  $('.collapsible').collapsible();

  $('.modal').modal();
});

$(document).on("click", "#submit-log", function () {

  // Make an ajax call to find the note
  // This uses the data-id of the p-tag, which is linked to the specific note
  $.ajax({
    type: "POST",
    url: "/update-log/" + selected.attr("data-id"),
    success: function (data) {
      // Fill the inputs with the data that the ajax call collected
      $("#log-date").val(data.date);
      $("#job-title").val(data.job_title);
      $("#company-name").val(data.company);
      $("#job_desc").val(data.job_desc);
      $("#hours").val(data.hours);
      $("#employees").val(data.employees);
      // Make the #action-button an update button, so user can
      // Update the note s/he chooses
    }
  });
});

