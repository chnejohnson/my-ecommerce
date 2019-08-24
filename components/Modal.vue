<template lang="pug">
  div.modal
    .panel
      .toggle(@click="isLogin = !isLogin") {{isLogin? '註冊': '登入'}}
      login(v-if="isLogin" @close-modal="$emit('close-modal')")
      signup(v-if='!isLogin' @close-modal="$emit('close-modal')")
</template>

<script>
import Login from '~/components/Login'
import Signup from '~/components/Signup'

export default {
  components: {
    Login,
    Signup
  },
  data() {
    return {
      isLogin: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/mixin.scss';

.modal {
  @include flex-center;
  @include size(100%);
  position: absolute;
  background-color: rgba(0, 0, 0, 0.356);
  z-index: 1;
  overflow: hidden;
  top: 0;
  left: 0;
}

.panel {
  @include size(40%, auto);
  @include shadow;
  background: white;
  border-radius: 10px;
  position: relative;
  z-index: 2;
  @include media($tablet) {
    width: 400px;
  }
  @include media($mobile) {
    margin: 0 10px;
  }
}

.toggle {
  color: rgba(218, 98, 29, 0.788);
  font-size: 20px;
  float: right;
  margin-top: 20px;
  margin-right: 30px;
  &:hover {
    color: rgb(218, 98, 29);
    cursor: pointer;
  }
}
</style>
