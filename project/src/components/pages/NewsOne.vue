<template>
  <div>
    <div class="newsOne" v-for="(item,index) of SystemMesList" :key ="index">
      <div>
        <span><strong>{{item.title}}</strong></span>
        <span class="time">{{item.time}}</span>
      </div>
      <div style="padding-left: 5px;font-size:13px ">
        <span>{{item.content}}</span>
      </div>
    </div>
    <div class="load-more" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30">
      <img src="./../../../static/loading-svg/loading-bars.svg" v-show="loading">
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        msg: 'hello world',
        busy : false,
        loading: true,
        MesNum:5,
        count:0,
        MesListShow:[],
        SystemMesList:[
          {
            title:"说好的未来 在这里等你《穿越时空的少女》独家正版上线！",
            time:"2018年11月15日 17:22",
            content:"一年一度的哔哩哔哩萌节到啦，十大赛区，网罗生活高萌的每一个瞬间，一起来决战萌节之巅吧！点击参与活动" +
            "手机拍摄-竹鼠贴纸新鲜上架，海量奖品等你来拿！叮咚~你的十一假期攻略手册已到货！2018年11月15日 17:22"
          },
          {
            title:"英雄联盟S8助威活动全面开启！",
            time:"2018年11月15日 17:22",
            content:"一年一度的哔哩哔哩萌节到啦，十大赛区，网罗生活高萌的每一个瞬间，一起来决战萌节之巅吧！点击参与活动" +
            "手机拍摄-竹鼠贴纸新鲜上架，海量奖品等你来拿！叮咚~你的十一假期攻略手册已到货！2018年11月15日 17:22"
          },
          {
            title:"#前方高萌征稿大赛#",
            time:"2018年10月1日 15:37",
            content:"一年一度的哔哩哔哩萌节到啦，十大赛区，网罗生活高萌的每一个瞬间，一起来决战萌节之巅吧！点击参与活动" +
            "手机拍摄-竹鼠贴纸新鲜上架，海量奖品等你来拿！叮咚~你的十一假期攻略手册已到货！2018年11月15日 17:22"
          },
          {
            title:"#前方高萌征稿大赛#",
            time:"2018年10月1日 15:37",
            content:"一年一度的哔哩哔哩萌节到啦，十大赛区，网罗生活高萌的每一个瞬间，一起来决战萌节之巅吧！点击参与活动" +
            "手机拍摄-竹鼠贴纸新鲜上架，海量奖品等你来拿！叮咚~你的十一假期攻略手册已到货！2018年11月15日 17:22"
          },
          {
            title:"#前方高萌征稿大赛#",
            time:"2018年10月1日 15:37",
            content:"一年一度的哔哩哔哩萌节到啦，十大赛区，网罗生活高萌的每一个瞬间，一起来决战萌节之巅吧！点击参与活动" +
            "手机拍摄-竹鼠贴纸新鲜上架，海量奖品等你来拿！叮咚~你的十一假期攻略手册已到货！2018年11月15日 17:22"
          },
          {
            title:"#前方高萌征稿大赛#",
            time:"2018年10月1日 15:37",
            content:"一年一度的哔哩哔哩萌节到啦，十大赛区，网罗生活高萌的每一个瞬间，一起来决战萌节之巅吧！点击参与活动" +
            "手机拍摄-竹鼠贴纸新鲜上架，海量奖品等你来拿！叮咚~你的十一假期攻略手册已到货！2018年11月15日 17:22"
          }
        ]
      }
    },
    mounted(){
      if(MesLength<=5){
        this.buzy=true;
        this.loading =false
      }
    },
    computed:{
      MesLength(){
        return this.SystemMesList.length
      }
    },
    methods:{
      loadMore(){
        this.busy = true;
        setTimeout(()=>{
          if(this.MesLength>5){
            this.loading =true;
            this.busy=false;
          }
        },500)
      }
    }
  }
</script>
<style scoped>
  .newsOne{
    background: white;font-size: 15px;padding:30px 20px;margin:20px 0;
    line-height: 25px;font-family: Microsoft YaHei;
    color:#333;  border-radius: 6px;
  }
  .newsOne div:first-child{margin-bottom: 5px}
  .newsOne .time{color:#999;font-size: 12px;}
  .load-more{text-align: center}
</style>
