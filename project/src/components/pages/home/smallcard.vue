<template>
  <div class="content">
    <img :src=src @mouseover="show = true" @mouseout="show = false">
    <div class="wrap">
        <el-rate
        v-model="rate"
        disabled
        show-score
        text-color="#ff9900"
        score-template="{value}"
        class="rate">
        </el-rate>
        <div class="msg">
            {{msg}}
            <img src="../../../../static/hotSell.jpg" v-show="sellhot">
            <div class="warn" v-show="show"  @mouseover="show = true">点击前往拼团</div>
        </div>
        <div class="sell">
                {{sell}}
            <div class="tip" v-show="tipshow[0]">
                拼团打折
            </div>
            <div class="tip" v-show="tipshow[1]">
                商家优惠
            </div>
            <div class="tip" v-show="tipshow[2]">
                活动优惠
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props:["src","msg","rate","sell","tipshow","sellhot"],
    data () {
        return {
            show:false
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
            display: row;
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
    img{
        width: 100%;
        height: 200px;
        cursor: pointer;
    }
    img:hover{
        filter: blur(3px);
    }
}
</style>
