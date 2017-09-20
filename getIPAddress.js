'use strict'
// en0 192.168.1.101
// eth0 10.0.0.101

let os = require('os')
let ifaces = os.networkInterfaces()

Object.keys(ifaces).forEach(function (ifname) {
    let alias = 0

    ifaces[ifname].forEach(function (iface) {
        if (iface.family !== 'IPv4' || iface.internal !== false) {
            // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
            return
        }

        if (alias >= 1) {
            // this single interface has multiple ipv4 addresses
            console.log(ifname + ':' + alias, iface.address);
        } else {
            // this interface has only one ipv4 adress
            console.log(ifname, iface.address)
        }
        ++alias
    })
})
