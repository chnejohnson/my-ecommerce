<template lang="pug">
  header
    h1 Skyline Ivy
    nav
      ul
        li
          nuxt-link(to="/") Home
        li
          nuxt-link(to="/all") All
        li
          .cart(v-if="cartCount > 0") {{cartCount}}
          nuxt-link(to="/cart") Cart
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['cartCount'])
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px 0;
}

nav {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80vw;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;

  ul {
    padding-left: 0;
    li {
      display: inline;
      text-transform: uppercase;
      font-size: 13px;
      padding: 0 20px;
      a {
        color: black;
        &:hover {
          color: #c14103;
        }
      }
    }
  }
}

.cart {
  background: black;
  border-radius: 1000px;
  color: white;
  font-size: 10px;
  padding: 3px;
  text-align: center;
}
</style>
