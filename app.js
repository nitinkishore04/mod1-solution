(function () {

  'use strict'

  angular.module('LunchCheck',[])
  .controller('LunchCheckController',LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope){
    $scope.lunch = "";
    $scope.result = "";

    $scope.checkLunch = function(){
      var str = $scope.lunch;
      var count = str.split(',');
      var length = checkNull(count)
      if (length == 0) {
        $scope.result = "Please enter data first.";
      }
      else if (length <= 3 && length >= 1) {
        $scope.result = "Enjoy!";
      }
      else if (length > 3) {
        $scope.result = "Too Much!";
      }
    }

    function checkNull(arr){
      var total = 0;
      for(var i = 0; i < arr.length; i++) {
        if (arr[i] === '') {
          continue;
        }
        total = total + 1;
      }
      return total;
    }
  }
})();


// !function(){"use strict";function n(n){n.lunch="",n.result="",n.checkLunch=function(){var c=function(n){
//   for(var c=0,u=0;u<n.length;u++)""!==n[u]&&(c+=1);return c}(n.lunch.split(","));n.result=c<=3?"Enjoy":"Too Much"}}
//   angular.module("LunchCheck",[]).controller("LunchCheckController",n),n.$inject=["$scope"]}()
