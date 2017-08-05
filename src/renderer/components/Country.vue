<template>
  <div style="position: absolute;" :style="{ top: top + 'px', left: left + 'px'}">
    <img :src="image" class="country">
    <div class="armies">
      {{armies}}
    </div>
  </div>
</template>

<script>
  export default {
    props: ['country', 'top', 'left', 'armies', 'player'],
    data () {
      return {
        image: require('../assets/countries/' + this.country + '.png')
      }
    }
  }
</script>

<style>
  .country {
    z-index: 1;
  }
  .country:hover {
    opacity: .7;
  }
</style>
