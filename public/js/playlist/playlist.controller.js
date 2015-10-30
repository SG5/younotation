(function(){
    'use strict';
    angular
        .module('app')
        .controller('playlistController', ['youtube', '$routeParams', playlistController]);

    function playlistController(youtube, $routeParams) {
        var vm = this;

        vm.videos = [];

        youtube.getPlayListItems($routeParams.playlistId, function(videos) {
            vm.videos = videos;
        });
    }
}());
