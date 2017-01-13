angular.module('diagPresuntivo', ['ionic'])
    .controller('diagnosticoPresuntivo', diagnosticoPresuntivo);

diagnosticoPresuntivo.$inject = ['$scope'];

function diagnosticoPresuntivo($scope) {

    var diagPrimarios, diagSecundario;

    $scope.principal = {};
    $scope.secundario = {};

    $scope.resultado = {
        principal: 0,
        secundario: 0
    };

    $scope.Sumatoria = function(target, key) {
        //console.log(target, key);
        if ($scope[target][key] === true) {
            $scope.resultado[target] = $scope.resultado[target] + 1;
        } else {
            $scope.resultado[target] = $scope.resultado[target] - 1;
        }
    }

}