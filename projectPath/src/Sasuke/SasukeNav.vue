<template>
    <div class="list">
        <section class="list-category-1"> 
            <div class="backend"></div> 
                <div class="content"> 
                    <a href="#" v-for="(n,i) in navs" :key="i">#<span v-text="n.name"></span></a> 
                </div> 
        </section> 
    </div>
</template>

<script>
export default {
  name: 'List',
  data () {
    return {
      navs: []
    }
  },
  methods: {
    getNav () {
      this.$http
        .get(
          '/dt/napi/category/detail/?app_version=14&app_code=mdt&category_id=5017d172705cbe10c0000008'
        )
        .then(res => {
          console.log(res.data.data.sub_cates)
          this.navs = res.data.data.sub_cates
        })
    }
  },
  mounted () {
    this.getNav()
  }
}
</script>

<style lang="scss" scoped>
.list-category-1 {
  position: relative;
  padding: 18px 12px 6px 24px;
  background-size: cover;
  text-align: center;
}
.backend {
  z-index: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.35;
}
.content {
  z-index: 1;
  position: relative;
  font-size: 0;
  a {
    margin: 0 12px 12px 0;
    padding: 0 10px;
    border: 1px solid #fff;
    border-radius: 4px;
    font-size: 14px;
    line-height: 34px;
    display: inline-block;
    color: #fff;
  }
}
</style>
