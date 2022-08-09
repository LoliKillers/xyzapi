const axios = require('axios');
const webApi = 'https://api.darkcoder.xyz';

exports.emoji2png = (apikey, emoticon) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!emoticon) return reject(new Error(`Parameter "emoticon" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/convert/emoji2png',
      params: { apikey: apikey, emoticon: emoticon }
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
exports.gtts = (apikey, lang, text) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!lang) return reject(new Error(`Parameter "lang" kosong!!`));
    if (!text) return reject(new Error(`Parameter "text" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/convert/gtts',
      params: { apikey: apikey, lang: lang, text: text }
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