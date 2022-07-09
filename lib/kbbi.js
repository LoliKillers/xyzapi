const axios = require('axios')
const cheerio = require('cheerio')

async function KBBI(query) {
    return new Promise((resolve, reject) => {
        if (query == undefined) return reject({ error: 'enter query parameters!!'})
        try {
            axios.get('https://kbbi.kemdikbud.go.id/entri/'+query)
            .then(({ data }) => {
                //const result = []
                //fs.writeFileSync('index.html', data)
                const x = cheerio.load(data)
                x('div.body-content').each(function(y, z) {
                    let data1 = x(z).find('h2').text()
                    let data2 = x(z).find('ol > li').text().trim()
                    let hasil = {
                        date: new Date(),
                        result: {
                            weakness: data1,
                            meaning: data2
                        },
                        note: 'It is strictly forbidden to reupload this code, copyright © 2022 by Loli Killers'
                    }
                    resolve(hasil)
                })
            })
        } catch {
            reject({
                code: 404,
                message: "Internal Server Error, Repeat in a few more moments, if there is still an error, please contact the coder"
            })
        }
    })
}
//module.exports.KBBI = KBBI
KBBI('anjing').then(data => { console.log(data) }).catch(error => { console.log(error) })