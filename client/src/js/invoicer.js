(function() {
    var invoicer = angular.module('invoicer', ["xeditable"]);

    invoicer.run(function(editableOptions) {
      editableOptions.theme = 'bs3';
      });

    invoicer.controller('invController', function($scope){
        $scope.invoice = work;

        $scope.getSubTotal = function(){
            var subtotal=0;
            for(var i=0; i < $scope.invoice.line_items.length; i++) {
                var line = $scope.invoice.line_items[i];
                subtotal += (line.Qty * line.Rate);
            }
            return subtotal;
        }

        $scope.addItem = function() {
            $scope.invoice.line_items.push(this.invoice.temp);
            $scope.invoice.temp = {};
        }

       $scope.contentLoaded = true; 

    });

    var work = 
    {
        bill_type: "Invoice#",
        to_number: "INV-17",
        from_Client: "Rob & Joe Traders",
        from_address: "2708 Southside Lane",
        from_city: "Los Angeles",
        from_state: "90018 CA",
        from_Country: "USA",
        from_email: "my.email@address.com",
        client_SampleTax1: "11.750",
        client_SampleTax2: "21.000",
        client_PaymentMade:"(-)100.000"
        line items: [
            {
                Index: "1",
                Item&description: "Brochure Design Brochure Design Single Sided Color",
                Qty: "1.00",
                Rate: "300.000",
                Discount: "0.00",
                Amount: "300.000"

            },
            {
                Index: "2",
                Item&description: "Web Design Packages(Template)-Basic Custom Themes for your business. Inclusive of 10 hours of marketing and annual training",
                Qty: "1.00",
                Rate: "250.000",
                Discount: "0.00",
                Amount: "250.000"
            },
            {
                Index: "3",
                Item&description: "Print Ad-Basic-Color Print Ad 1/8 size color",
                Qty: "1.00",
                Rate: "80.000",
                Discount:"0.00",
                Amount:"80.000"
            },
        ]
    };

})();
