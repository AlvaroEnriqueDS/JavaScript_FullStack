<template>
  <div id="app">
    <pmHeader></pmHeader>

    <router-view></router-view>

    <pmfooter></pmfooter>
  </div>
</template>

<script>
import pmfooter from '@/components/layout/Fotter.vue'
import pmHeader from '@/components/layout/Header.vue'
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
    pmHeader
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>
