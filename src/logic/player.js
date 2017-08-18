export default class Player {
  constructor (name = 'Player', hue = 0) {
    this.name = name
    this.hue = hue // Color hue 0 - 360 degree
    this.locale = ''
    this.cards = []
    this.place = 0
  }
}
