<template>
  <div class="content">
      <div class="header">
            <img :src=src1  @click="showLogin" style="cursor: pointer;">
            <div class="name">{{showname}}</div>
            <div class="wrap">
                <div class="tip" @click="shownews">消息</div>
                <div class="tip" @click="showGoods">订单</div>
                <div class="tip" @click="showcoupon">红包</div>
            </div>
      </div>
    <el-card :body-style="{ padding: '10px' }">
    <img @mouseover="show = true" :class={hover:show} class="image" @mouseout="show = false" :src="src11">
    <div style="padding: 0px;margin:5px;">
        <span>{{msg}}</span>
        <div class="bottom clearfix">
        <a type="text" class="button" :href="'https://'+url">{{url}}</a>
        </div>
    </div>
    </el-card>
  </div>
</template>

<script>
import {setName,getName,getId} from "@/util/auth";
import {banner2} from "@/api/http.js"
import {mapGetters} from "vuex"
export default {
      mounted() {
    banner2().then(res => {
        let l = res.data.data.bannerList[0]
        console.log(l)
        this.msg = l.title
        this.url = l.url  
        this.src11 = "http://134.175.113.58/"+l.image
    })
  },
    data () {
        return {
            currentDate: "2018-11-11",
            news:[4,2,1],
            show:false,
            msg:"",
            src11:"",
            url:""
        }
    },
    computed: {
      ...mapGetters({
        username: 'user/username',
        src:"user/headpic"
      }),
      showname() {
        return this.username != "" ?  this.username : "请登录" 
      },
      src1() {
        return getId() == null ?  "../../../../static/s.jpg" : this.src11
      }

    },
  methods: {
    showLogin(){
      this.$router.push("/login")
    },
    showGoods() {
      this.$router.push("/goods")
    },
    shownews() {
      this.$router.push("/news")
    },
    showcoupon() {
      this.$router.push("/coupon")
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
        width: 100%;
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
