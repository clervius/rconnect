(function(){
	'use strict';

	angular.module('app').factory('appAPI', appAPI);

	appAPI.$inject = ['$http'];

	function appAPI($http){
		return ({
			getAlltpayers: getAlltpayers,
			getSingletpayer: getSingletpayer,
			createQuote: createQuote,
			getAllPendingQuotes: getAllPendingQuotes,
			getSinglePendingQuote: getSinglePendingQuote,
			deletePendingQuote: deletePendingQuote,
			getAllAcceptedQuotes: getAllAcceptedQuotes,
			getSingleAcceptedQuote: getSingleAcceptedQuote
		});

		function getAlltpayers() {
			return $http.get('/app/taxpayers/');
		}

		function getSingletpayer(taxpayer){
			return $http.get('/app/taxpayers/' + taxpayer)
		}

		function createQuote(thisQuote){
			return $http.post('/app/taxpayers/', thisQuote);
		}

		function getAllPendingQuotes(){
			return $http.get('/app/quotes/pending/');
		}

		function getSinglePendingQuote(quote){
			return $http.get('/app/quotes/pending/' + quote);
		}

		function deletePendingQuote(quote){
			return $http.delete('/app/quotes/' + quote);
		}

		function getAllAcceptedQuotes(){
			return $http.get('/app/quotes/accepted/');
		}

		function getSingleAcceptedQuote(quote){
			return $http.get('/app/quotes/accepted/' + quote);
		}
	};
})();