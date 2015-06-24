var app = angular.module('quaestioJS', []);

app.controller('mainCtrl', function($scope, $http) {

    var refresh = function(){
    	$http.get('/prueba').
    	success(function(data, status, headers, config) {
    		$scope.testData = data;
            $scope.limpiar();
    	}).
    	error(function(data, status, headers, config) {
    		console.log("Errorazo.");
    	});	   
    }

    refresh();

    $scope.agregar = function(){
    	$http.post('/prueba', $scope.persona).
    	success(function(data, status, headers, config) {
        	refresh();
            $scope.limpiar();
        }).
        error(function(data, status, headers, config) {
        	console.log("Errorazo.");
        });	   
    }

    $scope.eliminar = function(id){
    	$http.delete('/prueba/'+id).
    	success(function(data, status, headers, config) {
        	refresh();
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
        	refresh();
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