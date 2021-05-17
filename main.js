const fs = require('fs');
const NodeRSA = require('node-rsa');
const jwkToPem = require("jwk-to-pem");
const { jwkPrivate } = require("./jwks");

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

// {Pa}
console.log("\nRead token payload");
console.log(token[1]);
const base64 = token[1].replace(/-/g, '+').replace(/_/g, '/');
let payload = Buffer.from(token[1], 'base64');
// console.log(payload.toString());

console.log("\nDecrypt payload");
key.decrypt(payload);

console.log("\nRead signature");
const sig = Buffer.from(token[2], 'base64');
console.log(sig.toString());


const testPayload = "Test 123";
console.log("encrypting: ", testPayload);
const enc = key.encrypt(testPayload);

// console.log(enc.toString('base64'));

console.log("\ndecrypting...");
console.log(key.decrypt(enc).toString());
