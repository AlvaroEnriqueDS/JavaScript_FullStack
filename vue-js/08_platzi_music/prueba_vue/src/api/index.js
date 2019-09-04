//import config from '.config.js'

//const { apiKey } = config.apiKey
const URL =  `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=peru&api_key=2839aa7bc52ca7fe9843d94dbb33e77c&format=json`


export default function getArtist() {
    return fetch(URL)
    .then(res => res.json())
    .then(json => json.topartists.artist)
}