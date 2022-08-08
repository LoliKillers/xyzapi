const axios = require('axios');
const webApi = 'https://api.darkcoder.xyz';

exports.neko = (apikey) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/random/neko',
      params: { apikey: apikey }
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
exports.kitsune = (apikey) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/random/kitsune',
      params: { apikey: apikey }
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
exports.waifu = (apikey) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/random/waifu',
      params: { apikey: apikey }
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
exports.baka = (apikey) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/random/baka',
      params: { apikey: apikey }
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
exports.blush = (apikey) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/random/blush',
      params: { apikey: apikey }
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