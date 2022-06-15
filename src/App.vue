<template>
  <div id="app">
    <div id="nav" style="float: left;width: 100%;box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)">
<!--      <div style="border: rgba(116,116,116,0.85) 1px solid; width: 200px; height: 50px; float: left;margin-top: -12px;"></div>-->
<!--      <a-divider type="vertical" style="float: left" />-->
      <a-tag color="blue" style="float: left;height: 50px;width: 150px;margin-top: -20px; line-height: 50px;font-family: '黑体'">
<!--       LOGIN-->
      </a-tag>
<!--      <a-divider type="vertical" style="float: left"/>-->
      <a-tag color="blue" style="float: left; margin-left: 10px;" v-if="this.$route.path==='/index'">
        公告
        <a-badge dot>
          <a-icon type="notification" />
        </a-badge>
      </a-tag>
<!--      <a-divider type="vertical" style="float: left"/>-->
     <Contactus/>
      <a-tag color="blue" style="float: left;margin-left: 10px;cursor:pointer" @click="hh" >
        Github
        <a-icon type="github" />
      </a-tag>
      <div style="float: right">
        <a-input-search placeholder="input search text" style="width: 200px" v-if="this.$route.path==='/index'" @search="onSearch" />
        <a-divider type="vertical" />
        <a-button type="dashed" v-if="this.$route.path==='/login'" @click="Isregister">
          注册
        </a-button>
        <a-button type="dashed" v-if="this.$route.path==='/register'" @click="logins">
          登录
        </a-button>
        <a-dropdown-button v-if="this.$route.path==='/index'">
          超级管理员 {{username}}
          <a-menu slot="overlay" @click="handleMenuClick" >
            <a-menu-item key="1"> <a-icon type="user" />1st menu item </a-menu-item>
            <a-menu-item key="2"> <a-icon type="user" />
              <a-button type="dashed" v-if="this.$route.path==='/index'" @click="logins">
              退出登录
            </a-button> </a-menu-item>
          </a-menu>
          <a-icon slot="icon" type="user" />
        </a-dropdown-button>

        <a-divider type="vertical" />
      </div>
<!--       <Screenfull/>-->
    </div>
    <transition  name="fade-transform" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>
<script>

import Screenfull from "@/views/utils/Screenfull";
import Contactus from "@/views/utils/Contactus";
export default {
  name: 'App',
  components:{
    Screenfull,
    Contactus
  },
  data(){
    return{
      username: localStorage.getItem('username'),
      transitionName:"",
      loading: true,
    }
  },
  watch:{
    $route(to,from){
      //实现路由跳转动画
      if (to.meta.index > from.meta.index)
        this.transitionName = "slide-left";
      if (to.meta.index < from.meta.index)
        this.transitionName = "slide-right";
    }
  },
  methods:{
    handleButtonClick(e) {
      console.log('click left button', e);
    },
    handleMenuClick(e) {
      console.log('click', e);
    },

    onSearch(value) {
      console.log(value);
    },
    hh(){
      this.$message.info('This is a normal message');
    },
    logins(){
      this.$router.push('/login');
    },
    Isregister(){
      this.$router.push('/register');
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.28s;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}
/*fade-transform*/
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 1s;
}
.fade-transform-enter {
  opacity: 0;
  transform: translateX(-8%);
}
.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(80%);
}
</style>
