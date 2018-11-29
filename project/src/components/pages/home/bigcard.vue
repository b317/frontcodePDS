<template>
  <div class="content">
    <div class="title">
      <div class="big">{{title.title}}</div>
      <div class="tip" v-for="(item,key) in title.tip" :key=key>{{item}}</div>
      <div class="right">更多<i class="el-icon-arrow-right"></i></div>
    </div>
    <div class="card" v-for="(item,key) in dataArr" :key=key>
        <smallcard :src=item.src :msg=item.title :sellhot=item.sellhot :tipshow=item.tipshow :rate=item.rate :sell=item.sell></smallcard>
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
  }
}
</script>

<style scoped lang="scss">
.content{
  width: 1250px;
  margin: 10px 10px 0px 10px;
  background: #fff;
  border: 1px solid rgb(212, 212, 212);
  border-radius: 3px;
  height: 650px;
  display: flex;
  flex-direction: row;
  flex-wrap:wrap;
  .title{
    width: 1250px;
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
    width: 416px;
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
