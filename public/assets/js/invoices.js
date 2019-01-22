$(document).ready(function(){
    $('.modal').modal();
  });

  $(document).on("click", "#submit-invoice", function () {

    // Make an ajax call to find the note
    // This uses the data-id of the p-tag, which is linked to the specific note
    $.ajax({
      type: "POST",
      url: "/update-invoice/" + selected.attr("data-id"),
      success: function (data) {
        // Fill the inputs with the data that the ajax call collected
        $("#invoice-date").val(data.date);
        $("#invoice-num").val(data.invoice_num);
        $("#company").val(data.company);
        $("#bill-to").val(data.bill_to);
        $("#job-desc").val(data.job_desc);
        $("#materials-used").val(data.materials_used);
        $("#equipment-used").val(data.equipment_used);
        $("#days-on-job").val(data.days_on_job);
        $("#job-item1").val(data.item_1);
        $("#qty-1").val(data.qty_1);
        $("#price-1").val(data.price_1);
        $("#job-item2").val(data.item_1);
        $("#qty-2").val(data.qty_1);
        $("#price-2").val(data.price_1);
        $("#job-item3").val(data.item_1);
        $("#qty-3").val(data.qty_1);
        $("#price-3").val(data.price_1);
        $("#job-item4").val(data.item_1);
        $("#qty-4").val(data.qty_1);
        $("#price-4").val(data.price_1);
        $("#job-item5").val(data.item_1);
        $("#qty-5").val(data.qty_1);
        $("#price-5").val(data.price_1);
        $("#job-item6").val(data.item_1);
        $("#qty-6").val(data.qty_1);
        $("#price-6").val(data.price_1);
        $("#other-job-items").val(data.other_job_items);
        $("#total-item-price").val(data.total_item_price);
        $("#po-num").val(data.po_num);
        $("#mud-district").val(data.mud_district);
        $("#terms").val(data.terms);
        $("#sub-total").val(data.terms);
        $("#tax").val(data.tax);
        $("#total-hours").val(data.total_hours);
        $("#total-due").val(data.total_due);
        // Make the #action-button an update button, so user can
        // Update the note s/he chooses
      }
    });
  });