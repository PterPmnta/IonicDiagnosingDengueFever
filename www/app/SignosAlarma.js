angular.module('signosAlarma', ['ionic'])
    .controller('sintomasAlarma', sintomasAlarma);

sintomasAlarma.$inject = ['$scope', '$state'];

function sintomasAlarma($scope, $state) {

    var ruta;

    $scope.principal = {};

    $scope.resultado = {
        principal: 0,
        nombreruta: ruta
    };

    $scope.Sumatoria = function(target, key) {

        //console.log(target, key);      

        if ($scope[target][key] === true) {
            $scope.resultado[target] = $scope.resultado[target] + 1;
        } else {
            $scope.resultado[target] = $scope.resultado[target] - 1;
        }

    };

    $scope.siguienteNivel = function() {

        var numero;
        numero = $scope.resultado.principal;
        console.log(numero);

        if (numero < 1) {
            $state.go('CoExistente');
        } else {
            if (numero < 6) {
                $state.go('GrupoB');
            } else {
                $state.go('GrupoC');
            };
        };
    };


};