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

 	$scope.authenticate = function(){
 		$rootScope.manageSession("set", {variable: "isLogged", value: "true"}).then(function(data){
 			var x = true;
 			if(!x){
 				$rootScope.manageSession("set", {variable: "isAdmin", value: "false"}).then(function(data){
 					location.reload();
 					location.assign("#/terminos-de-uso");
 				}, function(data){});
 			}else{
 				$rootScope.manageSession("set", {variable: "isAdmin", value: "true"}).then(function(data){
 					location.reload();
 					location.assign("#/");
 				}, function(data){});
 			}
 		}, function(data){});

 	}

 }]);
