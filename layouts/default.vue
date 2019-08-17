<template lang="pug">
  div.default
    modal(v-if="modalOpen" @close-modal="modalOpen = false")
    app-nav(@modal="modalOpen = !modalOpen")
    main
      nuxt
    app-footer
</template>

<script>
import AppNav from '~/components/AppNav'
import AppFooter from '~/components/AppFooter'
import Modal from '~/components/Modal'

export default {
  components: {
    AppNav,
    AppFooter,
    Modal
  },
  data() {
    return {
      modalOpen: false
    }
  },
  mounted() {
    if (localStorage.token) {
      this.$store.commit('auth/CHANGE_ISLOGIN')
    }
  }
}
</script>

<style lang="scss" scoped>
.default {
  border: 10px solid #ccc;
  min-height: 100vh;
  font-size: 16px;
}

main {
  width: 90vw;
  margin: 0 auto;
}
</style>
