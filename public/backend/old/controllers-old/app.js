
var quaestio = angular.module('Quaestio', ['ngMaterial', 'ngMdIcons', 'ngRoute','smart-table']);

quaestio.config(function($routeProvider,$mdThemingProvider){
    $routeProvider
            .when('/communities',{
                templateUrl: "./views/communities.html",
                controller: 'commu-ctrl'
            })
        .when('/about',{
            templateUrl: "./views/about-company.html",
            controller: 'main-ctrl'
        })
        .when('/contact',{
            templateUrl: "./views/contact.html",
            controller: 'main-ctrl'
        })
        .when('/faq',{
            templateUrl: "./views/faq.html",
            controller: 'faq-ctrl'
        })
        .when('/edit-faq',{
            templateUrl: "./views/edit-faq.html",
            controller: 'main-ctrl'
        })
        .when('/general',{
            templateUrl: "./views/general.html",
            controller: 'main-ctrl'
        })
        .when('/personnel',{
            templateUrl: "./views/about-personnel.html",
            controller: 'persons-ctrl'
        })
        .when('/home',{
            templateUrl: "./views/settings.html",
            controller: 'main-ctrl'
        })
        .when('/terms',{
            templateUrl: "./views/terms.html",
            controller: 'main-ctrl'
        })
        .when('/',{
            templateUrl: './views/home.html',
            controller: 'home-ctrl'
        })
        .otherwise({
            redirectTo: '/'
        });

    var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
        'contrastDefaultColor': 'light',
        'contrastDarkColors': ['50'],
        '50': 'ffffff'
    });
    $mdThemingProvider.definePalette('customBlue', customBlueMap);
    $mdThemingProvider.theme('default')
        .primaryPalette('customBlue', {
            'default': '500',
            'hue-1': '50'
        })
        .accentPalette('pink');
    $mdThemingProvider.theme('input', 'default')
        .primaryPalette('grey')
});




quaestio.controller('main-ctrl', function($scope, $http,$rootScope) {
 $rootScope.needsLogin = true;
    console.log($rootScope.needsLogin);
    function refresh(query){
        $http.get('/quaestioJS/'+query).
    	success(function(data, status, headers, config) {
            $scope.response = data;
    	}).
    	error(function(data, status, headers, config) {
    		console.log("Error.");
            console.log(data);
    	});
        
    }

    function agregar(query, data){
        var x = data;
        x.query = query;
    	$http.post('/quaestioJS', x).
    	success(function(data, status, headers, config) {
            $scope.find("personas");
        }).
        error(function(data, status, headers, config) {
        	console.log("Errorazo.");
            console.log(data);
        });	   
    }
    function eliminar(query, id){
        var stm = query+id;
    	$http.delete('/quaestioJS/'+stm).
    	success(function(data, status, headers, config) {
            $scope.find("personas");
        }).
        error(function(data, status, headers, config) {
        	console.log("Errorazo.");
            console.log(data);
        });	
    }
    function editar(query, id){
        var stm = query;
    	$http.get('/quaestioJS/'+stm).
    	success(function(data, status, headers, config) {
        	$scope.request = data[0];
        }).
        error(function(data, status, headers, config) {
        	console.log("Errorazo.");
            console.log(data);
        });	
    }
    function actualizar(query, id, data){
    	var x = data;
        x.query = query+id;
        $http.post('/quaestioJS', x).
        success(function(data, status, headers, config) {
            $scope.find("personas");
        }).
        error(function(data, status, headers, config) {
            console.log("Errorazo.");
            console.log(data);
        }); 
    }

    $scope.clean = function(){
        $scope.request = "";
    }

    $scope.search = function(){
        refresh("SELECT * FROM WHERE var = "+$scope.search);
        $scope.clean();
    }

    $scope.find = function(tabla){
        refresh("SELECT * FROM "+tabla);
        $scope.clean();
    }

    $scope.insert = function(tabla){
        agregar("INSERT INTO "+tabla+" SET ?", $scope.request);
        $scope.clean();
    }

    $scope.findOne = function(tabla, id){
        editar("SELECT * FROM "+tabla+" WHERE ID = "+id);
        $scope.clean();
    }

    $scope.findAndModify = function(tabla){
        actualizar("UPDATE "+tabla+" SET ? WHERE ID = ", $scope.request.ID, $scope.request);        
        $scope.clean();
    }

    $scope.deleteOne = function(tabla, id){
        eliminar("DELETE FROM "+tabla+" WHERE ID = ",id);
        $scope.clean();
    }

    $scope.find("personas");
});


