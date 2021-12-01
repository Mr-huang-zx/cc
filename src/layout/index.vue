<template>
  <div class="mainBox">
      <!-- 左边导航 -->
        <leftMain></leftMain>
    
    
    <div class="addFle">
        <!-- 顶部内容 -->
        <topMain></topMain>
        <!-- 显示主要内容 -->
        <contentMain></contentMain>
    </div>
  </div>
</template>

<script>
import { leftMain,topMain,contentMain } from '@/layout'
export default {
    components:{
        leftMain,topMain,contentMain
    },
    name:'home',
}
</script>

<style lang="scss" scoped>
.mainBox{
    width: 100%;
    height: 100%;
    min-width: 1300px;
}
.addFle{
    width: 100%;
    flex-direction: column;
}
</style>