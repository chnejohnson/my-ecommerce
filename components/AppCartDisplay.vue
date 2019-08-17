<template lang="pug">
  div
    section(v-if="cartCount > 0")
      table
        colgroup
          col(style="width: 40%")
          col(style="width: 20%")
          col(style="width: 20%")
          col(style="width: 20%")
        tbody
          tr
            th 產品
            th 價格
            th 數量
            th 總共
          tr(v-for="item in cart" :key="item.id")
            td.product-info
              img(:src="item.img" :alt="item.name")
              h3 {{item.name}}
            td
              h4 {{item.price | dollar}}
            td 
              strong {{item.quantity}}
            td {{item.quantity * item.price | dollar}}
      .payment
        p Total:  
          span {{cartTotal}}
    section(v-else style="text-align: center")
      p 你的購物車是空的，趕快去買！
      nuxt-link(to="/all") 購物趣
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  computed: {
    ...mapGetters(['cartCount', 'cartTotal']),
    ...mapState(['cart'])
  }
}
</script>

<style lang="scss" scoped>
table {
  width: 80%;
  margin: 10px auto;
}

tr {
  text-align: center;
}

td,
th {
  border-bottom: 1px solid #ccc;
}

td.product-info {
  display: flex;
  align-items: center;
  img {
    float: left;
    left: 20px;
    width: 100px;
  }
}
.payment {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
</style>
