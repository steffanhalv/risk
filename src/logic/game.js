import OldWorldMap from '../maps/oldWorldMap'

export default class Game {
  constructor () {
    this.started = false
    this.paused = false
    this.ended = false
    this.timeout = 60000
    this.gamestart = new Date()
    this.players = []
    this.currentPlayer = 0
    this.round = 1
    this.map = new OldWorldMap()
  }
}
