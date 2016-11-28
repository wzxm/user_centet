<template>
  <div class="birthday">
    <div class="header">
      <img src="../images/privilege_birthday_big@2x.png" class="icon">
      <div class="center">
        <span class="title">生日礼包</span>
        <br>
        <span class="text">礼包简介，礼包简介</span>
      </div>
      <div class="btn">
        <a href="javascript:;" class="btn-a">领取</a>
        <span class="text">2天后过期</span>
      </div>
    </div>
    <div class="content">
      <div class="tequan">
        <span class="title">特权说明</span>
        <p class="text">生日礼包是PPmoney对平台用户生日的感恩回馈。凡是用户生日当月， PPmoney会送出一个生日礼包，里面包含神秘礼券哦。</p>
      </div>
      <div class="huode">
        <span class="title">如何获得</span>
        <p class="text">
          1. 适用于PPmoney所有会员；
          2. 需完成PPmoney平台的 实名认证，用户生日以实名认证的 身份证号码为准；
          3. 身份证 生日当月均可领取，每个用户每年限领一次，过期未领视为主动放弃资格。
        </p>
      </div>
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
    position: relative;
    height: 100px;
    background-color: #ffffff;
    padding: 0 12px;
  }
  .birthday .header .icon {
    width: 52px;
    height: 52px;
    margin-top: 24px;
    float: left;
  }
  .birthday .header .center {
    font-size: 14px;
    color: #4E616D;
    padding: 28px 0 0 15px;
    line-height: 25px;
    float: left;
  }
  .birthday .center .title {
    font-size: 18px;
    color: #103d52;
    font-weight: bold;
  }
  .birthday .btn {
    text-align: center;
    float: right;
    padding: 27px 0 0 0;
    line-height: 25px;
  }
  .birthday .btn a {
    font-size: 14px;
    padding: 0 20px;
    color: #1578D8;
    border: 1px #1578D8 solid;
    display: block;
  }
  .birthday .btn .text {
    font-size: 12px;
    color: #a2acb2;
  }


  .birthday .content {
    margin-top: 10px;
    background-color: #ffffff;
    height: 200px;
    color: #A2ACB2;
    font-size: 14px;
    padding: 0 12px;
    font-family: PingFangSC-Regular;
  }
  .tequan {
    margin-bottom: 25px;
  }
  .birthday .content .title {
    color: #103D52;
    font-size: 16px;
    font-weight: 600;
    display: block;
    line-height: 50px;
    border-bottom: 1px solid #A2ACB2;
  }
</style>