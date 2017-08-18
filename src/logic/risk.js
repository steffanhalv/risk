import Game from './game'
import Player from './player'
import Card from './card'
import Client from './client'

export default {
  install: function (Vue) {
    Vue.prototype.$risk = {
      Game: Game,
      Player: Player,
      Card: Card,
      client: new Client()
    }
  }
}
