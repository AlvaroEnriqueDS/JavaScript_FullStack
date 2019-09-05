<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Practicas con  VUE</h1>
    <ul>
      <Artist v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid"/>
    </ul>
  </div>
</template>

<script>
import Artist from './components/Artist.vue'
import getArtists from './api'

export default {
  name: 'app',
  data () {
    return {
      // artists: [
      // {name: 'Aracely'},
      // {name: 'Keiko'},
      // {name: 'Isaura'},
      // {name: 'Alvaro'}
      // ]
      artists: []
    }
  },
  components: {
    Artist
  },
  mounted: function () {
    const self = this
    getArtists()
      .then(function (artists) {
        self.artists = artists
      })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
