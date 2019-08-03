<template lang="pug">
  div
    section.item-contain
      section.img
        img(:src="`/products/${product.img}`")
      section.product-info
        h1 {{product.name}}
        h4.price {{product.price | dollar}}
        p {{product.description}}
        p.quantity
          button.update-num(@click="quantity > 0 ? quantity-- : quantity = 0") -
          input(type="number" v-model="quantity")
          button.update-num(@click="quantity++") +
        p
          button(@click="cartAdd") 加入購物車
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      id: this.$route.params.id,
      quantity: 1,
      tempcart: []
    }
  },
  computed: {
    ...mapState(['storedata']),
    product() {
      return this.storedata.find((el) => el.id === this.id)
    }
  },
  methods: {
    cartAdd() {
      const item = this.product
      item.quantity = this.quantity
      this.tempcart.push(item)
      this.$store.commit('addToCart', item)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/mixin.scss';
.item-contain {
  width: 0 auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.item-contain section.img {
  @include flex-center;
}

.update-num {
  background: black;
  border-color: black;
  color: white;
  font-size: 20px;
  width: 45px;
}

.quantity {
  display: flex;
}
</style>
