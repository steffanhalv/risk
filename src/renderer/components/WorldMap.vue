<template>
  <div id="get-vw" style="position: absolute; height: 100%; overflow: hidden; text-align: center;">
    <div style="position: relative;">
      <div id="scale-me" style="display: inline-block; transform-origin: 0 0;">
        <img
          id="get-width"
          style="margin: 26px; opacity: .5; z-index: -1"
          src="~@/assets/worldmap.png">
        <div style="position: absolute; width: 100%; height: 100%; top: 0;">
          <div>
            <country
              v-for="country in countries"
              :key="country.name"
              :country="country.image"
              :top="country.top"
              :left="country.left"
              :armies="country.armies"
              :topArmies="country.topArmies"
              :leftArmies="country.leftArmies"
              :player="country.player"
            ></country>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Country from './Country'
  import jquery from 'jquery'

  export default {
    components: {Country},
    props: ['continents'],
    data () {
      return {
        diff: window.outerHeight / window.outerWidth
      }
    },
    computed: {
      countries () {
        let countries = []
        this.continents.forEach(continent => {
          countries = countries.concat(continent.countries)
        })
        return countries
      }
    },
    mounted () {
      this.getWindowWidth()
    },
    created () {
      let scope = this
      jquery(window).resize(function () {
        let diffNew = window.outerHeight / window.outerWidth
        if (scope.diff !== diffNew) {
          scope.getWindowWidth()
          scope.diff = diffNew
        }
      })
      this.getWindowWidth()
    },
    methods: {
      getWindowWidth () {
        setTimeout(function () {
          jquery('#scale-me').css({
            zoom: (jquery('#get-vw').height() / jquery('#get-width').height()) + 0.07
          })
          jquery('#get-vw').css({
            marginTop: '-150px',
            marginLeft: ((jquery('#board').width() - jquery('#get-vw').width()) / 2) + 'px'
          })
        }, 500)
      }
    }
  }
</script>

<style scoped>
</style>
