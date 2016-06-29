angular.module('MainCtrl', []).controller('MainController', 'tpayer', function($scope, tpayer){
   $scope.tagline = 'To the moon and back!';

   tpayer.get()
   	.then(function(data){
   		$scope.taxpayers = data.data;
   		console.log('Got the data')
   	}).catch(function(err){
   		console.log('didnt get the data')
   	})
});