<template>
  <div class="content">
    <div class="title"></div>
    <div class="card" v-for="(item,key) in arr" :key=key>
        <smallcard :src=item.src :msg=item.title :sellhot=item.sellhot :tipshow=item.tipshow :rate=item.rate :sell=item.sell></smallcard>
    </div>
  </div>
</template>

<script>
import smallcard from "@/components/pages/home/smallcard"
import ddd from "./homeContent.js"
export default {
  components:{smallcard},
  // props:["arr"],
  mounted() {
    this.arr = ddd.arr
    console.log(this.arr)
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
