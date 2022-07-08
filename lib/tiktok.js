const axios = require('axios')
const cheerio = require('cheerio')

async function TikTokDl(url) {
    return new Promise(async (resolve, reject) => {
        axios.get('https://ttdownloader.com/', {
            headers: {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "cookie": "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061"
            }
        })
        .then(({ data }) => {
            const x = cheerio.load(data)
            let token = x('#token').attr('value')
            let options = {
                'url': url,
                'format': '',
                'token': token
            }
            axios('https://ttdownloader.com/req/', {
                method: 'POST',
                data: new URLSearchParams(Object.entries(options)),
                headers: {
                    "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                    "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                    "cookie": "PHPSESSID=9ut8phujrprrmll6oc3bist01t; popCookie=1; _ga=GA1.2.1068750365.1625213061; _gid=GA1.2.842420949.1625213061"
                }
            })
            .then(({ data }) => {
                if (data !== 'error') {
                    const x = cheerio.load(data)
                    resolve({
                        date: new Date(),
                        result: {
                            tiktok_no_wm: x('div:nth-child(2) > div.download > a').attr('href'),
                            tiktok_wm: x('div:nth-child(3) > div.download > a').attr('href')
                        },
                        note: 'It is strictly forbidden to reupload this code, copyright © 2022 by Loli Killers'
                    })
                } else {
                    resolve({
                        date: new Date(),
                        error: {
                            message: 'There seems to be an error!, please check if the url entered is correct!'
                        }
                    })
                }
            })
        })
        .catch(reject)
    })
}
module.exports.TikTokDl = TikTokDl