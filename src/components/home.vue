<template>
  <div class="home">
    <HreaderBtn></HreaderBtn>
    <keep-alive>
      <router-view class="view"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import HreaderBtn from './headerbtn'
import { mapState, mapGetters, mapActions } from 'vuex'
// 导入路由
// import router from '../routers'

export default {
  // init 组件实例刚被创建，组件属性计算之前，如 data 等
  beforeCreate () {
    // router.push({ path: '/birthday' })// 跳转到home组件
  },
  components: {
    HreaderBtn
  },
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
  .home {
    /*  */
  }
</style>