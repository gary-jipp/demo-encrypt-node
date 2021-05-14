const fs = require('fs');
const NodeRSA = require('node-rsa');
const jwkToPem = require("jwk-to-pem");
const  { jwkPrivate } = require("./jwks");

// Private jwks contains both keys
console.log("Reading key pair from Private JWKS");
const keyPem = jwkToPem(jwkPrivate, { private: true });
// console.log(keyPem);

console.log("\nLoading RSA key pair");
const key = new NodeRSA();
key.importKey(keyPem, 'pkcs8');

console.log("\nReading token.json");
let rawdata = fs.readFileSync('token.json');
let data = JSON.parse(rawdata);
// console.log(data.scope);

const token = data.id_token.split('.');
console.log('token: ', token.length);

console.log("\nReading token header");
const hdr = Buffer.from(token[0], 'base64').toString();
console.log(hdr);

// for (const part of token) {
//   var decoded = Buffer.from(part, 'base64');
//   console.log("\n\n", decoded);
// }

console.log("\nDecrypt token payload");
const payload = Buffer.from(token[3], 'base64');

// const dd = key.decrypt(payload);

// process.exit();

const testPayload = "Test 123";
console.log("encrypting: ", testPayload);
const enc = key.encrypt(testPayload);

console.log("decrypting");
console.log(key.decrypt(enc).toString());
