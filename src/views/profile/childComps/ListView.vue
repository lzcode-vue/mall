<template>
  <div id="list">
    <div v-for="(item, index) in ListData" :key="index" class="item">
      <span class="icon">
        <svg :fill="item.iconColor"><use :xlink:href="item.icon"></use></svg>
      </span>
      <div class="info">{{item.info}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ListView',
    props: {
      ListData: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  #list{
    background-color: #fff;
    color: #333;
    font-size: 15px;
  }
  #list .item{
    height: 44px;
    line-height: 44px;
    position: relative;
  }
  .icon svg{
    width: 18px;
    height: 18px;
    background-color: #ff8198;
  }
  .item .icon{
    position: absolute;
    margin-top: 10px;
    left: 16px;
    top: -7px;
  }
  .item .info{
    margin-left: 40px;
    padding-left: 5px;
    border-bottom: 1px solid rgba(100, 100, 100, .1);
  }
  .item:last-of-type .info{
    border-bottom: none;
  }
</style>