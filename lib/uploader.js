const axios = require('axios');
const webApi = 'https://api.darkcoder.xyz';

exports.fileungu = (apikey, file) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!file) return reject(new Error(`Parameter "file" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/uploader/fileungu',
      params: { apikey: apikey, file: file }
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