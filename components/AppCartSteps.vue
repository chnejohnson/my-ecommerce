<template lang="pug">
  section
    .shopping
      h2(:class="{active: cartUIStatus === 'idle' && cartCount === 0}") 01
      h4 Shopping Cart
    .checkout
      h2(:class="{active: cartUIStatus === 'idle' && cartCount > 0}") 02
      h4 Check out
    .order
      h2(:class="{active: cartUIStatus === 'success'}") 03
      h4 Order Complete
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState(['cartUIStatus']),
    ...mapGetters(['cartCount'])
  }
}
</script>

<style lang="scss" scoped>
section {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 100px;
  width: 80%;
  margin: 20px auto;
  text-align: center;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

h2 {
  border-radius: 1000px;
  border: solid 1px #ccc;
  color: #555;
  width: 80px;
  height: 80px;
  padding-top: 25px;
  margin: 0;

  &.active {
    background: #d96528;
    border: 1px solid #d96528;
    color: white;
  }
}
</style>
