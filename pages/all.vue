<template lang="pug">
  div
    app-store-grid(:dat="storedata")
</template>

<script>
import { mapState } from 'vuex'
import AppStoreGrid from '~/components/AppStoreGrid.vue'

export default {
  components: {
    AppStoreGrid
  },
  computed: {
    ...mapState(['storedata'])
  }
}
</script>
