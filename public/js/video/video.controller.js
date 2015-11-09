(function(){
    'use strict';
    angular
        .module('app')
        .controller('videoController', ['$routeParams', '$sce', '$scope', videoController]);

    function videoController ($routeParams, $sce, $scope) {
        var vm = this;

        vm.videoId = $routeParams.videoId;

        vm.videoUrl = $sce.trustAsResourceUrl('https://www.youtube.com/embed/' + vm.videoId);
    }
}());