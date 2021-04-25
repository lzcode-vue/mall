<template>
  <div id="cart">
    <nav-bar class="nav-bar">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <scroll class="content" ref="scroll">
      <cart-list/>
    </scroll>
    <cart-bottom-bar/>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'

  import CartList from './childComps/CartList'
  import CartBottomBar from './childComps/CartBottomBar'

  import {mapGetters} from 'vuex'

  export default {
    name: 'Cart',
    components: {
      NavBar,
      CartList,
      Scroll,
      CartBottomBar
    },
    computed: {
      ...mapGetters(['cartLength'])
    },
    activated(){
      this.$refs.scroll.refresh()
    }
  }       
</script>

<style scoped>
  #cart{
    height: 100vh;
    position: relative;
  }
  .nav-bar{
    color: #fff;
    background-color: var(--color-tint);
  }
  .content{
    /* height: calc(100% - 44px - 58px - 31px);
    overflow: hidden; */
    position: absolute;
    top: 44px;
    bottom: 78px;
    left: 0;
    right: 0;
    overflow: hidden;
  }
</style>