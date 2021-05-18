const fs = require('fs');
const { jwk } = require("./jwk");
const { decrypt_jwt, getPublicJwk } = require('./decrypt');

// Read encrypted payload
const userinfo = fs.readFileSync('userinfo.txt');
// console.log(userinfo.toString());

getPublicJwk(jwk)
  .then(public => {
    console.log(public);
  });

decrypt_jwt(jwk, userinfo)
  .then(decoded => {
    console.log(decoded);
    console.log(decoded.given_name);
  });