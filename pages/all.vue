<template lang="pug">
  div
    app-store-grid(:dat="$store.state.products.products")
</template>

<script>
import AppStoreGrid from '~/components/AppStoreGrid.vue'

export default {
  components: {
    AppStoreGrid
  }
}
</script>
