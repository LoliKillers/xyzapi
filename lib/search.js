const axios = require('axios');

exports.repo = (apikey, search) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!search) return reject(new Error(`Parameter "search" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/search/githubrepo',
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
exports.sticker = (apikey, search) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!search) return reject(new Error(`Parameter "search" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/search/sticker',
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
exports.songsliric = (apikey, title) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!title) return reject(new Error(`Parameter "title" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/search/songsliric',
      params: { apikey: apikey, title: title }
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
exports.youtube = (apikey, search) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!search) return reject(new Error(`Parameter "search" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/search/youtube',
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
exports.moddroid = (apikey, search) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!search) return reject(new Error(`Parameter "search" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/search/moddroid',
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
exports.happymod = (apikey, search) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!search) return reject(new Error(`Parameter "search" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/search/happymod',
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