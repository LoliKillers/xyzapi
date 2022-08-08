const axios = require('axios');
const webApi = 'https://api.darkcoder.xyz';

exports.listsurah = (apikey) => {
  return new Promise((resolve, reject) => {
  if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/islami/list-surah',
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

exports.surah = (apikey, number) => {
  return new Promise((resolve, reject) => {
  if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
  if (!number) return reject(new Error(`Harap masukkan angka sesuai dengan daftar urutan surah di alqur'an!`));
  if (isNaN(number)) return reject(new Error('Parameter kedua harus berupa angka'));
    let option = {
      method: 'GET',
      url: webApi + '/dc/islami/surah',
      params: { apikey: apikey, number: number}
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
