<template>
  <div style="position: absolute;" :style="{ top: top + 'px', left: left + 'px'}">
    <img :style="{ zIndex: zIndex }" :id="country" :src="image" class="country">
    <div class="armies" :style="{ top: 'calc(49% + ' + topArmies + 'px)', left: 'calc(49% + ' + leftArmies + 'px)'}">
      {{armies}}
    </div>
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
    },
    methods: {
      hover () {
        let ctx = document.createElement('canvas').getContext('2d')
        let target = jquery('#' + this.country)
        jquery('body').bind('mousemove', function (event) {
          let zoom = jquery('#scale-me').css('zoom')
          // Get click coordinates
          let x = event.pageX - (target.offset().left * zoom)
          let y = event.pageY - (target.offset().top * zoom)
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
  .country {
    cursor: pointer;
    opacity: .5;
    filter: drop-shadow(3px 3px 0 #fff) drop-shadow(-1px -1px 0 #fff);
  }
  .country.hover {
    opacity: 0;
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
    font-weight: bold;
  }
</style>
