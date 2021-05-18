const fs = require('fs');
const { jwk } = require("./jwk");
const { decrypt_jwt, getJwk } = require('./decrypt');

// Read encrypted payload
const userinfo = fs.readFileSync('userinfo.txt');
// console.log(userinfo.toString());

getJwk(jwk, true)
  .then(public => {
    // console.log(public);
    let buffer = Buffer.from(JSON.stringify(public), "utf8");
    console.log(buffer.toString());
    const base64 = buffer.toString("base64");
    console.log("\nkey:\n" +base64);
    // fs.writeFileSync('./jwk.txt', base64)
  });

decrypt_jwt(jwk, userinfo)
  .then(decoded => {
    console.log(decoded);
    console.log(decoded.given_name);
  });