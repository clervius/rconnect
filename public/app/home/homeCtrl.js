(function(){
	'use strict';

	angular.module('app').controller('SignupCtrl', SignupCtrl);

	SignupCtrl.$inject = ['$scope', 'appAPI', '$routeParams', '$route', '$Auth'];

	function SignupCtrl($scope, appAPI, $routeParams, $route, Auth){

		$scope.taxpayers = [];	
		$scope.accepteds = [];
		$scope.pendings = [];	
		
		$scope.$route = $route;
		
		
		$scope.register = function(form){
			//$scope.submitted = true;

			Auth.createUser({
				fname: $scope.fname,
				lname: $scope.lname,
				sAddress: $scope.sAddress,
				city: $scope.city,
				state: $scope.state,
				zip: $scope.zip,
				email: $scope.email,
				phoneNumber: $scope.phoneNumber,
				password: $scope.password
			}).then(function(){
				//need to redirect to something
				console.log('User created')
			}).catch(function(err){
				err = err.data;
				$scope.errors = {};
				console.log(err);
			});

		}
		
	};


})();
