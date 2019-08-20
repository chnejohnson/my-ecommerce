<template lang="pug">
  .account
    .avatar
      img(:src="avatar" )
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
  middleware: 'profile',

  computed: {
    ...mapGetters({ profile: 'user/profile', avatar: 'user/avatar' })
  },

  async mounted() {
    await this.$store.dispatch('user/getProfile')
    await this.$store.dispatch('user/getAvatar', this.profile._id)
  },
  methods: {
    async onFileChange(e) {
      const files = e.target.files
      const bodyformData = new FormData()
      bodyformData.append('avatar', files[0])
      await this.$store.dispatch('user/uploadAvatar', bodyformData)
      await this.$store.dispatch('user/getAvatar', this.profile._id)
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
