<template lang="pug">
  .storegrid
    transition-group.content(name="items" tag="section")
      .item(v-for="item in filteredPrice" :key="item.id")
        .img-contain
          NuxtLink(:to="`product/${item.id}`")
            img(:src="item.img")
        h3 {{item.name}}
        p {{item.description}}
        h4.price {{item.price | dollar}}  
        div 
          NuxtLink(:to="`product/${item.id}`")
            button 商品資訊
          button(@click="createTask(item)") 加入待購清單 
    aside
      h3 特賣
      p 好康活動只到7/15 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      h3 價格過濾
      p {{priceRange | dollar}} 以下的產品
      input(type="range" v-model="priceRange" :min="min" :max="max" step="1")
      span.min {{min | dollar}}
      span.max {{max | dollar}}
</template>

<script>
export default {
  props: {
    dat: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      priceRange: 200,
      max: 200,
      min: 0
    }
  },
  computed: {
    filteredPrice() {
      return this.dat.filter((el) => {
        return Number(el.price) < this.priceRange
      })
    }
  },
  methods: {
    createTask(item) {
      this.$store.dispatch('task/createTask', {
        description: item.name
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.item {
  max-height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.img-contain {
  max-height: 200px;
  display: flex;
  align-content: center;
  align-items: center;
  overflow: hidden;
  img {
    width: 100%;
  }
}

.max {
  float: right;
}

.items-leave-active {
  transition: opacity 0.2s ease, scale 0.2s ease;
}

.items-move {
  transition: opacity 0.5s ease-out, scale 0.2s ease-out;
}

.items-enter-active {
  transition: opacity 0.5s ease-out, scale 0.5s ease-out;
}

.items-enter,
.items-leave-to {
  opacity: 0;
  transform: scale(0.8);
}
</style>
