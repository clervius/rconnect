
	angular.module('app', ['ngResource', 'ngRoute'] );

	angular.module('app').config(function($routeProvider, $locationProvider){
	    $locationProvider.html5Mode(true);

	    $routeProvider
	    	.when('/access/signup', {
	    		templateUrl: '../partials/app/home/signup',
	    		controller: 'SignupCtrl'
	    	})
	        .when('/app/', {
	            templateUrl: '../partials/app/main/main',
	            controller: 'mvMainCtrl',
	            tab: 'home'
	        })
	        .when('/app/tpayer/:id', {
	        	templateUrl: '../partials/app/main/singletpayer',
	        	controller: 'mvSingleTPCtrl',
	        	tab: 'home'
	        })
	        .when('/app/pending/', {
	        	templateUrl: '../partials/app/quote/pendingQuotes',
	        	controller: 'mvQuotesCtrl',
	        	tab: 'pendings'
	        })
	        .when('/app/pending/:id', {
	        	templateUrl: '../partials/app/quote/pendingQuote',
	        	controller: 'mvQuoteCtrl',
	        	tab: 'pendings'
	        })
	        .when('/app/accepted/', {
	        	templateUrl: '../partials/app/quote/acceptedQuotes',
	        	controller: 'mvAcceptedsCtrl',
	        	tab: 'accepteds'
	        })
	        .when('/app/accepted/:id', {
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

