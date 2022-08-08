const axios = require('axios');
const webApi = 'https://api.darkcoder.xyz';

exports.otakudesu = (apikey, anime) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!anime) return reject(new Error(`Parameter "anime" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/anime/otakudesu',
      params: { apikey: apikey, anime: anime }
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
exports.anoboy = (apikey, anime) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!anime) return reject(new Error(`Parameter "anime" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/anime/anoboy',
      params: { apikey: apikey, anime: anime }
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
exports.malTopAiring = (apikey) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    //if (!anime) return reject(new Error(`Parameter "anime" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/anime/mal-topairing',
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
exports.malTopAnime = (apikey) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    //if (!anime) return reject(new Error(`Parameter "anime" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/anime/mal-topanime',
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
exports.malSearchAnime = (apikey, anime) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!anime) return reject(new Error(`Parameter "anime" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/anime/mal-searchanime',
      params: { apikey: apikey, anime: anime }
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
exports.malSearchManga = (apikey, manga) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!manga) return reject(new Error(`Parameter "manga" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/anime/mal-searchmanga',
      params: { apikey: apikey, manga: manga }
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
exports.malSearchCharacter = (apikey, character) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!character) return reject(new Error(`Parameter "character" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/anime/mal-searchcharacter',
      params: { apikey: apikey, character: character }
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
exports.quotesnime = (apikey) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    //if (!character) return reject(new Error(`Parameter "character" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/anime/random-quotesnime',
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
exports.mangatoon = (apikey, search) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!search) return reject(new Error(`Parameter "search" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/anime/mangatoon',
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
exports.apAnime = (apikey, anime) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!anime) return reject(new Error(`Parameter "anime" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/anime/ap-anime',
      params: { apikey: apikey, anime: anime }
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
exports.apManga = (apikey, manga) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!manga) return reject(new Error(`Parameter "manga" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/anime/ap-manga',
      params: { apikey: apikey, manga: manga }
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
exports.otakuOngoing = (apikey) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    //if (!manga) return reject(new Error(`Parameter "manga" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/anime/otaku-ongoing',
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
exports.otakuOngoing = (apikey) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    //if (!manga) return reject(new Error(`Parameter "manga" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/anime/otaku-ongoing',
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
exports.kiryuu = (apikey, anime) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!anime) return reject(new Error(`Parameter "anime" kosong!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/anime/kiryuu',
      params: { apikey: apikey, anime: anime }
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