var app = angular.module('quaestioJS', []);

app.run(function($rootScope, $http, $q) {
    
    $rootScope.response = "";

    $rootScope.find = function(tmpcollection){
        var deferred = $q.defer();
        $http.get('/prueba/'+tmpcollection).
        success(function(data, status, headers, config) {
            deferred.resolve(data);
        }).
        error(function(data, status, headers, config) {
            console.log("Errorazo.");
        });   
        return deferred.promise; 
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
        var deferred = $q.defer();
        $http.get('/prueba/'+tmpcollection+'/'+value).
        success(function(data, status, headers, config) {
            deferred.resolve(data);
        }).
        error(function(data, status, headers, config) {
            console.log("Errorazo.");
        }); 
        return deferred.promise; 
    }

});

app.controller('mainCtrl', function($scope, $rootScope, $http) {   
    
    $scope.find = function(){
        var myPromise = $rootScope.find('quaestioJS');
        myPromise.then(function(resolve){
            console.log(resolve);
        }, function(reject){
            console.log(reject)      
        });
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
        var myPromise = $rootScope.findOne('quaestioJS', 'value 33');
        myPromise.then(function(resolve){
            console.log(resolve);
        }, function(reject){
            console.log(reject)      
        });
    }

    $scope.find();
    $scope.findOne();
    

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