const axios = require('axios');
const webApi = 'https://api.darkcoder.xyz';

exports.ytdl = (apikey, url, extension) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!url) return reject(new Error(`Harap masukkan parameter url!!`));
    if (!url.includes('youtu')) return reject(new Error(`Harap masukkan parameter url!!`));
    const isUrl = url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'));
    if (!isUrl) return reject(new Error(`Harap masukkan parameter url dengan benar!!`));
    let listExtension = ['audio','video'];
    if (!extension) return reject(new Error(`Masukkan parameter "extension", extension: audio/video`));
    if (!listExtension.includes(extension)) return reject(new Error(`Parameter "extension" salah!!, extension: audio/video`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/downloader/youtube',
      params: { apikey: apikey, url: url, extension: extension}
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
exports.ytplay = (apikey, search, extension) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!search) return reject(new Error(`Parameter "search" kosong!, masukkan parameter yang di butuhkan!!`));
    const isUrl = search.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'));
    if (isUrl) return reject(new Error(`Parameter "search" salah!!`));
    let listExtension = ['audio','video'];
    if (!extension) return reject(new Error(`Masukkan parameter "extension", extension: audio/video`));
    if (!listExtension.includes(extension)) return reject(new Error(`Parameter "extension" salah!!, extension: audio/video`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/downloader/youtube2',
      params: { apikey: apikey, search: search, extension: extension}
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
exports.tiktok = (apikey, url) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!url) return reject(new Error(`Parameter "url" kosong!, masukkan parameter yang di butuhkan!!`));
    const isUrl = url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'));
    if (!isUrl) return reject(new Error(`Parameter "url" salah!!`));
    if (!url.includes('tiktok')) return reject(new Error(`"url" invaldi!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/downloader/tiktok',
      params: { apikey: apikey, url: url}
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
exports.imgur = (apikey, url) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!url) return reject(new Error(`Parameter "url" kosong!, masukkan parameter yang di butuhkan!!`));
    const isUrl = url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'));
    if (!isUrl) return reject(new Error(`Parameter "url" salah!!`));
    if (!url.includes('imgur')) return reject(new Error(`"url" invaldi!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/downloader/imgur',
      params: { apikey: apikey, url: url}
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
exports.imdb = (apikey, url) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!url) return reject(new Error(`Parameter "url" kosong!, masukkan parameter yang di butuhkan!!`));
    const isUrl = url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'));
    if (!isUrl) return reject(new Error(`Parameter "url" salah!!`));
    if (!url.includes('imdb')) return reject(new Error(`"url" invaldi!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/downloader/imdb',
      params: { apikey: apikey, url: url}
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
exports.instagram = (apikey, url) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!url) return reject(new Error(`Parameter "url" kosong!, masukkan parameter yang di butuhkan!!`));
    const isUrl = url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'));
    if (!isUrl) return reject(new Error(`Parameter "url" salah!!`));
    if (!url.includes('instagram')) return reject(new Error(`"url" invaldi!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/downloader/instagram',
      params: { apikey: apikey, url: url}
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
exports.instagram = (apikey, url) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!url) return reject(new Error(`Parameter "url" kosong!, masukkan parameter yang di butuhkan!!`));
    const isUrl = url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'));
    if (!isUrl) return reject(new Error(`Parameter "url" salah!!`));
    if (!url.includes('instagram')) return reject(new Error(`"url" invaldi!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/downloader/instagram',
      params: { apikey: apikey, url: url}
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
exports.soundcloud = (apikey, url) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!url) return reject(new Error(`Parameter "url" kosong!, masukkan parameter yang di butuhkan!!`));
    const isUrl = url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'));
    if (!isUrl) return reject(new Error(`Parameter "url" salah!!`));
    if (!url.includes('soundcloud')) return reject(new Error(`"url" invaldi!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/downloader/soundcloud',
      params: { apikey: apikey, url: url}
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
exports.facebook = (apikey, url) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!url) return reject(new Error(`Parameter "url" kosong!, masukkan parameter yang di butuhkan!!`));
    const isUrl = url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'));
    if (!isUrl) return reject(new Error(`Parameter "url" salah!!`));
    if (!url.includes('facebook')) return reject(new Error(`"url" invaldi!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/downloader/facebook',
      params: { apikey: apikey, url: url}
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
exports.twitter = (apikey, url) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!url) return reject(new Error(`Parameter "url" kosong!, masukkan parameter yang di butuhkan!!`));
    const isUrl = url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'));
    if (!isUrl) return reject(new Error(`Parameter "url" salah!!`));
    if (!url.includes('twitter')) return reject(new Error(`"url" invaldi!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/downloader/twitter',
      params: { apikey: apikey, url: url}
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
exports.linesticker = (apikey, url) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!url) return reject(new Error(`Parameter "url" kosong!, masukkan parameter yang di butuhkan!!`));
    const isUrl = url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'));
    if (!isUrl) return reject(new Error(`Parameter "url" salah!!`));
    if (!url.includes('line')) return reject(new Error(`"url" invaldi!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/downloader/linesticker',
      params: { apikey: apikey, url: url}
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
exports.like = (apikey, url) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!url) return reject(new Error(`Parameter "url" kosong!, masukkan parameter yang di butuhkan!!`));
    const isUrl = url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'));
    if (!isUrl) return reject(new Error(`Parameter "url" salah!!`));
    if (!url.includes('like')) return reject(new Error(`"url" invaldi!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/downloader/like',
      params: { apikey: apikey, url: url}
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
exports.cocofun = (apikey, url) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!url) return reject(new Error(`Parameter "url" kosong!, masukkan parameter yang di butuhkan!!`));
    const isUrl = url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'));
    if (!isUrl) return reject(new Error(`Parameter "url" salah!!`));
    if (!url.includes('cocofun')) return reject(new Error(`"url" invaldi!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/downloader/cocofun',
      params: { apikey: apikey, url: url}
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
exports.pinterest = (apikey, url) => {
  return new Promise((resolve, reject) => {
    if (!apikey) return reject(new Error(`Apikey kosong!!, silahkan registrasi di https://api.darkcoder.xyz untuk mendapatkan apikey!!`));
    if (!url) return reject(new Error(`Parameter "url" kosong!, masukkan parameter yang di butuhkan!!`));
    const isUrl = url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'));
    if (!isUrl) return reject(new Error(`Parameter "url" salah!!`));
    if (!url.includes('pin')) return reject(new Error(`"url" invaldi!!`));
    let option = {
      method: 'GET',
      url: webApi + '/dc/downloader/pinterest',
      params: { apikey: apikey, url: url}
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