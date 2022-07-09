const axios = require('axios')

function GithubStalk(username) {
    return new Promise(async(resolve, reject) => {
        let url = `https://api.github.com/users/${username}`;
        return axios.get(url)
        .then(data => {
            const user = data.data
            const usr = data.headers
            let result = {
                date: Date(),
                result: {
                    login: user.login,
                    id: user.id,
                    node_id: user.node_id,
                    avatar_url: user.avatar_url,
                    gravatar_id: user.gravatar_id,
                    url: user.url,
                    html_url: user.html_url,
                    followers_url: user.followers_url,
                    following_url: user.following_url,
                    gists_url: user.gists_url,
                    starred_url: user.starred_url,
                    subscriptions_url: user.subscriptions_url,
                    organizations_url: user.organizations_url,
                    repos_url: user.repos_url,
                    events_url: user.events_url,
                    received_events_url: user.received_events_url,
                    type: user.type,
                    site_admin: user.site_admin,
                    site_admin: user.site_admin,
                    name: user.name,
                    company: user.company,
                    blog: user.blog,
                    location: user.location,
                    url: user.url,
                    hireable: user.hireable,
                    bio: user.bio,
                    twitter_username: user.twitter_username,
                    public_repos: user.public_repos,
                    public_gists: user.public_gists,
                    followers: user.followers,
                    following: user.following,
                    created_at: user.created_at,
                    updated_at: user.updated_at
                },
                headers: {
                    server: usr.server,
                    vary: usr.vary,
                    etag: usr.etag,
                    connection: usr.connection
                },
                note: 'It is strictly forbidden to reupload this code, copyright © 2022 by Loli Killers'
            }
            resolve(result)
        })
        .catch(reject => {
            resolve({
                date: new Date(),
                error: {
                    message: 'There seems to be an error!, please check if the username entered is correct!'
                }
            })
        })
    })
}
async function GithubRepo(repo) {
    return new Promise( async (resolve, reject) => {
        await axios.get(`https://api.github.com/search/repositories?q=${repo}`)
        .then(response => {
            if(response.status == 200){
                const results = response.data.items
                data = {}
                data.date = new Date()
                data.totalCount = response.data.total_count
                data.items = []
                data.note = "It is strictly forbidden to reupload this code, copyright © 2022 by Loli Killers"
                if(data.totalCount != 0){
                    results.forEach((res) => {
                        data.items.push({
                            id: res.id,
                            node_d: res.node_id,
                            name_repo: res.name,
                            full_name_repo: res.full_name,
                            url_repo: res.html_url,
                            description: res.description,
                            git_url: res.git_url,
                            ssh_url: res.ssh_url,
                            clone_url: res.clone_url,
                            svn_url: res.svn_url,
                            homepage: res.homepage,
                            stargazers: res.stargazers_count,
                            watchers: res.watchers,
                            forks: res.forks,
                            default_branch: res.default_branch,
                            language: res.language,
                            is_private: res.private,
                            is_fork: res.fork,
                            created_at: res.created_at,
                            updated_at: res.updated_at,
                            pushed_at: res.pushed_at,
                        })
                    })
                }else{
                    data.items = "Repositories not found"
                }
                resolve(data)
            }else{
                reject({
                    code: 404,
                    message: "Internal Server Error, Repeat in a few more moments, if there is still an error, please contact the coder"
                })
            }
        })
        .catch(err => {
            reject({
                code: 404,
                message: "Internal Server Error, Repeat in a few more moments, if there is still an error, please contact the coder"
            })
        })
    })
}
module.exports.GithubRepo = GithubRepo
module.exports.GithubStalk = GithubStalk