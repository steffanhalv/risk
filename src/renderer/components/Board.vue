<template>
  <div id="board">
    <div class="worldmap">
      <world-map
        :data="data"
        :current="current"
        :continents="game.map.continents"></world-map>
    </div>
    <div
      style="position: fixed; font-size: 1.4em; color: #fff; width: 100%; top: 40px; text-align: center; padding: 20px;">
      <span
        style="padding: 5px; background-color: rgba(103, 137, 217, .6)"
        :style="{filter: 'hue-rotate(' + (current.hue + 200) + 'deg)'}">
        Place: <b>{{current.place}}</b>
      </span>
    </div>
    <div v-if="data.hover !== ''"
      style="position: fixed; font-size: 1.4em; color: #fff; width: 100%; bottom: 70px; text-align: center; padding: 20px;">
      <span style="padding: 5px; background: rgba(0, 0, 0, .4);">{{data.hover}}</span>
    </div>
    <div class="inventory">
      <span style="padding: 5px">Player: </span><span
        style="display: inline-block; position: relative; padding: 5px; background-color: rgba(103, 137, 217, .9)"
        :style="{filter: 'hue-rotate(' + (current.hue + 200) + 'deg)'}"
      >{{current.name}}</span>
      <div style="position: absolute; right: 20px; top: 5px;">
        <button @click="next">Finish round</button>
      </div>
    </div>
  </div>
</template>

<script>
  import WorldMap from './WorldMap'
  import jquery from 'jquery'
  export default {
    components: { WorldMap },
    data () {
      return {
        game: new this.$risk.Game(),
        data: {
          hover: '',
          armiesHover: false
        }
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
      let scope = this
      jquery('.armies').on('mouseover', function (event) {
        scope.data.armiesHover = true
        scope.data.hover = jquery(this).attr('name')
      })
      jquery('.armies').on('mouseout', function (event) {
        scope.data.armiesHover = false
      })
      for (let i = 0; i < 6; i++) {
        let player = new this.$risk.Player('Player ' + (i + 1), (360 / 6) * i)
        this.game.players.push(player)
      }
      this.autoSelectCountries()
      this.game.players[this.game.currentPlayer].place = this.calculateNewArmies()
    },
    methods: {
      next () {
        if (this.game.currentPlayer < (this.game.players.length - 1)) {
          this.game.currentPlayer++
        } else {
          this.game.currentPlayer = 0
          this.game.round++
        }
        this.game.players[this.game.currentPlayer].place = this.calculateNewArmies()
      },
      calculateNewArmies () {
        let place = 8
        if (!this.game.round === 0) {
          place = 3
          // @todo - add more armies based on countries, continents and cards
        }
        return place
      },
      autoSelectCountries () {
        let countries = []
        this.game.map.continents.forEach(continent => {
          continent.countries.forEach(country => {
            countries.push(country)
          })
        })
        countries = this.shuffleArray(countries)
        let players = this.shuffleArray(this.game.players)
        let i = 0
        countries.forEach(country => {
          country.player = this.game.players[i]
          i++
          if (i === players.length) {
            i = 0
          }
        })
      },
      shuffleArray (array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1))
          let temp = array[i]
          array[i] = array[j]
          array[j] = temp
        }
        return array
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
