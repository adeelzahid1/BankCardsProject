//viewModel
var viewModel = new ViewModel();

function ViewModel() {
    var self = this;
    self.Cards = ko.observableArray([]),
        self.selectValue = ko.observable("0"),
        self.selectValue.subscribe(function() {
            var val = self.selectValue();
            console.log(val);
            if (val > 0 && val < 4) {
                viewModel.Cards.removeAll();
                $.ajax({
                    url: '/api/InsertCard/GetAllEmployee/' + val,
                    dataType: "json",
                    method: 'Get',
                    success: function(data) {
                        dataa = JSON.parse(data);
                        ko.utils.arrayForEach(dataa,
                            function(item) {
                                viewModel.Cards.push(new Card(item));
                            });
                    }
                });
            }
            else if (val == 4) {
                viewModel.Cards.removeAll();
                AllCardData();
            }
            else {
                viewModel.Cards.removeAll();
                console.log("Not Found");
            }
        });

      self.AllRec = function () {
         viewModel.Cards.removeAll();
         AllCardData();
     };

      $("#search").keyup(function () { findTextSearch(); });

      function findTextSearch() {
          var val = $("#search").val();
          var card = new Object();
          if (isNaN(val) === true) {
              card.CardName = val;
              console.log(card.CardName);
          } else {
              card.CardNumber = parseInt(val);
          }

          $.ajax({
              type: "Post",
              data: JSON.parse(ko.toJSON(card)),
              dataType: "json",
              url: "/api/InsertCard/FindTxtSearch",

              success: function (data, textStatus, jQxhr) {
                  if (textStatus === "success") {
                      console.log(data);
                      viewModel.Cards.removeAll();
                      //console.log("Success: " + data + textStatus + jQxhr);
                      var cardd = JSON.parse(data);
                      ko.utils.arrayMap(cardd,
                          function(item) {
                              //console.log(item.CardId, item.CardNumber, item.CardName);
                              viewModel.Cards.push(new Card(item));
                          });
                      //alert(data);
                  }
              },
              error: function (jqXhr, textStatus, errorThrown) {
                  console.log("Error: " + textStatus);
              }
          });
      }
 
}

$(document).ready(function () {
    $(document).ready(function () {
        $("#searchTable").on("keyup", function () {
            var value = $(this).val().toLowerCase();
            $("#BankCardGrid tr").filter(function () {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });
});

$(document).ready(function () {
    viewModel.Cards.removeAll();
    AllCardData();
});
var AllCardData = function () {
    $.getJSON("/api/InsertCard/GetAllEmpl", function (data) {
        dataa = JSON.parse(data);
        console.log(dataa);
        dataa.sort(function (a, b) {
            return a.CreditLimit - b.CreditLimit;
        });
        dataa.sort(function (a, b) {
            return a.CardId - b.CardId;
        });

        ko.utils.arrayForEach(dataa, function (item) {
            viewModel.Cards.push(new Card(item));
        });
    });
};


//Model
function Card(Cdata) {
    var self = this;
    if (Cdata !== null) {
        self.Id = ko.observable(Cdata.CardId);
        self.Name = ko.observable(Cdata.CardName);
        self.Limit = ko.observable(Cdata.CreditLimit);
        self.Charges = ko.observable(Cdata.AnnualCharges);
        self.Number = ko.observable(Cdata.CardNumber);
    } else {
        self.Id = ko.observable('');
        self.Name = ko.observable('');
        self.Limit = ko.observable('');
        self.Charges = ko.observable('');
        self.Number = ko.observable('');
    }

}

$(document).ready(function () {
    viewModel.Cards.push(new Card(null));
    ko.applyBindings(viewModel);
});









//function FindTextSearch() {
//    var val = $("#search").val();
//    var card= new Object();
//    card.CardName = val;
//    card.CardNumber = 19880952;
//    card.Card
//    $.ajax({
//        type: "Post",
//        data: JSON.parse(ko.toJSON(card)),
//        dataType: "json",
//        url: "/api/InsertCard/FindTxtSearch",
//        success: function (data, textStatus, jQxhr) {
//            debugger;
//            if (textStatus === "success") {
//                //console.log("Success: " + data + textStatus + jQxhr);
//                var cardd = JSON.parse(data);
//                console.log(data);
//                console.log(cardd);
//                ko.utils.arrayMap(cardd, function (item) {
//                    //console.log(item.CardId, item.CardNumber, item.CardName);
//                    viewModel.myCard(new cardModel(item));
//                })
//                //alert(data);
//            }
//        },
//        error: function (jqXhr, textStatus, errorThrown) {
//            console.log("Error: " + textStatus);
//        }
//    });
//}