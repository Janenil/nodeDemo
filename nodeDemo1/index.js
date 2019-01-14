var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');
var fs = require('fs');
var app = express();
var items = [];
const getBody = async (page) => {
    return new Promise((resolve, rejcect) => {
        superagent.get(`http://class.imooc.com/?page=${page}`)
        .end(function(err, sres){
            if (err) {
                reject(err)
            }
            var $ = cheerio.load(sres.text);
            $('.plan-item-desc-box .plan-item-desc-content').each(function(idx, element) {
                // console.log(element);
                var $element = $(element);
                items.push({
                    title: $element.attr('title')
                });
            });
            resolve(items)
        })
    })
    
}
app.get('/', async function(req, res, next) {
    let result = [];
    // console.log(result);
    for (let i = 1 , len = 3; i < len; i++) {
        let _res = await getBody(i);
        // console.log(_res)
        // result = [...result, _res];
        // Array.prototype.push.apply(result, _res);
        result = _res;
    }
    // console.log(result);
    res.send(result);
    fs.writeFile(__dirname + '/data/article.json', JSON.stringify({
        status: 0,
        data: result
    }), function (err) {
        if (err) throw err;
        console.log('写入完成');
    });
});
app.listen(3000, function() {
    console.log('1111111');
});