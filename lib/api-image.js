const axios = require('axios')

async function Pinterest (apikey, search) {
  return new Promise((resolve, reject) => {
    try {
      const options = {
        method: 'GET',
        url: 'https://api.ariasu.xyz/api/image/pinterest',
        params: { apikey, search }
      }

      axios.request(options).then(function (response) {
        resolve(response.data)
      }).catch(function (error) {
        reject({ message: 'An error occured report me https//wa.me/6285785445412' })
      })
    } catch (e) {
      reject({ message: 'An error occured report me https//wa.me/6285785445412' })
    }
  })
}
async function Alphacoders (apikey, search) {
  return new Promise((resolve, reject) => {
    try {
      const options = {
        method: 'GET',
        url: 'https://api.ariasu.xyz/api/image/alphacoders',
        params: { apikey, search }
      }

      axios.request(options).then(function (response) {
        resolve(response.data)
      }).catch(function (error) {
        reject({ message: 'An error occured report me https//wa.me/6285785445412' })
      })
    } catch (e) {
      reject({ message: 'An error occured report me https//wa.me/6285785445412' })
    }
  })
}
async function Wallpaperflare (apikey, search) {
  return new Promise((resolve, reject) => {
    try {
      const options = {
        method: 'GET',
        url: 'https://api.ariasu.xyz/api/image/wallpaperflare',
        params: { apikey, search }
      }

      axios.request(options).then(function (response) {
        resolve(response.data)
      }).catch(function (error) {
        reject({ message: 'An error occured report me https//wa.me/6285785445412' })
      })
    } catch (e) {
      reject({ message: 'An error occured report me https//wa.me/6285785445412' })
    }
  })
}
module.exports.Pinterest = Pinterest
module.exports.Alphacoders = Alphacoders
module.exports.Wallpaperflare = Wallpaperflare
