(function(){
	'use strict'

	angular.module('app').factory('Auth', Auth);

	Auth.$inject = ['$location', '$rootScope', '$http', 'User', '$cookieStore', '$q'];

	function Auth($location, $rootScope, $http, User, $cookieStore, $q){
		var currentUser = {};

		if($cookieStore.get('token')){
			currentUser = User.get();
		}

		

		return {
			// Create new user
			createUser: function(user, callback){
				var cb = callback || angular.noop;

				return User.save(user,
					function(data) {
						$cookieStore.put('token', data.token);
						currentUser = User.get();
						return cb(user);
						},
					function(err){
						this.logout();
						return cb(err)
						}.bind(this)).$promise;
			}
		}
	}
})();