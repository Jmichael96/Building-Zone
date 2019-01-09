$(document).ready(function () {
    //navbar dropdowns
    $('.dropdown-trigger').dropdown();
    //side nav trigger
    $('.sidenav').sidenav();
    //model trigger for daily log
    $('#logModal').modal();
    //Date picker for daily log
    $('.datepicker').datepicker({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 15, // Creates a dropdown of 15 years to control year,
        today: 'Today',
        clear: 'Clear',
        close: 'Ok',
        closeOnSelect: false // Close upon selecting a date,
    });

    //===================================================================
    // adding job item row to invoice
    // function to add to check list
    $('#addItem').on('click', function () {
        var $list_append = $("#job-list"),
            str = '<div class="row"><div class="input-field col s2 "><input value="" id="job-title" type="text" class="validate" placeholder=""><label id="items-txt" class="active black-text " for="job-title">Job Items</label></div><div class="input-field col s2 "><input value="" id="job-title" type="text" class="validate" placeholder=""><label id="qty-txt" class="active black-text " for="job-title">Qty Bought</label></div><div class="input-field col s2 "><input value="" id="job-title" type="text" class="validate" placeholder=""><label id="qty-txt" class="active black-text " for="job-title">Price Per</label></div><div class="input-field col s2 "><input value="" id="job-title" type="text" class="validate" placeholder=""><label id="items-txt" class="active black-text " for="job-title">Job Items</label></div><div class="input-field col s2 "><input value="" id="job-title" type="text" class="validate" placeholder=""><label id="qty-txt" class="active black-text " for="job-title">Qty Bought</label></div><div class="input-field col s2 "><input value="" id="job-title" type="text" class="validate" placeholder=""><label id="qty-txt" class="active black-text " for="job-title">Price Per</label></div></div>'
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
//     // ajax call to input data to database
//     $(document).on("click", "#submit-invoice", function(){
//         $.ajax({
//                 method: "post",
//                 url: "/invoice",
//                 data:{
//                       date: $("#invoice-date").val(),
//                       invoice_num: $("#invoice").val(),
//                       company: $("#company").val(),
//                       bill_to: $("#bill-to").val(),
//                       job_desc: $("#job-desc").val(),
//                       materials_used: $("#materials-used").val(),
//                       equipment_used: $("#equipment-used").val(),
//                       days_on_job: $("#days-on-job").val(),
//                       item_1: $("#job-item1").val(),
//                       qty_1: $("#qty-1").val(),
//                       price_1: $("#price-1").val(),
//                       item_2: $("#job-item2").val(),
//                       qty_2: $("#qty-2").val(),
//                       price_2: $("#price-2").val(),
//                       item_3: $("#job-item3").val(),
//                       qty_3: $("#qty-3").val(),
//                       price_3: $("#price-3").val(),
//                       item_4: $("#job-item4").val(),
//                       qty_4: $("#qty-4").val(),
//                       price_4: $("#price-4").val(),
//                       item_5: $("#job-item5").val(),
//                       qty_5: $("#qty-5").val(),
//                       price_5: $("#price-5").val(),
//                       item_6: $("#job-item6").val(),
//                       qty_6: $("#qty-6").val(),
//                       price_6: $("#price-6").val(),
//                       other_job_items: $("#other-items").val(),
//                       total_item_price: $("#total-item-price").val().trim(),
//                       po_num: $("#po-num").val(),
//                       mud_district: $("#mud-district").val(),
//                       terms: $("#payment-terms").val(),
//                       sub_total: $("#sub-total").val().trim(),
//                       tax: $("#tax").val().trim(),
//                       total_hours: $("#total-hours").val().trim(),
//                       total_due: $("#total-due").val() ,
//                 }
//         })
//         .then((data)=>{
//                 console.log(data);
//         })
//     });
});