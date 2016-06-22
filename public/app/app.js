angular.module('app', ['ngResource', 'ngRoute']);

// set up routes in angular
angular.module('app').config(function($routeProvider, $locationProvider) {
	// make urls clean
	$locationProvider.html5Mode(true);
	// define the routes
	$routeProvider
		.when('/app/', 
			
		)

})