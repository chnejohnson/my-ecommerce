<template lang="pug">
  .form
    .title
      i.fa.fa-sign-in
      span 登入 Log in
    label   
      i.fa.fa-envelope 
      input(type="text" v-model="email" placeholder="E-mail")
    label  
      i.fa.fa-key
      input(type="password" v-model="password" placeholder="輸入密碼")
    .btn-group
      button(@click.prevent="$emit('close-modal')") 取消
      button(@click.prevent="login") {{loading}}
    p.error {{errorText}}  
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      errorText: '',
      loading: '登入'
    }
  },
  methods: {
    async login(el) {
      if (!this.email || !this.password) {
        return (this.errorText = '不可以空白')
      }

      try {
        this.loading = '登入中...'
        await this.$store.dispatch('auth/login', {
          email: this.email,
          password: this.password
        })
        el.disabled = true
        this.loading = '成功登入'
        this.$emit('close-modal')
      } catch (e) {
        this.errorText = e.message
        this.password = ''
        this.confirm = ''
        this.loading = '重新登入'
      }
    }
  }
}
</script>
