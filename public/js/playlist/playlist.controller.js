(function(){
    'use strict';
    angular
        .module('app')
        .controller('playlistController', playlistController);

    function playlistController(youtube) {
        var vm = this;
    }
}());
