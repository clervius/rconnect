(function(){
	'use strict';

	angular.module('app').controller('sideNav', mvMainCtrl);

	mvMainCtrl.$inject = ['$scope', 'appAPI', '$routeParams'];

	function mvMainCtrl($scope, appAPI, $routeParams){

		$scope.taxpayers = [];	
		$scope.accepted = [];
		$scope.pending = [];	
		
		appAPI.getAlltpayers()
			.then(function(data){
				console.log('taxpayers found');
				console.log(data);
				$scope.taxpayers = data.data;			
			})
			.catch(function(err){
				console.log('failed to get taxpayers');
				console.log(err);
			});


	};


})();


(function(){
	'use strict';

	angular.module('app').controller('mvMainCtrl', mvMainCtrl);

	mvMainCtrl.$inject = ['$scope', 'appAPI'];

	function mvMainCtrl($scope, appAPI){


		$scope.taxpayers = [];

		appAPI.getAlltpayers()
			.then(function(data){
				console.log('taxpayers found');
				console.log(data);
				$scope.taxpayers = data.data;			
			})
			.catch(function(err){
				console.log('failed to get taxpayers');
				console.log(err);
			});
		

	};


})();

(function(){
	'use strict';

	angular.module('app').controller('mvSingleTPCtrl', mvMainCtrl);

	mvMainCtrl.$inject = ['$scope', 'appAPI', '$routeParams'];

	function mvMainCtrl($scope, appAPI, $routeParams){

		$scope.taxpayer = {};		
		
		appAPI.getSingletpayer($routeParams.id)
			.then(function(data){
				console.log('single taxpayer found');
				console.log(data)
				$scope.taxpayer = data.data
			})
			.catch(function(err){
				console.log('failed to get single tpayer');
				console.log(err);
			});


	};


})();