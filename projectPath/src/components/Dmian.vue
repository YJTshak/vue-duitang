<template>
    <section ref="el" id="woo-holder">
        <div class="woo-pcont woo-masned stpics" id="wrap">
                <div v-for="(m,i) in mian" :key="i" class="woo-blog-0">
                    <a href="javascript:;">
                        <img :src="m.photo.path | formatImage">
                        <h1 v-text="m.msg"></h1>
                        <p class="info">
                            <span class="count">★&nbsp;<i v-text="m.favorite_count">90</i></span>
                            <span class="type"></span>
                            <span class="hr"></span>
                        </p>
                    </a>
                    <p class="album">
                        <img :src="m.sender.avatar | smallImage" alt="" class="avatar">
                        
                        <span class="sender">
                            <a href="javascript:;" class="name" v-text="m.sender.username"></a><br>
                            <a href="javascript:;" class="album-name">收集到&nbsp;<span v-text="m.album.name"></span></a>
                        </span>
                    </p>
                </div>
        </div>
    </section>
</template>

<script>
// import vueWaterfallEasy from 'vue-waterfall-easy'
// import common from "../lib/common.js"
export default {
  name: 'WooHolder',
  data () {
    return {
      mian: []
    }
  },
  methods: {
    getMian () {
      this.$http
        .get('/dt/napi/index/hot/', {
          params: {
            'start': 0,
            'include_fields': 'sender,album',
            'limit': 24,
            '_': '1540172176336'
          }
        })
        .then(res => {
          this.mian = res.data.data.object_list
        })
    }
  },
  created () {
    this.getMian()
  },
  mounted () {}
}
</script>

<style lang="scss">
#woo-holder {
  padding: 12px 0;
}
.woo-masned {
  position: relative;
  width: 296px;
  visibility: visible;
  zoom: 1;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
}
.woo-masned {
  .woo {
    position: absolute;
    top: 0;
    left: 0;
  }
}
.woo-blog-0 {
  width: 144px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-bottom-width: 2px;
  font-size: 12px;
  word-break: break-all;
  float: left;
}
.woo-blog-0 {
  a {
    display: inline-block;
    > img {
      width: 142px;
      height: 142px;
    }
  }

  h1 {
    padding: 8px 8px 5px;
    font-size: 0.14rem;
    font-weight: 500;
    color: #333;
  }
  .info {
    position: relative;
    padding: 0 8px 5px;
    .count {
      color: #999;
    }
  }
}
.avatar {
  overflow:hidden;
  position:absolute;
  top:0.08rem;
  left:0.08rem;
  width: 0.3rem;
  height: 0.3rem;
  border-radius: 50%;
  display: inline-block;
}
.sender {
  padding:0.08rem 0.08rem 0.08rem 0.46rem;
  display: inline-block;
}
.album{
  position:relative;
}
</style>
