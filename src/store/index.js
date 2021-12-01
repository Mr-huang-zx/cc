import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isCollapse:localStorage.getItem('isHidenRightMenu') == 0 ?true:false, //菜单栏展开隐藏状态
  },
  mutations: {
    resetLeftMenu(state,newV){
      newV == 1?localStorage.setItem('isHidenRightMenu',0):localStorage.setItem('isHidenRightMenu',1)
      state.isCollapse = newV
    },
  },
  actions: {
  },
  modules: {
  }
})
