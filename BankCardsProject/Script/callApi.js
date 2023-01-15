//$("#apiCallButton").click(function() {
//    $.ajax({
//        url: "/api/myApi",
//        method: "get",
//    }).done(function (data) {
//        $("#displayText").text(data);
//    })
//})
function CardsChange(value) {
    console.log(value);
    //var val = parseInt(value);
    //if (val === 0) {
    //    var DdlCards = document.getElementById("DropDownListCards");
    //    DdlCards.style.border = "1px solid red";
    //    document.getElementById("ErrorCards").innerText = "Select A Credit Card: ";
    //    return false;
    //} else {
    //    DdlCards.style.border = "1px solid green";
    //    document.getElementById("ErrorCards").innerText = "";
    //    return true;
    //}
}

function DropDownCards() {
    var DdlCards = document.getElementById("DropDownListCards");
    var CardName = DdlCards.options[DdlCards.selectedIndex].value;
    console.log(CardName);
    var val = parseInt(CardName);
    if (val === 0) {
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

function CreditLimit() {
    var letters = /^[1-9][0-9]{3,6}$/;
    var CreditId = document.getElementById("TextCreditLimit");
    var CreditValue = CreditId.value;
    if (CreditValue.match(letters)) {
        CreditId.style.border = "1px solid green";
        document.getElementById("ErrorCreditLimit").innerText = "";
        AnnualCharges();
        CardNumber();
        return true;
    }
    else {
        CreditId.style.border = "1px solid red";
        document.getElementById("ErrorCreditLimit").innerText = "Enter Valid Credit Amount";
        AnnualChargesError();
        CardNumberError();
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
function CardNumber() {
    var Random = Math.floor(Math.random() * 4999999) + 15000000; // 
    console.log(Random);
    var CardId = document.getElementById("TextCardNumber");
    CardId.value = Random;
    CardId.style.border = "1px solid green";
    CardId.readOnly = true;
}
function CardNumberError() {
    var CardId = document.getElementById("TextCardNumber");
    CardId.value = "";
    CardId.style.border = "1px solid red";
    return false;
}
function CreditLimitError() {
    var CreditId = document.getElementById("TextCreditLimit");
    CreditId.value = "";
    CreditId.style.border = "1px solid red";
}

function checkCardNumber() {
    var CardValue = document.getElementById("TextCardNumber").value;
    //var CardValue = CardId.value();
    if (CardValue > 15000000 && CardValue <= 19999999) {
        return true;
    }
    else {
        CardNumberError();
        return false;
    }
}
function checkCreditLimit() {
    var CreditValue = parseInt(document.getElementById("TextCreditLimit").value);
    if (CreditValue > 999 && CreditValue <= 19999999) {
        return true;
    }
    else {
        CreditLimitError();
        AnnualChargesError();
        CardNumberError();
        return false;
    }
}

//&& checkCreditLimit() && AnnualCharges() && checkCardNumber()
function validateCard() {
    if (DropDownCards() && checkCreditLimit() && checkCardNumber()) {
        return true;
    }
    else {
        return false;
    }
}

// IF All Fields are valid then following method call on click.


$("#SubmitBtn").click(function (e) {
    if (validateCard() === true) {
        var card = new Object();
        card.CardName = $("#DropDownListCards").val();
        card.CreditLimit = $("#TextCreditLimit").val();
        card.AnnualCharges = $("#TextAnnualCharges").val();
        card.CardNumber = $("#TextCardNumber").val();
        console.log(card.CardName, card.CreditLimit, card.AnnualCharges, card.CardNumber);

        if (card.CardName !== "0" && card.CreditLimit !== "" && card.AnnualCharges !== "" && card.CardNumber !== "")
        {
            $.ajax({
                type: "Post",
                url: "/api/InsertCard/PostCards",
                data: JSON.parse(JSON.stringify(card)),
                dataType: "json",
               
                success: function (data, textStatus, jQxhr) {
                    if (textStatus === "success") {
                        //console.log("Success: " + data + textStatus + jQxhr);
                        console.log(data);
                        clear();
                        alert(data);
                    }
                    
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log("Error: "+ textStatus );
                }            
            });
            console.log(e, e.preventDefault);
            e.preventDefault();
        }
        else {
            alert("Please Fill All Fields ");
        }
        function clear() {
            $("#form1").trigger('reset');
            $("#DropDownListCards, #TextCreditLimit,#TextAnnualCharges, #TextCardNumber").css("border", "1px solid black");
        };
    }
});
    