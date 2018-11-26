<template>
    <div class="wave-container">
	    <div class="wave">
      </div>
      <div class="wave-font">
        <div class="date">{{d}}</div>
        <div class="year">{{y}}.{{m}}</div>
        <div class="day">{{day}}</div>
      </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      d:"",
      y:"",
      m:"",
      day:""
    }
  },
  mounted() {
    let date = new Date()
    this.m = date.getMonth() + 1
    console.log(date)
    this.y = date.getFullYear()
    this.d = date.getDate()
    let str;
      if(date.getDay()==1){
        str = "星期一"
      }else if(date.getDay()==2){
        str = "星期二"
      }else if(date.getDay()==3){
        str = "星期三"
      }else if(date.getDay()==4){
        str = "星期四"
      }else if(date.getDay()==5){
        str = "星期五"
      }else if(date.getDay()==6){
        str = "星期六"
      }else if(date.getDay()==0){
        str = "星期日"
      }
    this.day = str
  },
  computed:{
    
  },
}
</script>

<style scoped>
.day{

}
.wave-container{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    overflow: hidden;
}
.wave {
    position: relative;
    width: 200px;
    height: 200px;
    background-color: #f65c2996;
    border-radius: 50%;
}
.wave:before,.wave:after{
    content: "";
    position: absolute;
    width: 400px;
    height: 400px;
    top: 0;
    left: 50%;
    background-color: rgba(255, 255, 255, .4);
    border-radius: 45%;
    transform: translate(-50%, -70%) rotate(0);
    animation: rotate 6s linear infinite;
    z-index: 10;
}
     
.wave:after {
    border-radius: 47%;
    background-color: rgba(255, 255, 255, .9);
    transform: translate(-50%, -70%) rotate(0);
    animation: rotate 10s linear -5s infinite;
    z-index: 20;
}

@keyframes rotate {
    50% {
        transform: translate(-50%, -73%) rotate(180deg);
    } 100% {
        transform: translate(-50%, -70%) rotate(360deg);
    }
}
.wave-font{
    z-index: 999;
    position: relative;
    top: -180px;
    color: #f65c2996;
    left: 65px;
}
.date{
  font-size: 60px;
}
.year{
  width: 200px;
  font-size: 15px;
  text-align: center;
  margin-top: -5px;
  margin-left: -65px;
}
.day{
  font-size: 24px;
  color: #fff;
  margin-left: 0px;
  margin-top: 15px;
}
</style>
