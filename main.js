const jwkToPem = require("jwk-to-pem");
const  { jwkPrivate } = require("./jwks");

// Private jwks contains both keys
console.log("Reading key pair from Private JWKS");
const keyPem = jwkToPem(jwkPrivate, { private: true });
// console.log(keyPem);

const fs = require('fs');
let rawdata = fs.readFileSync('token.json');
let data = JSON.parse(rawdata);
console.log(data.scope);

const token = data.id_token.split('.');
console.log('token: ', token.length);

console.log("\nReading token header");
const hdr = Buffer.from(token[0], 'base64').toString();
console.log(hdr);
process.exit();

const base64Url = token.split('.')[1];
var base64 = base64Url.replace('-', '+').replace('_', '/');
var payload = Buffer.from(base64, 'base64');
// console.log(payload.toString());

const NodeRSA = require('node-rsa');

console.log("\nLoading RSA key pair");
const private = new NodeRSA();
private.importKey(keyPem, 'pkcs8');

// const pk = private.exportKey('pkcs8-public-pem');
// console.log(pk);

console.log("encrypting");
const enc = private.encrypt("Test 123");

// console.log("decrypting");
// const data = private.decrypt(enc);
// console.log(data.toString());

// const dd = private.decrypt(payload);

