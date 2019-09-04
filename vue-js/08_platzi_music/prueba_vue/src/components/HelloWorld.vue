<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(artist) in artists"  v-bind:key="artist">
        {{artist.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    hola: String
  },
  data () {
    return {
      artists: [
      {name: 'Aracely'},
      {name: 'Keiko'},
      {name: 'Isaura'},
      {name: 'Alvaro'}
  ]
    }
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
