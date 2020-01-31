<template lang="pug">
  .dashboard
    .nav
      nuxt-link(to="/").no-underline Cetacea
      a 登出
    .content
      aside.sidebar
        ul
          li
            nuxt-link(to="/user/account") 基本資料
          li
            nuxt-link(to="/user/task") 下次再買清單
      main
        nuxt
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.dashboard {
  max-height: 100vh;
  height: 100vh;
}

.nav {
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  background: rgba(123, 179, 231, 0.945);
}

.content {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-gap: 20px;
  height: 100%;
}

.sidebar {
  padding: 20px;
  background: rgba(245, 188, 82, 0.801);

  ul {
    padding: 0;
    margin: 10px 0;
  }
  li {
    padding: 10px;
    border: solid 1px rgba(139, 139, 139, 0.863);
    margin-top: 0 - 1px;
    &:hover {
      cursor: pointer;
    }
  }
}

main {
  padding: 50px;
}
</style>
