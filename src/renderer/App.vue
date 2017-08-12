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
    background-image: url(~@/assets/bg.jpg);
    background-size: 100vw 100vh;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;
    position: absolute;
    margin: 0;
  }
  #app {
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>
