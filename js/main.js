var app = angular.module("myApp", []);

app.controller('MainController', ['$scope', function($scope) {

  $scope.madlibs = {
    'boyName': "",
    'adjective': "",
    'pluralNoun': "",
    'insect': "",
    'pNoun': "",
    'verb': ""
  };


}]);
