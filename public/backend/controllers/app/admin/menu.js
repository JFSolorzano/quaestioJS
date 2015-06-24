'use strict';

/**
 * @ngdoc function
 * @name quaestioApp.controller:AdminMenuCtrl
 * @description
 * # AdminMenuCtrl
 * Controller of the quaestioApp
 */
angular.module('quaestioApp')
  .controller('MenuCTRL',['$scope','$rootScope',function ($scope,$rootScope) {

    $rootScope.showSideNav = true;
    $rootScope.showToolbar = true;

  }]);
