
	angular.module('app', ['ngResource', 'ngRoute'] );

	angular.module('app').config(function($routeProvider, $locationProvider){
	    $locationProvider.html5Mode(true);

	    $routeProvider
	        .when('/app/', {
	            templateUrl: '../partials/app/main/main',
	            controller: 'mvMainCtrl'
	        })
	        .when('/app/:id', {
	        	templateUrl: '../partials/app/main/singletpayer',
	        	controller: 'mvSingleTPCtrl'
	        })
	});

	angular.module('app').filter('agi', function(){
		return function(input) {
			input = [];
			for(i = 0; i < input.income.length; i++){
				input += input.income[i].income
			}
		}

	});

	angular.module('app').filter('yesNo', function(){
		return function(input){
			return input ? 'Yes' : 'No'
		}
	});


