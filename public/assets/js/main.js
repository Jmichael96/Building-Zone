$(document).ready(function () {
    //navbar dropdowns
    $('.dropdown-trigger').dropdown();
    //side nav trigger
    $('.sidenav').sidenav({
            draggable: true
    });
    //model trigger for daily log
    $('#logModal').modal();
    //Date picker for daily log
    $('.logDatePicker').datepicker({
            format: "mmm dd, yyyy",
            closeOnSelect: true // Close upon selecting a date,
    });
    $('#toDoDatepicker').datepicker({
            format: "mmm dd, yyyy",
            closeOnSelect: true // Close upon selecting a date,
    });
    $('.ticketDatePicker').datepicker({
            format: "mmm dd, yyyy",
            closeOnSelect: true // Close upon selecting a date,
    });
    //text counter for daily log
    $('textarea#textarea2').characterCounter();
    //hour select for daily log
    $('select').formSelect();

    //===================================================================
    // function to add to check list
    $('#addItem').on('click', function () {
            var $list_append = $("#list-append"),
                        str = '<div class="input-field col s6">' +
                        '<input id="list-1" type="text" data-length="30">' +
                        '</div>'
            html = $.parseHTML(str),
                    nodeNames = [];

            // Append the parsed HTML
            $list_append.append(html);

            // Gather the parsed HTML's node names
            $.each(html, function (i, el) {
                    nodeNames[i];
            });

            // Insert the node names
            $list_append.append("");
            $("<ol></ol>")
                    .append(nodeNames.join(""))
                    .appendTo($list_append);
    });
    // starts modal for to do list
    $('#toDoModal').modal();
    // =======================================
    //modal for tickets
    $('#ticket-modal').modal();
});
const space = "     |     "
    //function to send email
    function send() {
        setTimeout(function () {
          window.open("mailto:jeffreyvh@ymail.com" + "?subject=" + document.getElementById("subject-form").value + "&body=" + document.getElementById("fname-form").value + space + document.getElementById("lname-form").value + space + document.getElementById("email-form").value + space + document.getElementById("message-form").value);
        }, 320);
      }