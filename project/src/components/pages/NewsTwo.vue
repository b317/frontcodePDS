<template>
  <div>
    <div class="newsOne newsTwo" v-for="(item,index) of MesListShow" :key="index">
      <div>
        <span class="shopImage"><img v-bind:src="'/static/'+item.shopImage" /></span>
        <span class="shopName">{{item.shopName}}</span>
        <span class="time">{{item.time}}</span>
      </div>
      <div style="padding-left: 5px;font-size:13px ">
        <span class="newsTitle"><strong>{{item.title}}</strong></span>
        <span class="newsContent">{{item.content}}</span>
      </div>
      <a href="javascript:void(0)" class="details" @click="showDetail(item,index)">查看详情</a>
      <small-tag v-bind:id="index=index" class="small_tag" v-show="!(list_index==index) || !(statusSave[index]==index)"></small-tag>
      <small-tags v-bind:id="index=index" class="small_tags" v-show="list_index==index || statusSave[index]==index"></small-tags>
    </div>
    <div class="load-more" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30">
      <img src="./../../../static/loading-svg/loading-bars.svg" v-show="loading">
    </div>

    <!--全局模态框-->
    <modal v-bind:mdShow="mdShow" @close="closeModal" >
      <span slot="title" class="modal_title">
        <i class="el-icon-message"></i>&nbsp;活动消息
      </span>
      <span slot="content_from" class="modal_topic">{{detail.title}}</span>
      <span slot="time" class="modal_time">{{detail.time}}</span>
      <p slot="content_detail" class="content_detail">{{detail.content}}</p>
      <div slot="btnGroup">
        <button class="modal_close" @click="closeModal">close</button>
      </div>
    </modal>
  </div>
