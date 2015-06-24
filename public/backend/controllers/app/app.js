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
    .config(function ($stateProvider, $urlRouterProvider,$mdThemingProvider) {//Usgin ui-route
        //
        // For any unmatched url, redirect to /
        $urlRouterProvider.otherwise("/");
        //
        // Set up the states
        $stateProvider
            .state('index', {
                url: "/",
                templateUrl: "views/main.html",
                controller: "MainCTRL"
            })
            .state('usuarios', {
                url: "/usuarios",
                templateUrl: "views/admin/users/list.html",
                controller: "UsersCTRL"
            })
            .state('login', {
                url: "/ingreso",
                templateUrl: "views/account/login.html",
                controller: "LoginCTRL"
            })
            .state('configuracion', {
                url: "/configuracion",
                templateUrl: "views/account/settings.html",
                controller: "AccountCTRL"
            })
            .state('roles', {
                url: "/roles",
                templateUrl: "views/admin/roles/list.html",
                controller: "RolesCTRL"
            })
            .state('permisos', {
                url: "/permisos",
                templateUrl: "views/admin/permissions/list.html",
                controller: "PermissionsCTRL"
            })
            .state('informacion-publica', {
                url: "/informacion-publica",
                templateUrl: "views/about/detail.html",
                controller: "AboutCTRL"
            })
            .state('editar-informacion-publica', {
                url: "/editar-informacion-publica",
                templateUrl: "views/about/edit.html",
                controller: "AboutCTRL"
            })
            .state('record-informacion-publica', {
                url: "/record-informacion-publica",
                templateUrl: "views/about/changes.html",
                controller: "AboutCTRL"
            })
            .state('categorias-comunidades', {
                url: "/categorias-comunidades",
                templateUrl: "views/communities/categories/list.html",
                controller: "CategoriesCTRL"
            })
            .state('comunidades', {
                url: "/comunidades",
                templateUrl: "views/communities/list.html",
                controller: "CommunitiesCTRL"
            })
            .state('compania', {
                url: "/compania",
                templateUrl: "views/company/detail.html",
                controller: "CompanyCTRL"
            })
            .state('editar-compania', {
                url: "/editar-compania",
                templateUrl: "views/company/edit.html",
                controller: "CompanyCTRL"
            })
            .state('record-compania', {
                url: "/cambios-compania",
                templateUrl: "views/company/changes.html",
                controller: "CompanyCTRL"
            })
            .state('equipo', {
                url: "/equipo",
                templateUrl: "views/team/list.html",
                controller: "TeamCTRL"
            })
            .state('contacto', {
                url: "/contacto",
                templateUrl: "views/contact/detail.html",
                controller: "ContactCTRL"
            })
            .state('editar-contacto', {
                url: "/editar-contacto",
                templateUrl: "views/contact/edit.html",
                controller: "ContactCTRL"
            })
            .state('record-contacto', {
                url: "/editarcontacto",
                templateUrl: "views/contact/edit.html",
                controller: "ContactCTRL"
            })
            .state('tou', {
                url: "/terminos-de-uso",
                templateUrl: "views/tou/detail.html",
                controller: "TouCTRL"
            })
            .state('faq', {
                url: "/faq",
                templateUrl: "views/faq/list.html",
                controller: "FaqCTRL"
            })
            .state('generalidades', {
                url: "/generalidades",
                templateUrl: "views/general/detail.html",
                controller: "GeneralCTRL"
            })
            .state('editar-generalidades', {
                url: "/editar-generalidades",
                templateUrl: "views/general/edit.html",
                controller: "GeneralCTRL"
            })
            .state('record-generalidades', {
                url: "/record-generalidades",
                templateUrl: "views/general/changes.html",
                controller: "GeneralCTRL"
            })
            .state('administracion', {
                url: "/administracion",
                templateUrl: "views/admin/menu.html",
                controller: "MenuCTRL"
            });

        $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('orange');
    })
    .controller('AppCtrl', ['$scope', '$mdSidenav', '$rootScope', '$location', function ($scope, $mdSidenav, $rootScope, $location) {

        $scope.toggleSidenav = function (menuId) {
            $mdSidenav(menuId).toggle();
        };

        $rootScope.showSideNav = false;
        $rootScope.showToolbar = false;
        $rootScope.toolbarTitle = "Panel Administrativo";

        $rootScope.goTo = function (path) {
            $location.path(path);
        }

        $scope.menuOptions = [
            {
                name: "Comunidades",
                icon: "dashboard",
                ref: "comunidades"
            },
            {
                name: "Categorias",
                icon: "dashboard",
                ref: "categorias-comunidades"
            },
            {
                name: "FAQ",
                icon: "question_answer",
                ref: "faq"
            },
            {
                name: "TOU",
                icon: "info",
                ref: "terminos-de-uso"
            },
            {
                name: "Compania",
                icon: "business",
                ref: "compania"
            },
            {
                name: "Equipo",
                icon: "people",
                ref: "equipo"
            },
            {
                name: "Acerca del Proyecto",
                icon: "description",
                ref: "informacion-publica"
            },
            {
                name: "Contacto",
                icon: "my_location",
                ref: "contacto"
            },
            {
                name: "Generalidades",
                icon: "group_work",
                ref: "generalidades"
            },
            {
                name: "Administracion",
                icon: "speaker_notes",
                ref: "administracion"
            }
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

    }]);
