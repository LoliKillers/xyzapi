const ytc = require('ytdl-core')

async function YouTubeDl(url) {
    return new Promise((resolve, reject) => {
        if (url == undefined) return reject({ error: 'enter url parameters!!'})
        try {
            const _id = ytc.getVideoID(url)
            const _info = ytc.getInfo(`https://www.youtube.com/watch?v=${_id}`)
            .then((data) => {
                let _formats = data.formats
                let _audio = []
                let _video = []
                for (let x = 0; x < _formats.length; x++) {
                    if (_formats[x].mimeType == 'audio/webm; codecs=\"opus\"') {
                        let _aud = _formats[x]
                        _audio.push(_aud.url)
                    }
                }
                for (let x = 0; x < _formats.length; x++) {
                    if (_formats[x].container == 'mp4' && _formats[x].hasVideo == true && _formats[x].hasAudio == true) {
                        let _vid = _formats[x]
                        _video.push(_vid.url)
                    }
                }
                
                const result = {
                    date: new Date(),
                    result: {
                        title: data.player_response.microformat.playerMicroformatRenderer.title.simpleText,
                        description: data.player_response.microformat.playerMicroformatRenderer.description.simpleText,
                        length_seconds: data.player_response.microformat.playerMicroformatRenderer.lengthSeconds,
                        owner_rofile_url: data.player_response.microformat.playerMicroformatRenderer.ownerProfileUrl,
                        external_channel_id: data.player_response.microformat.playerMicroformatRenderer.externalChannelId,
                        thumb: data.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url,
                        channel: data.player_response.microformat.playerMicroformatRenderer.ownerChannelName,
                        published: data.player_response.microformat.playerMicroformatRenderer.publishDate,
                        views: data.player_response.microformat.playerMicroformatRenderer.viewCount,
                        category: data.player_response.microformat.playerMicroformatRenderer.category,
                        url_audio: _audio[1],
                        url_video: _video[0]
                    },
                    note: 'It is strictly forbidden to reupload this code, copyright © 2022 by Loli Killers'
                }
                return(result)
            })
            resolve(_info)
        } catch (error) {
            reject({
                date: new Date(),
                error: {
                    message: 'There seems to be an error!, please check if the url entered is correct!'
                }
            })
        }
        reject({
            date: new Date(),
            error: {
                message: 'There seems to be an error!, please check if the url entered is correct!'
            }
        })
    })
}

module.exports.YouTubeDl = YouTubeDl