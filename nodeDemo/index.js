var server = require('./server.js');
var router = require('./router');
var requestHandlers = require('./requestHandlers');
var handle = {};
console.log(requestHandlers)
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;
handle["/show"] = requestHandlers.show;


server.start(router.route, handle);
