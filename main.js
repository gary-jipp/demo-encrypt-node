const jwkToPem = require("jwk-to-pem");

const jwkPublic = { "kty": "RSA", "e": "AQAB", "use": "enc", "kid": "kO5IyKMkhMiva4FzHWrb3sz-1DYNFnX3AUsRJFwrqgg", "alg": "RSA1_5", "n": "iwhFFPKF6oiG9t0UnB7Tqu1JjfkMZihgg23tCSg0dJYQo3QOEmJcDfPbAY7fmqRszE76tueI0BiKd3XpaeVkGR17aX7hsjGnRJ9yUR5hFS2tWXTJEgnaWr5WF1UHffJz7yYNm-4SgstePzNcqFA5-Up1lUCe_DEntG2nut8lJMrEMGbOE7BbfXWKfDkPo0r0N-hoUy3x3ZBZDNNylX6SmfakSAmcGqJoja4ABKlwC-MrDC33ylVL1nrP2kcWvxTBvr5lZTCWKokzORjUtQA5WGiWHbh57ikLvGL2m1kZhFUx-GdpNGRMlcjZYTit6DYuSEeosYn_eAjqgBgabG2tcw" };
const jwkPrivate = { "p": "1geqPyF8-XxSZZBhIKgiu3XPofi7HIOd7aJ9Y-mSXF8rvgefMsVlPt-0TmbB8qFUg753ezZvseGNt_4mW1bUZqRKozMKSQrWwLcThP7pKXFEG7vbCHpol1HorTIZ-VviXUpJhYWnbbtR7FnTZ0bXL9K9iyeUO_ioT3NOE2UA0jM", "kty": "RSA", "q": "pku2Vb3cFHM7PYFwL75lH5CRTs_7itb9xwaEH_Fzcpb293hvN8SZUtjJs0qDpG1jCYGGDkC-Ggh2Cn6sSmSoo18CuSzgqmjL9x-f1yBze-bphekSy-dWE9ZZKklJgq-yAS_dk2wfwkP0SEYlHTCYRko2YUEg7TVl_Y84dpQA98E", "d": "b13geDcMLiHOek_9AlFvG6uXD7I-zFXreVvEU2FxIzJRgZyk6PUA5-w9sbHQSv8KZ12cVoaAgLAnuikpHzowRC3pfUe1YheD9OQDnhbHjT9ZbB6wMVLTJXzxWR8zMR_U3euNWyoIidx9UgLCZdBdn-KU7UkmEL0PIOf1Qysbhav1dIZXrCWCafko1YLlHLbqp1Hr325OsTdlts-iepvhmolY67e6rDGRFJOtFP8WATW-4KCqvtEVF0UF36Y2ILqW4f5ZS2_MNtXIX7kILlUpaEXRLjClCyTq17zwQZls2h0bTDYYFEPlcmqTrnjGuR90xr_8Qhq6y-eD3-GJ4-q4AQ", "e": "AQAB", "use": "enc", "kid": "kO5IyKMkhMiva4FzHWrb3sz-1DYNFnX3AUsRJFwrqgg", "qi": "TlHtYvIVilbxIeEE-s3XaJomfjaS_ugoFz3TQmo5sIcyZPJL0auYfD9LCwtg3TfXDlNIGi7ggvookgg-2AKURU0IjVoTFWlkv_CZEDt6XS3gEDurBWSziP9SnkWzZHwh4aTDT5zY56FzrrfJEaHIW_uddWF1LnpcRfn2aNbera4", "dp": "vnoh3H9cLtiip_rfReX8yyKk_7xSIaVM5tDmkQWtGQIl9r_nwZKFcXg7ik7PKrTDd2AKC6C9tOxMaMQJtN5It3RdbHKfI7Q-vVHxUDpgnV5NQ_VikGAINytRTNo63X4VrfrQBcGV6QV9ej_S8aXNGqWNxIsb1GeOuu6ePIp2OZs", "alg": "RSA1_5", "dq": "U305msyKXL4JpPSCZYX6cSF8wovK50bO_Ig592uaoZJHhbEybVZH__8VLO2hMAE3MsOTkT5R8vICiXxVdbgZroP58wwj84pPtM9syW3ibPdekLuWk0aewbDg7UkEHhelj9D_No-XVkoVr99_rKsEGG4T5Tn0lQM1JFsuZuIhpkE", "n": "iwhFFPKF6oiG9t0UnB7Tqu1JjfkMZihgg23tCSg0dJYQo3QOEmJcDfPbAY7fmqRszE76tueI0BiKd3XpaeVkGR17aX7hsjGnRJ9yUR5hFS2tWXTJEgnaWr5WF1UHffJz7yYNm-4SgstePzNcqFA5-Up1lUCe_DEntG2nut8lJMrEMGbOE7BbfXWKfDkPo0r0N-hoUy3x3ZBZDNNylX6SmfakSAmcGqJoja4ABKlwC-MrDC33ylVL1nrP2kcWvxTBvr5lZTCWKokzORjUtQA5WGiWHbh57ikLvGL2m1kZhFUx-GdpNGRMlcjZYTit6DYuSEeosYn_eAjqgBgabG2tcw" };

