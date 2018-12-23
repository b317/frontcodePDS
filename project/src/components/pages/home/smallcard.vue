<template>
  <div class="content">
    <img :src=src @mouseover="show = true" class="img" @click="showProductDetail" :class="{hover:show}" @mouseout="show = false">
    <div class="wrap">
        <div class="msg" >
            {{goods_name}}
            <div class="warn" v-show="show"  @mouseover="show = true" @click="showProductDetail">点击前往拼团</div>
        </div>
        <div class="sell">
            <div class="tip">
                立刻购买
            </div>
            {{goods_price}}
            <div class="tip">
                拼团优惠
            </div>
            {{goods_discount}}
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ["goods_photo", "goods_name", "goods_price", "goods_discount"],
    data() {
      return {
        show: false,
      }
    },
    mounted(){
    },
    computed: {
        src(){
            return "http://134.175.113.58/"+this.goods_photo
        }
    },
    methods: {
      showProductDetail() {
        this.$router.push({
          name:'ProductDetail',
          params:{
            src:this.src,
            title:this.goods_name,
            price:this.goods_price
          }
        })
      }
    }
  }
</script>

<style scoped lang="scss">
.content{
    width: 96%;
    height: 93%;
    box-shadow: 0px 2px 12px rgb(146, 146, 146);
    .wrap{
        width: 100%;
        margin-left: 10px;
        .msg{
            font-size: 14px;
            height: 30px;
            line-height: 30px;
            position: relative;
            color: rgb(75, 75, 75);
            img{
                height: 17px;
                width: 26px;
                margin-left: 3px;
                position: absolute;
                top: 7px;
            }
            .warn{
                color: #fff;
                font-size: 19px;
                position: absolute;
                cursor: pointer;
                left: 130px;
                top:-130px;
            }
        }
        .rate{
            height: 23px !important;
        }
        .sell{
            display: table-row;
            vertical-align: center;
            height: 24px;
            div{
                display: inline-block;
            }
            .tip{
                cursor: pointer;
                vertical-align: top;
                padding: 0px 4px;
                height: 20px;
                line-height: 20px;
                border: 1px solid #f65d29;
                font-size: 10px;
                border-radius: 3px;
                color: #f65d29;
            }
        }
    }
    .img{
        width: 100%;
        height: 200px;
        cursor: pointer;
    }
    .hover{
        filter: blur(3px);
    }
}
</style>
