(function(){
	'use strict';

	angular.module('app').controller('actCtrl', actCtrl);

	actCtrl.$inject = ['$scope', 'appAPI', '$routeParams', '$route'];

	function actCtrl($scope, appAPI, $routeParams, $route){
		
		$scope.$route = $route;
		
		appAPI.getSingleUser($scope.user)
			.then(function(data){
				console.log('Found the user');
				console.log(data);
			})
			.catch(function(err){
				console.log("did not get user");
				console.log(err);
			});

	};
})();