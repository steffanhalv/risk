<template>
  <div id="board">
    <div style="overflow: auto; width: calc(100% - 0px); height: calc(100% - 0px); position: absolute; margin: 0 0 50px;">
      <world-map></world-map>
    </div>
    <div style="position: fixed; bottom: 0; width: 100%; height: 70px; background: #222;">

    </div>
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
