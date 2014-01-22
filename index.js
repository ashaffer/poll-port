var portscanner = require('portscanner');

module.exports = function(port, host, maxTimeout, cb) {
  var elapsed = 0
    , interval = 500;

  if(typeof maxTimeout === 'function') {
    cb = maxTimeout;
    maxTimeout = 10000;
  }

  (function poll() {
    portscanner.checkPortStatus(port, host, function(err, status) {
      if(! err) {
        if(status === 'open')
          return cb();
        elapsed += interval;
        if(elapsed > maxTimeout)
          return cb(new Error('Max timeout exceeded'));
      }
      setTimeout(poll, interval);
    });
  })();
};