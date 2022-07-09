const axios = require("axios")
const cheerio = require ("cheerio")

async function InfoGempa() {
    return new Promise((resolve, reject) => {
        axios.get('https://www.bmkg.go.id/gempabumi/gempabumi-dirasakan.bmkg').then((response) => {
            const $ = cheerio.load(response.data)
            const urlElems = $('table.table-hover.table-striped')
            for (let i = 0; i < urlElems.length; i++) {
                const urlSpan = $(urlElems[i]).find('tbody')[0]
                if (urlSpan) {
                    const urlData = $(urlSpan).find('tr')[0]
                    var Kapan = $(urlData).find('td')[1]
                    var Letak = $(urlData).find('td')[2]
                    var Magnitudo = $(urlData).find('td')[3]
                    var Kedalaman = $(urlData).find('td')[4]
                    var Wilayah = $(urlData).find('td')[5]
                    var lintang = $(Letak).text().split(' ')[0]
                    var bujur = $(Letak).text().split(' ')[2]
                    var hasil = {
                        date: new Date(),
                        result: {
                            time: $(Kapan).text(),
                            latitude: lintang,
                            longitude: bujur,
                            magnitude: $(Magnitudo).text(),
                            depth: $(Kedalaman).text().replace(/\t/g, '').replace(/I/g, ''),
                            region: $(Wilayah).text().replace(/\t/g, '').replace(/I/g, '').replace('-','').replace(/\r/g, '').split('\n')[0],
                            maps: 'https://maps.google.com/maps?ll=' + lintang + ',' + bujur + ',&amp;z=16&amp;t=m&amp;hl=en-US&amp;gl=US&amp;mapclient=apiv3'
                        },
                        note: 'It is strictly forbidden to reupload this code, copyright © 2022 by Loli Killers'
                    }
                    resolve(hasil);
                }
            }
        })
    })
}

module.exports.InfoGempa = InfoGempa