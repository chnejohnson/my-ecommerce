<template lang="pug">
  div(v-editable="blok")
    section.item-contain
      section.img
        img(:src="product.img")
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
export default {
  head() {
    return {
      title: this.product.name
    }
  },
  data() {
    return {
      quantity: 1,
      tempcart: []
    }
  },
  async asyncData(context) {
    try {
      const res = await context.app.$storyapi.get(
        `cdn/stories/products/${context.params.id}`,
        {
          version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
        }
      )
      return {
        blok: res.data.story.content,
        product: res.data.story.content
      }
    } catch (e) {
      throw new Error(e.message)
    }
  },
  mounted() {
    this.$storybridge.on('change', () => {
      location.reload(true)
    })
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
