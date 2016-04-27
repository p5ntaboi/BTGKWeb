var Cv = angular.module('Cv', []);

Cv.controller('TodoCtrl', function($scope, $http) {
  $http.get('infor.json')
       .then(function(res){
          $scope.todos = res.data;                
        });
});