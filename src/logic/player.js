export default class Player {
  constructor (name, hue) {
    this.name = name
    this.hue = hue // Color hue 0 - 360 degree
    this.locale = ''
    this.cards = []
    this.place = 0
  }
}
