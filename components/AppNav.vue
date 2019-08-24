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
        li
          a(@click="$emit('modal')" v-if="!$store.state.auth.isLogin") 登入(註冊)
          a(v-else @click="logout") 登出
        li(v-if="$store.state.auth.isLogin")
          nuxt-link(to="/user/account").no-underline 帳戶
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['cartCount'])
  },
  methods: {
    async logout() {
      await this.$store.dispatch('auth/logout')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/mixin.scss';

header {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px 0;
}

nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 80vw;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
}

ul {
  padding-left: 0;
  @include media($mobile) {
    width: 100%;
  }
  li {
    display: inline;
    text-transform: uppercase;
    font-size: 16px;
    padding: 0 20px;
    position: relative;
    @include media($mobile) {
      display: block;
      padding: 10px 0;
      border-bottom: solid 1px gray;
      text-align: center;
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
