const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: 'ebe5ad00',
  apiSecret: 'DORrSunQmtiqz2wy',
});

const from = 'Ivan.COM';
const to = 6281294154738;
// const to = 6282255517049;
const text = `Hai feel free to modified the code ! - ${from}\n`;

nexmo.message.sendSms(from, to, text);