const querystring = require('querystring')
// const http = require('http')
// var postData = querystring.stringify({
//   'msg' : 'Hello World!'
// });
// var options = {
//   hostname: 'www.google.com',
//   port: 80,
//   path: '/upload',
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/x-www-form-urlencoded',
//     'Content-Length': postData.length
//   }
// };

// var req = http.request(options, (res) => {
//   console.log(`STATUS: ${res.statusCode}`);
//   console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
//   res.setEncoding('utf8');
//   res.on('data', (chunk) => {
//     console.log(`BODY: ${chunk}`);
//   });
//   res.on('end', () => {
//     console.log('No more data in response.')
//   })
// });

// req.on('error', (e) => {
//   console.log(`problem with request: ${e.message}`);
// });

// // write data to request body
// req.write(postData);
// req.end();
// const http = require("http")
// http.get('http://www.baidu.com', (res) => {
//   console.log(`Got response: ${res.statusCode}`);
//   // consume response body
//   res.resume();
// }).on('error', (e) => {
//   console.log(`Got error: ${e.message}`);
// });
const http = require("http") 
const url = "http://www.haorooms.com/post/nodejs_rmyyong" 
http.get(url,(res)=>{
    var html = ""
    res.on("data",(data)=>{
        html+=data
    })

    res.on("end",()=>{
        console.log(html)
    })
}).on("error",(e)=>{
    console.log(`获取数据失败: ${e.message}`)
})