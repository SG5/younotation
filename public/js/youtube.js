'use strict';

app.service('youtube', function($http) {
    var API_KEY = 'AIzaSyB5sMyYCG7ObBJlVcXsIO63OiSQs8dnFmw';
    var URL = 'https://www.googleapis.com/youtube/v3/';

    var getBaseUrl = function(resource) {
        return URL + resource + '?key=' + API_KEY;
    };

    this.getChannelsList = function(username, callback) {
        $http
            .get(getBaseUrl('channels') + '&part=snippet&forUsername=' + username)
            .success(function(response) {
                callback && callback(response.items);
            });
    };

    this.getPlayListsList = function(channelId, callback) {
        $http
            .get(getBaseUrl('playlists') + '&part=snippet&maxResults=50&channelId=' + channelId)
            .success(function(response) {
                callback && callback(response.items);
            });
    };
});