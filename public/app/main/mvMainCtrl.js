(function(){
	'use strict';

	angular.module('app').controller('mvMainCtrl', mvMainCtrl);

	mvMainCtrl.$inject = ['$scope', 'appAPI'];

	function mvMainCtrl($scope, appAPI){

		$scope.taxpayer = {};
		$scope.taxpayers = [];

		appAPI.getAlltpayers()
			.then(function(data){
				console.log('taxpayers found');
				console.log(data);
				$scope.taxpayers = data.data
			})
			.catch(function(err){
				console.log('failed to get taxpayers');
				console.log(err);
			});
	};


})();