'use strict';

angular.module('app', ['ngRoute']);

angular.module('app').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'js/main/main.html',
            controller: 'mainController'
        })
        .when('/playlist/:playlistId', {
            templateUrl: 'js/playlist/playlist.html',
            controller: 'playlistController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
