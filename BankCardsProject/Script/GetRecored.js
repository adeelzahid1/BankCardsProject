$(document).ready(function () {
    $("#tableinfo").hide();
});

// Ajax Call for Retreive Data from Controller
$("#DropDownListCards").change(function () {
    var val = parseInt($("#DropDownListCards option:selected").val());
    console.log(val);
    if (val === 0) {
        $('#tableinfo tbody tr td').empty();
        $("#tableinfo").hide();
        
    }
    else if (val >= 1 && val <= 3) {
        $("#tableinfo").show();
        //$('#datatable').empty();
        $.ajax({
            url: '/api/InsertCard/GetAllEmployee/' + val,
            dataType: "json",
            method: 'Get',
            success: function (data) {
                $('#datatable').dataTable({
                    //retrieve: true,
                    destroy: true,
                    paging: true,
                    sort: true,
                    searching: true,
                    //scrollY: 200,
                    data: JSON.parse(data),
                    columns: [
                        { 'data': 'CardId' },
                        { 'data': 'CardName' },
                        { 'data': 'CreditLimit' },
                        { 'data': 'AnnualCharges' },
                        { 'data': 'CardNumber' }
                    ]
                });
                //var card = JSON.parse(data);
                //var CardTable = $('#tblCards tbody');
                //CardTable.empty();
                //$(card).each(function (index, card) {
                //    CardTable.append('<tr><td>' + card.CardName + '</td><td>' + card.CreditLimit
                //        + '</td><td>' + card.AnnualCharges + '</td><td>' + card.CardNumber + '</td></tr>');
                //    //console.log(index);
                //    console.log(card.Name + card.CreditLimit + card.AnnualCharges + card.CardNumber);
                //    console.log(card.CardName);
                //});
            },
            error: function (err) {
                alert(err + " Something Went Wrong");
            }
        });
    }

        // Get All Tables Record
        // Get All Tables Record
    else if (val == 4) {
        $("#tableinfo").show();
            $.ajax({
                url: '/api/InsertCard/GetAllEmpl',
                dataType: "json",
                method: 'Get',
                success: function (data) {
                    console.log(data);
                    $('#datatable').dataTable({
                        destroy: true,
                        paging: true,
                        sort: true, 
                        searching: true,
                        data: JSON.parse(data),
                        columns: [
                            { 'data': 'CardId' },
                            { 'data': 'CardName' },
                            { 'data': 'CreditLimit' },
                            { 'data': 'AnnualCharges' },
                            { 'data': 'CardNumber' }
                        ],
                    });
                },
                error: function (err) {
                    alert(err + " Something Went Wrong");
                }
            });
        }
    else {
        console.log("Not Found");
    }       
});


// Ajax Call for Retreive Data from Controller
//$(document).ready(function () {
//});

//$(document).ready(function () {
//    $.ajax({
//        url: '/api/InsertCard',
//        dataType: "json",
//        method: 'Get',
//        success: function (data) {
//            var card = JSON.parse(data);
//            var CardTable = $('#tblCards tbody');
//            CardTable.empty();
//            $(card).each(function (index, card) {
//                CardTable.append('<tr><td>' + card.CardName + '</td><td>' + card.CreditLimit
//                    + '</td><td>' + card.AnnualCharges + '</td><td>' + card.CardNumber + '</td></tr>');
//                //console.log(index);
//                console.log(card.Name + card.CreditLimit + card.AnnualCharges + card.CardNumber);
//                console.log(card.CardName);
//            });
//        },
//        error: function (err) {
//            alert(err + " Something Went Wrong");
//        }
//    });
//});