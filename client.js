'use strict';

const StatsD = require('node-statsd');

const Redis = require('redis');

const statsdClient = new StatsD({
  host: '192.168.11.116',
  port: 8125
});

const redisClient = Redis.createClient('6379','192.168.20.243');
redisClient.auth('wanglibao_ylb.com');

//主循环取awardList 长度
setInterval(function () {
  
  //callback  回调
  redisClient.llen('shakeSendRewardList',function(err, replies){
    
    statsdClient.timing('shakeSendRewardList', replies, function (error, bytes) {
    if (error) {
      console.error(error);
    } else {
      console.log(`Successfully sent ${bytes} bytes, shakeSendRewardList: ${replies}`);
    }
  });

  });
  
  
  
}, 1000);
