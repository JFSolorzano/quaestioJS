'use strict';

/**
 * Controller for FAQ module
 * @ngdoc function
 * @name quaestioApp.controller:FaqListCtrl
 * @description
 * # FaqListCtrl
 * Controller of the quaestioApp
 */
 angular.module('quaestioApp')
 .controller('FaqCTRL', ['$scope', '$rootScope', '$mdDialog', '$q', '$timeout', function ($scope, $rootScope, $mdDialog, $q, $timeout) {

    $rootScope.showSideNav = true;
    $rootScope.showToolbar = true;

    $scope.Insert = function () {
        $rootScope.Insert("INSERT INTO faq SET", {
            Pregunta: $scope.question,
            Respuesta: $scope.answer,
            FechaCreacion: $scope.getDate()
        });
        location.reload();
    };

    $scope.Delete = $rootScope.Delete;

    $scope.Select = function () {
        $rootScope.Select("SELECT ID, Pregunta, Respuesta, FechaModificacion, FechaCreacion FROM faq ORDER BY ID DESC").then(function (resolve){
            $scope.data = resolve;
        }, function (reject){
            var deferred = $q.defer();
            $timeout(function (){
                deferred.reject();
            }, 2000);
            $scope.deferred = deferred.promise;
        });
    };


    $scope.Select();

    $scope.query = {
        order: 'question',
        limit: 5,
        page: 1
    };

    $scope.selected = [];

    $scope.getDate = function (){
        var date;
        date = new Date();
        date = date.getFullYear() + '-' +
        ('00' + (date.getMonth()+1)).slice(-2) + '-' +
        ('00' + date.getDate()).slice(-2) + ' ' + 
        ('00' + date.getHours()).slice(-2) + ':' + 
        ('00' + date.getMinutes()).slice(-2) + ':' + 
        ('00' + date.getSeconds()).slice(-2);
        return date;
    }

    $scope.Log = function () {
        console.log($scope.selected[0].ID);
        console.log($scope.selected);
        console.log($scope.selected[0].Question);
    };

    $scope.Search = function (predicate) {
        $scope.filter = predicate;
        $scope.deferredSearch = $scope.data.get($scope.query, success).$promise;
    };

    $scope.OnPageChange = function (page, limit) {
        console.log('Scope Page: ' + $scope.query.page + ' Scope Limit: ' + $scope.query.limit);
        console.log('Page: ' + page + ' Limit: ' + limit);
        var deferred = $q.defer();
        $timeout(function () {
            deferred.resolve();
        }, 2000);
        return deferred.promise;
    };

    $scope.OnOrderChange = function (order) {
        console.log('Scope Order: ' + $scope.query.order);
        console.log('Order: ' + order);
        var deferred = $q.defer();
        $timeout(function () {
            deferred.resolve();
        }, 2000);
        return deferred.promise;
    };

    $scope.Skip = function (item, index) {
        return index >= ($scope.query.limit * ($scope.query.page - 1));
    };


        //Modal Dialogs
        $scope.$watchCollection('query', function (newValue, oldValue) {
            if (newValue === oldValue) {
                return;
            }
        });

        $scope.AddDialog = function (ev) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'views/faq/add.html',
                parent: angular.element(document.body),
                targetEvent: ev
            });
        };

        $scope.EditDialog = function (ev) {
            $mdDialog.show({
                controller: EditDialogController,
                templateUrl: 'views/faq/edit.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                locals: {
                    record: $scope.selected[0]
                },
                clickOutsideToClose: true,
                controllerAs: 'EditFaqCTRL'
            });
        };

        function EditDialogController($scope, $mdDialog, record) {
            $scope.record = record;
            $scope.Update = function(){
                $rootScope.Update(
                    "UPDATE faq SET",
                    "ID = "+$scope.record.ID,
                    {
                        Pregunta: $scope.record.Pregunta,
                        Respuesta: $scope.record.Respuesta,
                        FechaModificacion: $scope.getDate()
                    }
                    );
                location.reload();
            };

            $scope.getDate = function (){
                var date;
                date = new Date();
                date = date.getFullYear() + '-' +
                ('00' + (date.getMonth()+1)).slice(-2) + '-' +
                ('00' + date.getDate()).slice(-2) + ' ' + 
                ('00' + date.getHours()).slice(-2) + ':' + 
                ('00' + date.getMinutes()).slice(-2) + ':' + 
                ('00' + date.getSeconds()).slice(-2);
                return date;
            }

            $scope.hide = function (){
                $mdDialog.hide();
            };

            $scope.cancel = function (){
                $mdDialog.cancel();
            };
        }

        function DialogController($scope, $mdDialog) {

            $scope.hide = function (){
                $mdDialog.hide();
            };

            $scope.cancel = function (){
                $mdDialog.cancel();
            };

        }

        $scope.DeleteDialog = function (ev) {

            var x = 0;
            for (var i = 0; i < $scope.selected.length; i++) {
                x += 1;
            };

            if(x > 1){
                var confirm = $mdDialog.confirm()
                .parent(angular.element(document.body))
                .title('¿Esta seguro que desea eliminar las preguntas seleccionadas?')
                .content('Las preguntas no se podran recuperar una vez eliminadas.')
                .ariaLabel('Las preguntas no se podran recuperar una vez eliminadas.')
                .ok('Si')
                .cancel('No')
                .targetEvent(ev);

                $mdDialog.show(confirm).then(function () {
                    for (var i = 0; i < $scope.selected.length; i++) {
                        $scope.Delete("DELETE FROM faq WHERE ID = " + $scope.selected[i].ID);
                    };
                    location.reload();
                }, function () {
                //No hacer nada
            });

            }else{
                var confirm = $mdDialog.confirm()
                .parent(angular.element(document.body))
                .title('¿Esta seguro que desea eliminar la pregunta?')
                .content('Esta pregunta no se podra recuperar una vez eliminada.')
                .ariaLabel('Esta pregunta no se podra recuperar una vez eliminada.')
                .ok('Si')
                .cancel('No')
                .targetEvent(ev);

                $mdDialog.show(confirm).then(function () {
                    $scope.Delete("DELETE FROM faq WHERE ID = " + $scope.selected[0].ID);
                    location.reload();
                }, function () {
                //No hacer nada
            });

            }
        };
    }]);