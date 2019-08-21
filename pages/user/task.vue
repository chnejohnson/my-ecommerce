<template lang="pug">
  .task
    h2 下次再買清單
    ul
      li(v-for="task in buyList" :key="task._id")
        img(:src="productImg(task.description)")
        span 商品：{{task.description}}
        span 加入於：{{task.createdAt}}
        .right 
          button(@click="deleteTask(task._id)") 刪除
        
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'dashboard',
  computed: {
    ...mapGetters({ buyList: 'task/buyList' })
  },
  async asyncData({ store, app }) {
    await store.dispatch('products/getStoryblok', app)
  },
  mounted() {
    this.$store.dispatch('task/getUserTasks')
  },
  methods: {
    async deleteTask(taskId) {
      await this.$store.dispatch('task/deleteTask', taskId)
      await this.$store.dispatch('task/getUserTasks')
    },
    productImg(name) {
      const target = this.$store.state.products.products.filter((product) => {
        console.log(name)
        return product.name === name
      })
      console.log(target)
      return target[0].img
    }
  }
}
</script>

<style lang="scss" scoped>
.task {
  height: 100%;
}

.task ul {
  margin: 10px 0;
  padding: 0;
  li {
    display: flex;
    border: solid 1px black;
    margin-top: 0 - 1px;
    align-items: center;
    img {
      width: 100px;
    }
    span {
      margin-left: 20px;
    }
    .right {
      flex: 1;
      button {
        float: right;
        margin: 10px;
      }
    }
  }
}
</style>
