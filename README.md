# 基于statsd  简单的redis监控

# docker
```
docker run -d \
  --name docker-statsd-influxdb-grafana \
  -p 3003:3003 \
  -p 3004:8083 \
  -p 8086:8086 \
  -p 22022:22 \
  -p 8125:8125/udp \
  samuelebistoletti/docker-statsd-influxdb-grafana:latest
```
## reflction
```
  Host        Container       Service
-----------------------------------
3003        3003            grafana
3004        8083            influxdb-admin
8086        8086            influxdb
8125        8125            statsd
22022       22              sshd
```

#statsd counter
```
in flush interval  time  :450   120  553  994  334  844  675  496

mean_90 496
upper_90 844
sum_90 3472
upper 994
lower 120
count 8
sum 4466
mean 558.25



```

