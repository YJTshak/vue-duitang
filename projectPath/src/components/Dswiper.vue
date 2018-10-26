<template>
  <el-carousel :interval="3000" arrow="never">
    <el-carousel-item v-for="(item,i) in news" :key="i">
      <img :src="item" alt="">
    </el-carousel-item>
  </el-carousel>
</template>


<script>
export default {
  data () {
    return {
      news: [
        require('../assets/1.jpeg'),
        require('../assets/2.jpeg'),
        require('../assets/3.jpeg'),
        require('../assets/4.jpeg'),
        require('../assets/5.jpeg')
      ]
    }
  }
}
</script>


<style lang="scss">
.el-carousel {
  width: 100%;
  height: 2.3rem;
}
.el-carousel__container {
  width: 100%;
  height: 2.3rem !important;
}
.el-carousel__item img {
  width: 100%;
  height: 2.3rem;
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