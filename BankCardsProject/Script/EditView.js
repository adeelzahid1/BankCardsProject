function hideElements() {
    $(".DropDownListId, .TextCreditLimit, .TextAnnualCharges, .TextCardNumber").hide();
    raedonly();
    $("#EditBtn, #CancelBtn, #UpdateBtn, #DeleteBtn").hide();
}
function raedonly() {
    $("#TextCreditLimit, #TextAnnualCharges, #TextCardNumber").prop("readonly", true);
}
$(document).ready(function () {
    hideElements();
})

$("#DropDownListCards").change(function () {
    var val = $("#DropDownListCards option:selected").val();
    if (val <= 0 || val > 3) {
        $("#DropDownListCards").css("border", "1px solid #ff0000");
        hideElements();
    }
    else {
        $("#DropDownListCards").css("border", "1px solid #008000");
        hideElements();
        $.ajax({
            url: '/api/InsertCard/GetAllEmployeeId/' + val,
            dataType: "json",
            method: 'Get',
            success: function (data) {
                var card = JSON.parse(data);
                var DropDownIDs = $('#DropDownListId');
                DropDownIDs.empty();
                $(card).each(function (index, card) {
                    //DropDownIDs.append(new Option(card.cardId));
                    DropDownIDs.append($('<option></option>').val(card.cardId).text(card.cardId)); //'+card.cardId+'
                    
                    console.log(card.cardId);
                });
                $(".DropDownListId").show();
            },
            error: function (err) {
                alert(err + " Something Went Wrong");
            }
        });

    }
});

$("#DropDownListId").change(function (e) {
    raedonly();
    var card = new Object();
    card.CardName = $("#DropDownListCards option:selected").text();
    card.CardId = $("#DropDownListId option:selected").val();
    //console.log(card.Cardval + " " + card.CardId);

    if (card.CardName !== "0" && card.CardId !== "") {
        $("#DropDownListId").css("border", "1px solid green");
        $(".TextCreditLimit, .TextAnnualCharges, .TextCardNumber, #EditBtn, #DeleteBtn").show();
        $.ajax({
            type: "Post",
            url: "/api/InsertCard/PostFindRecord",
            data: JSON.parse(JSON.stringify(card)),
            dataType: "json",

            success: function (data, textStatus, jQxhr) {
                if (textStatus === "success") {
                    //console.log("Success: " + data + textStatus + jQxhr);
                    var card = JSON.parse(data);
                    console.log(data);

                    $(card).each(function (index, card) {
                        console.log(card.CardId, card.CardName, card.CreditLimit, card.AnnualCharges, card.CardNumber);
                        $("#TextCreditLimit").val(card.CreditLimit);
                        $("#TextAnnualCharges").val(card.AnnualCharges);
                        $("#TextCardNumber").val(card.CardNumber);
                    });

                    //alert(data);
                }

            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log("Error: " + textStatus);
            }
        });
        e.preventDefault();
    }
    else {
        $("#DropDownListId").css("border", "1px solid red");
        alert("Please Fill All Fields ");
    }

});

$("#DeleteBtn").click(function (e) {
    var card = new Object();
    var cardTypeId = $("#DropDownListCards option:selected").val();
    card.CardName = $("#DropDownListCards option:selected").text();
    card.CardId = $("#DropDownListId option:selected").val();
    //console.log(card.Cardval + " " + card.CardId);

    if (cardTypeId > 0 && cardTypeId < 4 && card.CardId !== "0") {
        $.ajax({
            type: "Delete",
            url: "/api/InsertCard/DeleteARecord",
            data: JSON.parse(JSON.stringify(card)),
            dataType: "json",

            success: function (data, textStatus, jQxhr) {
                if (textStatus === "success") {
                    console.log("Success: " + data + textStatus + jQxhr);
                    clear();
                    alert(data);
                }

            },
            error: function (jqXhr, textStatus, errorThrown) {
                console.log("Error: " + textStatus);
            }
        });
        e.preventDefault();
    }
    else {
        alert("Please Select A Card and Id .. ");
    }
});

