angular.module("quoteBook").controller("mainCtrl", function($scope, dataService) {
    $scope.test = "Yes! Still working";

    $scope.QuoteArray = dataService.getQuote();

    //array are refferencing . QuoteArray modificaiton doesnt modify the original arrayy in Services

    $scope.addNewQuote = function() { //MODEL IN VIEW IS ATTACHED TO SCOPE CONTROLLER AND THEN FROM THERE DATASERVICE FUNCITON IS ADDED
        //     $scope.QuoteArray.unshift({ //all things here should be addted to scope.
        //     text: $scope.newQuoteText,
        //     author: $scope.newQuoteAuthor
        // });
       if (dataService.addQuote({
         text: $scope.newQuoteText,
         author: $scope.newQuoteAuthor
       })){
        //  alert("Quote Added");
        $scope.newQuoteText = "";
        $scope.newQuoteAuthor = "";
       }else {
         alert("Qutote did not");
       }
    };

    $scope.deleteQuote = function(quoteToDelete) {
      console.log(quoteToDelete);
      dataService.removeQuote(quoteToDelete.text)
    }



}); //mainCtrl
