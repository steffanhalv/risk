<template>
  <div
    class="country-container"
    :class="{ current: current.name === player.name }"
    style="position: absolute; pointer-events: none"
    :style="{ top: country.top + 'px', left: country.left + 'px'}">
    <div
      @click="addArmy"
      class="armies"
      :name="name"
      style="pointer-events: auto"
      :style="{
        top: 'calc(49% + ' + country.topArmies + 'px)',
        left: 'calc(49% + ' + country.leftArmies + 'px)',
        filter: 'hue-rotate(' + (player.hue + 200) + 'deg)'
      }">
      {{country.armies}}
      <div class="name">{{country.name}}</div>
    </div>
    <img
      @click="tryAddArmy"
      :style="{
        zIndex: zIndex,
        filter: 'hue-rotate(' + player.hue + 'deg) drop-shadow(2px 2px 0 #ddd) drop-shadow(-2px -2px 0 #ddd)'
      }"
      :id="country.image"
      :src="image"
      class="country">
  </div>
</template>

<script>
  import jquery from 'jquery'
  export default {
    props: ['country', 'player', 'current', 'data'],
    data () {
      return {
        image: require('../assets/countries/' + this.country.image + '.png'),
        zIndex: this.country.image.length + Math.floor((Math.random() * 100) + 1),
        name: this.country.continent + ' - ' + this.country.name
      }
    },
    mounted () {
      let scope = this
      setTimeout(function () {
        scope.hover()
      }, 500)
    },
    methods: {
      tryAddArmy () {
        if (jquery('#' + this.country.image).hasClass('hover')) {
          this.addArmy()
        }
      },
      addArmy () {
        if (this.player.place > 0 && this.current.name === this.player.name) {
          this.player.place--
          this.country.armies++
        }
      },
      hover () {
        let ctx = document.createElement('canvas').getContext('2d')
        let target = jquery('#' + this.country.image)
        let scope = this
        jquery('body').bind('mousemove', function (event) {
          let zoom = jquery('#scale-me').css('zoom')
          let offsetT = jquery(target).offset().top - jquery(window).scrollTop()
          let offsetL = jquery(target).offset().left - jquery(window).scrollLeft()
          let x = event.pageX - (offsetL * zoom)
          let y = event.pageY - (offsetT * zoom)
          let w = (ctx.canvas.width = target.width()) * zoom
          let h = (ctx.canvas.height = target.height()) * zoom
          let alpha
          ctx.drawImage(target[0], 0, 0, w, h)
          alpha = ctx.getImageData(x, y, 1, 1).data[3] // [0]R [1]G [2]B [3]A
          if (alpha === 0) {
            target.removeClass('hover')
            if (
              scope.data.hover === scope.name &&
              !scope.data.armiesHover
            ) {
              scope.data.hover = ''
            }
          } else {
            jquery('.country').removeClass('hover')
            target.addClass('hover')
            scope.data.hover = scope.name
          }
        })
      }
    }
  }
</script>

<style>
  svg path {
    fill: yellow;
  }
  .country.selected {
    filter: hue-rotate(100deg) drop-shadow(4px 4px 0 red) brightness(5) drop-shadow(-4px -4px 0 red);
  }
  .country {
    cursor: pointer;
    opacity: .8;
    pointer-events: none;
  }
  .country.hover, .armies:hover ~ .country {
    opacity: 1;
    pointer-events: auto;
  }
  .current .country.hover, .current .armies:hover ~ .country {
    opacity: 1;
    pointer-events: auto;
  }
  .name {
    display: none;
  }
  .country.hover .name, .armies:hover ~ .country .name {
    display: inline-block;
  }
  .armies {
    cursor: pointer;
    color: #fff;
    font-size: 2.7em;
    position: absolute;
    background: rgba(103, 137, 217, .9);
    border-radius: 10%;
    padding: .1em .5em .2em;
    z-index: 1000;
    text-shadow: 0.1em 0.1em #000;
    font-family: monospace;
    font-weight: bold;
  }
</style>
