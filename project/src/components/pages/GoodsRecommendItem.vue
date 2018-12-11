<template>
    <div>
      <div class="goods-div">
        <ul style="margin: 0;padding: 0;">
          <li class="goods-item">
            <div class="icon" @click="showDetail">
              <img :src="pickgoods.icon" alt="" width="231" height="205">
            </div>
            <div class="content">
              <div class="goods-title">
                <span class="name">{{pickgoods.name}}</span>
                <span class="group"><a href="#"><i class="el-icon-goods"></i></a></span>
              </div>
              <div class="goods-like">
                <el-rate
                  class="rate"
                  v-model="pickgoods.rate"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}">
              </el-rate>
              </div>
              <div class="goods-price">
                <span class="price">￥<span style="color: red;font-size: 18px;font-weight: bolder;">{{pickgoods.price}}</span></span>
                <span class="price" style="margin-left: 10px;">￥<del><span style="color: #666;font-size: 12px;">{{pickgoods.originalPrice}}</span></del></span>
                <div class="sell">
                  <div class="tip" v-show="pickgoods.tipshow[0]">
                    拼团打折
                  </div>
                  <div class="tip" v-show="pickgoods.tipshow[1]">
                    商家优惠
                  </div>
                  <div class="tip" v-show="pickgoods.tipshow[2]">
                    活动优惠
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
</template>
<style scoped>
  ul,li{list-style: none;}
  a{text-decoration: none;}
  .goods-item{
    width: 251px;
    background-color: #fff;
    border: 1px solid #fcedec;
  }
  .goods-item:hover{
    border: 1px solid #ff00ff;
  }
  .goods-item img{margin: 10px 10px -10px 10px;cursor: pointer;}
  .content{
    margin: 20px 10px 10px 10px;
    font-size: 15px;
    color: #999;line-height: 24px}
  .goods-title{
    color: #666;
    font: 14px/180% Arial, Helvetica, sans-serif, "新宋体";
  }
  .goods-title .name{
    font-size: 16px;
    font-style: normal;
    display: inline-block;
    max-width: 180px;
    vertical-align: middle;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: center;
  }
  .goods-title .group .el-icon-goods{
    font-size: 22px;
    vertical-align: middle;
    color: red;
    cursor: pointer;
  }
  .goods-address a {
    color: #999;
  }
  .goods-address a:hover {
    color: red;
    text-decoration: underline;
  }
  .goods-like .rate{
    margin: 2px 0px 3px 0px;
  }
  .goods-price{font: 12px/180% Arial, Helvetica, sans-serif, "新宋体";}
  .goods-price .sell {
    display: table-row;
    vertical-align: center;
    height: 24px;
  }
  .goods-price .sell div{
    display: inline-block;
  }
  .goods-price .sell .tip{
    cursor: pointer;
    vertical-align: top;
    padding: 0px 4px;
    height: 20px;
    line-height: 20px;
    border: 1px solid #f65d29;
    font-size: 10px !important;
    border-radius: 3px;
    color: #f65d29;
  }
</style>
<script>
    export default {
      props: ["pickgoods","index"],
      data() {
        return {
          msg: 'hello world',
        }
      },
      methods:{
        showDetail () {
          this.$router.push("/ProductDetail")
          console.log("花名："+ this.pickgoods.name)
//          this.$router.push({
//            name:'ProductDetail',
//            params:{
//              src: this.pickgoods.icon,
//              title: this.pickgoods.name,
//              price: this.pickgoods.price
//            }
//          })
        }
      }
    }
</script>
