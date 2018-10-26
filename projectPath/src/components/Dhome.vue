<template>
    <div id="app">
      <dheader></dheader>
      <dswiper></dswiper>
      <dcontent></dcontent>
      <dmian></dmian>
  </div>
</template>

<script>
import dheader from './Dheader.vue'
import dswiper from './Dswiper.vue'
import dcontent from './Dcontent.vue'
import dmian from './Dmian.vue'
export default {
  name: 'App',
  components: {
    dheader,
    dswiper,
    dcontent,
    dmian
  }
}
</script>

<style lang="scss">

</style>
