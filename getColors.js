const fs = require('fs');
const https = require('https');
const tokensUrl = require('./tokensUrl.json');

const file = fs.createWriteStream('./src/theme/colors.json');

https.get(tokensUrl.url, (response) => {
 const stream = response.pipe(file);

 stream.on('finish', function () {
  console.log('Colors imported');
 });
});
