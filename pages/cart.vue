<template lang="pug">
  div
    app-cart-steps
    hr
    h1(style="text-align: center") 你的購物車

    section(v-if="cartUIStatus === 'idle'")
      app-cart-display   
    section(v-else-if="cartUIStatus === 'loading'")
      app-loader
    section(v-else-if="cartUIStatus === 'success'")
      h2 Success
      p Thank you for purchase.
    section(v-else-if="cartUIStatus === 'failure'")
      p Oops, something went wrong.

</template>

<script>
import { mapState } from 'vuex'
import AppLoader from '~/components/AppLoader'
import AppCartDisplay from '~/components/AppCartDisplay'
import AppCartSteps from '~/components/AppCartSteps'

export default {
  components: {
    AppCartDisplay,
    AppCartSteps,
    AppLoader
  },
  computed: {
    ...mapState(['cartUIStatus'])
  }
}
</script>
