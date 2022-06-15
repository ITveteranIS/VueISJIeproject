<template>
 <div :style="'height:'+fullHeight+'px;'" class="bodydiv">
  <div style="width: 100%;  margin: auto; padding-top: 15%;">
    <a-spin tip="" size="large" :spinning="spinning">
      <span>
        <a-badge status="success" />
        <a-badge status="error" />
        <a-badge status="default" />
        <a-badge status="processing" />
        <a-badge status="warning" />
      </span>
    <a-form style="width: 320px;margin: auto; z-index: 999"
        id="components-form-demo-normal-login"
        :form="form"
        class="login-form"
        @submit="handleSubmit"
    >
      <a-form-item>
        <a-input style="width: 92%;z-index: 999"
            v-decorator="[
          'username',

          { rules: [{ required: true, message: 'Please input your username!' }],initialValue: 'adm' },
        ]"
            placeholder="Username/Mail"
        >
          <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25); " />
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-input-password
            style="width: 92%;  border-radius: 30px;z-index: 999"
            v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] ,initialValue: '123456' },
        ]"
            type="password"
            placeholder="Password"
        >
          <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25);"/>
        </a-input-password>
      </a-form-item>
      <a-form-item>
        <a-checkbox style="z-index: 999"
            v-decorator="[
          'remember',
          {
            valuePropName: 'checked',
            initialValue: true,
          },
        ]"
        >
          Remember me
        </a-checkbox>
        <a href="" style="z-index: 9999"  @click="qqLoginClick('451360397')"
           id="qqLoginBtn">
          <img  style="cursor:pointer" src="https://wiki.connect.qq.com/wp-content/uploads/2016/12/Connect_logo_3.png">
        </a>
        <a-button type="primary" html-type="submit" style="width: 90%;z-index: 999" shape="round"   class="login-form-button">
          Log in
        </a-button>
      </a-form-item>
    </a-form>
</a-spin>
  </div>
   <div><as/></div>
 </div>
</template>
<script>
import axios from 'axios'
import { mapMutations } from 'vuex';
import {getRequest, getToken} from "@/util/interceptTool";
import {postRequest} from "@/util/interceptTool";
import QC from 'QC'
import as from '../utils/as'
import {message} from "ant-design-vue";
export default {
  name: "login",
  components:{
    as
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  data(){
    return{
      spinning: true,
      fullHeight: document.documentElement.clientHeight,
    }
  },


  watch: {
    fullHeight (val) {//监控浏览器高度变化
      if(!this.timer) {
        this.fullHeight = val
        this.timer = true
        let that = this
        setTimeout(function (){
          that.timer = false
        },400)
      }

    }
  },
  methods:{
    ...mapMutations(['changeLogin']),
    ...mapMutations(['usernames']),
    qqLoginClick (value) {
      alert(value)
      QC.Login.showPopup({
        btnId:"qqLoginBtn",
        appId: '102002732',
        redirectURI: 'http://zlxr.xyz/login'
      })
      // 直接弹出授权页面，授权过后跳转到回调页面进行登录处理
      // QC.Login.showPopup({
      //   appId: '102002732',
      //   redirectURI: 'http://zlxr.xyz/login'
      // })
    },
    get_bodyHeight () {//动态获取浏览器高度
      const that = this
      window.onresize = () => {
        return (() => {
          window.fullHeight = document.documentElement.clientHeight
          that.fullHeight = window.fullHeight
        })()
      }
    },
    // 登录
    handleSubmit(e) {
      let _this = this;
      e.preventDefault();
      this.form.validateFields((err, values) => {
        getToken({
              grant_type:'password',
              username: values.username,
              password: values.password
        }).then(res=>{
               if(res){
                 if (res.code==1){
                   console.log(values.username+values.password)
                   console.log(res.data.token)
                   _this.changeLogin({ Authorization:res.data.tokenHead+res.data.token })
                   _this.usernames({username:values.username})
                   message.success('登录成功');
                   this.$router.replace("/index")
                 }
               }
            })
      });
    },
  },
  mounted () {
        setTimeout(()=>{
          this.spinning=false;
        },2000);

    this.get_bodyHeight();
  }
}
</script>

<style scoped>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;

}
.bodydiv{
   /*background-color: aliceblue;*/

}

</style>
