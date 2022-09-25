import dns from '../src/index.mjs';

dns.ips('wany.io').then(console.log).catch(console.warn);
