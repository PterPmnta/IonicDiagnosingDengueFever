angular.module('condicionCoexistente', ['ionic'])
    .controller('condicionesExistente', condicionesExistente);

condicionesExistente.$inject = ['$scope', '$state'];

function condicionesExistente($scope, $state) {

    var diagPrimarios, diagSecundario;

    $scope.principal = {};

    $scope.resultado = {
        principal: 0,
        Direccionar: function() {
            console.log('Hola');
        }
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
            $state.go('GrupoA');
        } else {
            $state.go('GrupoB');
        };
    };

};
