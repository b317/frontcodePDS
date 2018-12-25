<template>
  <div class="content">
    <div class="title">
      <div class="big">{{title.title}}</div>
      <div class="tip" v-for="(item,key) in title.tip" :key=key @click="btnclick2(item)">{{item}}</div>
      <div class="right" @click="btnclick">更多<i class="el-icon-arrow-right"></i></div>
    </div>
    <div class="card" v-for="(item,key) in dataArr" :key=key>
        <smallcard :goods_photo="item.goods_photo"
        :goods_name="item.goods_name"
        :goods_price="item.goods_price"
        :goods_id="item.goods_id"
        :shop_id="item.shop_id"
        :goods_discount="item.goods_discount"
        :shop_id="item.shop_id"
        ></smallcard>
    </div>
  </div>
</template>

<script>
import smallcard from "@/components/pages/home/smallcard"
export default {
  components:{smallcard},
  props:["dataArr","title"],
  mounted() {
  },
  data () {
    return {
      arr:[],
      currentDate:"2010-1-1",
      show:false
    }
  },
  methods: {
    btnclick(){
      this.$bus.$emit("seach2",this.title.title)
      scrollTo(0,0);
      this.$router.push({ name: 'seach', params: { sval: this.title.title }})
    },
    btnclick2(a){
      this.$bus.$emit("seach2",a)
      scrollTo(0,0);
      this.$router.push({ name: 'seach', params: { sval: a }})
    },
  },
}
</script>

<style scoped lang="scss">
.content{
  width: 98%;
  margin: 10px 10px 0px 10px;
  background: #fff;
  border: 1px solid rgb(212, 212, 212);
  border-radius: 3px;
  height: 650px;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  .title{
    width: 100%;
    height: 50px;
    display: flex;
    padding: 0 10px;
    position: relative;
    .right{
      font-size: 16px;
      border: 1px solid rgb(187, 187, 187);
      line-height: 26px;
      padding: 0px 3px 2px 9px;
      margin: 18px 0px 0px 5px;
      height: 26px;
      vertical-align: top;
      border-radius: 3px;
      color: rgb(179, 178, 178);
      position: absolute;
      right: 14px;
      top:-4px;
      cursor: pointer;
    }
    .right:hover{
      color: #f65d29;
      border: 1px solid #f65d29;
    }
    .big{
      font-size: 19px;
      height: 50px;
      line-height: 60px;
    }
    .tip{
      font-size: 13px;
      border: 1px solid rgb(187, 187, 187);
      line-height: 20px;
      padding: 0px 3px 2px 3px;
      margin: 18px 0px 0px 5px;
      height: 20px;
      vertical-align: top;
      cursor: pointer;
      border-radius: 3px;
      color: rgb(179, 178, 178);
    }
    .tip:hover{
      color: #f65d29;
      border: 1px solid #f65d29;
    }
  }
  .card{
    width: 33%;
    height: 300px;
    .el-card{
      width: 260px !important;
      height: 310px !important;
      .hover{
          cursor: pointer;
          filter: blur(2px);
      }
      .warn{
          float: left;
          position: relative;
          top: -200px;
          left: 60px;
          color: #fff;
          font-size: 19px;
          cursor: pointer;
      }
    }
  }

}
</style>
