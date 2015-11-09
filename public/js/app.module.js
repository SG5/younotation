'use strict';

angular.module('app', ['ngRoute']);

angular.module('app').config(['$routeProvider', function($routeProvider) {
    $routeProvider
        .when('/playlist/:playlistId', {
            templateUrl: 'js/playlist/playlist.html',
            controller: 'playlistController'
        })
        .when('/video/:videoId', {
            templateUrl: 'js/video/video.html',
            controller: 'videoController'
        })
        .when('/', {
            templateUrl: 'js/main/main.html',
            controller: 'mainController'
        })
        .otherwise({
            redirectTo: '/'
        });
}]);
