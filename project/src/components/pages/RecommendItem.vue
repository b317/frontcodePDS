<template>
  <li class="recommend-item">
    <div class="recommend-img" @click="showProductDetail">
      <div class="pic-con"><span class="img-con"><img
        :src="recList.icon"
        :title="recList.title"
        :alt="recList.title"></span>
      </div>
      <div class="recommend-extra">
        <p class="recommend-price" style="padding-bottom: 15px;">
          <span class="now-price"><b class="yen">¥</b><b class="price">{{recList.price}}</b></span>
        </p>
        <p class="txt-left"><span>名称：</span>{{recList.name}}</p>
        <!--<p class="txt-left"><span>说明：</span>{{recList.tell}}</p>-->
      </div>
    </div>
  </li>
</template>
<style scoped>
  .recommend-img{
    position: relative;
    padding-top: 10px;
    cursor: pointer;
  }
  .recommend-img .pic-con img{
    width: 140px;
    height: 140px;
  }
  .recommend-img .recommend-extra{
    position: absolute;
    width: 140px;
    height: 25px;
    /*background-color: #fff;*/
    /*opacity: .5;*/
    background-color: rgba(255,255,255,0.5);
    bottom: 3px;
    left: 0;
    z-index: 2;
    line-height: 1px;
    text-align: center;
    /* 效果 */
    overflow: hidden;
    transition: height 0.8s;
    -moz-transition: height 0.8s; /* Firefox 4 */
    -webkit-transition: height 0.8s; /* Safari and Chrome */
    -o-transition: height 0.8s; /* Opera */
  }
  /* 效果--升起高度 */
  /*.recommend-img:hover .recommend-extra{*/
    /*height: 140px;*/
  /*}*/
  /*.recommend-img .recommend-extra p.txt-left{text-align: left}*/
</style>
<script>
    export default {
      props:['recList','index'],
        data() {
            return {
                msg: 'hello world'
            }
        },
      methods:{
        showProductDetail() {
          console.log(this.src);
          this.$router.push({
            path:'/ProductDetail',
            query:{
              src:this.recList.icon,
              title:this.recList.title,
              price:this.recList.price
            }
          })
        }
      }
    }
</script>
