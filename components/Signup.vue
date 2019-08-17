<template lang="pug">
  .form
    .title
      i.fa.fa-user-plus
      span 註冊 Sign up
    label   
      i.fa.fa-user
      input(type="text" v-model="name" placeholder="輸入名稱")  
    label   
      i.fa.fa-envelope 
      input(type="text" v-model="email" placeholder="E-mail")
    label  
      i.fa.fa-key
      input(type="password" v-model="password" placeholder="輸入密碼")
    label  
      i.fa.fa-check
      input(type="password" v-model="confirm" placeholder="確認密碼")
    .btn-group
      button(@click.prevent="$emit('close-modal')") 取消
      button(@click.prevent="signup") {{loading}}
    p.error {{errorText}}
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirm: '',
      errorText: '',
      loading: '註冊'
    }
  },
  methods: {
    async signup(el) {
      if (!this.name || !this.email || !this.password || !this.confirm) {
        return (this.errorText = '請填妥不留白')
      } else if (this.password !== this.confirm) {
        return (this.errorText = '密碼確認錯誤')
      }
      this.loading = '等待中...'
      try {
        await this.$store.dispatch('auth/createAccount', {
          name: this.name,
          email: this.email,
          password: this.password
        })
        el.disabled = true
        this.loading = '註冊完成'

        this.$emit('close-modal')
      } catch (e) {
        this.errorText = e.message
        this.password = ''
        this.confirm = ''
        this.loading = '重新註冊'
      }
    }
  }
}
</script>
