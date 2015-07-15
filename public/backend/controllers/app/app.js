'use strict';

/**
 * @ngdoc overview
 * @name quaestioApp
 * @description
 * # quaestioApp
 *
 * Main module of the application.
 */
 angular
 .module('quaestioApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngMaterial',
    'ngResource',
        //'ngRoute', //Replazed with ui-route
        'ui.router',
        'ngSanitize',
        'ngTouch',
        'ui.bootstrap',
        'ngMdIcons',
        'md.data.table'
        ])
    //.config(function ($routeProvider, $mdThemingProvider) { //Using ngRoute
    //  $routeProvider
    //    .when('/', {
    //      templateUrl: 'views/main.html',
    //      controller: 'MainCtrl'
    //    })
    //    .when('/usuarios', {
    //      templateUrl: 'views/admin/users/list.html',
    //      controller: 'UsersCTRL'
    //    })
    //    .when('/roles', {
    //      templateUrl: 'views/admin/roles/list.html',
    //      controller: 'RolesCTRL'
    //    })
    //    .when('/permisos', {
    //      templateUrl: 'views/admin/permissions/list.html',
    //      controller: 'PermissionsCTRL'
    //    })
    //    .when('/informacion-publica', {
    //      templateUrl: 'views/about/detail.html',
    //      controller: 'AboutCTRL'
    //    })
    //    .when('/editar-informacion-publica', {
    //      templateUrl: 'views/about/edit.html',
    //      controller: 'AboutCTRL'
    //    })
    //    .when('/record-informacion-empresarial', {
    //      templateUrl: 'views/about/changes.html',
    //      controller: 'AboutCTRL'
    //    })
    //    .when('/ingresar', {
    //      templateUrl: 'views/account/login.html',
    //      controller: 'LoginCTRL'
    //    })
    //    .when('/configurar-cuenta', {
    //      templateUrl: 'views/account/settings.html',
    //      controller: 'AccountCTRL'
    //    })
    //    .when('/categorias-comunidades', {
    //      templateUrl: 'views/communities/categories/list.html',
    //      controller: 'CategoriesCTRL'
    //    })
    //    .when('/comunidades', {
    //      templateUrl: 'views/communities/list.html',
    //      controller: 'CommunitiesCTRL'
    //    })
    //    .when('/compania', {
    //      templateUrl: 'views/company/detail.html',
    //      controller: 'CompanyCTRL'
    //    })
    //    .when('/editar-compania', {
    //      templateUrl: 'views/company/edit.html',
    //      controller: 'CompanyCTRL'
    //    })
    //    .when('/cambios-compania', {
    //      templateUrl: 'views/company/changes.html',
    //      controller: 'CompanyCTRL'
    //    })
    //    .when('/contacto', {
    //      templateUrl: 'views/contact/detail.html',
    //      controller: 'ContactCTRL'
    //    })
    //    .when('/editar-contacto', {
    //      templateUrl: 'views/contact/edit.html',
    //      controller: 'ContactCTRL'
    //    })
    //    .when('/cambios-contacto', {
    //      templateUrl: 'views/contact/changes.html',
    //      controller: 'ContactCTRL'
    //    })
    //    .when('/faq', {
    //      templateUrl: 'views/faq/list.html',
    //      controller: 'FaqCTRL'
    //    })
    //    .when('/generalidades', {
    //      templateUrl: 'views/general/detail.html',
    //      controller: 'GeneralCTRL'
    //    })
    //    .when('/edit-generalidad', {
    //      templateUrl: 'views/general/edit.html',
    //      controller: 'GeneralCTRL'
    //    })
    //    .when('/cambios-generalidad', {
    //      templateUrl: 'views/general/changes.html',
    //      controller: 'GeneralCTRL'
    //    })
    //    .when('/equipo', {
    //      templateUrl: 'views/team/list.html',
    //      controller: 'TeamCTRL'
    //    })
    //    .when('/terminos-de-uso', {
    //      templateUrl: 'views/tou/detail.html',
    //      controller: 'TouCTRL'
    //    })
    //    .when('/cambiar-tou', {
    //      templateUrl: 'views/tou/edit.html',
    //      controller: 'TouCTRL'
    //    })
    //    .when('/cambios-tou', {
    //      templateUrl: 'views/tou/changes.html',
    //      controller: 'TouCTRL'
    //    })
    //    .when('/administracion', {
    //      templateUrl: 'views/admin/menu.html',
    //      controller: 'MenuCTRL'
    //    })
    //    .otherwise({
    //      redirectTo: '/'
    //    });
    //
    //  $mdThemingProvider.theme('default')
    //    .primaryPalette('blue')
    //    .accentPalette('green');
    //
    //})
    .config(function ($stateProvider, $urlRouterProvider, $mdThemingProvider) {//Using ui-route
        //
        // For any unmatched url, redirect to /
        $urlRouterProvider.otherwise("/");
        //
        // Set up the states

        $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "views/account/login.html",
            controller: "LoginCTRL",
            authenticate: false
        })
        .state('index', {
            url: "/",
            templateUrl: "views/main.html",
            controller: "MainCTRL",
            authenticate: true
        })
        .state('usuarios', {
            url: "/usuarios",
            templateUrl: "views/admin/users/list.html",
            controller: "UsersCTRL",
            authenticate: true
        })
        .state('configuracion', {
            url: "/configuracion",
            templateUrl: "views/account/settings.html",
            controller: "AccountCTRL",
            authenticate: true
        })
        .state('roles', {
            url: "/roles",
            templateUrl: "views/admin/roles/list.html",
            controller: "RolesCTRL",
            authenticate: true
        })
        .state('permisos', {
            url: "/permisos",
            templateUrl: "views/admin/permissions/list.html",
            controller: "PermissionsCTRL",
            authenticate: true
        })
        .state('informacion-publica', {
            url: "/informacion-publica",
            templateUrl: "views/about/detail.html",
            controller: "AboutCTRL",
            authenticate: true
        })
        .state('editar-informacion-publica', {
            url: "/editar-informacion-publica",
            templateUrl: "views/about/edit.html",
            controller: "AboutCTRL",
            authenticate: true
        })
        .state('record-informacion-publica', {
            url: "/record-informacion-publica",
            templateUrl: "views/about/changes.html",
            controller: "AboutCTRL",
            authenticate: true
        })
        .state('categorias-comunidades', {
            url: "/categorias-comunidades",
            templateUrl: "views/communities/categories/list.html",
            controller: "CategoriesCTRL",
            authenticate: true
        })
        .state('comunidades', {
            url: "/comunidades",
            templateUrl: "views/communities/list.html",
            controller: "CommunitiesCTRL",
            authenticate: true
        })
        .state('compania', {
            url: "/compania",
            templateUrl: "views/company/detail.html",
            controller: "CompanyCTRL",
            authenticate: true
        })
        .state('editar-compania', {
            url: "/editar-compania",
            templateUrl: "views/company/edit.html",
            controller: "CompanyCTRL",
            authenticate: true
        })
        .state('record-compania', {
            url: "/cambios-compania",
            templateUrl: "views/company/changes.html",
            controller: "CompanyCTRL",
            authenticate: true
        })
        .state('equipo', {
            url: "/equipo",
            templateUrl: "views/team/list.html",
            controller: "TeamCTRL",
            authenticate: true
        })
        .state('contacto', {
            url: "/contacto",
            templateUrl: "views/contact/detail.html",
            controller: "ContactCTRL",
            authenticate: true
        })
        .state('editar-contacto', {
            url: "/editar-contacto",
            templateUrl: "views/contact/edit.html",
            controller: "ContactCTRL",
            authenticate: true
        })
        .state('record-contacto', {
            url: "/editarcontacto",
            templateUrl: "views/contact/edit.html",
            controller: "ContactCTRL",
            authenticate: true
        })
        .state('tou', {
            url: "/terminos-de-uso",
            templateUrl: "views/tou/detail.html",
            controller: "TouCTRL",
            authenticate: true
        })
        .state('faq', {
            url: "/faq",
            templateUrl: "views/faq/list.html",
            controller: "FaqCTRL",
            authenticate: true
        })
        .state('generalidades', {
            url: "/generalidades",
            templateUrl: "views/general/detail.html",
            controller: "GeneralCTRL",
            authenticate: true
        })
        .state('editar-generalidades', {
            url: "/editar-generalidades",
            templateUrl: "views/general/edit.html",
            controller: "GeneralCTRL",
            authenticate: true
        })
        .state('record-generalidades', {
            url: "/record-generalidades",
            templateUrl: "views/general/changes.html",
            controller: "GeneralCTRL",
            authenticate: true
        })
        .state('administracion', {
            url: "/administracion",
            templateUrl: "views/admin/menu.html",
            controller: "MenuCTRL",
            authenticate: true
        })
        .state('cerrarsesion', {
            url: "/cerrarsesion",
            controller: "cerrarsesionCTRL",
            authenticate: true
        });

        $mdThemingProvider.theme('default')
        .primaryPalette('deep-orange')
        .accentPalette('blue-grey');

    })
