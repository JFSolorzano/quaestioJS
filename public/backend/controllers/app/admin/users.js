'use strict';

/**
 * @ngdoc function
 * @name quaestioApp.controller:AdminUsersListCtrl
 * @description
 * # AdminUsersListCtrl
 * Controller of the quaestioApp
 */
angular.module('quaestioApp')
  .controller('UsersCTRL',['$scope','$rootScope','$mdDialog',function ($scope,$rootScope,$mdDialog) {

    $rootScope.showSideNav = true;
    $rootScope.showToolbar = true;

    $scope.selected = [];

    $scope.query = {
      order: 'user',
      limit: 5,
      page: 1
    };

    $scope.$watchCollection('query', function (newValue, oldValue) {
      if(newValue === oldValue) {
        return;
      }

      $scope.users = [
        {
          alias: "asdasdasdasdasdasdasadasdasdasdasdasdasd?",
          login: "1",
          role: "Admin"
        },{
          alias: "asdasdasdasdasdasdasadasdasdasdasdasdasd?",
          login: "1",
          role: "Admin"
        },{
          alias: "asdasdasdasdasdasdasadasdasdasdasdasdasd?",
          login: "1",
          role: "Admin"
        },{
          alias: "asdasdasdasdasdasdasadasdasdasdasdasdasd?",
          login: "1",
          role: "Admin"
        },
      ];
    });

    $scope.addUser = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: '/views/admin/users/add.html',
        parent: angular.element(document.body),
        targetEvent: ev,
      })
        .then(function(data) {
          //Agregar
        }, function() {
          //Cancelar
        });
    };

    $scope.editUser = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: '/views/admin/users/edit.html',
        parent: angular.element(document.body),
        targetEvent: ev,
      })
        .then(function(data) {
          //Editar
        }, function() {
          //Cancelar
        });
    };

    function DialogController($scope, $mdDialog) {
      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.add = function(data) {
        $mdDialog.hide(data);
      };
    }

    $scope.deleteUser = function(ev) {
      var confirm = $mdDialog.confirm()
        .parent(angular.element(document.body))
        .title('Esta seguro que desea eliminar el usuario?')
        .content('Este usuario no se podra recuperar una vez eliminado,los registros a su nombre seran actualizados.')
        .ariaLabel('Este usuario no se podra recuperar una vez eliminado,los registros a su nombre seran actualizados.')
        .ok('Si')
        .cancel('No')
        .targetEvent(ev);
      $mdDialog.show(confirm).then(function() {
        //Eliminar
      }, function() {
        //No hacer nada
      });
    };

  }]);
