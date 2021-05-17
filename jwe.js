const fs = require('fs');
const jwkToPem = require("jwk-to-pem");
const { jwkPrivate } = require("./jwks");

const { jwtDecrypt } = require("jose/jwt/decrypt");
const { parseJwk } = require("jose/jwk/parse");

console.log("Reading key pair from Private JWKS");
const keyPem = jwkToPem(jwkPrivate, { private: true });
// console.log(keyPem);

console.log("\nReading token.json");
let rawdata = fs.readFileSync('token.json');
let data = JSON.parse(rawdata);

parseJwk(jwkPrivate)
  .then(key => {
    console.log(key);
    console.log(data.id_token);
    return jwtDecrypt(data.id_token, key, { });
  })
  .then(res => {
    console.log(res);
  })
  .catch(err => console.log(err));


// const jwt = 'eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..KVcNLqK-3-8ZkYIC.xSwF4VxO0kUMUD2W-cifsNUxnr-swyBq-nADBptyt6y9n79-iNc5b0AALJpRwc0wwDkJw8hNOMjApNUTMsK9b-asToZ3DXFMvwfJ6n1aWefvd7RsoZ2LInWFfVAuttJDzoGB.uuexQoWHwrLMEYRElT8pBQ';

// jwtDecrypt(jwt, secretKey, {
//   issuer: 'urn:example:issuer',
//   audience: 'urn:example:audience'
// }).then(res => {
//   console.log(res);
// });

// console.log(protectedHeader);
// console.log(payload);;

// console.log("Reading key pair from Private JWKS");
// const keyPem = jwkToPem(jwkPrivate, { private: true });
// // console.log(keyPem);



// console.log('read key');
// JWK.asKey(JSON.stringify(jwkPrivate), "json")
//   .then(key => {
//     let keystore = JWK.createKeyStore();
//     console.log(key);
//     keystore.add(key);

//     console.log("create decrypt");
//     return JWE.createDecrypt(keystore)
//       .decrypt(jwkPrivate.id_token);
//   })
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => console.log("catch:", err));

// // process.exit();

// // decrypt = async function (encryptedBody) {

// //   let keystore = JWK.createKeyStore();

// //   console.log("create key");
// //   const k = await JWK.asKey(keyPem, "pem");

// //   console.log("adding");
// //   keystore.add(k);

// //   let outPut = parse.compact(encryptedBody);
// //   let decryptedVal = await outPut.perform(keystore);
// //   let claims = Buffer.from(decryptedVal.plaintext).toString();
// //   return claims;
// // };

// // console.log("\nReading token.json");
// // let rawdata = fs.readFileSync('token.json');
// // let data = JSON.parse(rawdata);

// // decrypt(data.id_token);