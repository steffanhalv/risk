<template>
  <div id="board">
    <div style="overflow: auto; width: calc(100% - 0px); height: calc(100% + 100px); position: absolute; margin: 0 0 50px;">
      <world-map :continents="game.map.continents"></world-map>
    </div>
    <div style="position: fixed; bottom: 0; width: 100%; height: 70px; background: #222;">
      <span>{{}}</span>
    </div>
  </div>
</template>

<script>
  import WorldMap from './WorldMap'
  export default {
    components: { WorldMap },
    data () {
      return {
        game: new this.$risk.Game()
      }
    },
    mounted () {
      for (let i = 0; i < 6; i++) {
        let player = new this.$risk.Player('Player ' + i, (360 / 6) * i)
        this.game.players.push(player)
      }
    }
  }
</script>

<style scoped>
</style>
