const fs = require('fs');
const { decrypt } = require('./jwt');

const args = process.argv.slice(2);
const input = args[0];
if (!input) {
  return console.log("\nusage: node descrypt.js <input>");
}

// Read base64 jwk keypair
const text = fs.readFileSync('jwkPrivate.txt', 'utf8');
// console.log(text);
const json = Buffer.from(text, 'base64');
const key = JSON.parse(json);

// Decrypt JWT
decrypt(key, input)
  .then(decoded => {
    console.log("\nDecoded data");
    console.log(decoded);
  });


