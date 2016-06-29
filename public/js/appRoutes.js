angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider

    // home page
        .when('/app/', {
            templateUrl: '../partials/app/main/main',
            controller: 'MainController'
        })
        .when('/app/taxpayer/:id', {
            templateUrl: '../partials/main/main',
            controller: 'MainController'
        })
        .when('/quotes/pending/', {
            templateUrl: '../partials/main/pquotes',
            controller: 'quotesController'
        })
        .when('/quotes/pending/:id', {
            templateUrl: '../partials/main/pquotes',
            controller: 'quotesController'
        })
    // nerds page that will use the NerdController
        .when('/quotes/accepted/', {
            templateUrl: '../partials/main/aquotes',
            controller: 'quotesController'
        })
        .when('/quotes/accepted/:id', {
            templateUrl: '../partials/main/aquotes',
            controller: 'quotesController'
        });

    $locationProvider.html5Mode(true);
}]);
