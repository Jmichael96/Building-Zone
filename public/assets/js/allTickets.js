$(document).ready(function(){
    $('.dropdown-trigger').dropdown();
    //side nav trigger
    $('.sidenav').sidenav();
    $('.modal').modal();
});

$(document).on("click", "#submit-ticket", function () {

    // Make an ajax call to find the note
    // This uses the data-id of the p-tag, which is linked to the specific note
    $.ajax({
      type: "POST",
      url: "/update-ticket/" + selected.attr("data-id"),
      success: function (data) {
        // Fill the inputs with the data that the ajax call collected
        $("#ticket-date").val(data.date);
        $("#company").val(data.company);
        $("#job-title").val(data.job_title);
        $("#address").val(data.address);
        $("#job-desc").val(data.job_desc);
        $("#materials-used").val(data.materials_used);
        $("#equipment-used").val(data.equipment_used);
        $("#equipment-rented").val(data.equipment_rented);
        $("#hours").val(data.hours);
        $("#employees").val(data.employees);
        $("#follow-job-desc").val(data.follow_job_desc);
        $("#follow-materials").val(data.follow_materials);
        $("#follow-equipment-needed").val(data.follow_equipment_needed);
        $("#follow-hours-worked").val(data.follow_hours_worked);
        $("#total-hours").val(data.total_hours);
        $("#invoice-number").val(data.invoice_number);
      }
    });
  });