<template>
  <div>
    <div class="newsOne" v-for="(item,index) of MesListShow" :key="index">
      <div>
        <span><strong>拼多少网提醒您：{{item.title}}</strong></span>
        <span class="time">{{item.time}}</span>
      </div>
      <div style="padding-left: 5px;font-size:13px ">
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
        <i class="el-icon-message"></i>&nbsp;系统通知
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
<script>
  import SmallTag from '@/components/module/SmallTag'
  import SmallTags from '@/components/module/SmallTags'
  import Modal from '@/components/module/Modal'
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
            title:"评价已经生效,请查看",
            time:"2018年11月15日 17:22",
            content:"亲爱的富富华华364104129： 您好，我们很高兴地通知您，和您进行交易的小瞎子745316已经给您作出了评价。" +
            "该评价现已生效。 查看评价所针对的宝贝，请到这里：https://trade.taobao.com/trade/detail/trade_snap.htm?trade_id=122846698439257250 查看。 " +
            "请到 https://rate.taobao.com/myRate.htm?nekot=1521792613616 查看您最新的信用评价。" +
            " 退订此消息：http://member1.taobao.com/member/fresh/subscription.htm#msg:3021"
          },
          {
            title:"评价已经生效,请查看",
            time:"2018年11月15日 17:22",
            content:"亲爱的富富华华364104129： 您好，我们很高兴地通知您，和您进行交易的vwe旗舰店已经给您作出了评价。" +
            "该评价现已生效。 查看评价所针对的宝贝，请到这里：" +
            "https://trade.taobao.com/trade/detail/trade_snap.htm?trade_id=168315729558257250 查看。 " +
            "请到 https://rate.taobao.com/myRate.htm?nekot=1531235405434 查看您最新的信用评价。 " +
            "退订此消息：http://member1.taobao.com/member/fresh/subscription.htm#msg:3021"
          },
          {
            title:"评价已经生效,请查看",
            time:"2018年10月1日 15:37",
            content:"亲爱的富富华华364104129： 您好，我们很高兴地通知您，和您进行交易的vwe旗舰店已经给您作出了评价。" +
            "该评价现已生效。 查看评价所针对的宝贝，请到这里：" +
            "https://trade.taobao.com/trade/detail/trade_snap.htm?trade_id=168315729558257250 查看。 " +
            "请到 https://rate.taobao.com/myRate.htm?nekot=1531235405434 查看您最新的信用评价。 " +
            "退订此消息：http://member1.taobao.com/member/fresh/subscription.htm#msg:3021"
          },
          {
            title:"评价已经生效,请查看",
            time:"2018年10月1日 15:37",
            content:"亲爱的富富华华364104129： 您好，我们很高兴地通知您，和您进行交易的vwe旗舰店已经给您作出了评价。" +
            "该评价现已生效。 查看评价所针对的宝贝，请到这里：" +
            "https://trade.taobao.com/trade/detail/trade_snap.htm?trade_id=168315729558257250 查看。 " +
            "请到 https://rate.taobao.com/myRate.htm?nekot=1531235405434 查看您最新的信用评价。 " +
            "退订此消息：http://member1.taobao.com/member/fresh/subscription.htm#msg:3021"
          },
          {
            title:"评价已经生效,请查看",
            time:"2018年10月1日 15:37",
            content:"亲爱的富富华华364104129： 您好，我们很高兴地通知您，和您进行交易的vwe旗舰店已经给您作出了评价。" +
            "该评价现已生效。 查看评价所针对的宝贝，请到这里：" +
            "https://trade.taobao.com/trade/detail/trade_snap.htm?trade_id=168315729558257250 查看。 " +
            "请到 https://rate.taobao.com/myRate.htm?nekot=1531235405434 查看您最新的信用评价。 " +
            "退订此消息：http://member1.taobao.com/member/fresh/subscription.htm#msg:3021"
          },
          {
            title:"评价已经生效,请查看",
            time:"2018年10月1日 15:37",
            content:"亲爱的富富华华364104129： 您好，我们很高兴地通知您，和您进行交易的vwe旗舰店已经给您作出了评价。" +
            "该评价现已生效。 查看评价所针对的宝贝，请到这里：" +
            "https://trade.taobao.com/trade/detail/trade_snap.htm?trade_id=168315729558257250 查看。 " +
            "请到 https://rate.taobao.com/myRate.htm?nekot=1531235405434 查看您最新的信用评价。 " +
            "退订此消息：http://member1.taobao.com/member/fresh/subscription.htm#msg:3021"
          },
          {
            title:"评价已经生效,请查看",
            time:"2018年10月1日 15:37",
            content:"亲爱的富富华华364104129： 您好，我们很高兴地通知您，和您进行交易的vwe旗舰店已经给您作出了评价。" +
            "该评价现已生效。 查看评价所针对的宝贝，请到这里：" +
            "https://trade.taobao.com/trade/detail/trade_snap.htm?trade_id=168315729558257250 查看。 " +
            "请到 https://rate.taobao.com/myRate.htm?nekot=1531235405434 查看您最新的信用评价。 " +
            "退订此消息：http://member1.taobao.com/member/fresh/subscription.htm#msg:3021"
          },
          {
            title:"评价已经生效,请查看",
            time:"2018年10月1日 15:37",
            content:"亲爱的富富华华364104129： 您好，我们很高兴地通知您，和您进行交易的vwe旗舰店已经给您作出了评价。" +
            "该评价现已生效。 查看评价所针对的宝贝，请到这里：" +
            "https://trade.taobao.com/trade/detail/trade_snap.htm?trade_id=168315729558257250 查看。 " +
            "请到 https://rate.taobao.com/myRate.htm?nekot=1531235405434 查看您最新的信用评价。 " +
            "退订此消息：http://member1.taobao.com/member/fresh/subscription.htm#msg:3021"
          },
          {
            title:"评价已经生效,请查看",
            time:"2018年10月1日 15:37",
            content:"亲爱的富富华华364104129： 您好，我们很高兴地通知您，和您进行交易的vwe旗舰店已经给您作出了评价。" +
            "该评价现已生效。 查看评价所针对的宝贝，请到这里：" +
            "https://trade.taobao.com/trade/detail/trade_snap.htm?trade_id=168315729558257250 查看。 " +
            "请到 https://rate.taobao.com/myRate.htm?nekot=1531235405434 查看您最新的信用评价。 " +
            "退订此消息：http://member1.taobao.com/member/fresh/subscription.htm#msg:3021"
          },
          {
            title:"评价已经生效,请查看",
            time:"2018年10月1日 15:37",
            content:"亲爱的富富华华364104129： 您好，我们很高兴地通知您，和您进行交易的vwe旗舰店已经给您作出了评价。" +
            "该评价现已生效。 查看评价所针对的宝贝，请到这里：" +
            "https://trade.taobao.com/trade/detail/trade_snap.htm?trade_id=168315729558257250 查看。 " +
            "请到 https://rate.taobao.com/myRate.htm?nekot=1531235405434 查看您最新的信用评价。 " +
            "退订此消息：http://member1.taobao.com/member/fresh/subscription.htm#msg:3021"
          },
          {
            title:"评价已经生效,请查看",
            time:"2018年10月1日 15:37",
            content:"亲爱的富富华华364104129： 您好，我们很高兴地通知您，和您进行交易的vwe旗舰店已经给您作出了评价。" +
            "该评价现已生效。 查看评价所针对的宝贝，请到这里：" +
            "https://trade.taobao.com/trade/detail/trade_snap.htm?trade_id=168315729558257250 查看。 " +
            "请到 https://rate.taobao.com/myRate.htm?nekot=1531235405434 查看您最新的信用评价。 " +
            "退订此消息：http://member1.taobao.com/member/fresh/subscription.htm#msg:3021"
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
