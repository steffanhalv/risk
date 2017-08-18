<template>
  <div
    class="country-container"
    style="position: absolute; pointer-events: none"
    :style="{ top: country.top + 'px', left: country.left + 'px'}">
    <div
      @click="addArmy"
      class="armies"
      style="pointer-events: auto"
      :style="{ top: 'calc(49% + ' + country.topArmies + 'px)', left: 'calc(49% + ' + country.leftArmies + 'px)'}">
      {{country.armies}}
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
    props: ['country', 'player'],
    data () {
      return {
        image: require('../assets/countries/' + this.country.image + '.png'),
        zIndex: this.country.image.length + Math.floor((Math.random() * 100) + 1)
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
        if (this.player.place > 0) {
          this.player.place--
          this.country.armies++
        }
      },
      hover () {
        let ctx = document.createElement('canvas').getContext('2d')
        let target = jquery('#' + this.country.image)
        jquery('body').bind('mousemove', function (event) {
          let zoom = jquery('#scale-me').css('zoom')
          // Get click coordinates
          let offsetT = jquery(target).offset().top - jquery(window).scrollTop()
          let offsetL = jquery(target).offset().left - jquery(window).scrollLeft()
          let x = event.pageX - (offsetL * zoom)
          let y = event.pageY - (offsetT * zoom)
          let w = (ctx.canvas.width = target.width()) * zoom
          let h = (ctx.canvas.height = target.height()) * zoom
          let alpha

          // Draw image to canvas
          // and read Alpha channel value
          ctx.drawImage(target[0], 0, 0, w, h)
          alpha = ctx.getImageData(x, y, 1, 1).data[3] // [0]R [1]G [2]B [3]A

          // If pixel is transparent,
          // retrieve the element underneath and trigger it's click event
          if (alpha === 0) {
            target.removeClass('hover')
          } else {
            jquery('.country').removeClass('hover')
            target.addClass('hover')
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
    opacity: .7;
    pointer-events: none;
  }
  .country.hover, .armies:hover ~ .country {
    opacity: .2;
    pointer-events: auto;
  }
  .armies {
    cursor: pointer;
    color: #fff;
    font-size: 2.7em;
    position: absolute;
    background: rgba(103, 137, 217, 0.73);
    border-radius: 10%;
    padding: .1em .5em .2em;
    z-index: 1000;
    text-shadow: 0.1em 0.1em #000;
    font-family: monospace;
    font-weight: bold;
  }
</style>
