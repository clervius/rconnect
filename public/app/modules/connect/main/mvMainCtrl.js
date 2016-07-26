(function(){
	'use strict';

	angular.module('app').controller('sideNav', sideNav);

	sideNav.$inject = ['$scope', 'appAPI', '$routeParams', '$route'];

	function sideNav($scope, appAPI, $routeParams, $route){

		$scope.taxpayers = [];	
		$scope.accepteds = [];
		$scope.pendings = [];	
		
		$scope.$route = $route;
		
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

	angular.module('app').controller('mvSingleTPCtrl', mvSingleTPCtrl);

	mvSingleTPCtrl.$inject = ['$scope', 'appAPI', '$routeParams'];

	function mvSingleTPCtrl($scope, appAPI, $routeParams){

		$scope.taxpayer = {};		
		$scope.formSubmitted = false;
		//sessionStorage.user = JSON.stringify($scope.user);
		//$scope.user = JSON.parse(sessionStorage.user);

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

		$scope.createQuote = function(){
			var thisQuote = {
				quoteAmt: $scope.quoteAmt,
				tpayer: $scope.taxpayer._id,
				creator: $scope.user
			}	

			appAPI.createQuote(thisQuote).then(function(data){
				console.log('Created Quote');
				console.log(data);
				$scope.formSubmitted = true;
			}).catch(function(err){
				console.log('didnt create quote');
				console.log(err);
			});
		}	

	};


})();