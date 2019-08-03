<template lang="pug">
  div
    app-nav
    main
      nuxt
    app-footer
</template>

<script>
import AppNav from '~/components/AppNav'
import AppFooter from '~/components/AppFooter'

export default {
  components: {
    AppNav,
    AppFooter
  }
}
</script>

<style lang="scss" scoped>
main {
  width: 90vw;
  margin: 0 auto;
}
</style>
