const axios = require('axios');
const webApi = 'https://api.darkcoder.xyz';

exports.encode32 = (apikey, text) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!text) return reject(new Error(`Parameter "text" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/crypto/encode32',
      params: { apikey: apikey, text: text }
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
exports.encode64 = (apikey, text) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!text) return reject(new Error(`Parameter "text" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/crypto/encode64',
      params: { apikey: apikey, text: text }
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
exports.decode32 = (apikey, text) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!text) return reject(new Error(`Parameter "text" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/crypto/decode32',
      params: { apikey: apikey, text: text }
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
exports.decode64 = (apikey, text) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!text) return reject(new Error(`Parameter "text" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/crypto/decode64',
      params: { apikey: apikey, text: text }
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