'use strict';

/**
 * @ngdoc function
 * @name quaestioApp.controller:AccountLoginCtrl
 * @description
 * # AccountLoginCtrl
 * Controller of the quaestioApp
 */
angular.module('quaestioApp')
  .controller('LoginCTRL',['$scope','$rootScope',function ($scope,$rootScope) {

    $rootScope.showSideNav = false;
    $rootScope.showToolbar = false;

  }]);
