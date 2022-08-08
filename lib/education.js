const axios = require('axios');

exports.kbbi = (apikey, search) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!search) return reject(new Error(`Parameter "search" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/education/kbbi',
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