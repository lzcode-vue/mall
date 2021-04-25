<template>
  <div id="user-info">
    <a href="#" class="clear-fix">
      <slot name="user-icon">
        <svg class="privateImage-svg left">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default"></use>
        </svg>
      </slot>
      <div class="login-info left">
        <slot class="user-nickname">
          <div>登录/注册</div>
        </slot>
        <div class="phone">
          <span>
            <svg data-v-735ff1be="" fill="#fff" class="icon-mobile"><use data-v-735ff1be="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile"></use></svg>
          </span>
          <slot name="user-phone">暂无绑定手机号</slot>
        </div>
      </div>
      <svg data-v-735ff1be="" fill="#fff" class="arrow-svg right"><use data-v-735ff1be="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#arrow-right"></use></svg>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'UserInfo'
  }
</script>

<style scoped>
  #user-info{
    background-color: var(--color-tint);
    padding: 15px;
    margin-top: -5px;
  }
  #user-info .privateImage-svg{
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 30px;
  }
  .left{
    float: left;
  }
  #user-info .arrow-svg{
    width: 11px;
    height: 22px;
    background-color: #fff;
    margin-top: 18px;
  }
  #user-info .login-info{
    color: #fff;
    margin: 10px 0 0 10px;
    white-space: nowrap;
  }
  #user-info .login-info .phone{
    margin-top: 5px;
    font-size: 13px;
    margin-left: 15px;
    font-weight: 300;
    position: relative;
  }
  #user-info .login-info .phone .icon-mobile{
    width: 12px;
    height: 18px;
    background-color: #fff;
    position: absolute;
    left: -15px;
    top: 0;
  }
</style>