$("#UpdateBtn").click(function (e) {
    if (validateCard() === true) {
        var card = new Object();
        card.CardName = $("#DropDownListCards option:selected").text();
        card.CardId = $("#DropDownListId option:selected").val();
        card.CreditLimit = $("#TextCreditLimit").val();
        card.AnnualCharges = $("#TextAnnualCharges").val();
        card.CardNumber = $("#TextCardNumber").val();
        console.log(card.CardName, card.CardId, card.CreditLimit, card.AnnualCharges, card.CardNumber);

        if (card.CardName !== "" && card.CardId !== "" && card.CreditLimit !== "" && card.AnnualCharges !== "" && card.CardNumber !== "") {
            $.ajax({
                type: "Put",
                url: "/api/InsertCard/UpdateRecrod",
                data: JSON.parse(JSON.stringify(card)),
                dataType: "json",

                success: function (data, textStatus, jQxhr) {
                    if (textStatus === "success") {
                        alert(data);
                    }
                },
                error: function (jqXhr, textStatus, errorThrown) {
                    alert("Error: " + textStatus);
                }
            });
            e.preventDefault();
        }
        else {
            alert("Please Fill All Input Fields : ");
        }
    }
    else {
        alert("Please Fill All Input Fields Carefully .. Thanks");
    }
});

$("#EditBtn").click(function () {
    $("#EditBtn").hide();
    $("#UpdateBtn, #CancelBtn").show();
    $("#TextCreditLimit").prop("readonly", false);
});

$("#CancelBtn").click(function() {
    $("#form2").trigger('reset');
    hideElements();
    $("#DropDownListId, #TextCreditLimit,#TextAnnualCharges, #TextCardNumber").empty();
});

function clear() {
    $("#form2").trigger('reset');
    $("#DropDownListCards,#DropDownListId, #TextCreditLimit,#TextAnnualCharges, #TextCardNumber").css("border", "1px solid black");
    hideElements();
}


function validateCard() {
    if (DropDownCards() && checkCardNumber() && checkCreditLimit()) {
        return true;
    }
    else {
        return false;
    }
}


function checkCardNumber() {
    var CardValue = document.getElementById("TextCardNumber").value;
    //var CardValue = CardId.value();
    if (CardValue > 15000000 && CardValue <= 19999999) {
        return true;
    }
    else {
        return false;
    }
}

function checkCreditLimit() {
    var CreditValue = document.getElementById("TextCreditLimit").value;
    if (CreditValue > 999 && CreditValue <= 19999999) {
        return true;
    }
    else {
        CreditLimitError();
        AnnualChargesError();
        return false;
    }
}

function AnnualCharges() {
    var Amount = document.getElementById("TextCreditLimit").value;
    var Charges = Amount * 0.5 / 100;
    var ChargesId = document.getElementById("TextAnnualCharges");
    ChargesId.value = Math.round(Charges);
    ChargesId.style.border = "1px solid green";
    ChargesId.readOnly = true;
}

function AnnualChargesError() {
    var ChargesId = document.getElementById("TextAnnualCharges");
    ChargesId.value = "";
    ChargesId.style.border = "1px solid red";
    return false;
}
function CreditLimitError() {
    var CreditId = document.getElementById("TextCreditLimit");
    CreditId.value = "";
    CreditId.style.border = "1px solid red";
}
function DropDownCards() {
    var DdlCards = document.getElementById("DropDownListCards");
    var CardName = DdlCards.options[DdlCards.selectedIndex].value;
    if (CardName < 1 && CardName > 3) {
        DdlCards.style.border = "1px solid red";
        document.getElementById("ErrorCards").innerText = "Select A Credit Card: ";
        return false;
    }
    else {
        DdlCards.style.border = "1px solid green";
        document.getElementById("ErrorCards").innerText = "";
        return true;
    }
}

$("#TextCreditLimit").blur(function () {
    var letters = /^[1-9][0-9]{3,6}$/;

    var CreditId = $("#TextCreditLimit");
    console.log(CreditId);
    var CreditValue = CreditId.val();
    console.log(CreditValue);
    if (CreditValue.match(letters)) {
        CreditId.css("border", "1px solid green");
        $("#ErrorCreditLimit").text("");
        AnnualCharges();
        return true;
    }
    else {
        CreditId.css("border", "1px solid red");
        $("#ErrorCreditLimit").text("Enter Valid Credit Amount");
        AnnualChargesError();
        return false;
    }
});