var http = require('http');
var Promise = require('bluebird');
var parseString = require('xml2js').parseString;

var youtube = {};

youtube.getAnnotations = function(videoId) {
    return new Promise(function(resolve, reject) {
        http.get('http://www.youtube.com/annotations_invideo?cap_hist=1&video_id='+videoId, function(res) {
            var str = '';
            res.on('data', function(chunk) {
                str += chunk;
            });
            res.on('end', function() {
                parseString(str, function (err, result) {
                    resolve(result);
                });
            });
        }).on('error', function(e) {
            reject(e);
        });
    });
};

module.exports = youtube;