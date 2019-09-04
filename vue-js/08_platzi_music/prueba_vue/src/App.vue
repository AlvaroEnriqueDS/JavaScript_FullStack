<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Artist msg="Hola Mundo desde vue.js"/>
  </div>
</template>

<script>
import Artist from './components/Artist.vue'

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
  mounted: function(){
    const self = this
    getArtist()
      .then(function (artists){
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
