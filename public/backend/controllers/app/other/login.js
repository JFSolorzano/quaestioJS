'use strict';

/**
 * @ngdoc function
 * @name quaestioApp.controller:AccountLoginCtrl
 * @description
 * # AccountLoginCtrl
 * Controller of the quaestioApp
 */
 angular.module('quaestioApp')
 .controller('LoginCTRL',['$scope','$rootScope','$state',function ($scope,$rootScope,$state) {

 	$rootScope.manageSession("get", {variable: "isLogged"}).then(function(data){
 		if(data == "true"){
 			location.assign("#/");
 		}
 	}, function(data){});

 	$rootScope.showSideNav = false;
 	$rootScope.showToolbar = false;

 	$scope.authenticate = function(){
 		var query = "SELECT ID, fkCargoID FROM usuarios WHERE Usuario = '"+$scope.loginInfo.username+"' AND Contrasena = '"+btoa($scope.loginInfo.password)+"'";
 		$rootScope.Select(query).then(function(data){
 			if(data != ""){
 				console.log(data[0].fkCargoID);
 				var x = data[0].fkCargoID == 1 ? true : false;
 				$rootScope.manageSession("set", {variable: "isLogged", value: "true"}).then(function(sessiondata){
 					$rootScope.manageSession("set", {variable: "User", value: $scope.loginInfo.username});
 					if(x){
 						$rootScope.manageSession("set", {variable: "isAdmin", value: "true"}).then(function(userdata){
 						}, function(userdata){});
 					}else{
 						$rootScope.manageSession("set", {variable: "isAdmin", value: "false"}).then(function(userdata){
 						}, function(userdata){});
 					}
 				}, function(sessiondata){});
 				location.reload();
 			}else{
 				// $scope.bool = true;
 				// var msj = "Usuario o contraseña incorrectos."
 				// $scope.error = function(){
 				// 	return msj;
 				// }
 				alert("Usuario o contraseña incorrectos.");
 				$scope.loginInfo = "";
 			}
 		}, function(data){});
 	}

 }]);
