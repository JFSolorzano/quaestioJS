var app = angular.module('quaestioJS', []);

app.run(function($rootScope, $http) {
    $rootScope.find = function(tmpcollection){
        $http.get('/prueba/'+tmpcollection).
        success(function(data, status, headers, config) {
            console.log(data);
        }).
        error(function(data, status, headers, config) {
            console.log("Errorazo.");
            console.log(data);
        });    
    }
});

app.controller('mainCtrl', function($scope, $rootScope, $http) {   

    $rootScope.find('quaestioJS');

    $scope.agregar = function(){
        $http.post('/prueba', $scope.persona).
        success(function(data, status, headers, config) {
            find();
            $scope.limpiar();
        }).
        error(function(data, status, headers, config) {
            console.log("Errorazo.");
        });    
    }

    $scope.eliminar = function(id){
        $http.delete('/prueba/'+id).
        success(function(data, status, headers, config) {
            find();
            $scope.limpiar();
        }).
        error(function(data, status, headers, config) {
            console.log("Errorazo.");
        }); 
    }

    $scope.editar = function(id){
        $http.get('/prueba/'+id).
        success(function(data, status, headers, config) {
            $scope.persona = data
        }).
        error(function(data, status, headers, config) {
            console.log("Errorazo.");
        }); 
    }

    $scope.actualizar = function(){
        $http.put('/prueba/'+$scope.persona._id, $scope.persona).
        success(function(data, status, headers, config) {
            find();
            $scope.limpiar();
        }).
        error(function(data, status, headers, config) {
            console.log("Errorazo.");
        }); 
    }

    $scope.limpiar = function(){
        $scope.persona = "";
    }
});