<template>
  <div class="content">
        <div class="header">
            <img class="logo" :src="'http://134.175.113.58/'+data.shop_logo">
            <div class="msg">
                <div>
                    <span class="icon1">商铺名称</span>
                    {{data.shop_name}}
                </div>
                <div style="margin-top:5px;">
                    <span class="icon1">联系电话</span>
                    {{data.shop_phone}}
                    <i class="el-icon-phone"></i>
                </div>
            </div>
            <div class="showg">
                <div :title="'地址:'+data.shop_addr" class="show">
                    <i class="el-icon-location icon2"></i>
                    {{data.shop_addr}}
                </div>
                <div :title="'介绍:'+data.shop_intro" class="show">
                    <i class="el-icon-view icon2"></i>
                    {{data.shop_intro}}
                </div>
            </div>
        </div>
        <div v-if="cal.length == 0" class="warn">商品下架光咯~</div>
        <div class="wrap">
            <div  class="cal" v-for="(item,key) in cal" :key=key>
                <img class="img" @click="showProductDetail({
                    src:`http://134.175.113.58/${item.goods_photo}`,
                    title:item.goods_name,
                    price:item.goods_price
                })" :src="'http://134.175.113.58/'+item.goods_photo">
                <div class="cal-con">
                    <div>{{item.goods_name}}</div>
                    <div class="cal-font"><div>立刻购买</div>{{item.goods_price}}￥</div>
                    <div class="cal-font"><div>拼团优惠</div>{{item.goods_discount}}￥</div>
                </div>
            </div>
        </div>
        <div v-if="cal.length != 0" class="s-footer">
            <el-pagination layout="prev, pager, next" @current-change="handleCurrentChange" :page-size="20" :total="total" style="float:right;">
            </el-pagination>
        </div>
        <div v-show="showi" class="el-icon-loading icon"></div>
  </div>
</template>

<script>
import {getshop,shopgood} from "@/api/http";
export default {
  data () {
    return {
        data:{},
        page:"",
        total:0,
        cal:[],
        showi:false
    }
  },
   methods: {
      getdata(msg,index){
        this.showi = true
        this.cal = []
          shopgood({offset:index,q:msg}).then(res => {
              console.log(res)
            this.showi = false
            this.total = res.data.data.totalCount
            this.cal = res.data.data.goodsList
          })
      },
      handleCurrentChange(val){
          this.page = val
      },
      showProductDetail(a) {
        this.$router.push({
          path:'/ProductDetail',
          query:{
            src:a.src,
            title:a.goods_name,
            price:a.goods_price
          }
        })
      }
  },
  mounted() {
    this.getdata(this.$route.params.sid,1)
      getshop(this.$route.params.sid).then(res => {
         this.data = res.data.data
         console.log(this.data)
      })
  },
}
</script>

<style scoped lang="scss">
.content{
    min-height: 600px;
    .header{
        display: flex;
        align-items: center;
        position: relative;
        .logo{
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
        .msg{
            margin-left: 20px;
            color:rgb(102, 102, 102);
            .icon1{
                vertical-align: bottom;
                padding: 1px 4px;
                height: 20px;
                line-height: 20px;
                border: 1px solid #f65d29;
                font-size: 13px;
                border-radius: 3px;
                color: #f65d29;
            }
            
        }
        .showg{
            position: absolute;
            right: 100px;
            .show{
                .icon2{
                    cursor: pointer;
                    color: #f65d29;
                }
                color:rgb(102, 102, 102);
                width: 300px;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }
    .icon{
        position: fixed;
        left: 50%;
        top: 50%;
    }
    .warn{
        width: 100%;
        display: flex;
        justify-content: center;
        padding-top: 100px;
        color: rgb(124, 124, 124);
    }
    .s-footer{
        height: 40px;
    }
    .wrap{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 100%;
        .cal{
            width: 22%;
            height: 300px;
            border: 1px solid #ddd;
            margin: 1%;   
            .img{
                width: 100%;
                height: 200px;
            }
            .cal-con{
                margin: 0px;
                padding-left: 10px;
                padding-top: 10px;
                .cal-font{
                    margin-top: 4px;
                    display: flex;
                    flex-direction: row;
                    div{
                        font-size: 14px;
                        width: 70px;
                        display: flex;
                        justify-content: center;
                        border: 1px solid #f65d29;
                        border-radius: 2px;
                        color:#f65d29;
                    }
                }
            }
        }
        .cal:hover{
            border: 1px solid #f65d29;
            cursor: pointer;
        }
    }
}
</style>
