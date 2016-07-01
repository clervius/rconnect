(function(){
	'use strict';

	angular.module('app').controller('mvQuotesCtrl', mvMainCtrl);

	mvMainCtrl.$inject = ['$scope', 'appAPI', '$routeParams'];

	function mvMainCtrl($scope, appAPI, $routeParams){

		$scope.pendings = [];		
		
		appAPI.getAllPendingQuotes()
			.then(function(data){
				console.log('Pending quotes found');
				console.log(data);
				$scope.pendings = data.data;			
			})
			.catch(function(err){
				console.log('failed to get pending quotes');
				console.log(err);
			});


	};


})();

(function(){
	'use strict';

	angular.module('app').controller('mvQuoteCtrl', mvMainCtrl);

	mvMainCtrl.$inject = ['$scope', 'appAPI', '$routeParams'];

	function mvMainCtrl($scope, appAPI, $routeParams){

		$scope.pending = {};		
		
		appAPI.getSinglePendingQuote($routeParams.id)
			.then(function(data){
				console.log('single pending found');
				console.log(data)
				$scope.pending = data.data
			})
			.catch(function(err){
				console.log('failed to get single pending');
				console.log(err);
			});

	};


})();

(function(){
	'use strict';

	angular.module('app').controller('mvAcceptedsCtrl', mvMainCtrl);

	mvMainCtrl.$inject = ['$scope', 'appAPI', '$routeParams'];

	function mvMainCtrl($scope, appAPI, $routeParams){

		$scope.accepteds = [];		
		
		appAPI.getAllAcceptedQuotes()
			.then(function(data){
				console.log('Accepted quotes found');
				console.log(data);
				$scope.accepteds = data.data;			
			})
			.catch(function(err){
				console.log('failed to get Accepted quotes');
				console.log(err);
			});


	};


})();

(function(){
	'use strict';

	angular.module('app').controller('mvAcceptedCtrl', mvMainCtrl);

	mvMainCtrl.$inject = ['$scope', 'appAPI', '$routeParams'];

	function mvMainCtrl($scope, appAPI, $routeParams){

		$scope.accepted = {};		
		
		appAPI.getSingleAcceptedQuote($routeParams.id)
			.then(function(data){
				console.log('single accepted found');
				console.log(data)
				$scope.accepted = data.data
			})
			.catch(function(err){
				console.log('failed to get single accepted');
				console.log(err);
			});

	};


})();