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

// function getResults() {
//   // Empty any results currently on the page
//   $("#results").empty();
//   // Grab all of the current notes
//   $.getJSON("/find/",
//    function (data) {
//     // For each note...
//     for (var i = 0; i < data.length; i++) {


//   // ...populate #results with a p-tag that includes the note's title and object id
//   $("#results").apppend('<form data-id=' + data[i]._id + 'method="POST">' +
//     '<div class="row">' +
//     '<div id="datepicker" class="col s4">' +
//     '<input id="invoice-date" placeholder="Date" name="date" type="text" class="datepicker black-text">' +
//     '</div>' +
//     '</div>' +
//     '<div class="row">' +
//     '<div class="input-field col s6">' +
//     '<span value="" id="job-title" type="text" name="job_title" class="validate">' + data[i].title + '</span>' +
//     '<label class="active" for="job-title">Job Title</label>' +
//     '</div>' +
//     '<div class="input-field col s6">' +
//     '<span value="" id="company-name" name="company" type="text">' + data[i].company + '</span>' +
//     '<label class="active" for="company-name">Company Name</label>' +
//     '</div>' +
//     '</div>' +
//     '<div class="row">'+
//         '<div class="input-field col s6">'+
//             '<textarea id="job-desc" name="job_desc" class="materialize-textarea" data-length="120">'+data[i].job_desc+'</textarea>'+
//             '<label for="job-desc">Job Description</label>'+
//         '</div>'+
//         '<div class="input-field col s6">'+
//             '<span type="text" name="hours" id="hours-worked">'+data[i].hours+'</span>'+
//             '<label for="hours-worked">Hours worked</label>'+
//         '</div>'+
//     '</div>'+
//     '<div class="row">'+
//     '<div class="input-field col s6">'+
//         '<span id="employee-input" name="employees" type="text">'+data[i].employees+'</span>'+
//         '<label for="employee-input">Names or Number of employees</label>'+
//     '</div>'+
//     '<button id="submit-update" data-id="' + data._id + '"class="btn submit pulse">update</button>'+
//     '</form>');
//      }
//   });
// }
// getResults();


$(document).on("click", "#select", function () {

  // Make an ajax call to find the note
  // This uses the data-id of the p-tag, which is linked to the specific note
  $.ajax({
    type: "POST",
    url: "/update-log/" + selected.attr("data-id"),
    success: function (data) {
      // Fill the inputs with the data that the ajax call collected
      $("#invoice-date").val(data.date);
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



// $(document).on("click", "#submit-update", function () {
//   // Save the selected element
//   var selected = $(this);
//   // Make an AJAX POST request
//   // This uses the data-id of the update button,
//   // which is linked to the specific note title
//   // that the user clicked before
//   $.ajax({
//     type: "POST",
//     url: "/update-log/" + selected.attr("data-id"),
//     dataType: "json",
//     data: {
//       date: $("#date").val(),
//       job_title: $("#job-title").val(),
//       company: $("#company").val(),
//       job_desc: $("#job-desc").val(),
//       hours: $("#hours").val(),
//       employees: $("#employees").val(),
//     },
//     // On successful call
//     success: function (data) {
//       $("#date").val("");
//       $("#job-title").val("");
//       $("#company").val("");
//       $("#job_desc").val("");
//       $("#hours").val("");
//       $("#employees").val("");
//       // Revert action button to submit
//       $("#action-btn").html("<button id='make-new' type='submit'class='btn submit pulse'>Save new</button>");
//       // Grab the results from the db again, to populate the DOM
//       getResults();
//     }
//   });
// });
