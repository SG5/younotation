(function(){
    'use strict';
    angular
        .module('app')
        .controller('mainController', mainController);

    function mainController(youtube) {

        var t = this;

        t.channelUrl = '';
        t.playLists = [];
        t.loadPlayLists = loadPlayLists;

        function loadPlayLists() {
            var userName = t.channelUrl.match(/.+\/user\/([^\/]+)/);
            if (userName) {
                youtube.getChannelsList(userName[1], function(channels) {
                    load(channels[0].id);
                });
                return;
            }

            var channel = t.channelUrl.match(/.+\/channel\/([^\/]+)/);
            if (channel) {
                load(channel[1]);
            }

            function load (channelId) {
                youtube.getPlayListsList(channelId, function(playlists) {
                    t.playLists = playlists;
                });
            }
        }
    }
}());