/**
 * Modern Design Controller
 */
quaestio.controller('md-ctrl',['$scope', '$mdBottomSheet','$mdSidenav', '$mdDialog','$http', '$location',
    function($scope, $mdBottomSheet, $mdSidenav, $mdDialog, $http, $location){
        $scope.colors =[
            { color: 'red' },
            { color: 'blue' },
            { color: 'green' },
            { color: 'yellow' }
        ];
        $scope.redirectTo = function(path){
            $location.path(path);
        }
        $scope.menuItems = [

            {
                id : '/',
                title: 'Inicio',
                icon: 'home'
            },
            {
                id : '/about',
                title: 'Sobre La Empresa',
                icon: 'info'
            },
            {
                id : '/personnel',
                title: 'Sobre Nosotros',
                icon: 'people'
            },
            {
                id : '/terms',
                title: 'Terminos de Uso',
                icon: 'account_balance'
            },
            {
                id : '/faq',
                title: 'Preguntas Frecuentes',
                icon: 'question_answer'
            },
            {
                id : '/contact',
                title: 'Contactanos',
                icon: 'quick_contacts_mail'
            },
            {
                id : '/communities',
                title: 'Comunidades',
                icon: 'extension'
            },
            {
                id : '/general',
                title: 'Generalidades',
                icon: 'dashboard'
            }
        ];
        $scope.adminItems = [
            {
                link : '',
                title: 'Salir de sesion',
                icon: 'exit_to_app'
            },
            {
                link : 'showListBottomSheet($event)',
                title: 'Configuracion',
                icon: 'settings'
            }
        ];

        $scope.dynamicelements = {

            tabTitle: 'Admin',
            page: 'KHE',
            username: 'Prototype',
            email: 'icarloscornejo@outlook.com'

        };

        $scope.alert = '';

        $scope.toggleSidenav = function(menuId) {
            $mdSidenav(menuId).toggle();
        };

        $scope.showListBottomSheet = function($event) {
            $scope.alert = '';
            $mdBottomSheet.show({
                templateUrl: 'views/settings.html',
                controller: 'ListBottomSheetCtrl',
                targetEvent: $event
            }).then(function(clickedItem) {
                $scope.alert = clickedItem.name + ' Clickeado!';
            });
        };

        $scope.showAdd = function(ev) {
            $mdDialog.show({
                controller: funcDialogController,
                template: '',
                targetEvent: ev
            })
                .then(function(answer) {
                    $scope.alert = 'Dijiste que tu informacion era "' + answer + '".';
                }, function() {
                    $scope.alert = 'Cancelaste la operacion.';
                });
        };
        $scope.funcChangePage = function (id){
            $scope.dynamicelements.page = id;
            console.log(id);
        }
}]);
quaestio.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {
    $scope.items = [
        { name: 'Subir', icon: 'upload' },
        { name: 'Copiar', icon: 'copy' },
        { name: 'Imprimir esta pagina', icon: 'print' },
    ];

    $scope.listItemClick = function($index) {
        var clickedItem = $scope.items[$index];
        $mdBottomSheet.hide(clickedItem);
    };
});

function funcDialogController($scope, $mdDialog) {
    $scope.hide = function() {
        $mdDialog.hide();
    };
    $scope.cancel = function() {
        $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
        $mdDialog.hide(answer);
    };
};

function loginCtrl($scope, $rootScope, $route, $http) {

    $scope.login = function () {
        $http.post( /* Somehow  login */ )
            .success(function () {
                var deregister = $rootScope.$on('$routeChangeSuccess', function () {
                    // hide login / show ng-view after route has been reloaded
                    $rootScope.needsLogin = false;
                    deregister();
                });
                $route.reload();
            })
            .error(function () {
                /* handle errors */
            });
    };
}

/**
 * Data Table Controller
 */
quaestio.controller('table-ctrl', ['$scope', function($scope){

    $scope.tabledata = [
        {date: new Date('1987-05-21'), question: 'Como se llama la compania?', answer: 'Quaestio'},
        {date: new Date('1987-05-21'), question: 'Quienes lo empezaron?', answer: 'Carlos Cornejo y Jonathan Solorzano'},
        {date: new Date('1987-05-21'), question: 'Como surgio?', answer: 'Como una start up.'}
    ];


}]);

