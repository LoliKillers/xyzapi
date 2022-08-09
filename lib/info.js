const axios = require('axios');
const webApi = 'https://api.darkcoder.xyz'

exports.gempa = (apikey) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/info/gempa',
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
exports.kodepos = (apikey, city) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!city) return reject(new Error(`Parameter "city" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/info/kodepos',
      params: { apikey: apikey, city: city }
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
exports.kompasNews = (apikey) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/info/kompas-news',
      params: { apikey: apikey}
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

exports.hoax = (apikey) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/info/hoax',
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
exports.servermc = (apikey) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/info/servermc',
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
exports.jadawalBola = (apikey) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/info/jadawal-bola',
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
exports.inews = (apikey) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/info/inews',
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
exports.tiktokTrend = (apikey) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/info/tiktok-trend',
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

exports.covidGlobal = (apikey) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/info/covid-global',
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