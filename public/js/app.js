'use strict';

var app = angular.module('app', []);

app.controller('mainCtrl', function($scope, youtube) {

    $scope.channelUrl = '';

    $scope.playLists = [];

    $scope.loadPlayLists = function() {

        var loadPlayLists = function(channelId) {
            youtube.getPlayListsList(channelId, function(playlists) {
                $scope.playLists = playlists;
            });
        };

        var userName = $scope.channelUrl.match(/.+\/user\/([^\/]+)/);
        if (userName) {
            youtube.getChannelsList(userName[1], function(channels) {
                loadPlayLists(channels[0].id);
            });
            return;
        }

        var channel = $scope.channelUrl.match(/.+\/channel\/([^\/]+)/);
        if (channel) {
            loadPlayLists(channel[1]);
        }
    };

});