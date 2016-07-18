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
			return $http.get('/connect/taxpayers/');
		}

		function getSingletpayer(taxpayer){
			return $http.get('/connect/taxpayers/' + taxpayer)
		}

		function createQuote(thisQuote){
			return $http.post('/connect/taxpayers/', thisQuote);
		}

		function getAllPendingQuotes(){
			return $http.get('/connect/quotes/pending/');
		}

		function getSinglePendingQuote(quote){
			return $http.get('/connect/quotes/pending/' + quote);
		}

		function deletePendingQuote(quote){
			return $http.delete('/connect/quotes/' + quote);
		}

		function getAllAcceptedQuotes(){
			return $http.get('/connect/quotes/accepted/');
		}

		function getSingleAcceptedQuote(quote){
			return $http.get('/connect/quotes/accepted/' + quote);
		}
	};
})();