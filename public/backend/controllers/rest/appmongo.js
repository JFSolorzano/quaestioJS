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

    $rootScope.insert = function(tmpcollection, tmpdata){
        $http.post('/prueba/'+tmpcollection, tmpdata).
        success(function(data, status, headers, config) {
            console.log('INSERTADO.');
            return true;
        }).
        error(function(data, status, headers, config) {
            console.log("Errorazo.");
        });    
    }
});

app.controller('mainCtrl', function($scope, $rootScope, $http) {   
    
    $scope.find = function(){
        $rootScope.find('quaestioJS');
    }

    $scope.find();

    $scope.insert = function(){
        if($rootScope.insert('quaestioJS', 'Pruebita')){
            console.log('CHEQUEADO.');
            $scope.find();
        }
    }

    $scope.insert();

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