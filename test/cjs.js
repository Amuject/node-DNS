const dns = require('../').default;

dns.ips('wany.io').then(console.log).catch(console.warn);
