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

 	$rootScope.showSideNav = false;
 	$rootScope.showToolbar = false;

 	$scope.onLoad = function (){
 		$rootScope.manageSession("get", {variable: "isLogged"}).then(function (data) {
 			if(data == "" || data == undefined){
 				console.log("Not logged.");
 			}else{
 				location.assign("#/");
 			}
 		}, function (data) {});
 	}

 	$scope.onLoad();

 	$scope.authenticate = function(){
 		var query = "SELECT ID, fkCargoID FROM usuarios WHERE Usuario = '"+$scope.loginInfo.username+"' AND Contrasena = '"+btoa($scope.loginInfo.password)+"'";
 		$rootScope.Select(query).then(function(data){
 			if(data != ""){
 				var x = data[0].fkCargoID == 1 ? true : false;
 				$rootScope.manageSession("set", {variable: "isLogged", value: "true"});
 				$rootScope.manageSession("set", {variable: "User", value: $scope.loginInfo.username});
 				if(x){
 					$rootScope.manageSession("set", {variable: "isAdmin", value: "true"});
 				}else{
 					$rootScope.manageSession("set", {variable: "isAdmin", value: "false"});
 				}
 				location.reload();
 			}else{

 				// ¡¡¡Poner mensaje modal en ves de este alert!!!

 				alert("Usuario o contraseña incorrectos.");
 				$scope.loginInfo = "";
 			}
 		}, function(data){});
 	}

 }]);
