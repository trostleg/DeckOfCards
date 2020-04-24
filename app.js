var app = angular.module('DeckOfCardsApp', []);

app.controller('DeckOfCardsController', function($scope) {
  
    // variables
    $scope.myCustomVariable = 'Hello World';


    // function
    $scope.myCustomFunction = function() {

        $scope.myCustomVariable = 'Goodbye World';

    }
  
});

