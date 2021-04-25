<template>
  <div class="tab-category">
    <div class="item" v-for="(item, index) in subcategories.list" :key="index">
      <a :href="item.link">
        <img class="item-img" :src="item.image" alt="">
        <div class="item-text">{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TabContentCategory',
    props: {
      subcategories: {
        type: Object,
        default(){
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .tab-category{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    margin-top: 10px;
  }
  .item{
    font-size: 12px;
    text-align: center;
    width: 48%;
  }
  .item-img{
    width: 80%;
  }
  .item-text{
    margin-top: 15px;
  }
</style>