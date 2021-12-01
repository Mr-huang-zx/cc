<template>
  <div class="leftMain">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :collapse="isCollapse"
      unique-opened
      router
    >
      <template v-for="(router,index) in leftNav" >
        <el-submenu :index="router.path" :key="index" v-if="router.children">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{router.meta.title}}</span>
          </template>
          <template v-for="(childRouter,idx) in router.children">
            <el-menu-item :index="childRouter.path" :key="idx" v-if="!childRouter.meta.isShowDe">{{childRouter.meta.title}}</el-menu-item>

          </template>
        </el-submenu>
        <!-- </el-submenu>  -->
        <el-menu-item :index="router.path" :key="index" v-else>
          <i class="el-icon-menu"></i>
          <span slot="title">{{router.meta.title}}</span>
        </el-menu-item>
        <!-- <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item> -->
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import leftNav from '@/router/modules/leftNav'
export default {
  name: "leftMain",
  data(){
    return{
      leftNav,
    }
  },
  computed:{
    ...mapState(['isCollapse'])
  },
  mounted(){
    
  },
  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
.leftMain{
  flex-direction: column;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>