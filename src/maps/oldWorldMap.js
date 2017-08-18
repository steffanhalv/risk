import Country from '../logic/country'
import Continent from '../logic/continent'
import Map from '../logic/map'

export default class OldWorldMap extends Map {
  constructor () {
    super('Old World Map')

    this.name = 'World Map'

    // Countries
    let afghanistan =
      new Country(
        'Afghanistan',
        'afghanistan',
        851,
        1849,
        -30,
        -50
      )

    let alaska =
      new Country(
        'Alaska',
        'alaska',
        698,
        238,
        -80,
        0
      )

    let alberta =
      new Country(
        'Alberta',
        'alberta',
        781,
        450,
        -20,
        0
      )

    let argentina =
      new Country(
        'Argentina',
        'argentina',
        1497,
        922,
        -50,
        -50
      )

    let brazile =
      new Country(
        'Brazile',
        'brazile',
        1326,
        1036,
        -50,
        -40
      )

    let centralEurope =
      new Country(
        'Central Europe',
        'central-europe',
        844,
        1520,
        -50,
        -20
      )

    let china =
      new Country(
        'China',
        'china',
        908,
        2068,
        -50,
        -30
      )

    let eastAfrica =
      new Country(
        'East Africa',
        'east-africa',
        1166,
        1616,
        -50,
        -30
      )

    let eastAustralia =
      new Country(
        'East Australia',
        'east-australia',
        1392,
        2399,
        -70,
        -90
      )

    let easternUsa =
      new Country(
        'Eastern Usa',
        'eastern-usa',
        981,
        713,
        -60,
        -60
      )

    let egypt =
      new Country(
        'Egypt',
        'egypt',
        1064,
        1524,
        -50,
        -30
      )

    let greatBritany =
      new Country(
        'Great Britany',
        'great-britany',
        824,
        1412,
        -70,
        -30
      )

    let greenland =
      new Country(
        'Greenland',
        'greenland',
        509,
        725,
        -40,
        100
      )

    let india =
      new Country(
        'India',
        'india',
        988,
        1918,
        -50,
        -20
      )

    let indonesia =
      new Country(
        'Indonesia',
        'indonesia',
        1136,
        2160,
        0,
        0
      )

    let island =
      new Country(
        'Island',
        'island',
        757,
        1314,
        -100,
        10
      )

    let jakutzka =
      new Country(
        'Jakutzka',
        'jakutzka',
        550,
        2135,
        -70,
        -70
      )

    let japan =
      new Country(
        'Japan',
        'japan',
        889,
        2403,
        20,
        50
      )

    let kamchatka =
      new Country(
        'kamchatka',
        'kamchatka',
        621,
        2425,
        -40,
        -120
      )

    let kongo =
      new Country(
        'Kongo',
        'kongo',
        1291,
        1565,
        -10,
        -90
      )

    let madagascar =
      new Country(
        'Madagascar',
        'madagascar',
        1406,
        1800,
        0,
        0
      )

    let mexico =
      new Country(
        'Mexico',
        'mexico',
        1056,
        636,
        -40,
        -120
      )

    let middleEast =
      new Country(
        'Middle East',
        'middle-east',
        1001,
        1675,
        0,
        0
      )

    let mongolia =
      new Country(
        'Mongolia',
        'mongolia',
        820,
        2167,
        -80,
        0
      )

    let newGuinea =
      new Country(
        'New Guinea',
        'new-guinea',
        1320,
        2428,
        -90,
        -40
      )

    let northAfrica =
      new Country(
        'North Africa',
        'north-africa',
        1027,
        1359,
        0,
        0
      )

    let northwestTeritory =
      new Country(
        'Northwest Teritory',
        'northwest-teritory',
        569,
        428,
        0,
        0
      )

    let ontario =
      new Country(
        'Ontario',
        'ontario',
        812,
        709,
        -50,
        -30
      )

    let peru =
      new Country(
        'Peru',
        'peru',
        1318,
        923,
        0,
        -60
      )

    let quebec =
      new Country(
        'Quebec',
        'quebec',
        801,
        865,
        -30,
        -50
      )

    let scandinavia =
      new Country(
        'Scandinavia',
        'scandinavia',
        563,
        1483,
        -50,
        -80
      )

    let siam =
      new Country(
        'Siam',
        'siam',
        1075,
        2132,
        -60,
        -40
      )

    let siberia =
      new Country(
        'Siberia',
        'siberia',
        614,
        2011,
        -100,
        -30
      )

    let southAfrica =
      new Country(
        'South Africa',
        'south-africa',
        1357,
        1573,
        0,
        -50
      )

    let southEurope =
      new Country(
        'South Europe',
        'south-europe',
        908,
        1510,
        -40,
        0
      )

    let ucraine =
      new Country(
        'Ucraine',
        'ucraine',
        540,
        1650,
        40,
        -50
      )

    let ural =
      new Country(
        'Ural',
        'ural',
        668,
        1900,
        -60,
        -60
      )

    let utah =
      new Country(
        'Utah',
        'utah',
        742,
        2145,
        -40,
        -30
      )

    let venezuela =
      new Country(
        'Venezuela',
        'venezuela',
        1204,
        904,
        -80,
        -30
      )

    let westAustralia =
      new Country(
        'West Australia',
        'west-australia',
        1398,
        2303,
        -20,
        -40
      )

    let westEurope =
      new Country(
        'West Europe',
        'west-europe',
        910,
        1421,
        -30,
        -120
      )

    let westernUsa =
      new Country(
        'Western USA',
        'western-usa',
        947,
        591,
        -30,
        -80
      )

    // Continents

    this.continents = [
      new Continent(
        'North America',
        [
          alaska,
          northwestTeritory,
          alberta,
          greenland,
          quebec,
          ontario,
          westernUsa,
          easternUsa,
          mexico
        ],
        6
      ),
      new Continent(
        'Asia',
        [
          utah,
          ural,
          afghanistan,
          middleEast,
          india,
          china,
          siam,
          siberia,
          jakutzka,
          kamchatka,
          mongolia,
          japan
        ],
        6
      ),
      new Continent(
        'Africa',
        [
          northAfrica,
          kongo,
          southAfrica,
          madagascar,
          eastAfrica,
          egypt
        ],
        3
      ),
      new Continent(
        'Europe',
        [
          scandinavia,
          island,
          centralEurope,
          southEurope,
          westEurope,
          greatBritany,
          ucraine
        ],
        5
      ),
      new Continent(
        'Australie',
        [
          westAustralia,
          eastAustralia,
          newGuinea,
          indonesia
        ],
        2
      ),
      new Continent(
        'South America',
        [
          venezuela,
          brazile,
          peru,
          argentina
        ],
        2
      )
    ]
  }
}
