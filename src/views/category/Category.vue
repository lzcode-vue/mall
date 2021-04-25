<template>
  <div id="category">
    <nav-bar>
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <tab-menu :categories='categories' @selectItem='selectItem'/>
      <scroll id="tab-content" ref="scroll">
        <div>
          <tab-content-category :subcategories='showSubcategory'/>
          <tab-control :titles="['综合', '新品', '销量']"
                       @tabClick='tabClick'/>
          <!-- <tab-conten-detail :category-detail='showCategoryDetail'/> -->
          <goods-list :goods='showCategoryDetail'/>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar'
  import Scroll from 'components/common/scroll/Scroll'
  import TabControl from 'components/content/tabControl/TabControl'
  import GoodsList from 'components/content/goods/GoodsList'

  import TabMenu from './childComps/TabMenu'
  import TabContentCategory from './childComps/TabContentCategory'
  import TabContenDetail from './childComps/TabContenDetail'

  import {getCategory, getSubcategory, getCategoryDetail} from 'network/category'
  import {tabControlMixin, itemListenerMixin} from 'common/mixin'

  export default {
    name: 'Category',
    components: {
      NavBar,
      TabMenu,
      Scroll,
      TabContentCategory,
      TabControl,
      TabContenDetail,
      GoodsList
    },
    mixins: [tabControlMixin, itemListenerMixin],
    data(){
      return {
        categories: [],
        currentIndex: -1,
        categoryData: {}
      }
    },
    computed: {
      showSubcategory(){
        if(this.currentIndex === -1){
          return {}
        }else{
          return this.categoryData[this.currentIndex].subcategories
        }
      },
      showCategoryDetail(){
        if(this.currentIndex === -1){
          return []
        }else{
          return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
        }
      }
    },
    created(){
      this.getCategory()
    },
    methods: {
      getCategory(){
        getCategory().then(res => {
          // console.log(res)
          this.categories = res.data.category.list

          for(let i=0; i<this.categories.length; i++){
            this.categoryData[i] = {
              subcategories: {},
              categoryDetail: {
                'pop': [],
                'new': [],
                'sell': []
              }
            }
          }
          this.getSubcategories(0)
        })
      },
      getSubcategories(index){
        this.currentIndex = index
        const maitKey = this.categories[index].maitKey
        getSubcategory(maitKey).then(res => {
          // console.log(res)
          this.categoryData[index].subcategories = res.data
          this.categoryData = {...this.categoryData}
        })
        this.getCategoryDetail('pop')
        this.getCategoryDetail('new')
        this.getCategoryDetail('sell')
      },
      getCategoryDetail(type){
        const miniWallkey = this.categories[this.currentIndex].miniWallkey
        getCategoryDetail(miniWallkey, type).then(res => {
          // console.log(res)
          this.categoryData[this.currentIndex].categoryDetail[type] = res
          this.categoryData = {...this.categoryData}
        })
      },
      selectItem(index){
        this.getSubcategories(index)
      }
    },
    deactivated(){
      this.$bus.$off('itemImageLoad', this.itemImgListener)
    }
  }
</script>

<style scoped>
  #category{
    height: 100vh;
  }
  .nav-bar{
    background-color: var(--color-tint);
    color: #fff;
  }
  .content{
    display: flex;
  }
  #tab-content{
    height: calc(100vh - 44px - 49px);
    overflow: hidden;
    flex: 1;
  }
</style>