gitcloneApp.controller('GitUserSearchCtrl', ['$scope', '$http', function($scope, $http) {
	var url = "https://api.github.com/users";
	$scope.username;

	$scope.getInfo = function(){
		$http.get(url+'/'+$scope.username).success(function(response) {
			$scope.users = [response];
		});
	}

}]);
