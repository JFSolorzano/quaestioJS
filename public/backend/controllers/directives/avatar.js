angular.module('quaestioApp').directive('userAvatar', function() {
    return {
        replace: true,
        templateUrl: '/backend/views/directives/avatar.html'
    };
});