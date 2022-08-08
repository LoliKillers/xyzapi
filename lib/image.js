const axios = require('axios');
const webApi = 'https://api.darkcoder.xyz';

exports.pinterest = (apikey, search) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!search) return reject(new Error(`Harap masukkan parameter pencarian!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/image/pinterest',
      params: { apikey: apikey, search: search }
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
exports.alphacoders = (apikey, search) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!search) return reject(new Error(`Harap masukkan parameter pencarian!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/image/alphacoders',
      params: { apikey: apikey, search: search }
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
exports.wallpaperflare = (apikey, search) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!search) return reject(new Error(`Harap masukkan parameter pencarian!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/image/wallpaperflare',
      params: { apikey: apikey, search: search }
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