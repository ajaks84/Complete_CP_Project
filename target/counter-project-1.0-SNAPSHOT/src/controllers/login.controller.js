(function () {
"use strict";
  
angular.module('Authentication')
.controller('LoginController', LoginController);


LoginController.$inject = ['$scope', '$rootScope', '$location', 'AuthenticationService','REST_END_POINT'];
function LoginController($scope, $rootScope, $location, AuthenticationService,REST_END_POINT) {

            console.log(REST_END_POINT);

        // reset login status
        AuthenticationService.ClearCredentials();
  
        $scope.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login($scope.username, $scope.password, function(response) {
                if(response.success) {
                    AuthenticationService.SetCredentials($scope.username, $scope.password);
                    $location.path('/');
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;
                }
            });
        };
}

})();