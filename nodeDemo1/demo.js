var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');
var app = express();
app.get('/', function(req, res){
    var ele = [];
    var title;
    url = 'https://segmentfault.com/news';
    request(url, function (err, res1, html) {
        if (!err) {
            var $ = cheerio.load(html);
            $('.mr10').filter(function() {
                var data = $(this);
                title = data.text();
                // console.log(title);
                ele.push(title);
            })
            res.send(ele);
        }
        console.log(title);
    });
});
app.listen('8888', function() {
    console.log('22222');
});
