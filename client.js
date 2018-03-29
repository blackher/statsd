'use strict';

const StatsD = require('node-statsd'),
client = new StatsD({
  host: '192.168.11.116',
  port: 8125
});

setInterval(function () {
  const responseTime = Math.floor(Math.random() * 1000);
  client.timing('api', responseTime, function (error, bytes) {
    if (error) {
      console.error(error);
    } else {
      console.log(`Successfully sent ${bytes} bytes, responseTime: ${responseTime}`);
    }
  });
}, 1000);
