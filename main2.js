const fs = require('fs');
const jose = require('node-jose');
const jwt_decode = require("jwt-decode");
const { jwk } = require("./jwk");

// Read encrypted payload
const userinfo = fs.readFileSync('userinfo.txt');
// console.log(userinfo.toString());

jose.JWK.asKey(jwk).
  then(function (key) {
    // show key as json
    // output = key.toJSON(true);
    output = key.toJSON();
    console.log(output);

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
    // console.log(result.key);
    // console.log(result.protected);
    // console.log(result.plaintext.toString());
  }).then(token => {
    // console.log(token);

    var decoded = jwt_decode(token);

    console.log(decoded);
    console.log(decoded.given_name);
  });