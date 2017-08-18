<template>
  <div id="board">
    <div class="worldmap">
      <world-map
        :current="current"
        :continents="game.map.continents"></world-map>
    </div>
    <div class="inventory">
      <span>Player: {{current.name}}</span><br>
      <span>Place: {{current.place}}</span><br>
      <span>Hue: {{current.hue}}</span>
      <div style="float: right;">
        <button @click="next">Finish round</button>
      </div>
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
    computed: {
      current () {
        if (this.game.players.length > 0) {
          return this.game.players[this.game.currentPlayer]
        } else {
          return new this.$risk.Player()
        }
      }
    },
    mounted () {
      for (let i = 0; i < 6; i++) {
        let player = new this.$risk.Player('Player ' + (i + 1), (360 / 6) * i)
        this.game.players.push(player)
      }
    },
    methods: {
      next () {
        if (this.game.currentPlayer < this.game.players.length) {
          this.game.currentPlayer++
        } else {
          this.game.currentPlayer = 0
        }
        this.game.players[this.game.currentPlayer].place = this.calculateNewArmies()
      },
      calculateNewArmies () {
        return 50
      }
    }
  }
</script>

<style scoped>
  .inventory {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 70px;
    background: #222;
    color: #fff;
  }
  .worldmap {
    overflow: auto;
    width: calc(100% - 0px);
    height: calc(100% + 100px);
    position: absolute;
    margin: 0 0 50px;
  }
</style>
