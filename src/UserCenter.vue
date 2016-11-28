<!-- 模板部分 -->
<template>
  <div id="user">
    <home></home>
  </div>
</template>


<!-- javascript 部分 -->
<script>
// 导入footer组件
import Home from './components/home'

/**
 * default导出，使用关键字default，可将对象标注为default对象导出。default关键字在每一个模块中只能使用一次。它既可以用于内联导出，也可以用于一组对象导出声明中。
 */
export default {
  components: {
    Home
  },
  data () {
    return {
      transitionName: ''
    }
  },
  /**
   * [watch 增加路由监听，可以获得来源和去向页面]
   * @type {Object}
   */
  watch: {
    '$route' (to, from) {
    }
  }
}
</script>

<!-- css 样式部分 -->
<style>
#user {
  background-color: #EFEEF4;
}
a {
  text-decoration: none;
}
body {
  margin: 0;
  padding: 0;
}
</style>