angular.module('quaestioApp').controller('BottomSheet', function($scope, $mdBottomSheet) {
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