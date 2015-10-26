var static = require('node-static');

var file = new static.Server('./public');
var router = require('node-simple-router')();

require('http').createServer(router).listen(8080);

router.get("/hello", function(request, response) {
    response.end("Hello, World!");
});

router.get("/hello", function(request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
});
