<template lang="pug">
  .account
    .avatar
      img(:src="$store.state.user.avatar" )
      label 上傳
        input(type="file" @change="onFileChange")
    .profile
      h3 個人資料
      p 名稱： {{profile.name}}
      p Email：{{profile.email}}
      p 建立日期： {{profile.createdAt}}
      p 更新日期：{{profile.updatedAt}}
     
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'dashboard',
  computed: {
    ...mapGetters({ profile: 'user/profile' })
  },
  // validate({ store }) {
  //   if (!store.state.auth.isLogin) {
  //     return false
  //   }
  // },
  mounted() {
    if (!this.$store.state.user.profile) {
      this.$store.dispatch('user/getProfile')
    }
  },
  methods: {
    onFileChange(e) {
      const files = e.target.files
      const bodyformData = new FormData()
      bodyformData.append('avatar', files[0])
      this.$store.dispatch('user/uploadAvatar', bodyformData)
    }
  }
}
</script>

<style lang="scss" scoped>
.account {
  display: flex;
  padding: 10px;
  border: solid 1px gray;
  border-radius: 10px;
}
.avatar {
  margin-right: 20px;
  img {
    display: block;
  }
  label {
    display: inline-block;
    padding: 10px;
    border: solid 1px gray;
    border-radius: 10px;
    margin-top: 10px;
    &:hover {
      cursor: pointer;
      color: white;
      background: rgba(128, 128, 128, 0.74);
    }
  }
  input {
    display: none;
    width: 100px;
  }
}
</style>
