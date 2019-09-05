<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Practicas con  VUE</h1>
    <select v-model="selectedCountry">
      <option v-for="country in countries" v-bind:value="country.value" v-bind:key="country.value" >
        {{ country.name }}
      </option>
    </select>
    <Spinner v-show="loading">

    </Spinner>
    <ul>
      <Artist v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid"/>
    </ul>
  </div>
</template>

<script>
import Artist from './components/Artist.vue'
import Spinner from './components/Spinner.vue'
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
      artists: [],
      countries: [
        { name: 'Argentina', value: 'argentina' },
        { name: 'Colombia', value: 'colombia' },
        { name: 'España', value: 'spain' },
        { name: 'Peru', value: 'peru' }
      ],
      selectedCountry: 'argentina',
      loading: true
    }
  },
  components: {
    Artist,
    Spinner
  },
  methods: {
    refreshArtists() {
      const self = this
      this.loading = true
      this.artists = []
      getArtists(this.selectedCountry)
        .then(function (artists) {
          self.loading= false
          self.artists = artists
        })
    }
  },
  mounted: function () {
    this.refreshArtists()
  },
  watch: {
    selectedCountry() {
      this.refreshArtists()
    }
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
