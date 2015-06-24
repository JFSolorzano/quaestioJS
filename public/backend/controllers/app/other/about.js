'use strict';

/**
 * @ngdoc function
 * @name quaestioApp.controller:AboutChangesCtrl
 * @description
 * # AboutChangesCtrl
 * Controller of the quaestioApp
 */
angular.module('quaestioApp')
  .controller('AboutCTRL', ['$scope','$rootScope','$mdDialog',function ($scope,$rootScope,$mdDialog) {

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
          content: "asdasdasdasdasdasdasadasdasdasdasdasdasd?"
        },
        {
          content: "asdasdasdasdasdasdasadasdasdasdasdasdasd?"
        },
        {
          content: "asdasdasdasdasdasdasadasdasdasdasdasdasd?"
        },
        {
          content: "asdasdasdasdasdasdasadasdasdasdasdasdasd?"
        },

      ];
    });

  }]);
