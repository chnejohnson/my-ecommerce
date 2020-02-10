import Vue from 'vue'

Vue.filter('dollar', function(value) {
  return `NT ${parseFloat(value).toFixed(0)}`
})
