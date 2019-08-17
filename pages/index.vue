<template lang="pug">
  div
    h1 {{teaser.headline}}
    p.content {{teaser.content}}
    button(@click="persist") persist
</template>

<script>
export default {
  components: {},
  data() {
    return {
      test: 'hello'
    }
  },
  async asyncData(context) {
    try {
      const res = await context.app.$storyapi.get('cdn/stories/home', {
        version: process.env.NODE_ENV === 'production' ? 'published' : 'draft'
      })
      return {
        teaser: res.data.story.content.body[0],
        grid: res.data.story.content.body[1]
      }
    } catch (e) {
      throw new Error(e.message)
    }
  },
  methods: {
    persist() {
      localStorage.test = this.test
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  white-space: pre-line;
}
</style>
