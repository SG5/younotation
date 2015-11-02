var static = require('node-static');

var router = require('node-simple-router')();
var youtube = require('./server/youtube.js');

require('http').createServer(router).listen(8080);

router.get("/youtube/:videoId", function(request, response) {
    youtube.getAnnotations(request.params.videoId)
        .then(function(result) {
            response.end(result.document.annotations[0].annotation.length + '');
        })
    ;
});
