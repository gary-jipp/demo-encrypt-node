const jose = require('node-jose');
const jwt_decode = require("jwt-decode");

//  Return a Promise
const decrypt_jwt = function (jwk, input) {

  return jose.JWK.asKey(jwk).
    then(function (key) {
      return jose.JWE.createDecrypt(key).
        decrypt(input.toString());
    })
    .then(function (result) {
      return result.payload.toString();
    })
    .then(token => {
      // console.log(token);

      const decoded = jwt_decode(token);
      return decoded;
    });

};

const getJwk = function (jwk, private=false) {
  return jose.JWK.asKey(jwk).
    then(function (key) {
      return key.toJSON(private);
    });
};

const generateJwk = function () {

  const keyStore = jose.JWK.createKeyStore();
  keyStore.generate('RSA', 2048, { alg: 'RS256', use: 'sig' })
    .then(result => {
      return keyStore.toJSON(true);
    });
};

module.exports = { decrypt_jwt , generateJwk, getJwk};