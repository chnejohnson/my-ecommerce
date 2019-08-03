<template lang="pug">
  header
    h1 瘋狂購物城
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
      position: relative;
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
  position: absolute;
  background: black;
  border-radius: 1000px;
  color: white;
  font-size: 10px;
  padding: 3px 10px;
  text-align: center;
  top: -18px;
  right: 5px;
  font-weight: bold;
}
</style>
