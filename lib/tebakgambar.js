const axios = require('axios')
const cheerio = require('cheerio')

function TebakGambar() {
    return new Promise(async(resolve, reject) => {
        axios.get('https://jawabantebakgambar.net/all-answers/')
        .then(({ data }) => {
            const $ = cheerio.load(data)
            const result = [];
            let random = Math.floor(Math.random() * 2836) + 2;
            let link2 = 'https://jawabantebakgambar.net'
            $(`#images > li:nth-child(${random}) > a`).each(function(a, b) {
                const img = link2 + $(b).find('img').attr('data-src')
                const jwb = $(b).find('img').attr('alt')
                result.push({
                    date: Date(),
                    result: {
                        thumb: img,
                        jawaban: jwb
                    },
                    note: 'It is strictly forbidden to reupload this code, copyright © 2022 by Loli Killers'
                })
                resolve(result)
            })
        })
        .catch(reject => {
            resolve({
                date: new Date(),
                error: {
                    message: 'There seems to be an error!, immediately notify the owner so that it will be repaired immediately!'
                }
            })
        })
    })
}

module.exports.TebakGambar = TebakGambar