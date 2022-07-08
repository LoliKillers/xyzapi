const axios = require('axios')
const cheerio = require('cheerio')

function Wallpaperflare(search) {
    return new Promise((resolve, reject) => {
        axios.get('https://www.wallpaperflare.com/search?wallpaper='+ search,{
            headers: {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "_ga=GA1.2.863074474.1624987429; _gid=GA1.2.857771494.1624987429; __gads=ID=84d12a6ae82d0a63-2242b0820eca0058:T=1624987427:RT=1624987427:S=ALNI_MaJYaH0-_xRbokdDkQ0B49vSYgYcQ"
            }
        })
        .then(({ data }) => {
            result = []
            const x = cheerio.load(data)
            x('#gallery > li > figure > a').each(function(y, z) {
                result.push(x(z).find('img').attr('data-src'))
            })
            let image = result[Math.floor(Math.random() * result.length)]
            resolve({
                date: new Date(),
                result: {
                    image: image
                },
                note: 'It is strictly forbidden to reupload this code, copyright © 2022 by Loli Killers'
            })
        })
        .catch(error => {
            resolve({
                date: new Date(),
                error: {
                    message: 'There seems to be an error!, please check if the searchings entered is correct!'
                }
            })
        })
    })
}
module.exports.Wallpaperflare = Wallpaperflare