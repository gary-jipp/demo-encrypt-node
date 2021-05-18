const fs = require('fs');
const jose = require('node-jose');
const jwt_decode = require("jwt-decode");
const { jwkPrivate } = require("./jwks");

// Read emcrypted payload
const userinfo = fs.readFileSync('userinfo.txt');
// console.log(userinfo.toString());

jose.JWK.asKey(jwkPrivate).
  then(function (key) {
    // show key as json
    // output = result.toJSON(true);

    return jose.JWE.createDecrypt(key).
      decrypt(userinfo.toString());
  })
  .then(function (result) {
    // {result} is a Object with:
    // *  header: the combined 'protected' and 'unprotected' header members
    // *  protected: an array of the member names from the "protected" member
    // *  key: Key used to decrypt
    // *  payload: Buffer of the decrypted content
    // *  plaintext: Buffer of the decrypted content (alternate)
    return result.payload.toString();
    // console.log(result.protected);
    // console.log(result.plaintext.toString());
    // console.log(result.key);
  }).then(token => {
    console.log(token);

    var decoded = jwt_decode(token);

    console.log(decoded);
  });