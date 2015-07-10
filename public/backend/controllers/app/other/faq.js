'use strict';

/**
 * @ngdoc function
 * @name quaestioApp.controller:FaqListCtrl
 * @description
 * # FaqListCtrl
 * Controller of the quaestioApp
 */
angular.module('quaestioApp')
    .controller('FaqCTRL', ['$scope', '$rootScope', '$mdDialog','$q', '$timeout', function ($scope, $rootScope, $mdDialog, $q, $timeout) {

        $rootScope.showSideNav = true;
        $rootScope.showToolbar = true;

        $scope.AddQuestion = function () {
            $scope.insertOrUpdate('INSERT INTO faq SET', {
                Pregunta: $scope.Question,
                Respuesta: $scope.Answer
            });
        };

        $scope.EditQuestion = function () {
            $scope.insertOrUpdate('UPDATE faq SET Pregunta = :Pregunta, Respuesta = :Respuesta WHERE ID = :', {
                ID: $scope.selected[0].ID,
                Pregunta: $scope.Question,
                Respuesta: $scope.Answer
            });
        };

        //SCRUD
        $scope.insertOrUpdate = function (query, data) {
            $rootScope.insertOrUpdate(query, data).then(function (data) {
                console.log(data);
<<<<<<< HEAD
            }, function(data){});
=======
            }, function (data) {

            });
>>>>>>> add9b4ec17ea7c6ed6c1eed8e66e06aa5e081e55
        };

        $scope.delete = $rootScope.delete;

        $scope.select = function () {
            $rootScope.select("SELECT ID, Pregunta, Respuesta, FechaModificacion, FechaCreacion FROM FAQ ORDER BY FechaModificacion")
                .then(function (resolve) {
                    $scope.FaqData = resolve;
<<<<<<< HEAD
                    console.log(resolve);
                }, function(reject){
=======

                    var deferred = $q.defer();

                    $timeout(function () {
                        deferred.reject();
                    }, 2000);

                    $scope.deferred = deferred.promise;

                }, function (reject) {
>>>>>>> add9b4ec17ea7c6ed6c1eed8e66e06aa5e081e55
                    console.log(reject);
                });
        };


        $scope.select();

        $scope.query = {
            order: 'question',
            limit: 5,
            page: 1
        };

        $scope.selected = [];
        $scope.log = function() {
          console.log($scope.selected[0].ID);
          console.log($scope.selected);
          console.log($scope.selected[0].Question);
        };

        $scope.search = function (predicate) {
            $scope.filter = predicate;
            $scope.deferred = $scope.FaqData.get($scope.query, success).$promise;
        };

        $scope.onpagechange = function (page, limit) {

            console.log('Scope Page: ' + $scope.query.page + ' Scope Limit: ' + $scope.query.limit);
            console.log('Page: ' + page + ' Limit: ' + limit);

            var deferred = $q.defer();

            $timeout(function () {
                deferred.resolve();
            }, 2000);

            return deferred.promise;
        };

        $scope.loadStuff = function () {
            var deferred = $q.defer();

            $timeout(function () {
                deferred.reject();
            }, 2000);

            $scope.deferred = deferred.promise;
        };

        $scope.onorderchange = function (order) {

            console.log('Scope Order: ' + $scope.query.order);
            console.log('Order: ' + order);

            var deferred = $q.defer();

            $timeout(function () {
                deferred.resolve();
            }, 2000);

            return deferred.promise;
        };

        $scope.skip = function (item, index) {
            return index >= ($scope.query.limit * ($scope.query.page - 1));
        };


        //Modal Dialogs
        $scope.$watchCollection('query', function (newValue, oldValue) {
            if (newValue === oldValue) {
                return;
            }
        });

        $scope.addFaq = function (ev) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'views/faq/add.html',
                parent: angular.element(document.body),
                targetEvent: ev,
            });
        };

        $scope.editFaq = function (ev) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'views/faq/edit.html',
                parent: angular.element(document.body),
                targetEvent: ev,
            });
        };

        function DialogController($scope, $mdDialog) {

            $scope.hide = function () {
                $mdDialog.hide();
            };
            $scope.cancel = function () {
                $mdDialog.cancel();
            };

        }

        $scope.deleteFaq = function (ev) {
            var confirm = $mdDialog.confirm()
                .parent(angular.element(document.body))
                .title('Esta seguro que desea eliminar la pregunta?')
                .content('Esta pregunta no se podra recuperar una vez eliminada.')
                .ariaLabel('Esta pregunta no se podra recuperar una vez eliminada.')
                .ok('Si')
                .cancel('No')
                .targetEvent(ev);
            $mdDialog.show(confirm).then(function () {
                //Eliminar
            }, function () {
                //No hacer nada
            });
        };

    }]);

