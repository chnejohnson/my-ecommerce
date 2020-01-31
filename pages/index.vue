<template lang="pug">
  div
    .banner
      .img
        h1.banner-title Cetacea for Man
    h1 {{teaser.headline}}
    p.content {{teaser.content}}
   
</template>

<script>
export default {
  components: {},
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
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/mixin.scss';
.banner {
  height: 400px;
  .img {
    left: 0;
    position: absolute;
    background: url('../static/cover.jpeg') no-repeat center;
    background-size: cover;
    width: 100vw;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.img > h1 {
  color: white;
  line-height: 100px;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  font-size: 5vw;
  @include media($tablet) {
    line-height: 60px;
  }
  @include media($mobile) {
    font-size: 10vw;
  }
}

.content {
  white-space: pre-line;
}
</style>
