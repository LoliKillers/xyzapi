const axios = require('axios')

async function TikTok(apikey, url) {
    return new Promise((resolve, reject) => {
        try {
            const options = {
                method: "GET",
                url: 'https://api.ariasu.xyz/api/downloader/tiktok',
                params: {apikey: apikey, url: url}
            };
            
            axios.request(options).then(function (response) {
                resolve(response.data);
            }).catch(function (error) {
                reject({ message: 'An error occured report me https//wa.me/6285785445412' })
            });
        } catch (e) {
            reject({ message: 'An error occured report me https//wa.me/6285785445412' })
        }
    })
}
async function YouTube(apikey, ektensi, url) {
    let listEktensi = ['audio', 'video'];
    return new Promise((resolve, reject) => {
        try {
            if (listEktensi.includes(ektensi)) {
            const options = {
                method: "GET",
                url: 'https://api.ariasu.xyz/api/downloader/youtube',
                params: {apikey: apikey, ektensi: ektensi, url: url}
            };
            
            axios.request(options).then(function (response) {
                resolve(response.data);
            }).catch(function (error) {
                reject({ message: 'An error occured report me https//wa.me/6285785445412' })
            });
            } else {
                let msg = {
                    message: 'Enter the extension correctly, the extension format [audio/video]'
                }
                resolve(msg)
            }
        } catch (e) {
            reject({ message: 'An error occured report me https//wa.me/6285785445412' })
        }
    })
}

module.exports.TikTok = TikTok
module.exports.YouTube = YouTube