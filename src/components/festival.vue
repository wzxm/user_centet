<template>
  <div class="birthday">
    <div class="header">
      <img src="../images/privilege_birthday_big@2x.png" class="icon">
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'vue + webpack 打包项目',
      msg: '作者：王哲'
    }
  },
  watch: {
    '$route' (to, from) {
      // const toDepth = to.path.split('/').length
      // const fromDepth = from.path.split('/').length
      // this.fade = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    }
  }
}
</script>

<style type="text/css">
  .birthday {
    height: 100%;
    background-color: #EFEEF4;
    margin: 20px 0;
  }
  .birthday .header {
    height: 100px;
  }
</style>