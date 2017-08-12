<template>
  <div id="board" style="width: calc(100% - 0px); height: calc(100% - 50px); position: absolute; margin: 0 0 50px;">
    <world-map></world-map>
  </div>
</template>

<script>
  import WorldMap from './WorldMap'
  export default {
    components: { WorldMap },
    data () {
      return {
      }
    }
  }
</script>

<style scoped>
</style>
