var Cv = angular.module('Cv', []);

Cv.controller('TodoCtrl', function($scope, $http) {
  $http.get('infor.json')
       .then(function(res){
          $scope.todos = res.data;                
        });
});
function myCtrl($scope) {

  $scope.items = [{
    name: "Input",
    editing: false
  }];

  $scope.editItem = function(item) {
    item.editing = true;
  }

  $scope.doneEditing = function(item) {
    item.editing = false;
    //dong some background ajax calling for persistence...
  };
}