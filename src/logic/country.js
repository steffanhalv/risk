export default class Country {

  constructor (continent, name, neighbours = []) {

    this.continent = continent
    this.name = name
    this.armies = 1
    this.player = ''
    this.neighbours = neighbours

  }

}