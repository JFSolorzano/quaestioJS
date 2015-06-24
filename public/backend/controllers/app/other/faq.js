'use strict';

/**
 * @ngdoc function
 * @name quaestioApp.controller:FaqListCtrl
 * @description
 * # FaqListCtrl
 * Controller of the quaestioApp
 */
angular.module('quaestioApp')
  .controller('FaqCTRL', ['$scope','$rootScope','$mdDialog',function ($scope,$rootScope,$mdDialog) {

    $rootScope.showSideNav = true;
    $rootScope.showToolbar = true;

    $scope.selected = [];

    $scope.query = {
      order: 'question',
      limit: 5,
      page: 1
    };


    $scope.$watchCollection('query', function (newValue, oldValue) {
      if(newValue === oldValue) {
        return;
      }

      $scope.faq = [
        {
          q: "asdasdasdasdasdasdasadasdasdasdasdasdasd?",
          a: "asdkahbsdolhavv;oawish c;j v;aoewcb;iauew;coabw;ouabwe'ocaew",
        },
        {
          q: "asdasdasdasdasdasdasadasdasdasdasdasdasd?",
          a: "asdkahbsdolhavv;oawish c;j v;aoewcb;iauew;coabw;ouabwe'ocaew",
        },
        {
          q: "asdasdasdasdasdasdasadasdasdasdasdasdasd?",
          a: "asdkahbsdolhavv;oawish c;j v;aoewcb;iauew;coabw;ouabwe'ocaew",
        },
        {
          q: "asdasdasdasdasdasdasadasdasdasdasdasdasd?",
          a: "asdkahbsdolhavv;oawish c;j v;aoewcb;iauew;coabw;ouabwe'ocaew",
        },

      ];
    });

    $scope.addFaq = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: '/views/faq/add.html',
        parent: angular.element(document.body),
        targetEvent: ev,
      })
        .then(function(data) {
          //Agregar
        }, function() {
          //Cancelar
        });
    };

    $scope.editFaq = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: '/views/faq/edit.html',
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

    $scope.deleteFaq = function(ev) {
      var confirm = $mdDialog.confirm()
        .parent(angular.element(document.body))
        .title('Esta seguro que desea eliminar la pregunta?')
        .content('Esta pregunta no se podra recuperar una vez eliminada.')
        .ariaLabel('Esta pregunta no se podra recuperar una vez eliminada.')
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

