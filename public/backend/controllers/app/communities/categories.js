'use strict';

/**
 * @ngdoc function
 * @name quaestioApp.controller:CommunitiesCategoriesListCtrl
 * @description
 * # CommunitiesCategoriesListCtrl
 * Controller of the quaestioApp
 */
angular.module('quaestioApp')
  .controller('CategoriesCTRL', ['$scope','$rootScope','$mdDialog',function ($scope,$rootScope,$mdDialog) {

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

      $scope.categories = [
        {
          name: "asdasdasdasdasdasdasadasdasdasdasdasdasd?",
          description: "asdkahbsdolhavv;oawish c;j v;aoewcb;iauew;coabw;ouabwe'ocaew",
        },{
          name: "asdasdasdasdasdasdasadasdasdasdasdasdasd?",
          description: "asdkahbsdolhavv;oawish c;j v;aoewcb;iauew;coabw;ouabwe'ocaew",
        },{
          name: "asdasdasdasdasdasdasadasdasdasdasdasdasd?",
          description: "asdkahbsdolhavv;oawish c;j v;aoewcb;iauew;coabw;ouabwe'ocaew",
        },{
          name: "asdasdasdasdasdasdasadasdasdasdasdasdasd?",
          description: "asdkahbsdolhavv;oawish c;j v;aoewcb;iauew;coabw;ouabwe'ocaew",
        },
      ];
    });

    $scope.addCategory = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: '/backend/views/communities/categories/add.html',
        parent: angular.element(document.body),
        targetEvent: ev,
      })
        .then(function(data) {
          //Agregar
        }, function() {
          //Cancelar
        });
    };

    $scope.editCategory = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: '/backend/views/communities/categories/edit.html',
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

    $scope.deleteCategory = function(ev) {
      var confirm = $mdDialog.confirm()
        .parent(angular.element(document.body))
        .title('Esta seguro que desea eliminar la categoria?')
        .content('Esta categoria no se podra recuperar una vez eliminado, las comunidades de esta categoria deben ser actualizadas.')
        .ariaLabel('Esta categoria no se podra recuperar una vez eliminado, las comunidades de esta categoria deben ser actualizadas.')
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
