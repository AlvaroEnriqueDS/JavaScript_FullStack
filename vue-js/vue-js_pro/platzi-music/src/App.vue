<template>
  <div id="app">
    <section class="section">
      <nav class="nav has-shadow">
        <div class="container">
          <input type="text" class="input is-large" placeholder="Buscar Canciones" v-model="searchQuery">
          <a class="button is-info is-large" @click="search" target="_blank">Buscar</a>
          <a href="" class="button is-danger is-large">&times;</a>
          <p>{{ searchMessage }}</p>
        </div>
      </nav>

      <div class="container results">
        <div class="columns">
          <div class="column" v-for="t in tracks">
            {{ t.name }} - {{ t.artists[0].name }}
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import trackService from './services/track'
/*
const tracks = [
  {name: 'Tamo bien', artist: 'Bad Bunny'},
  {name: 'By my Own', artist: 'Robot'},
  {name: 'Hey shorty!', artist: 'Rels B'}
]
*/
export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  methods: {
    search() {
     // this.tracks = tracks
     //if(this.searchQuery === '') {return}
     if(!this.searchQuery) {return}

     trackService.search(this.searchQuery)
      .then(res => {
        this.tracks = res.tracks.items
      })
    }
  },
  computed: {
    searchMessage() {
      return `Encontrados: ${this.tracks.length}`
    }
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

h1, h2 {
  font-weight: normal;
}

.row {
  display: flex;
  flex-flow:column wrap;
  align-content:center;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