.controller('AppCtrl', ['$scope', '$mdSidenav', '$rootScope', '$location', function ($scope, $mdSidenav, $rootScope, $location) {

    $scope.user = "";
    $rootScope.showSideNav = false;

    $rootScope.manageSession("get", {variable: "User"}).then(function (data) {
        if (data != "") {
            $scope.user = data;
            $rootScope.manageSession("get", {variable: "isAdmin"}).then(function (data) {
                if (data == "true") {
                    $rootScope.showSideNav = false;
                } else {
                    $rootScope.showSideNav = true;
                }
            }, function (data) {
            });
        } else {
        }
    }, function (data) {
    });

    $scope.toggleSidenav = function (menuId) {
        $mdSidenav(menuId).toggle();
    };

    $rootScope.showToolbar = false;
    $rootScope.toolbarTitle = "Panel Administrativo";

    $rootScope.goTo = function (path) {
        $location.path(path);
    }

    $scope.getMenu = function () {
        $rootScope.manageSession("get", {variable: "isAdmin"}).then(function (data) {
            console.log(data);
            if (data == "true") {
                $scope.menuOptions = [
                {
                    name: "Comunidades",
                    icon: "view_quilt",
                    ref: "comunidades",
                    style: "fill: #40c4ff"
                },
                {
                    name: "Categorias",
                    icon: "dashboard",
                    ref: "categorias-comunidades",
                    style: "fill: #3f51b5"
                },
                {
                    name: "FAQ",
                    icon: "question_answer",
                    ref: "faq",
                    style: "fill: #8bc34a"
                },
                {
                    name: "TOU",
                    icon: "info",
                    ref: "terminos-de-uso",
                    style: "fill: #eeff41"
                },
                {
                    name: "Compania",
                    icon: "business",
                    ref: "compania",
                    style: "fill: #ff5722"
                },
                {
                    name: "Equipo",
                    icon: "people",
                    ref: "equipo",
                    style: "fill: #ff9800"
                },
                {
                    name: "Acerca del Proyecto",
                    icon: "description",
                    ref: "informacion-publica",
                    style: "fill: #009688"
                },
                {
                    name: "Contacto",
                    icon: "my_location",
                    ref: "contacto",
                    style: "fill: #e040fb"

                },
                {
                    name: "Generalidades",
                    icon: "group_work",
                    ref: "generalidades",
                    style: "fill: #ffff00"
                },
                {
                    name: "Administracion",
                    icon: "speaker_notes",
                    ref: "administracion",
                    style: "fill: #7c4dff"
                }
                ];
            } else {
                $scope.menuOptions = [
                {
                    name: "TOU",
                    icon: "info",
                    ref: "terminos-de-uso",
                    style: "fill: #eeff41"
                },
                {
                    name: "Acerca del Proyecto",
                    icon: "description",
                    ref: "informacion-publica",
                    style: "fill: #009688"
                },
                {
                    name: "Contacto",
                    icon: "my_location",
                    ref: "contacto",
                    style: "fill: #e040fb"
                }
                ];
            }
        }, function (data) {
        });
}

$scope.getMenu();

$scope.sessionOptions = [
{
    name: "Cerrar Sesion",
    icon: "logout",
    ref: "/cerrarsesion",
    style: "fill: #727272"
},
{
    name: "Cuenta",
    icon: "settings",
    ref: "/configuracion",
    style: "fill: #727272"
},
];

$scope.showListBottomSheet = function ($event) {
    $scope.alert = '';
    $mdBottomSheet.show({
        templateUrl: 'views/settings.html',
        controller: 'ListBottomSheetCtrl',
        targetEvent: $event
    }).then(function (clickedItem) {
        $scope.alert = clickedItem.name + ' Clickeado!';
    });
};

}])
.controller('cerrarsesionCTRL', ['$rootScope', function ($rootScope) {
    $rootScope.manageSession("destroy", {}).then(function (data) {
        location.reload();
    }, function (data) {
    });
}])
.run(function ($rootScope, $http, $q, $state) {

    $rootScope.Select = function (query) {
        var deferred = $q.defer();
        $http.get('/quaestioJS/' + query).
        success(function (data, status, headers, config) {
            deferred.resolve(data);
        }).
        error(function (data, status, headers, config) {
            console.log("Errorazo.");
        });
        return deferred.promise;
    };

    $rootScope.Insert = function (query, tmpdata) {
        var deferred = $q.defer();
        $http.post('/quaestioJS/' + query, tmpdata).
        success(function (data, status, headers, config) {
            deferred.resolve(data);
        }).
        error(function (data, status, headers, config) {
            deferred.resolve(data, status);
        });
        return deferred.promise;
    };

    $rootScope.Update = function (query, where, tmpdata) {
        var deferred = $q.defer();
        $http.post('/quaestioJS/' + query +'/' + where, tmpdata).
        success(function (data, status, headers, config) {
            deferred.resolve(data);
        }).
        error(function (data, status, headers, config) {
            deferred.resolve(data, status);
        });
        return deferred.promise;
    };

    $rootScope.Delete = function (query, tmpdata) {
        var deferred = $q.defer();
        $http.delete('/quaestioJS/' + query, tmpdata).
        success(function (data, status, headers, config) {
            deferred.resolve(data);
        }).
        error(function (data, status, headers, config) {
            deferred.resolve(data, status);
        });
        return deferred.promise;
    };

    $rootScope.manageSession = function (action, tmpdata) {
        var deferred = $q.defer();
        $http.post('/Session/' + action, tmpdata).
        success(function (data, status, headers, config) {
            deferred.resolve(data);
        }).
        error(function (data, status, headers, config) {
            deferred.resolve(data, status);
        });
        return deferred.promise;
    };

    $rootScope.$on("$stateChangeStart",
        function (event, toState, toParams, fromState, fromParams) {
            $rootScope.manageSession("get", {variable: "isLogged"}).then(function (data) {
                if (toState.authenticate && data != "true") {
                    $state.go("login");
                    event.preventDefault();
                }
            }, function (data) {
            });
        });
});
