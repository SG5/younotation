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

            var i = vm.videos.length;
            while (i--) {
                (function(i){
                    youtube.getAnnotation(videos[i].contentDetails.videoId, function(response){
                        vm.videos[i].annotations = response;
                    });
                }(i));
            }
        });
    }
}());
