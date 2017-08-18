<template>
  <div class="country-container" style="position: absolute;" :style="{ top: top + 'px', left: left + 'px'}">
    <div class="armies" :style="{ top: 'calc(49% + ' + topArmies + 'px)', left: 'calc(49% + ' + leftArmies + 'px)'}">
      {{armies}}
    </div>
    <img :style="{ zIndex: zIndex }" :id="country" :src="image" class="country">
  </div>
</template>

<script>
  import jquery from 'jquery'
  export default {
    props: ['country', 'top', 'left', 'topArmies', 'leftArmies', 'armies', 'player'],
    data () {
      return {
        image: require('../assets/countries/' + this.country + '.png'),
        zIndex: this.country.length + Math.floor((Math.random() * 100) + 1)
      }
    },
    mounted () {
      let scope = this
      setTimeout(function () {
        scope.hover()
      }, 500)
      jquery('img[src$=".svg"]').each(function () {
        let img = jquery(this)
        let imgURL = img.attr('src')
        let attributes = img.prop('attributes')

        jquery.get(imgURL, function (data) {
          // Get the SVG tag, ignore the rest
          let svg = jquery(data).find('svg')

          // Remove any invalid XML tags
          svg = svg.removeAttr('xmlns:a')

          // Loop through IMG attributes and apply on SVG
          jquery.each(attributes, function () {
            svg.attr(this.name, this.value)
          })

          // Replace IMG with SVG
          img.replaceWith(svg)
        }, 'xml')
      })
    },
    methods: {
      hover () {
        let ctx = document.createElement('canvas').getContext('2d')
        let target = jquery('#' + this.country)
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
    filter: hue-rotate(100deg) drop-shadow(2px 2px 0 #ddd) drop-shadow(-2px -2px 0 #ddd);
  }
  .country.hover, .armies:hover ~ .country {
    opacity: .2;
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
