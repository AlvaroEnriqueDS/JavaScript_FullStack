<template>
  <div id="app">
    <pmHeader></pmHeader>
    <section class="section">
      <nav class="nav">
        <div class="container">
          <input type="text" class="input is-large" placeholder="Buscar Canciones" v-model="searchQuery">
          <a class="button is-info is-large" @click="search" target="_blank">Buscar</a>
          <a href="" class="button is-danger is-large">&times;</a>
          <p>{{ searchMessage }}</p>
        </div>
      </nav>
      <pmLoader v-show="isLoading"></pmLoader>
      <div class="container results" v-show="!isLoading">
        <div class="columns is-multiline">
          <div class="column is-one-quarter" v-for="t in tracks">
            <pmTrack v-bind:track="t" @select="setSelectedTrack" :class="{ 'is-active': t.id === selectedTrack }"> </pmTrack>
          </div>
        </div>
      </div>
    </section>

    <pmfooter></pmfooter>
  </div>
</template>

<script>
import trackService from '@/services/track'
import pmfooter from '@/components/layout/Fotter.vue'
import pmHeader from '@/components/layout/Header.vue'

import pmTrack from '@/components/Track.vue'
import pmLoader from '@/components/shared/Loader.vue'
/*
const tracks = [
  {name: 'Tamo bien', artist: 'Bad Bunny'},
  {name: 'By my Own', artist: 'Robot'},
  {name: 'Hey shorty!', artist: 'Rels B'}
]
*/
export default {
  name: 'app',

  components: {
    pmfooter,
    pmHeader,
    pmTrack,
    pmLoader
  },
  data () {
    return {
      searchQuery: '',
      tracks: [],

      isLoading: false,

      selectedTrack: ''
    }
  },
  methods: {
    search() {
     // this.tracks = tracks
     //if(this.searchQuery === '') {return}
     if(!this.searchQuery) {return}

      this.isLoading = true

     trackService.search(this.searchQuery)
      .then(res => {
        this.tracks = res.tracks.items
        this.isLoading = false
      })
    },
    setSelectedTrack(id) {
      this.selectedTrack = id
    }
  },
  computed: {
    searchMessage(id) {
      return `Encontrados: ${this.tracks.length}`
    }
  },
  //
  created() {
    console.log('created...')
  },
  mounted() {
    console.log('mounted...')
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
.results {
  margin-top: 50px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.row {
  display: flex;
  flex-flow:column wrap;
  align-content:center;
}
.is-active {
  border: 3px #23d160 solid;
}
</style>
