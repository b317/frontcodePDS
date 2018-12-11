<template>
  <div class="content">
      <div class="header">
            <img :src=src>
            <div class="name">{{showname}}</div>
            <div class="wrap">
                <div class="tip">消息</div>
                <div class="tip" @click="showGoods">订单</div>
                <div class="tip">红包</div>
            </div>
      </div>
    <el-card :body-style="{ padding: '10px' }">
    <img @mouseover="show = true" :class={hover:show} class="image" @mouseout="show = false" src="@/assets//hamburger.png">
    <div style="padding: 0px;margin:5px;">
        <span>好吃的汉堡</span>
        <div class="bottom clearfix">
        <time class="time">{{ currentDate }}</time>
        <el-button type="text" class="button">操作按钮</el-button>
        </div>
    </div>
    <div class="warn" v-show="show" @mouseover="show = true">点击前往拼团</div>
    </el-card>
  </div>
</template>

<script>
import {setName,getName} from "@/util/auth";
import {mapGetters} from "vuex"
export default {
    mounted() {
        this.src = "./static/touxiang.jpg"
    },
    data () {
        return {
            currentDate: "2018-11-11",
            src:"",
            news:[4,2,1],
            show:false
        }
    },
    computed: {
      ...mapGetters({
        username: 'user/username'
      }),
      showname() {
        return this.username ? this.username : "请登录"
      }
    },
  methods: {
    showGoods() {
      this.$router.push("/goods")
    }
  }
}
</script>

<style scoped lang="scss">
.content{
    width: 100%;
    height: 518px;
    background: #fff;
    border: 1px solid rgb(199, 199, 199);
    .header{
        width: 70%;
        height: 200px;
        margin: 0 auto;
        border-bottom: 1px dashed rgb(207, 207, 207);
        img{
            width: 80px;
            height: 80px;
            margin: 40px 0px 0px 50px;
            border-radius: 50%;
        }
        .name{
            font-size: 14px;
            text-align: center;
        }
        .wrap{
            display: flex;
            margin-top: 10px;
            .tip{
                margin: 0px 5px;
                width: 50px;
                height: 24px;
                line-height: 24px;
                font-size: 13px;
                text-align: center;
                cursor: pointer;
                border-radius: 3px;
                border: 1px solid rgba(206, 206, 206, 0.774);
            }
            .tip:hover{
                color: #f65d29;
                border: #f65d29 1px solid;
            }
        }
    }
    .image{
        margin-left: 8px;
    }
    .time {
        font-size: 13px;
        color: #999;
    }
    .el-card{
        height: 310px !important;
        border: 0px !important;
        box-shadow:0px 0px 0px #fff !important;
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
</style>
