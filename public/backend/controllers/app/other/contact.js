'use strict';

/**
 * @ngdoc function
 * @name quaestioApp.controller:ContactChangesCtrl
 * @description
 * # ContactChangesCtrl
 * Controller of the quaestioApp
 */
angular.module('quaestioApp')
  .controller('ContactCTRL',['$scope','$rootScope',function ($scope,$rootScope) {

    $rootScope.showSideNav = true;
    $rootScope.showToolbar = true;

    $scope.selected = [];

    $scope.query = {
      order: 'content',
      limit: 5,
      page: 1
    };

    $scope.$watchCollection('query', function (newValue, oldValue) {
      if(newValue === oldValue) {
        return;
      }

      $scope.changes = [
        {
          content: "asdlasbdf;aisjdbvia;ebcaiwhbcawecwe"
        },{
          content: "asdlasbdf;aisjdbvia;ebcaiwhbcawecwe"
        },{
          content: "asdlasbdf;aisjdbvia;ebcaiwhbcawecwe"
        },{
          content: "asdlasbdf;aisjdbvia;ebcaiwhbcawecwe"
        },{
          content: "asdlasbdf;aisjdbvia;ebcaiwhbcawecwe"
        },
      ];
    });

  }]);