</template>
<style>
  .newsOne .shopName{color:#F56C6C !important;font-weight: bold}
</style>
<script>
  import SmallTag from '@/components/module/SmallTag'
  import SmallTags from '@/components/module/SmallTags'
  import Modal from '@/components/module/Modal'
//  import shopImage1 from '@/assets/shopImage1.jpg'
  export default {
    props:["tagList"],
    data() {
      return {
        msg: 'hello world',
        read_status:true,
        mdShow:false,
        index:'',
        list_index:null,
        statusSave:[],
        busy : false,
        loading: false,
        MesNum:5,
        count:0,
        MesListShow:[],
        SystemMesList:[
          {
            shopImage:'touxiang.jpg',
            shopName:'乐扣乐扣峻佳专卖店',
            title:"说好的未来 在这里等你《穿越时空的少女》独家正版上线！",
            time:"2018年11月15日 17:22",
            content:"一年一度的哔哩哔哩萌节到啦，十大赛区，网罗生活高萌的每一个瞬间，一起来决战萌节之巅吧！点击参与活动" +
            "手机拍摄-竹鼠贴纸新鲜上架，海量奖品等你来拿！叮咚~你的十一假期攻略手册已到货！2018年11月15日 17:22。" +
            "一年一度的哔哩哔哩萌节到啦，十大赛区，网罗生活高萌的每一个瞬间，一起来决战萌节之巅吧！点击参与活动" +
            "手机拍摄-竹鼠贴纸新鲜上架，海量奖品等你来拿！叮咚~你的十一假期攻略手册已到货！2018年11月15日 17:22"
          },
          {
            shopImage:'touxiang.jpg',
            shopName:'小瞎子745316',
            title:"英雄联盟S8助威活动全面开启！",
            time:"2018年11月15日 17:22",
            content:"一年一度的哔哩哔哩萌节到啦，十大赛区，网罗生活高萌的每一个瞬间，一起来决战萌节之巅吧！点击参与活动" +
            "手机拍摄-竹鼠贴纸新鲜上架，海量奖品等你来拿！叮咚~你的十一假期攻略手册已到货！2018年11月15日 17:22"
          },
          {
            shopImage:'shopImage1.jpg',
            shopName:"vwe旗舰店",
            title:"#前方高萌征稿大赛#",
            time:"2018年10月1日 15:37",
            content:"一年一度的哔哩哔哩萌节到啦，十大赛区，网罗生活高萌的每一个瞬间，一起来决战萌节之巅吧！点击参与活动" +
            "手机拍摄-竹鼠贴纸新鲜上架，海量奖品等你来拿！叮咚~你的十一假期攻略手册已到货！2018年11月15日 17:22"
          },
          {
            shopImage:'shopImage1.jpg',
            shopName:"vwe旗舰店",
            title:"#前方高萌征稿大赛#",
            time:"2018年10月1日 15:37",
            content:"一年一度的哔哩哔哩萌节到啦，十大赛区，网罗生活高萌的每一个瞬间，一起来决战萌节之巅吧！点击参与活动" +
            "手机拍摄-竹鼠贴纸新鲜上架，海量奖品等你来拿！叮咚~你的十一假期攻略手册已到货！2018年11月15日 17:22"
          },
          {
            shopImage:'shopImage2.png',
            shopName:"vwe旗舰店",
            title:"#前方高萌征稿大赛#",
            time:"2018年10月1日 15:37",
            content:"一年一度的哔哩哔哩萌节到啦，十大赛区，网罗生活高萌的每一个瞬间，一起来决战萌节之巅吧！点击参与活动" +
            "手机拍摄-竹鼠贴纸新鲜上架，海量奖品等你来拿！叮咚~你的十一假期攻略手册已到货！2018年11月15日 17:22"
          },
          {
            shopImage:'shopImage2.png',
            shopName:"vwe旗舰店",
            title:"#前方高萌征稿大赛#",
            time:"2018年10月1日 15:37",
            content:"一年一度的哔哩哔哩萌节到啦，十大赛区，网罗生活高萌的每一个瞬间，一起来决战萌节之巅吧！点击参与活动" +
            "手机拍摄-竹鼠贴纸新鲜上架，海量奖品等你来拿！叮咚~你的十一假期攻略手册已到货！2018年11月15日 17:22"
          },
          {
            shopImage:'shopImage2.png',
            shopName:"vwe旗舰店",
            title:"#前方高萌征稿大赛#",
            time:"2018年10月1日 15:37",
            content:"一年一度的哔哩哔哩萌节到啦，十大赛区，网罗生活高萌的每一个瞬间，一起来决战萌节之巅吧！点击参与活动" +
            "手机拍摄-竹鼠贴纸新鲜上架，海量奖品等你来拿！叮咚~你的十一假期攻略手册已到货！2018年11月15日 17:22"
          },
          {
            shopImage:'shopImage2.png',
            shopName:"vwe旗舰店",
            title:"#前方高萌征稿大赛#",
            time:"2018年10月1日 15:37",
            content:"一年一度的哔哩哔哩萌节到啦，十大赛区，网罗生活高萌的每一个瞬间，一起来决战萌节之巅吧！点击参与活动" +
            "手机拍摄-竹鼠贴纸新鲜上架，海量奖品等你来拿！叮咚~你的十一假期攻略手册已到货！2018年11月15日 17:22"
          },
          {
            shopImage:'shopImage2.png',
            shopName:"vwe旗舰店",
            title:"#前方高萌征稿大赛#",
            time:"2018年10月1日 15:37",
            content:"一年一度的哔哩哔哩萌节到啦，十大赛区，网罗生活高萌的每一个瞬间，一起来决战萌节之巅吧！点击参与活动" +
            "手机拍摄-竹鼠贴纸新鲜上架，海量奖品等你来拿！叮咚~你的十一假期攻略手册已到货！2018年11月15日 17:22"
          },
          {
            shopImage:'shopImage2.png',
            shopName:"vwe旗舰店",
            title:"#前方高萌征稿大赛#",
            time:"2018年10月1日 15:37",
            content:"一年一度的哔哩哔哩萌节到啦，十大赛区，网罗生活高萌的每一个瞬间，一起来决战萌节之巅吧！点击参与活动" +
            "手机拍摄-竹鼠贴纸新鲜上架，海量奖品等你来拿！叮咚~你的十一假期攻略手册已到货！2018年11月15日 17:22"
          },
          {
            shopImage:'shopImage2.png',
            shopName:"vwe旗舰店",
            title:"#前方高萌征稿大赛#",
            time:"2018年10月1日 15:37",
            content:"一年一度的哔哩哔哩萌节到啦，十大赛区，网罗生活高萌的每一个瞬间，一起来决战萌节之巅吧！点击参与活动" +
            "手机拍摄-竹鼠贴纸新鲜上架，海量奖品等你来拿！叮咚~你的十一假期攻略手册已到货！2018年11月15日 17:22。" +
            "手机拍摄-竹鼠贴纸新鲜上架，海量奖品等你来拿！叮咚~你的十一假期攻略手册已到货！2018年11月15日 17:22"
          },
        ],
        detail:''
      }
    },
    components:{
      SmallTag,SmallTags,Modal
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
      },
      closeModal(){
        this.mdShow = false;
        this.list_index=this.index;
        this.read_status=false;
        this.statusSave.push(this.index);
      },
      showDetail(item,index){
        this.mdShow = true;
        this.detail = item;
        this.index=index;
      }
    }
  }
</script>
