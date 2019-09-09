<template>
  <div class="container">
    <div class="columns">
      <div class="column is-5 is-offset04">
        <PmTrack :track="track"> </PmTrack>
      </div>
    </div>
  </div>

</template>


<script>
  import PmTrack from '@/components/Track.vue'
  import trackService from '@/services/track'
  export default {
    components: {
      PmTrack,
    },
    data () {
      return {
        track: {}
      }
    },
    created() {
      const id = this.$route.params.id
      trackService.getById(id)
        .then(res => {
          this.track = res
        })
    }
  }
</script>

<style lang="scss" scoped>
  .columns {
    margin: 20px;
  }
</style>
