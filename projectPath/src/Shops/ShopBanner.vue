<template>
    <el-carousel :interval="3000" arrow="never">
    <el-carousel-item v-for="(item,i) in banners" :key="i">
      <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>

<script>
export default {
  data () {
    return {
      banners: [require('../assets/6.jpeg'), require('../assets/7.jpeg')]
    }
  }
}
</script>

<style lang="scss" scopde>
.el-carousel {
  width: 100%;
  height: 1.6rem;
}
.el-carousel__container {
  width: 100%;
  height: 1.6rem !important;
}
.el-carousel__item img {
  width: 100%;
  height: 1.6rem;
}
.el-carousel__button {
  width: 0.1rem;
  height: 0.1rem;
  border-radius: 50%;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
