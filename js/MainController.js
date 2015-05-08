var app = angular.module('quoteBook');

app.controller('mainController', function($scope, dataService){
     $scope.displayQuotes = dataService.quotes;

     $scope.dataService = dataService;

});