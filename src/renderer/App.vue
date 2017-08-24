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
  :not(input):not(textarea),
  :not(input):not(textarea)::after,
  :not(input):not(textarea)::before {
    -webkit-user-select: none;
    user-select: none;
    cursor: default;
  }
  input, button, textarea, :focus {
    // outline: none; // You should add some other style for :focus to help UX/a11y
  }
  span {
    -webkit-user-select: text!important;
    user-select: text!important;
    cursor: auto!important;
  }
</style>
