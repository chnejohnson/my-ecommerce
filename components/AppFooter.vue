<template lang="pug">
  footer
    section.callout
      h2.banner-title "男人必備，探索更多"
    section
      .info
        .link
          .title 購買
          a 找靈感
          a 下載 app
          a 商品分類
        .link
          .title 幫助
          a 問與答
          a 服務條款
          a 訊息公告
        .link
          .title 關於
          a 關於我們
          a 媒體報導
          a 工作機會
      .mark
        h2 Pinkoi
        div 2019 Pinkoi. All Rights Reserved.
  
</template>

<style lang="scss">
@import '~/assets/css/mixin.scss';
footer {
  background: #f7f7f8;
  color: #39393e;
}

.callout {
  width: 100%;
  height: 200px;
  background: url('/footer.jpeg') center center no-repeat;
  background-size: cover;
  background-color: rgb(100, 100, 100);
  background-blend-mode: multiply;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    font-size: 2em;
    text-align: center;
    padding: 0 30px;
    color: #fff;
    font-weight: 200;
    @include media($mobile) {
      font-size: 1.5em;
    }
  }
}

.info {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  padding-bottom: 50px;
  margin-top: 60px;
}

.link {
  border-top: 1px solid gray;
  width: 250px;
  padding: 0 10px;
  margin: 10px;
  .title {
    font-size: 20px;
    margin: 20px 0 10px;
  }
  a {
    display: block;
    line-height: 30px;
  }
}
.mark {
  margin: 0 auto;
  width: 90%;
  border-top: 1px solid gray;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  h2 {
    margin: 0;
  }
}
</style>
