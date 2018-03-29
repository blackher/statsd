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