/**
 * Data Table Controller
 */
quaestio.controller('persons-ctrl', ['$scope','$http', function($scope, $http){

    function refresh(query){
        $http.get('/quaestioJS/'+query).
        success(function(data, status, headers, config) {
            console.log(data);
            $scope.response = data;
        }).
        error(function(data, status, headers, config) {
            console.log("Error.");
            console.log(data);
        });
        
    }

    function agregar(query, data){
        var x = data;
        x.query = query;
        $http.post('/quaestioJS', x).
        success(function(data, status, headers, config) {
            $scope.find("personas");
        }).
        error(function(data, status, headers, config) {
            console.log("Errorazo.");
            console.log(data);
        });    
    }
    function eliminar(query, id){
        var stm = query+id;
        $http.delete('/quaestioJS/'+stm).
        success(function(data, status, headers, config) {
            $scope.find("personas");
        }).
        error(function(data, status, headers, config) {
            console.log("Errorazo.");
            console.log(data);
        }); 
    }
    function editar(query, id){
        var stm = query;
        $http.get('/quaestioJS/'+stm).
        success(function(data, status, headers, config) {
            $scope.request = data[0];
        }).
        error(function(data, status, headers, config) {
            console.log("Errorazo.");
            console.log(data);
        }); 
    }
    function actualizar(query, id, data){
        var x = data;
        x.query = query+id;
        $http.post('/quaestioJS', x).
        success(function(data, status, headers, config) {
            $scope.find("personas");
        }).
        error(function(data, status, headers, config) {
            console.log("Errorazo.");
            console.log(data);
        }); 
    }

    $scope.clean = function(){
        $scope.request = "";
    }

    $scope.search = function(){
        refresh("SELECT * FROM personas WHERE Nombre LIKE '%"+$scope.finder+"%'");
        $scope.clean();
    }

    $scope.find = function(tabla){
        refresh("SELECT * FROM "+tabla);
        $scope.clean();
    }

    $scope.insert = function(tabla){
        agregar("INSERT INTO "+tabla+" SET ?", $scope.request);
        $scope.clean();
    }

    $scope.findOne = function(tabla, id){
        editar("SELECT * FROM "+tabla+" WHERE ID = "+id);
        $scope.clean();
    }

    $scope.findAndModify = function(tabla){
        actualizar("UPDATE "+tabla+" SET ? WHERE ID = ", $scope.request.ID, $scope.request);        
        $scope.clean();
    }

    $scope.deleteOne = function(tabla, id){
        eliminar("DELETE FROM "+tabla+" WHERE ID = ",id);
        $scope.clean();
    }

    $scope.find("personas");
}]);

/**
 * Data Table Controller
 */
quaestio.controller('faq-ctrl', ['$scope','$http', function($scope, $http){

    function refresh(query){
        $http.get('/quaestioJS/'+query).
        success(function(data, status, headers, config) {
            console.log(data);
            $scope.response = data;
        }).
        error(function(data, status, headers, config) {
            console.log("Error.");
            console.log(data);
        });
        
    }

    function agregar(query, data){
        var x = data;
        x.query = query;
        $http.post('/quaestioJS', x).
        success(function(data, status, headers, config) {
            $scope.find("faq");
        }).
        error(function(data, status, headers, config) {
            console.log("Errorazo.");
            console.log(data);
        });    
    }
    function eliminar(query, id){
        var stm = query+id;
        $http.delete('/quaestioJS/'+stm).
        success(function(data, status, headers, config) {
            $scope.find("faq");
        }).
        error(function(data, status, headers, config) {
            console.log("Errorazo.");
            console.log(data);
        }); 
    }
    function editar(query, id){
        var stm = query;
        $http.get('/quaestioJS/'+stm).
        success(function(data, status, headers, config) {
            $scope.request = data[0];
        }).
        error(function(data, status, headers, config) {
            console.log("Errorazo.");
            console.log(data);
        }); 
    }
    function actualizar(query, id, data){
        var x = data;
        x.query = query+id;
        $http.post('/quaestioJS', x).
        success(function(data, status, headers, config) {
            $scope.find("faq");
        }).
        error(function(data, status, headers, config) {
            console.log("Errorazo.");
            console.log(data);
        }); 
    }

    $scope.clean = function(){
        $scope.request = "";
    }

    $scope.search = function(){
        refresh("SELECT * FROM faq WHERE Pregunta LIKE '%"+$scope.finder+"%'");
        $scope.clean();
    }

    $scope.find = function(tabla){
        refresh("SELECT * FROM "+tabla);
        $scope.clean();
    }

    $scope.insert = function(tabla){
        agregar("INSERT INTO "+tabla+" SET ?", $scope.request);
        $scope.clean();
    }

    $scope.findOne = function(tabla, id){
        editar("SELECT * FROM "+tabla+" WHERE ID = "+id);
        $scope.clean();
    }

    $scope.findAndModify = function(tabla){
        actualizar("UPDATE "+tabla+" SET ? WHERE ID = ", $scope.request.ID, $scope.request);        
        $scope.clean();
    }

    $scope.deleteOne = function(tabla, id){
        eliminar("DELETE FROM "+tabla+" WHERE ID = ",id);
        $scope.clean();
    }

    $scope.find("faq");
}]);

