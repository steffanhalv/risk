export default class Country {
  constructor (
    name,
    image,
    top,
    left,
    topArmies,
    leftArmies,
    player = 0
  ) {
    this.name = name
    this.armies = 1
    this.player = 0
    this.neighbours = []

    this.image = image

    // Position
    this.top = top
    this.left = left
    this.topArmies = topArmies
    this.leftArmies = leftArmies
  }
}
