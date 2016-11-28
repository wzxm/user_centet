<template>
  <div id="headerbtn" class="headerbtn">
    <router-link to="/birthday" active-class="active" class="navbar-brand">生日礼包</router-link>
    <router-link to="/festival" active-class="active" class="navbar-brand">节日礼包</router-link>
    <router-link to="/welcome" active-class="active" class="navbar-brand">欢迎礼包</router-link>
    <router-link to="/counselor" active-class="active" class="navbar-brand">理财顾问</router-link>
    <router-link to="/exclusive" active-class="active" class="navbar-brand">专属项目</router-link>
    <router-link to="/plus" active-class="active" class="navbar-brand">惠PLUS</router-link>
    <router-link to="/anniversary" active-class="active" class="navbar-brand">周年感恩礼</router-link>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      title: 'vue + webpack 打包项目',
      msg: '作者：王哲'
    }
  },
  computed: {
    ...mapState({
    }),
    ...mapGetters([
      // 获取的参数
      'pageState'
    ])
  },
  methods: {
    ...mapActions([
      // 'editNote'
    ])
  },
  watch: {
    '$route' (to, from) {
    }
  }
}
</script>

<style type="text/css">
  .headerbtn {
    padding: 10px;
  }
</style>