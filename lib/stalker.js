const axios = require('axios');
const webApi = 'https://api.darkcoder.xyz';

exports.github = (apikey, username) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!username) return reject(new Error(`Harap masukkan username github!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/stalker/github',
      params: { apikey: apikey, username: username }
    };
    axios.request(option)
    .then(data => {
      resolve(data.data);
    })
    .catch(error => {
      reject(error);
    });
  });
};
exports.wattpad = (apikey, username) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!username) return reject(new Error(`Harap masukkan username wattpad!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/stalker/wattpad',
      params: { apikey: apikey, username: username }
    };
    axios.request(option)
    .then(data => {
      resolve(data.data);
    })
    .catch(error => {
      reject(error);
    });
  });
};