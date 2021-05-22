const axios = require('axios');
const args = process.argv.slice(2);

const token = args[0];
if (!token) {
  return console.log("\nusage: node getInfo.js <token>");
}

const uri = "https://idtest.gov.bc.ca/oauth2/userinfo";
const headers = {
  // "Accept": "*/*",
  // "Accept": "application/json",
  Authorization: 'bearer ' + token
};

console.log("\nRequest:");
console.log(uri);
console.log(headers);

return axios.get(uri, { headers })
  .then(res => {
    console.log("\nResponse:");
    console.log(res.data);
    return res.data;
  })
  .catch(err => {
    console.log("getInfo catch: ", err.message);
  });
