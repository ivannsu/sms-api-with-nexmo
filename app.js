const Nexmo = require('nexmo');

const nexmo = new Nexmo({
  apiKey: 'ebe5ad00',
  apiSecret: 'DORrSunQmtiqz2wy',
});

const from = 'Ivan.COM';
const to = 6282255517049;
const text = `A text message from ${from}`;

nexmo.message.sendSms(from, to, text);