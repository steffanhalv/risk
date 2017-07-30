export default class Game {

  constructor (continent, name, neighbours = []) {

    this.started = false
    this.paused = false
    this.ended = false
    this.timeout = 60000
    this.gametime = 0
    this.players = []
    this.currentPlayer = 0

  }

}