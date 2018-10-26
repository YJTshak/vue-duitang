<template>
    <section class="list-category-5">
      <div class="row"> 
        <a @click="green(index)" v-for="(n,index) in classArr" :key="index" href="javascript:;"> 
          <span :class="n.tag"></span> <br> 
          <span class="txt" v-text="n.name"></span> 
          <span class="border"></span> 
        </a> 
      </div> 
    </section>
</template>

<script>
export default {
  data () {
    return {
      img: require('../assets/7.png'),
      page: 0,
      classArr: [
        {
          tag: 'i lpg',
          name: '良品购'
        },
        {
          tag: 'i tmh',
          name: '商店'
        },
        {
          tag: 'i mscp',
          name: '美食菜谱'
        },
        {
          tag: 'i jjsh',
          name: '家居生活'
        },
        {
          tag: 'i bz',
          name: '壁纸'
        },
        {
          tag: 'i tx',
          name: '头像'
        },
        {
          tag: 'i bq',
          name: '表情'
        },
        {
          tag: 'i more',
          name: '更多分类'
        }
      ]
    }
  },
  methods: {
    green (index) {
      this.page = index
      switch (index) {
        case 0:
          location.href = '#/Home'
          break
        case 1:
          location.href = '#/ShopHome'
          break
        case 2:
          location.href = '#/FoodHome'
          break
        case 3:
          location.href = '#/LifeHome'
          break
        case 4:
          location.href = '#/SasukeHome'
          break
        case 5:
          location.href = '#/AvatarHome'
          break
        case 6:
          location.href = '#/FacialHome'
          break
      }
    }
  }
}
</script>

<style>
.list-category-5 {
  width: 100%;
  height: 2.17rem;
}
.row {
  width: 100%;
  height: 1.09rem;
}
.list-category-3,
.list-category-5 .row,
.list-category-6 tr {
  border-bottom: 1px solid #e0e0e0;
}
.list-category-3,
.list-category-4,
.list-category-5 .row {
  background-color: #fff;
}
.list-category-5 .row a {
  position: relative;
  float: left;
  display: block;
  width: 25%;
  padding: 5% 0;
  font-size: 12px;
  text-align: center;
  color: #666;
}
.list-category-5 .row a .lpg {
  background-position: 0 0;
}
.list-category-5 .row a .tmh {
  background-position: -36px 0;
}
.list-category-5 .row a .mscp {
  background-position: -72px 0;
}
.list-category-5 .row a .jjsh {
  background-position: -108px 0;
}
.list-category-5 .row a .bz {
  background-position: -144px 0;
}
.list-category-5 .row a .tx {
  background-position: -180px 0;
}
.list-category-5 .row a .bq {
  background-position: -216px 0;
}
.list-category-5 .row a .more {
  background-position: -252px 0;
}
.list-category-5 .row a .i {
  width: 36px;
  height: 36px;
}
.list-category-5 .row a .i,
.list-category-6 .i {
  display: inline-block;
  background-image: url(../assets/7.png);
  background-size: 288px auto;
}
a,
button,
div,
img,
input,
p,
span,
textarea {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  cursor: pointer;
}
.list-category-5 .row a .txt {
  width: 100%;
}
a,
button,
div,
img,
input,
p,
span,
textarea {
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  cursor: pointer;
}
Inherited from a .list-category-5 .row a {
  position: relative;
  float: left;
  display: block;
  width: 25%;
  padding: 5% 0;
  font-size: 12px;
  text-align: center;
  color: #666;
}

.list-category-5 .row a .border {
  position: absolute;
  width: 1px;
  height: 100%;
  top: 0;
  right: 0;
  background-color: #e0e0e0;
}
.blackBottom,
.blackTop,
.border,
.redBottom,
.redTop {
  height: 1px;
  border: none;
  background-image: -webkit-linear-gradient(
    bottom,
    rgba(0, 0, 0, 0.12),
    rgba(0, 0, 0, 0.12) 50%,
    transparent 50%
  );
  background-repeat: no-repeat;
  background-size: 100% 1px;
  background-position: bottom;
}
.blackBottom,
.border,
.topic .black,
.topic .blackTop {
  height: 1px;
  border: none;
  background-repeat: no-repeat;
  background-size: 100% 1px;
  background-position: bottom;
}
</style>
