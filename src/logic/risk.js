export default {
  install: function (Vue) {
    Vue.prototype.$risk = () => {
      console.log('works!')
    }
  }
}
