<template>
    <section id="woo-holder">
        <div class="woo-pcont woo-masned stpics">
            <div v-for="(n,i) in lists" :key="i" class="woo-blog-0">
                <a href="javascript:;">
                    <img :src="n.photo.path | formatImage">
                    <h1 v-text="n.msg"></h1>
                    <p class="info">
                        <span class="count">★&nbsp;<i v-text="n.favorite_count">1537</i></span>
                        <span class="type"></span>
                        <span class="hr"></span>
                    </p>
                </a>
                <p class="album">
                    <img :src="n.sender.avatar | smallImage" class="avatar">
                    <span class="sender">
                        <a href="javascript:;" class="name" v-text="n.sender.username"></a><br>
                        <a href="javascript:;" class="album-name">收集到&nbsp;<span v-text="n.album.name"></span></a>
                    </span>
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'WooHolder',
  data () {
    return {
      lists: []
    }
  },
  methods: {
    getList () {
      this.$http.get('/dt/napi/blog/list/by_category/?start=0&include_fields=sender%2Calbum%2Clike_count%2Cmsg&limit=24&cate_key=540ead31586df58a2bef4d7a&path=&_=1540536440340').then(res => {
        console.log(res.data.data.object_list)
        this.lists = res.data.data.object_list
      })
    }
  },
  mounted () {
    this.getList()
  }
}
</script>

<style lang="scss" scoped>
a,
i,
span,
p,
img {
  cursor: pointer;
}
#woo-holder {
  padding: 0.12rem 0;
}
.woo-masned {
  zoom: 1;
  overflow: hidden;
  position: relative;
  visibility: visible;
}
.woo-masned .woo {
  position: absolute;
  top: 0;
  left: 0;
}
.woo-blog-0 {
  width: 1.69rem;
  background-color: #fff;
  border: 0.01rem solid #e0e0e0;
  border-bottom-width: 0.02rem;
  font-size: 0.12rem;
  word-break: break-all;
  a {
    display: inline-block;
    img {
      width: 1.665rem;
      height: 1.665rem;
    }
  }
  h1 {
    padding: 0.08rem 0.08rem 0.05rem;
    color: #333;
    font-size: 12px;
  }
  .info {
    position: relative;
    padding: 0 0.08rem 0.05rem;
    .count {
      color: #999;
    }
  }
  .album {
    position: relative;
    padding: 0.08rem 0.08rem 0.08rem 0.46rem;
    line-height: 0.3rem;
    .avatar {
      overflow: hidden;
      position: absolute;
      top: 0.08rem;
      left: 0.08rem;
      width: 0.3rem;
      height: 0.3rem;
      background-size: 100% auto;
      -webkit-border-radius: 100%;
      border-radius: 100%;
    }
    .sender {
      display: inline-block;
      line-height: 1.5;
      padding:0;
      .name {
        color: #3498db;
      }
      .album-name {
        color: #333;
      }
    }
  }
}
</style>
