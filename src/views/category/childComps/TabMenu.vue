<template>
  <scroll id="tab-menu">
    <div class="menu-list">
      <div v-for="(item, index) in categories" :key="index"
           class="menu-list-item"
           @click="itemClick(index)"
           :class="{isActive: index === currentIndex}">
        {{item.title}}
      </div>
    </div>
  </scroll>
</template>

<script>
  import Scroll from 'components/common/scroll/Scroll'
  export default {
    name: 'TabMenu',
    components: {
      Scroll
    },
    props: {
      categories: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data(){
      return {
        currentIndex: 0
      }
    },
    methods: {
      itemClick(index){
        this.currentIndex = index
        this.$emit('selectItem', index)
      }
    }
  }
</script>

<style scoped>
  #tab-menu{
    width: 100px;
    background-color: #f6f6f6;
    height: calc(100vh - 44px - 49px);
    overflow: hidden;
    box-sizing: border-box;
  }
  .menu-list{
    width: 100px;
  }
  .menu-list-item{
    /* width: 100%; */
    height: 45px;
    line-height: 45px;
    text-align: center;
    font-size: 14px;
  }
  .isActive{
    color: var(--color-high-text);
    background-color: #fff;
    font-weight: 700;
    border-left: 3px solid var(--color-high-text);
  }
</style>