<template>
  <div class="topMain">
    <div class="flex_bet">
      <div class="topFir">
        <hamburger id="hamburger-container" class="hamburger-container" />
        <breadcrumb id="breadcrumb-container" class="breadcrumb-container" />
      </div>
      <div class="rightImg">
        <el-dropdown class="avatar-container right-menu-item hover-effect" trigger="click">
          <div class="avatar-wrapper">
            <img src="https://github.com/PanJiaChen/vue-element-admin/" class="user-avatar">
            <i class="el-icon-caret-bottom" />
          </div>
          <el-dropdown-menu slot="dropdown">
            <router-link to="/home">
              <el-dropdown-item>个人中心</el-dropdown-item>
            </router-link>
            <router-link to="/">
              <el-dropdown-item>退出登录</el-dropdown-item>
            </router-link>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <TagsView></TagsView>
  </div>
</template>

<script>
// import Hamburger from '@/components/Hamburger'
// import Breadcrumb from '@/components/Breadcrumb'
import { Hamburger,Breadcrumb,TagsView } from '@/components'
export default {
    components:{
      Hamburger,Breadcrumb,TagsView
    },
    name:'topMain',
    data(){
      return{
        routerBread:['首页'],
        routerLink:[],
      }
    },
    created(){
      console.log(this.$route)
      // this.routerLink.push(this.$route)
    },
    watch:{
      $route(to){
        this.routerBread = []
        if(to.path == '/home'){
          this.routerBread = ['首页']
        }else{
          to.matched.forEach((item,index)=>{
            if(index!==0){
              this.routerBread.push(item.meta.title)
            }
          })
        }
      }
    },
}
</script>

<style lang="scss" scoped>
.topMain{
  // height: 100px;
  width: 100%;
  flex-direction: column;
  .topFir{
    align-items: center;
  }
  .rightImg{
    position: relative;
  }
}
.avatar-container {
  margin-right: 30px;

  .avatar-wrapper {
    position: relative;
    .user-avatar {
      cursor: pointer;
      width: 40px;
      height: 40px;
      border-radius: 10px;
    }

    .el-icon-caret-bottom {
      cursor: pointer;
      position: absolute;
      right: -20px;
      top: 25px;
      font-size: 12px;
    }
  }
}
a {
  text-decoration: none;
}
.el-dropdown-menu__item{
  min-width: 60px;
}
</style>