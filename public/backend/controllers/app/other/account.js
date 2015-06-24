'use strict';

/**
 * @ngdoc function
 * @name quaestioApp.controller:AccountSettingsCtrl
 * @description
 * # AccountSettingsCtrl
 * Controller of the quaestioApp
 */
angular.module('quaestioApp')
  .controller('AccountCTRL', ['$scope','$rootScope',function ($scope,$rootScope) {

    $rootScope.showSideNav = true;
    $rootScope.showToolbar = true;

  }]);
