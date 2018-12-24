<template>
  <div class="content">
    <div class="con">
        <div class="tiny"></div>
        <div @mouseover="showTip({id:item.id})" @mouseleave="hidde()" @click.stop="click(item.route)" class="header" v-for="(item,key) in data" :key=key>
            <span class="name" @click="btnclick(item.name)">{{item.name}}</span>
        </div>
        <div class="tiny"></div>
    </div>
    <div class="tip" @mouseover="showTip({keep:true})" @mouseleave="hidde()" v-show="show">
        <div class="tip-group" @click.stop="btnclick(item.sort)" v-for="(item,key) in itemData" :key="key">
            {{item.sort}}
        </div>
    </div>
  </div>
</template>

<script>
import {getsubsort} from "@/api/http"
import ddd from "./data.js"
export default {
  data () {
    return {
        data:[],
        itemData:[
        ],
        show:false,
        id:0
    }
  },
  mounted() {
      this.data = ddd.data
      console.log(ddd.data)
  },
  methods:{
    showTip({id = this.id,keep = false}){
        if(keep){
        this.show = true
        return;
        }
        if(id != this.id){
            this.id = id
            getsubsort(id).then(res => {
                console.log(res)
            this.itemData = res.data.data.categoryList
            })
        }
        this.show = true
    },
    hidde(){
        this.show = false
    },
    btnclick(a){
      this.$bus.$emit("seach2",a)
     this.$router.push({ name: 'seach', params: { sval: a }})
    },
  }
}
</script>

<style scoped lang="scss">
.content{
    width: 50%;
    min-height:100px;
    display: flex;
    flex-direction: row;
    .con{
        width: 33%;
        .tiny{
            width: 100%;
            height: 5px;
            background: #383131;
        }
        .header{
            width: 100%;
            height:40px;
            background: #383131;
            color: #fff;
            line-height: 40px;
            font-size: 15px;
            overflow: hidden;
            .name{
                margin-left: 10px;
                cursor: pointer;
            }
            .name:hover{
                color: #f65d29;
            }
            .sname:hover{
                color: #f65d29;
            }
            .sname{
                font-size: 13px;
                color: #ddd;
                cursor: pointer;
            }
        }
        .header:hover{
            background: #383131ce;
        }
    }

    .tip{
        z-index: 99;
        display: flex;
        background: #fff;
        flex-direction: column;
        flex-wrap: wrap;
        width: 66%;
        border: 2px solid #f65d29;
        border-left: 1px solid #eee;
        padding: 10px;
        .tip-group{
            min-height: 26px;
            height: 26px;
            cursor: pointer;
            width: 25%;
            text-align: center;
            line-height: 26px;
            font-size: 13px;
            font-weight: 400;
        }:hover{
            color: #f65d29;
            border-bottom: 1px solid #f65d29;
        }
    }
}
</style>
