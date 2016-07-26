
	angular.module('app', ['ngResource', 'ngRoute'] );

	angular.module('app').config(function($routeProvider, $locationProvider){
	    $locationProvider.html5Mode(true);

	    $routeProvider
	    	.when('/access/signup', {
	    		templateUrl: '../partials/app/home/signup',
	    		//controller: 'SignupCtrl'
	    	})
	    	.when('/access/signin', {
	    		templateUrl: '../partials/app/home/signin',
	    		//controller: 'SigninCtrl'
	    	})
	    	.when('/app/account/', {
	    		templateUrl: '..partials/app/account/account',
	    		controller: 'actCtrl'
	    	})
	        .when('/connect/', {
	            templateUrl: '../partials/app/main/main',
	            controller: 'mvMainCtrl',
	            tab: 'home'
	        })
	        .when('/connect/tpayer/:id', {
	        	templateUrl: '../partials/app/main/singletpayer',
	        	controller: 'mvSingleTPCtrl',
	        	tab: 'home'
	        })
	        .when('/connect/pending/', {
	        	templateUrl: '../partials/app/quote/pendingQuotes',
	        	controller: 'mvQuotesCtrl',
	        	tab: 'pendings'
	        })
	        .when('/connect/pending/:id', {
	        	templateUrl: '../partials/app/quote/pendingQuote',
	        	controller: 'mvQuoteCtrl',
	        	tab: 'pendings'
	        })
	        .when('/connect/accepted/', {
	        	templateUrl: '../partials/app/quote/acceptedQuotes',
	        	controller: 'mvAcceptedsCtrl',
	        	tab: 'accepteds'
	        })
	        .when('/connect/accepted/:id', {
	        	templateUrl: '../partials/app/quote/acceptedQuote',
	        	controller: 'mvAcceptedCtrl',
	        	tab: 'accepteds'
	        });
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

	angular.module('app').filter('tel', function () {
	    return function (tel) {
	        if (!tel) { return ''; }

	        var value = tel.toString().trim().replace(/^\+/, '');

	        if (value.match(/[^0-9]/)) {
	            return tel;
	        }

	        var country, city, number;

	        switch (value.length) {
	            case 10: // +1PPP####### -> C (PPP) ###-####
	                country = 1;
	                city = value.slice(0, 3);
	                number = value.slice(3);
	                break;

	            case 11: // +CPPP####### -> CCC (PP) ###-####
	                country = value[0];
	                city = value.slice(1, 4);
	                number = value.slice(4);
	                break;

	            case 12: // +CCCPP####### -> CCC (PP) ###-####
	                country = value.slice(0, 3);
	                city = value.slice(3, 5);
	                number = value.slice(5);
	                break;

	            default:
	                return tel;
	        }

	        if (country == 1) {
	            country = "";
	        }

	        number = number.slice(0, 3) + '-' + number.slice(3);

	        return (country + " (" + city + ") " + number).trim();
	    };
	});


(function(){
    'use strict';

    function ngRedirectTo($window) {
        return {
            restrict: 'A',
            link: function(scope, element, attributes) {
                element.bind('click', function (event) {
                    //assign ng-Redirect-To attribute value to location
                    $window.location.href = attributes.ngRedirectTo;
                });
            }
        };
    }
    angular.module('app').directive('ngRedirectTo', ngRedirectTo);
    //inject $window service for redirection
    ngRedirectTo.$inject = ['$window'];
}());