console.log("reading key pair from JWKS");
const privatePem = jwkToPem(jwkPrivate, { private: true });
// console.log(privatePem);

// Private key contains both
// const publicPem = jwkToPem(jwkPublic, { private: false });
// console.log(publicPem)

const token = "eyJraWQiOiJrTzVJeUtNa2hNaXZhNEZ6SFdyYjNzei0xRFlORm5YM0FVc1JKRndycWdnIiwiY3R5IjoiSldUIiwiZW5jIjoiQTI1NkdDTSIsImFsZyI6IlJTQTFfNSJ9.FNoas1RXSNhRNNOGNirGbV1ATVHj61HF-orUFfZc1W0FRv0Ob_YYnE0HlliyH_O8CWFzkr2Y-o44zEhV1HhWlU8lVMkO3jCDCvqmeuRTDhwaQCrSNgFD4YUKQDu-IZuHyG-1y9QwMjtbSDqmV2X_QYLnm4bnhVw2dfff4U-gc1YWVw96LB-ZVyr8HBrPp11s-Crj4qg3Cen6NpwPULVp3CId4Gse0PiPBNGJFVb15p4Uj-3rV-bH6UXfm73XFAosMKW4hYwA8P8oog_Y7K-F9GPQcIQ-xzbqp2QoEs92_umzGAks0ebc45ykBKpY1yurq4gyp9x1bizu2o3Od0LDFQ.gyGwrHvisSGqEaZb.l5Uq0cWtP2wyjcx8Qn-aPzTrn7xg-2lZOvRexZoF9i12nAS2W4hwJwV9T4g46Yslo7XBUDqqRvvyNk7RmKBRe1f19wKcBh0MlAoJx7aDY2f5rw2Q65fgInXUKEMAec7dQzgAWDoKIMy_Wmoa4bg5IiIw-giEnAKOlr6AMLWVh0nlJj9MIkcLwSNyzFH1ENbqfQWtFr_CKy_mp6diQlKh0JwGfZYOTc3-ua_1Gz97Is6ISv9WLuzQ8GMgYrT4s4l8doVHR-sq_FVGJuH-BU-z2llOoM72WfNd_zmmr9kfqf1Nf4Sh3UaVZQQGh1r2aADk_6afPukULDVpSvqoRf2Wm3c-z2-DOvygBoiYYg7AbQCA7RP562b8p_Y-TbEDEvSjjcF-tF-P_MjwThSKpN8qMy1Q6wpFhTQ1WG2UyUlmd4bX6b3LTuiyVxP_1-eyOTArwyHZJrwf5XwHeULp6yAvatn_eF7EBwkFRw0eIhFPj6aIJ1dpDOdYJvCLkUnhH1aspc9clupgO4AiPWUSaiK_8I_H7_qQ5RzWbvrik9Epxoc4raV5h8_W--qaRL-LzPg6RJG1AxNIZGkJRb4IV-6bzuEJKIrIg4Cw6H9Fexo6HA_bWl68kWePAXpcIIVzBYNzB1nfYf4BE6bDlCcSqLHyoYVvYQcZSRghZFbgz1ZJ9apq_uajJP9QFD8nuMUftyUYr6ne9xIsSym7NFQ88GY1BBIJjf8ltIEic_H3136aHMNgUj8ZJ9HcITrJdofp7TmqVpzuOqSSK-Le-y7pMj0WS9OmfyFDL6xnnZ1Pias1lPD55DqOQyHpeToCJ7MU4iaBF2Qp_HznoupP-q-1fwoa2Z_olpTy4uvuXzJAP9c58i1Ac1dJxo0a9d-yi0ytFR3AMyJ0vdZhNiisknvFgBXTBdMK5k4CbNZMhLEAYopZ4jzmSsCx0u0Kdq-DwsUc.jtGZeQF6vxHE2itKh-kd3A";

console.log("\nReading token header");
const hdr = Buffer.from(token.split('.')[0], 'base64').toString();
console.log(hdr);

var payload = Buffer.from(token.split('.')[1], 'base64');
// console.log(payload.toString());

const NodeRSA = require('node-rsa');

console.log("\nLoading RSA key pair");
const private = new NodeRSA();
private.importKey(privatePem, 'pkcs8');

const pk = private.exportKey('pkcs8-public-pem');
console.log(pk);

console.log("encrypting");
const enc = private.encrypt("Test 123");

console.log("decrypting");
const data = private.decrypt(enc);
console.log(data.toString());

// const dd = private.decrypt(payload);

