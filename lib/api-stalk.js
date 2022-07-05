const axios = require('axios')

async function GitHubStalk(apikey, username) {
    return new Promise((resolve, reject) => {
        try {
            const options = {
                method: "GET",
                url: 'https://api.ariasu.xyz/api/stalking-github-json',
                params: {apikey: apikey, username: username}
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
module.exports.GitHubStalk = GitHubStalk