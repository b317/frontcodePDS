<template>
  <div class="content">
    <div class="header"><img :src="src">{{msg}}</div>
    <div class="center">
        <div class="font" v-for="(item,key) in data" :key  = key>
            {{item}}
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:["data","type"],
    mounted() {
        if(this.type == 1){
            this.msg = "热门分类"
            this.src = require("../../../assets/hot.png")
        }else{
            this.msg = "热门商家"
            this.src = require("../../../assets/hotP.png")
        }
    },
    data () {
        return {
            msg:"",
            src:""
        }
    }
}
</script>

<style scoped lang="scss">
.content{
    width: 49%;
    height: 210px;
    margin-top: 8px;
    border: 1px solid rgba(221, 221, 221, 0.719);
    background: #fff;
    .header{
        width: 75%;
        margin: 0 auto;
        text-align: center;
        font-size: 16px;
        font-weight: 600;
        height: 40px;
        line-height: 40px;
        position: relative;
        border-bottom: 1px dashed rgba(221, 221, 221, 0.719);
        img{
            width: 15px;
            margin-bottom: -2px;
            margin-right: 5px;
        }
    }
    .center{
        height: 170px;
        display: flex;
        flex-direction: row;
        padding: 10px;
        flex-wrap:wrap;
        .font{
            text-align: left;
            font-size: 13px;
            width: 25%;
            height: 30px;
            line-height: 30px;
            cursor: pointer;
        }
        .font:hover{
            color: #f65d29;
        }
    }
}
</style>
