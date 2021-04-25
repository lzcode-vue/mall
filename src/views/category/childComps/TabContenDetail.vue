<template>
  <div class="tab-detail">
    <goods-list-item v-for="(item, index) in categoryDetail"
                     :key="index"
                     :goods-item='item'/>
  </div>
</template>

<script>
  import GoodsListItem from 'components/content/goods/GoodsListItem'

  export default {
    name: 'TabContentDetail',
    components: {
      GoodsListItem
    },
    props: {
      categoryDetail: {
        type: Array,
        default(){
          return []
        }
      }
    }
  }
</script>

<style scoped>
  .tab-detail{
    /* width: 100%; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
</style>