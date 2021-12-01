<template>
  <div class="tagView">
    <span v-for="item in routerTag" :key="item.path" :class="item.path == localRouter?'addBlue':''" @click="toRouter(item.path)">
      <span class="circle" v-if="item.path == localRouter"></span>
      {{item.meta.title}}
      <span class="closeIcon" @click.stop="deleteTag(item.path)">
        <i class="el-icon-close"></i>
      </span>
    </span>
  </div>

</template>

<script>
export default {
  data(){
    return{
      routerTag:[],
      localRouter:'',
    }
  },
  watch:{
    $route(to){
      this.localRouter = to.path
      if (this.routerTag.some(v => v.path === to.path)) return
      this.routerTag.push(
        Object.assign({}, to, {
          title: to.meta.title || 'no-name'
        })
      )
    }
  },
  mounted(){
    this.localRouter = this.$route.path
    this.routerTag.push(this.$route)
  },
  methods:{
    toRouter(path){
      if(path == this.localRouter) return
      this.$router.push(path)
    },
    // 删除标签
    deleteTag(path){
      this.routerTag.forEach((item,index)=>{
        if(item.path == path){
          this.routerTag.splice(index,1)
        }
      })
      if(this.routerTag.length == 0){
        this.$router.push('/home')
      }else{
        if(this.$route.path == this.routerTag[this.routerTag.length-1].path) return
        this.$router.push(this.routerTag[this.routerTag.length-1].path)
      }
      
    }
  },
}
</script>

<style lang="scss" scoped>
.tagView{
  height: 32px;
  width: 100%;
  background: #fff;
  border-bottom: 1px solid #d8dce5;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 12%), 0 0 3px 0 rgb(0 0 0 / 4%);
  overflow-x: scroll;
  align-items: center;
  padding: 2px 10px;
  .addBlue{
    background-color: rgb(24, 144, 255);
    border-color: rgb(24, 144, 255);
    color: white  ;
    span{
      color: white;
    }
  }
}
.tagView::-webkit-scrollbar{
  display: none;
}
.tagView>span{
  display: flex;
  align-items: center;
  height: 24px;
  line-height: 24px;
  border: 1px solid #d8dce5;
  color: #495060;
  background: #fff;
  padding: 0 8px;
  font-size: 12px;
  margin-left: 5px;
  cursor: pointer;
  .circle{
    background: white;
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin-right: 4px;
  }
}
.closeIcon{
  margin-left: 6px;
  width: 16px;
  height: 16px;
  line-height: 16px;
  border-radius: 50%;
  text-align: center;
  i{
    transform: scale(.6);
  }
}
.closeIcon:hover{
  background-color: #b4bccc;
  color: #fff;
}
</style>