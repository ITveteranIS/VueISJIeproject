<template>
  <div style="width: 100%; height: 834px; padding-top: 90px;">
    &nbsp;
  <a-layout id="components-layout-demo-side" style="min-height: 100vh;">
    <a-layout-sider v-model="collapsed" collapsible>
<!--      <div class="logo" />-->
      <a-menu
              :style="{ height: '100%', borderRight: 0 }"
              theme="light" :default-selected-keys="['1']"
              mode="inline">
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>Option 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <a-icon type="desktop" />
          <span>Option 2</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" /><span>User</span></span>
          <a-menu-item key="3">
            Tom
          </a-menu-item>
          <a-menu-item key="4">
            Bill
          </a-menu-item>
          <a-menu-item key="5">
            Alex
          </a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2" >
          <span slot="title"><a-icon type="team" /><span>Team</span></span>
          <a-menu-item key="6">
            Team 1
          </a-menu-item>
          <a-menu-item key="8">
            Team 2
          </a-menu-item>
        </a-sub-menu>
        <a-menu-item style="background-color: white" key="9">
          <a-icon type="file" />
          <span>File</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
<!--      <a-layout-header style="background: #fff; padding: 0" />-->
      <a-layout-content style="margin: 0 16px">&nbsp;
        <div style="float: left">
          <a-breadcrumb>
            <a-breadcrumb-item href="">
              <a-icon type="home" />
            </a-breadcrumb-item>
            <a-breadcrumb-item href="">
              <a-icon type="user" />
              <span>Application List</span>
            </a-breadcrumb-item>
            <a-breadcrumb-item>
              Application
            </a-breadcrumb-item>
          </a-breadcrumb>
        </div>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '90vh',maxHeight:'100vh' }">
          <router-view/>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
  </div>
</template>

<script>
import {getRequest, getToken} from "@/util/interceptTool";
export default {
  name: "Indexs",
  data() {
    return {
      collapsed: false,
    };
  },
  created() {
    const username= localStorage.getItem('username')
    console.log(username)


  },
  methods: {
    // changeMode(checked) {
    //   this.mode = checked ? 'vertical' : 'inline';
    // },
    // changeTheme(checked) {
    //   this.theme = checked ? 'dark' : 'light';
    // },
    // toggleCollapsed() {
    //   this.collapsed = !this.collapsed;
    // },
  },
}
</script>

<style scoped>
#components-layout-demo-side .logo {
  /*height: 32px;*/
  /*background: rgba(255, 255, 255, 0.2);*/
  /*margin: 16px;*/
}
</style>
