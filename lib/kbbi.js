async function KBBI(kata) {
    if (kata == undefined) {
        axios.get('https://kbbi.kemdikbud.go.id/entri/'+kata)
        .then(({ data }) => {
            //const result = []
            //fs.writeFileSync('index.html', data)
            const x = cheerio.load(data)
            x('div.body-content').each(function(y, z) {
                let data1 = x(z).find('h2').text()
                let data2 = x(z).find('ol > li').text().trim()
                let hasil = {
                    weakness: data1,
                    meaning: data2
                }
                console.log(hasil)
            })
        })
    } else {
        reject({
            code: 404,
            message: "Internal Server Error, Repeat in a few more moments, if there is still an error, please contact the coder"
        })
    }
}
module.exports.KBBI = KBBI