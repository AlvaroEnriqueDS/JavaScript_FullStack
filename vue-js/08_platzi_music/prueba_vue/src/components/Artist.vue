<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="artist in artists"  v-bind:artist="artist">
        {{artist.name}}

        <h2>
          <a v-bind:href="{{artist.url}}" target="_blank"></a>
          {{artist.name}}
          <img v-bind:src="artist.image[2]['#text']"></img>
        </h2>
      </li>
    </ul>
  </div>
</template>

<script>
import getArtist from '../api'

export default {
  name: 'Artist',
  props: {
    msg: String,
    artist: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
