<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'risk'
  }
</script>

<style>
  /* CSS */
  body {
    display: inline-block;
    position: absolute;
    margin: 0;
    width: 100%;
    height: 100%;
    background-image: url(~@/assets/bg.jpg);
    background-size: cover;
    overflow: hidden;
  }
  #app {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