/**
 * Data Table Controller
 */
quaestio.controller('home-ctrl', ['$scope','$http', function($scope,$http){

    function refresh(query){
        $http.get('/quaestioJS/'+query).
        success(function(data, status, headers, config) {
            console.log(data);
            $scope.response = data;
        }).
        error(function(data, status, headers, config) {
            console.log("Error.");
            console.log(data);
        });
        
    }

    function agregar(query, data){
        var x = data;
        x.query = query;
        $http.post('/quaestioJS', x).
        success(function(data, status, headers, config) {
            $scope.find("personas");
        }).
        error(function(data, status, headers, config) {
            console.log("Errorazo.");
            console.log(data);
        });    
    }
    function eliminar(query, id){
        var stm = query+id;
        $http.delete('/quaestioJS/'+stm).
        success(function(data, status, headers, config) {
            $scope.find("personas");
        }).
        error(function(data, status, headers, config) {
            console.log("Errorazo.");
            console.log(data);
        }); 
    }
    function editar(query, id){
        var stm = query;
        $http.get('/quaestioJS/'+stm).
        success(function(data, status, headers, config) {
            $scope.request = data[0];
        }).
        error(function(data, status, headers, config) {
            console.log("Errorazo.");
            console.log(data);
        }); 
    }
    function actualizar(query, id, data){
        var x = data;
        x.query = query+id;
        $http.post('/quaestioJS', x).
        success(function(data, status, headers, config) {
            $scope.find("personas");
        }).
        error(function(data, status, headers, config) {
            console.log("Errorazo.");
            console.log(data);
        }); 
    }

    $scope.clean = function(){
        $scope.request = "";
    }

    $scope.search = function(){
        refresh("SELECT * FROM personas WHERE Nombre LIKE '%"+$scope.finder+"%'");
        $scope.clean();
    }

    $scope.find = function(tabla){
        refresh("SELECT * FROM "+tabla);
        $scope.clean();
    }

    $scope.insert = function(tabla){
        agregar("INSERT INTO "+tabla+" SET ?", $scope.request);
        $scope.clean();
    }

    $scope.findOne = function(tabla, id){
        editar("SELECT * FROM "+tabla+" WHERE ID = "+id);
        $scope.clean();
    }

    $scope.findAndModify = function(tabla){
        actualizar("UPDATE "+tabla+" SET ? WHERE ID = ", $scope.request.ID, $scope.request);        
        $scope.clean();
    }

    $scope.deleteOne = function(tabla, id){
        eliminar("DELETE FROM "+tabla+" WHERE ID = ",id);
        $scope.clean();
    }

    $scope.find("campos");


}]);

/**
 * Data Table Controller
 */
quaestio.controller('commu-ctrl', ['$scope', function($scope){

    $scope.tabledata = [
        {date: new Date('1987-05-21'), name: 'Central de Codigo', logo: 'img'},
        {date: new Date('1987-05-21'), name: 'Disenadores', logo: 'img'},
        {date: new Date('1987-05-21'), name: 'Fisicos', logo: 'img'},
        {date: new Date('1987-05-21'), name: 'Matematicos', logo: 'img'}
    ];


}]);

quaestio.directive('userAvatar', function() {
    return {
        replace: true,
        templateUrl: './views/avatar.html'
    };
});