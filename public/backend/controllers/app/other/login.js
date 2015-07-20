'use strict';

/**
 * @ngdoc function
 * @name quaestioApp.controller:AccountLoginCtrl
 * @description
 * # AccountLoginCtrl
 * Controller of the quaestioApp
 */
 angular.module('quaestioApp')
 .controller('LoginCTRL',['$scope','$rootScope','$state','$mdDialog',function ($scope,$rootScope,$state,$mdDialog) {

 	$rootScope.showSideNav = false;
 	$rootScope.showToolbar = false;

 	$scope.showAlert = function(ev) {
 		$mdDialog.show(
 			$mdDialog.alert()
 			.parent(angular.element(document.body))
 			.title('Error')
 			.content('Usuario o contraseña incorrectos.')
 			.ariaLabel('Alerta mal login')
 			.ok('Aceptar')
 			.targetEvent(ev)
 			);
 	};

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

 	$scope.authenticate = function(ev){
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
 				$rootScope.isLogin = false;
 				location.reload();
 			}else{
 				$scope.showAlert(ev);
 				$scope.loginInfo = "";
 			}
 		}, function(data){});
 	}

 }]);
