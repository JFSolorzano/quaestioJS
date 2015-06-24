'use strict';

/**
 * @ngdoc function
 * @name quaestioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the quaestioApp
 */
angular.module('quaestioApp')
  .controller('MainCTRL', ['$scope','$rootScope','$location',function ($scope,$rootScope,$location) {

    $rootScope.showSideNav = false;
    $rootScope.showToolbar = false;


  }]);
