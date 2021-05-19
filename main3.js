const fs = require('fs');
const { decrypt, getKey, createKeyPair } = require('./jwt');

// Read encrypted payload (JWT)
const userinfo = fs.readFileSync('userinfo.txt');
// console.log(userinfo.toString());

// Read base64 jwk keypair
const text = fs.readFileSync('jwkPrivate.txt', 'utf8');
// console.log(text);
const json = Buffer.from(text, 'base64');
const key = JSON.parse(json);


// Get a JWK with only public key
getKey(key, false)
  .then(public => {
    // console.log(public);
    let buffer = Buffer.from(JSON.stringify(public), "utf8");
    // console.log(buffer.toString());

    const base64 = buffer.toString("base64");
    // console.log("\nkey:\n" +base64);
    // fs.writeFileSync('./jwk.txt', base64)
  });

// Get a JWK with both keys
getKey(key, true)
  .then(public => {
    // console.log(public);
    let buffer = Buffer.from(JSON.stringify(public), "utf8");
    // console.log(buffer.toString());

    const base64 = buffer.toString("base64");
    // console.log("\nkey:\n" +base64);
  });

// Decrypt userInfo JWT
decrypt(key, userinfo)
  .then(decoded => {
    console.log("\nDecoded data");
    console.log(decoded);
  });