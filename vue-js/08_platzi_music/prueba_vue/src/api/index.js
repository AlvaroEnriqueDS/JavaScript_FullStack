//import config from '.config.js'
//const { apiKey } = config.apiKey

//const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=${apiKey}&format=json`
const URL =  `http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=:country&api_key=2839aa7bc52ca7fe9843d94dbb33e77c&format=json`

export default function getArtists(country) {
  const url = URL.replace(':country', country)
  return fetch(url)
    .then(res => res.json())
    .then(json => json.topartists.artist)
}