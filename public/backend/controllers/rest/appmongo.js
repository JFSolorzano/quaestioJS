var app = angular.module('quaestioJS', []);

app.run(function($rootScope, $http) {
    
    $rootScope.response = "";

    $rootScope.find = function(tmpcollection){
        $http.get('/prueba/'+tmpcollection).
        success(function(data, status, headers, config) {
            $rootScope.response = data;
        }).
        error(function(data, status, headers, config) {
            console.log("Errorazo.");
        });    
    }

    $rootScope.insert = function(tmpcollection, tmpdata){
        $http.post('/prueba/'+tmpcollection, tmpdata).
        success(function(data, status, headers, config) {
            console.log('Insertado.');
        }).
        error(function(data, status, headers, config) {
            console.log("Errorazo.");
        });    
    }

    $rootScope.remove = function(tmpcollection, value){
        $http.delete('/prueba/'+tmpcollection+'/'+value).
        success(function(data, status, headers, config) {
            console.log('Eliminado.');
        }).
        error(function(data, status, headers, config) {
            console.log("Errorazo.");
        }); 
    }

    $rootScope.findOne = function(tmpcollection, value){
        $http.get('/prueba/'+tmpcollection+'/'+value).
        success(function(data, status, headers, config) {
            $rootScope.response = data;
        }).
        error(function(data, status, headers, config) {
            console.log("Errorazo.");
        }); 
    }

});

app.controller('mainCtrl', function($scope, $rootScope, $http) {   
    
    $scope.find = function(){
        $rootScope.find('quaestioJS');
        console.log("Imprimiendo desde root");
        console.log($rootScope.response);
    }    

    $scope.insert = function(){
        $rootScope.insert('quaestioJS', {"field" : "value "+(Math.floor((Math.random() * 100) + 1))});
        $scope.find();        
    }

    $scope.remove = function(){
        $rootScope.remove('quaestioJS', 'value 94');
        $scope.find();
    }

    $scope.findOne = function(){
        $rootScope.findOne('quaestioJS', 'value 33');        
    }

    $scope.find();
    

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