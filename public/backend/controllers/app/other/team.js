'use strict';

/**
 * @ngdoc function
 * @name quaestioApp.controller:TeamListCtrl
 * @description
 * # TeamListCtrl
 * Controller of the quaestioApp
 */
angular.module('quaestioApp')
  .controller('TeamCTRL', ['$scope','$rootScope','$mdDialog',function ($scope,$rootScope,$mdDialog) {

    $rootScope.showSideNav = true;
    $rootScope.showToolbar = true;

    //SCRUD
        $scope.insertOrUpdate = function (query, data) {
            $rootScope.insertOrUpdate(query, data).then(function (data) {
                console.log(data);
            }, function(data){});
        };

        $scope.delete = $rootScope.delete;

        $scope.select = function () {
            $rootScope.select("SELECT ID, Nombre, Biografia, FechaModificacion, FechaCreacion FROM FAQ ORDER BY FechaModificacion")
            .then(function (resolve) {
                $scope.FaqData = resolve;
                console.log(resolve);
            }, function(reject){
                var deferred = $q.defer();

                $timeout(function () {
                    deferred.reject();
                }, 2000);

                $scope.deferred = deferred.promise;
            });
        };


        $scope.select();

    $scope.selected = [];

    $scope.query = {
      order: 'member',
      limit: 5,
      page: 1
    };

    $scope.$watchCollection('query', function (newValue, oldValue) {
      if(newValue === oldValue) {
        return;
      }

      $scope.team = [
        {
          member: "asdasdasdasdasdasdasadasdasdasdasdasdasd?",
          bio: "asdkahbsdolhavv;oawish c;j v;aoewcb;iauew;coabw;ouabwe'ocaew",
        },
        {
          member: "asdasdasdasdasdasdasadasdasdasdasdasdasd?",
          bio: "asdkahbsdolhavv;oawish c;j v;aoewcb;iauew;coabw;ouabwe'ocaew",
        },
        {
          member: "asdasdasdasdasdasdasadasdasdasdasdasdasd?",
          bio: "asdkahbsdolhavv;oawish c;j v;aoewcb;iauew;coabw;ouabwe'ocaew",
        },
        {
          member: "asdasdasdasdasdasdasadasdasdasdasdasdasd?",
          bio: "asdkahbsdolhavv;oawish c;j v;aoewcb;iauew;coabw;ouabwe'ocaew",
        },

      ];
    });

    $scope.addMember = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'views/team/add.html',
        parent: angular.element(document.body),
        targetEvent: ev,
      })
        .then(function(data) {
          //Agregar
        }, function() {
          //Cancelar
        });
    };

    $scope.editMember = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'views/team/edit.html',
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

    $scope.deleteMember = function(ev) {
      var confirm = $mdDialog.confirm()
        .parent(angular.element(document.body))
        .title('Esta seguro que desea eliminar al integrate?')
        .content('Este integrante no se podra recuperar una vez eliminado.')
        .ariaLabel('Este integrante no se podra recuperar una vez eliminado.')
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
