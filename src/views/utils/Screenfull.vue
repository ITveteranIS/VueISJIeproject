<template>
  <a-icon type="fullscreen-exit" style="font-size: 26px; float: right;cursor:pointer;" @click="screen" />
</template>
<script>
import screenfull from 'screenfull'
export default {
  name: "Screenfull",
  data(){
    return {
      fullscreen: false
    };
  },
  methods:{
    screen() {
      // 如果不允许进入全屏，发出不允许提示
      if (!screenfull.isEnabled) {
        return false;
      }
      screenfull.toggle();
      // this.$message.info('This is a normal message');
    },
  }
}
</script>

<style scoped>

</style>
