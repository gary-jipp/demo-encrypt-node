const fs = require('fs');
// const { jwk } = require("./jwkPrivate");
const { decrypt_jwt, getJwk } = require('./decrypt');

// Read encrypted payload
const userinfo = fs.readFileSync('userinfo.txt');
// console.log(userinfo.toString());

// Read base64 jwk keypair
const text = fs.readFileSync('jwkPrivate.txt', 'utf8');
// console.log(text);
const json = Buffer.from(text, 'base64');
const jwkPrivate = JSON.parse(json);

getJwk(jwkPrivate, true)
  .then(public => {
    // console.log(public);
    let buffer = Buffer.from(JSON.stringify(public), "utf8");
    // console.log(buffer.toString());
    const base64 = buffer.toString("base64");
    // console.log("\nkey:\n" +base64);
    // fs.writeFileSync('./jwk.txt', base64)
  });

decrypt_jwt(jwkPrivate, userinfo)
  .then(decoded => {
    console.log(decoded);
    console.log(decoded.given_name);
  });