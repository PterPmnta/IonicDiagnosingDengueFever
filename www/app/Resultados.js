angular.module('Grupo_A', ['ionic'])
    .controller('informacionGrupoA', informacionGrupoA);

informacionGrupoA.$inject = ['$scope', '$ionicSlideBoxDelegate'];

function informacionGrupoA($scope, $ionicSlideBoxDelegate) {

    $scope.nextSlide = function() {
        $ionicSlideBoxDelegate.next();
    }

};