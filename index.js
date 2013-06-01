
/**
 * dependencies
 */

var net = require('net');

/**
 * Get a random port and invoke `fn(err, port)`
 *
 * @param {Function} fn
 */

module.exports = function(fn){
  var server = net.createServer();
  server.listen(0, function(){
    var port = server.address().port;
    server.close();
    fn(null, port);
  });
};
