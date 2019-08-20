<template lang="pug">
  div
    app-store-grid(:dat="$store.state.products.products")
</template>

<script>
import AppStoreGrid from '~/components/AppStoreGrid.vue'

export default {
  components: {
    AppStoreGrid
  },
  async asyncData({ store, app }) {
    await store.dispatch('products/getStoryblok', app)
  }
}
</script>
