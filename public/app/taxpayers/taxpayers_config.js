(function() {
  'use strict';

  angular
    .module('app')
    .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider){
      $stateProvider
    }



  angular.module('app').config(function ($stateProvider) {
      $stateProvider
        .state('app', {
          url: '/app/',
          templateUrl: '../main/main',
          controller: 'mvMainCtrl'
        });
    });

    

    

})();