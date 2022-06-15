<template>
  <div>
<!--    <a-tag color="blue" style="float: left;margin-left: 10px;cursor:pointer;z-index: 9999" @click="showDrawer"  >-->
<!--      联系我们-->
<!--      <a-icon type="tool" theme="twoTone" />-->
<!--    </a-tag>-->
    <a-drawer
        title="Basic Drawer"
        placement="right"
        :closable="false"
        :visible="visible"
        :after-visible-change="afterVisibleChange"
        @close="onClose"
    >

    </a-drawer>
    <VueBotUI
        :messages = "messageData"
        :options = "botOptions"
        :bot-typing="botTyping"
        :input-disable="inputDisable"
        :is-open="false"
        @msg-send = "messageSendHandler"
        @init="botStart"
    />

  </div>
</template>
<script>
import  { VueBotUI } from 'vue-bot-ui'
import { messageService } from './helpers/message'
export default {
  name: "Contactus",
  components:{
    VueBotUI
  },
  data() {
    return {
      visible: false,
      botTyping:true,
      messageData: [],
      inputDisable:false,
      botOptions : {
        botTitle: '小康客服',
        botAvatarImg:'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic.jj20.com%2Fup%2Fallimg%2F911%2F100416110525%2F161004110525-20.jpg&refer=http%3A%2F%2Fpic.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651416407&t=a460e5a54443c9d4b52644545741565f',
        botAvatarSize:'32',
        animation:true
        // 请参阅下面的选项列表
      },
    };
  },
  methods: {
    botStart () {
      this.botTyping = true
      setTimeout(() => {
        this.botTyping = false
        this.messageData.push({
          agent : 'bot' ,
          type : 'button' ,
          text : '欢迎您！使用小康智能客服,请问有什么需要吗？？' ,
        })
      }, 1000)
    },
    messageSendHandler(value){
      this.messageData.push({
        agent: 'user',
        type: 'text',
        text: value.text
      })
      this.getResponse()
      console.log("点击发送了")
    },
    getResponse () {
      this.botTyping = true
      messageService.createMessage()
          .then((response) => {
            const replyMessage = {
              agent: 'bot',
              ...response
            }

            this.inputDisable = response.disableInput
            this.messageData.push(replyMessage)

            // finish
            this.botTyping = false
          })
    },
    afterVisibleChange(val) {
      console.log('visible', val);
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
  },
  created() {
  }
}
</script>

<style scoped>

</style>
