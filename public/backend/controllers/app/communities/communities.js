'use strict';

/**
 * @ngdoc function
 * @name quaestioApp.controller:CommunitiesListCtrl
 * @description
 * # CommunitiesListCtrl
 * Controller of the quaestioApp
 */
angular.module('quaestioApp')
  .controller('CommunitiesCTRL', ['$scope','$rootScope','$mdDialog',function ($scope,$rootScope,$mdDialog) {

    $rootScope.showSideNav = true;
    $rootScope.showToolbar = true;

    //SCRUD
        $scope.add = function(){
            $scope.insertOrUpdate('INSERT INTO faq SET',{
                Pregunta: $scope.Question,
                Respuesta: $scope.Answer
            });
            $scope.hide();
        };

        $scope.insertOrUpdate = function(query, data){
            $rootScope.insertOrUpdate(query, data).then(function(data){
                console.log(data);
            }, function(data){});
        };

        $scope.delete = $rootScope.delete;

        $scope.select = function(){
            $rootScope.select("SELECT ID, Pregunta, Respuesta, FechaModificacion, FechaCreacion FROM FAQ ORDER BY FechaModificacion")
                .then(function(resolve){
                    $scope.FaqData = resolve;
                    console.log(resolve);
                }, function(reject){
                    console.log(reject);
                });
        };

        $scope.select();

        $scope.query = {
            order: 'question',
            limit: 5,
            page: 1
        };

        //SCRUD

    $scope.$watchCollection('query', function (newValue, oldValue) {
      if(newValue === oldValue) {
        return;
      }

      $scope.communities = [
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

    $scope.addCommunity = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'views/communities/add.html',
        parent: angular.element(document.body),
        targetEvent: ev,
      })
        .then(function(data) {
          //Agregar
        }, function() {
          //Cancelar
        });
    };

    $scope.editCommunity = function(ev) {
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'views/communities/edit.html',
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

    $scope.deleteCommunity = function(ev) {
      var confirm = $mdDialog.confirm()
        .parent(angular.element(document.body))
        .title('Esta seguro que desea eliminar la comunidad?')
        .content('Esta comunidad no se podra recuperar una vez eliminada.')
        .ariaLabel('Esta comunidad no se podra recuperar una vez eliminada.')
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

