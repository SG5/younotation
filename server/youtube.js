var http = require('http');
var q = require('q');
var parseString = require('xml2js').parseString;

var youtube = {};

youtube.getAnnotations = function(videoId) {
    var deferred = q.defer();

    http.get('http://www.youtube.com/annotations_invideo?cap_hist=1&video_id='+videoId, function(res) {
        var str = '';
        res.on('data', function(chunk) {
            str += chunk;
        });
        res.on('end', function() {
            parseString(str, function (err, result) {
                deferred.resolve(result);
            });
        });
    }).on('error', function(e) {
        deferred.reject(e);
    });

    return deferred.promise;
};

module.exports = youtube;