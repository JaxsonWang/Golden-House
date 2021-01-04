const ssids = ['淮城一只猫']

if (ssids.indexOf($network.wifi.ssid) > -1) {
  $done({
    address: '192.168.50.1'
  })
} else {
  $done({
    servers: $network.dns
  })
}