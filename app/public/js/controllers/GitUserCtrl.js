
gitcloneApp.controller('GitUserCtrl', ['$scope', '$http', function($scope, $http) {
  var url = "https://api.github.com/users";
  // var users = 88;


  $http.get(url).success(function(response) {
    $scope.users = response;
  });
  console.log($scope.users);
}]);