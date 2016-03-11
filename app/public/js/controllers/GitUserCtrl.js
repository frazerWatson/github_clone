
gitcloneApp.controller('GitUserCtrl', ['$scope', '$http', function($scope, $http) {
  var url = "https://api.github.com/users";

      $http.get(url).success(function(response) {
        $scope.users = response;
      });

  }]);
