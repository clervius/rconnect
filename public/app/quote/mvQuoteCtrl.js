(function(){
	'use strict';

	angular.module('app').controller('mvQuotesCtrl', mvQuotesCtrl);

	mvQuotesCtrl.$inject = ['$scope', 'appAPI', '$routeParams'];

	function mvQuotesCtrl($scope, appAPI, $routeParams){

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

	angular.module('app').controller('mvQuoteCtrl', mvQuoteCtrl);

	mvQuoteCtrl.$inject = ['$scope', 'appAPI', '$routeParams', '$window'];

	function mvQuoteCtrl($scope, appAPI, $routeParams, $window){

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

		$scope.changeAccepted = function(){
			var thisQuote = {
				theQuote: $scope.pending._id
			};

			appAPI.changeToAccepted(thisQuote).then(function(data){
				console.log('changed to accepeted');
				console.log(data);
				$window.location.href = '/connect/'

			}).catch(function(err){
				console.log('did not change to accepeted');
				console.log(err);
			});
		}

	};


})();

(function(){
	'use strict';

	angular.module('app').controller('mvAcceptedsCtrl', mvAcceptedsCtrl);

	mvAcceptedsCtrl.$inject = ['$scope', 'appAPI', '$routeParams'];

	function mvAcceptedsCtrl($scope, appAPI, $routeParams){

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

	angular.module('app').controller('mvAcceptedCtrl', mvAcceptedCtrl);

	mvAcceptedCtrl.$inject = ['$scope', 'appAPI', '$routeParams'];

	function mvAcceptedCtrl($scope, appAPI, $routeParams){

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