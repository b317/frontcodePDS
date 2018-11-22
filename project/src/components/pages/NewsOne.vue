<template>
  <div>
    <div class="newsOne" v-for="(item,index) of MesListShow" :key="index">
      <div>
        <span><strong>{{item.title}}</strong></span>
        <span class="time">{{item.time}}</span>
      </div>
      <div style="padding-left: 5px;font-size:13px ">
        <span>{{item.content}}</span>
      </div>
      <small-tag class="small_tag"></small-tag>
    </div>
    <div class="load-more" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30">
      <img src="./../../../static/loading-svg/loading-bars.svg" v-show="loading">
    </div>
  </div>
</template>
<script>
  import SmallTag from '@/components/module/SmallTag'
  export default {
    data() {
      return {
        msg: 'hello world',
        busy : false,
        loading: false,
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
    components:{
      SmallTag
    },
    mounted(){
      if(this.SystemMesList.length<=5){
        this.buzy=true;
        this.loading =false;
        this.MesListShow = this.SystemMesList
      }else{
        this.buzy=false;
        this.loading =true;
        this.MesListShow = this.SystemMesList.slice(0,this.MesNum)
      }
    },
    computed:{
//      MesLength(){
//        return this.SystemMesList.length
//      }
    },
    methods:{
      loadMore(){
        console.log(this.SystemMesList.length/5);
       this.busy = true;
//        this.loading =true;
        setTimeout(()=>{
          this.count +=5;
          this.showList();
        },500)
      },
      showList(){
//        this.busy = false;
        let isEnoughCount =this.SystemMesList.length-this.MesListShow.length;
        if(isEnoughCount<5){
          this.loading= false;
          this.MesListShow=this.MesListShow.concat(this.SystemMesList.slice(this.count));
          this.busy = true;
        }else{
          this.loading= true;
          this.MesListShow=this.MesListShow.concat(this.SystemMesList.slice(this.count,this.count+5));
          this.busy = false;
        }
      }
    }
  }
</script>
<style scoped>
  .newsOne{
    background: white;font-size: 15px;padding:30px 20px;margin:20px 0;
    line-height: 25px;font-family: Microsoft YaHei;
    color:#333;border-radius: 6px;position: relative;
    /*overflow: hidden;*/
  }
  .newsOne div:first-child{margin-bottom: 5px}
  .newsOne .time{color:#999;font-size: 12px;}
  .load-more{text-align: center}
  .small_tag{
    position: absolute;right:-18px;top:0;
    /*box-shadow:0 0 4px #f65d29;*/
    width:100px;height:30px;
    background:#f65d29;
    border-radius: 25px 25px 0 0;
    transform: rotate(35deg);
    text-align: center;font-size: 20px;
    /*padding-left:10px;*/
    border-bottom:4px outset rgba(255, 69, 0, 1);
    line-height: 30px;font-weight: bold;color:white;
    font-family: "FZShuTi";
  }
</style>
