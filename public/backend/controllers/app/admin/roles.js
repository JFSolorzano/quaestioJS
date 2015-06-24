'use strict';

/**
 * @ngdoc function
 * @name quaestioApp.controller:AdminRolesListCtrl
 * @description
 * # AdminRolesListCtrl
 * Controller of the quaestioApp
 */
angular.module('quaestioApp')
  .controller('RolesCTRL',['$scope','$rootScope','$mdDialog',function ($scope,$rootScope,$mdDialog) {

    $rootScope.showSideNav = true;
    $rootScope.showToolbar = true;

    $scope.selected = [];

    $scope.query = {
      order: 'name',
      limit: 5,
      page: 1
    };

    $scope.$watchCollection('query', function (newValue, oldValue) {
      if(newValue === oldValue) {
        return;
      }

      $scope.roles = [
        {
          name: "asdasdasdasdasdasdasadasdasdasdasdasdasd?",
          description: "asdkahbsdolhavv;oawish c;j v;aoewcb;iauew;coabw;ouabwe'ocaew",
        },
        {
          name: "asdasdasdasdasdasdasadasdasdasdasdasdasd?",
          description: "asdkahbsdolhavv;oawish c;j v;aoewcb;iauew;coabw;ouabwe'ocaew",
        },
        {
          name: "asdasdasdasdasdasdasadasdasdasdasdasdasd?",
          description: "asdkahbsdolhavv;oawish c;j v;aoewcb;iauew;coabw;ouabwe'ocaew",
        },
        {
          name: "asdasdasdasdasdasdasadasdasdasdasdasdasd?",
          description: "asdkahbsdolhavv;oawish c;j v;aoewcb;iauew;coabw;ouabwe'ocaew",
        },
        {
          name: "asdasdasdasdasdasdasadasdasdasdasdasdasd?",
          description: "asdkahbsdolhavv;oawish c;j v;aoewcb;iauew;coabw;ouabwe'ocaew",
        }
      ];
    });

    $scope.addRole = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'views/admin/roles/add.html',
        parent: angular.element(document.body),
        targetEvent: ev,
      })
        .then(function(data) {
          //Agregar
        }, function() {
          //Cancelar
        });
    };

    $scope.editRole = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'views/admin/roles/edit.html',
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

    $scope.deleteRole = function(ev) {
      var confirm = $mdDialog.confirm()
        .parent(angular.element(document.body))
        .title('Esta seguro que desea eliminar el rol?')
        .content('Este rol no se podra recuperar una vez eliminado, los usuarios con este rol seran actualizados.')
        .ariaLabel('Este rol no se podra recuperar una vez eliminado, los usuarios con este rol seran actualizados.')
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
