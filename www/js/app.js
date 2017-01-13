// Ionic Starter App


angular.module('saludApp', ['ionic', 'diagPresuntivo', 'signosAlarma', 'condicionCoexistente'])
    .run(inicio)
    .config(rutas);

inicio.$inject = ['$ionicPlatform'];

function inicio($ionicPlatform) {

    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {

            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });

};

rutas.$inject = ['$stateProvider', '$urlRouterProvider'];

function rutas($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise("/Presuntivo");

    $stateProvider

        .state('Presuntivo', {
            url: '/Presuntivo',
            templateUrl: "templates/DiagPresuntivo.html",
            controller: "diagnosticoPresuntivo"
        })
        .state('Alarma', {
            url: '/Alarma',
            templateUrl: "templates/SignosAlarma.html",
            controller: "sintomasAlarma"
        })
        .state('CoExistente', {
            url: '/CoExistente',
            templateUrl: "templates/Co_Existente.html",
            controller: "condicionesExistente"
        })
        .state('GrupoA', {
            url: '/GrupoA',
            templateUrl: "templates/Grupo_A.html"
        })
        .state('GrupoB', {
            url: '/GrupoB',
            templateUrl: "templates/Grupo_B.html"
        })
        .state('GrupoC', {
            url: '/GrupoC',
            templateUrl: "templates/Grupo_C.html"
        });

};