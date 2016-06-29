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
			return $http.get('/app/', {
				cache: false
			});
			console.log('Getting taxpayers')
		}

		function getSingletpayer(taxpayer){
			$http.get('/app/taxpayer/' + taxpayer._id)
		}

		function createQuote(taxpayer){
			return $http.post('/app/taxpayer/', taxpayer);
		}

		function getAllPendingQuotes(id){
			return $http.get('/app/quotes/?accepted=false&user=' + id);
		}

		function getSinglePendingQuote(quote){
			return $http.get('/app/quotes/' + quote._id);
		}

		function deletePendingQuote(quote){
			return $http.delete('/app/quotes/' + quote._id);
		}

		function getAllAcceptedQuotes(id){
			return $http.get('/app/quotes/?accepted=true&user=' + id);
		}

		function getSingleAcceptedQuote(quote){
			return $http.get('/app/quotes/' + quote._id);
		}
	};
})();