<div align="center">
<img src="https://telegra.ph/file/ccfb50f2eccfa4941f871.jpg" alt="ARI" width="300" />

![ariasuxyz](https://socialify.git.ci/LoliKillers/xyzapi/image?description=1&font=Source%20Code%20Pro&forks=1&language=1&owner=1&pattern=Floating%20Cogs&stargazers=1&theme=Dark) <br>
[![Publish](https://github.com/LoliKillers/xyzapi/actions/workflows/npm-publish.yml/badge.svg)](https://github.com/LoliKillers/xyzapi/actions/workflows/npm-publish.yml)
<p align="center">
<a href="https://wa.me/6285785445412" alt="Whatsapp!"> <img src="https://aleen42.github.io/badges/src/whatsapp.svg" /> </a>
<a href="https://github.com/LoliKillers/xyzapi/graphs/commit-activity" alt="Maintenance"> <img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" /> </a>
</p>
<p align="center">
<a href="https://github.com/LoliKillers/xyzapi" alt="GitHub closed issues"> <img src="https://img.shields.io/github/issues-closed-raw/LoliKillers/xyzapi?style=flat&logo=github&color=success" /> </a>
<a href="https://github.com/LoliKillers/xyzapi" alt="GitHub commit activity"> <img src="https://img.shields.io/github/commit-activity/m/LoliKillers/xyzapi" /> </a>
<a href="https://github.com/LoliKillers/xyzapi/graphs/contributors" alt="GitHub contributors"> <img src="https://img.shields.io/github/contributors/LoliKillers/xyzapi?style=flat&logo=github" /> </a>
<a href="https://github.com/LoliKillers/xyzapi/network/members" alt="GitHub forks"> <img src="https://img.shields.io/github/forks/LoliKillers/xyzapi?label=Forks&logo=github" /> </a>
<a href="https://github.com/LoliKillers/xyzapi" alt="GitHub closed pull requests"> <img src="https://img.shields.io/github/issues-pr-closed-raw/LoliKillers/xyzapi?color=success" /> </a>
<a href="https://github.com/LoliKillers/xyzapi" alt="GitHub issues"> <img src="https://img.shields.io/github/issues-raw/LoliKillers/xyzapi?style=flat&logo=github&color=yellow" /> </a>
</p>
</div>

# xyzapi

Small Pacakage npm :)

# instalation
```shell
npm install xyzapi
```
Or via yarn
```shell
yarn add xyzapi
```

# Usage

Example!

### Islami

```List Surah```
```javascript
const xyz = require('xyzapi')

const apikey = 'APIKEY_KAMU' //apikey bisa kalian dapatkan gratis dengan cara register di https://api.darkcoder.xyz

xyz.islami.listsurah(apikey)
.then(result => {
    console.log(result)
})
.catch(error => {
    console.log(error)
})
```


# LIST

## Islami
| Fitur Name | type | Formats | Params |
| :------------: | :------------: | :---------------: | :-----: |
| List Surah | islami | listsurah | apikey |
| Surah | islami | surah | apikey&number |

## Imge
| Fitur Name | type | Formats | Params |
| :------------: | :------------: | :---------------: | :-----: |
| Pinterest | image | pinterest | apikey&search |
| Alphacoders | image | alphacoders | apikey&search |
| Wallpaper Flare | image | wallpaperflare | apikey&search |

## Downloader
| Fitur Name | type | Formats | Params |
| :------------: | :------------: | :---------------: | :-----: |
| Youtube Dl | downloader | ytdl | apikey&url&extension |
| Youtube Play | downloader | ytplay | apikey&search&extension |
| TikTok Dl | downloader | tiktok | apikey&url |
| Imgur | downloader | imgur | apikey&url |
| Imdb | downloader | imdb | apikey&url |
| Instagram | downloader | instagram | apikey&url |
| Sound Cloud | downloader | soundcloud | apikey&url |
| Facebook | downloader | facebook | apikey&url |
| Twitter | downloader | twitter | apikey&url |
| Line Sticker | downloader | linesticker | apikey&url |
| Like | downloader | like | apikey&url |
| Cocofun | downloader | cocofun | apikey&url |
| Pinterest | downloader | pinterest | apikey&url |

## Info
| Fitur Name | type | Formats | Params |
| :------------: | :------------: | :---------------: | :-----: |
| Gempa Terkini | info | gempa | apikey |
| Kode Pos | info | kodepos | apikey&city |
| Kompas News | info | kompasNews | apikey |
| Hoax | info | hoax | apikey |
| Server Minecraft | info | servermc | apikey |
| Jadawal Bola | info | jadwalBola | apikey |
| I News | info | inews | apikey |
| TikTok Trends | info | tiktokTrend | apikey |
| Covid Gobal | info | covidGlobal | apikey |

## Search
| Fitur Name | type | Formats | Params |
| :------------: | :------------: | :---------------: | :-----: |
| Github Repo | search | repo | apikey&search |
| Sticker | search | sticker | apikey&search |
| Lirik Lagu | search | songsliric | apikey&title |
| Youtube | search | youtube | apikey&search |
| Moddroid | search | moddroid | apikey&search |
| Happy Mod | search | happymod | apikey&search |

## Education 
| Fitur Name | type | Formats | Params |
| :------------: | :------------: | :---------------: | :-----: |
| KBBI | education | search | apikey&search |

## Anime 
| Fitur Name | type | Formats | Params |
| :------------: | :------------: | :---------------: | :-----: |
| Otakudesu | anime | otakudesu | apikey&anime |
| Anoboy | anime | anoboy | apikey&anime |
| MAL Top Airing | anime | malTopAiring | apikey |
| MAL Top Anime | anime | malTopAnime | apikey |
| MAL Search Anime | anime | malSearchAnime | apikey&anime |
| MAL Search Manga | anime | malSearchManga | apikey&manga |
| MAL Search Character | anime | malSearchCharacter | apikey&character |
| Quotesnime | anime | quotesnime | apikey |
| Manga Toons | anime | mangatoon | apikey&search |
| Manga Toons | anime | mangatoon | apikey&search |
| Anime Planet Search | anime | apAnime | apikey&anime |
| Anime Planet Manga | anime | apManga | apikey&manga |
| Otakudesu On Going | anime | otakuOngoing | apikey |
| Anime Kiryuu | anime | kiryuu | apikey&anime |

## Random 
| Fitur Name | type | Formats | Params |
| :------------: | :------------: | :---------------: | :-----: |
| Neko | random | neko | apikey |
| Kitsune | random | kitsune | apikey |
| Waifu | random | waifu | apikey |
| Baka | random | baka | apikey |
| Bite | random | bite | apikey |
| Blush | random | blush | apikey |

## Convert 
| Fitur Name | type | Formats | Params |
| :------------: | :------------: | :---------------: | :-----: |
| Emoji To Png | convert | emoji2png | apikey&emoticon |
| Text To Speech | convert | gtts | apikey&lang&text |

## Uploader 
| Fitur Name | type | Formats | Params |
| :------------: | :------------: | :---------------: | :-----: |
| File Ungu | uploader | fileungu | apikey&file |

## Crypto 
| Fitur Name | type | Formats | Params |
| :------------: | :------------: | :---------------: | :-----: |
| Encode 32 | crypto | encode32 | apikey&text |
| Encode 64 | crypto | encode64 | apikey&text |
| Decode 32 | crypto | decode32 | apikey&text |
| Decode 64 | crypto | decode64 | apikey&text |

# NOTE

Please read the [LICENSE](https://github.com/LoliKillers/xyzapi/blob/master/LICENSE.md) before acting!

I will continue to update this package, so wait for my next update.

To request features or report bugs or want to ask questions, please contact me at 
* [WhatsApp](https://wa.me/6285785445412)
* [Telegram](https://t.me/Loli_Killers)
* [Instagram](https://instagram.com/ariasux.yz)

# JOIN GROUP

* [WhatsApp](https://chat.whatsapp.com/EH9g1SKf588HXEFY51zQMu)

* [Web API](https://darkcoder.xyz)
