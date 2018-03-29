'use strict';

const StatsD = require('node-statsd');

const Redis = require('redis');

const statsdClient = new StatsD({
  host: '192.168.11.116',
  port: 8125
});

const redisClient = Redis.createClient('6379','192.168.11.98');

//主循环取awardList 长度
setInterval(function () {
  
  //callback  回调
  redisClient.llen('awardList',function(err, replies){
    
    statsdClient.timing('awardListLength', replies, function (error, bytes) {
    if (error) {
      console.error(error);
    } else {
      console.log(`Successfully sent ${bytes} bytes, awardListLength: ${replies}`);
    }
  });
    
  });
  
  
  
}, 1000);
