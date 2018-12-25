<template>
  <div class="content">
      <div v-if="cal.length == 0" class="warn">搜索不到噢，换个检索词吧~</div>
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
            <div class="tip" @click="btnclick1(item.shop_id)">进入店铺</div>
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
import {querygood} from "@/api/http";

export default {
  data () {
    return {
        page:"",
        total:0,
        cal:[],
        showi:false
    }
  },
  mounted() {
    this.getdata(this.$route.params.sval,1)
  },
  methods: {
      btnclick1(a){
          console.log(a)
          this.$router.push({ name: 'shop', params: { sid: a }})
      },
      getdata(msg,index){
        this.showi = true
        this.cal = []
          querygood({offset:index,q:msg}).then(res => {
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
  beforeDestroy() {
  },
}
</script>

<style scoped lang="scss">
.content{
    min-height: 600px;
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
            position: relative;  
            .tip{
                cursor: pointer;
                width: 42px;
                vertical-align: top;
                position: absolute;  
                padding: 0px 4px;
                height: 20px;
                line-height: 20px;
                border: 1px solid #f65d29;
                font-size: 10px;
                right: 10px;
                bottom: 10px;
                border-radius: 3px;
                color: #f65d29;
            }
            .img{
                width: 100%;
                cursor: pointer;
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
        }
    }
    
}
</style>
