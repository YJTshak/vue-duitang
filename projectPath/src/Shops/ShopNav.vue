<template>
    <div class="shop-nav">
        <ul class="shop-ul">
            <li v-for="(n,i) in 10" :key="i" class="shop-li">
                <img src="//b-ssl.duitang.com/uploads/item/201709/21/20170921153157_m5JG8.png" alt="">
                <span>护肤</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'shopNav',
  data () {
    return {
      navs: []
    }
  },
  methods: {
    getNav () {
      this.$http
        .get(
          'https://buy.duitang.com/napi/buy/category/list/?timestamp=1540380634000'
        )
        .then(res => {
          console.log(res.data.data.object_list)
        })
    }
  },
  mounted () {
    this.getNav()
  }
}
</script>

<style lang="scss" scoped>
.shop-nav {
  width: 100%;
  height: 1.68rem;
  .shop-ul {
    padding-bottom: 0.14rem;
    background: #fff;
    .shop-li {
      padding-top: 0.13rem;
      padding-bottom: 0.05rem;
      width: 20%;
      float: left;
      font-size: 0.13rem;
      line-height: 0.18rem;
      color: #444;
      text-align: center;
      img {
        width: 0.36rem;
        height: 0.36rem;
        margin: 0 auto;
        margin-bottom: 0.05rem;
      }
      span {
        font-size: 0.14rem;
        color: #444;
      }
    }
  }
}
</style>
