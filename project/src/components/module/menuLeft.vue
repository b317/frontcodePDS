<template>
  <div class="content">
    <div class="con">
        <div class="tiny"></div>
        <div @mouseover="showTip(item.data)" @mouseleave="hidde()" @click.stop="click(item.route)" class="header" v-for="(item,key) in data" :key=key>
            <span class="name">{{item.name}}</span>
            <span class="sname" v-for="(item,key) in item.sname" @click.stop="click(item.route)" :key="key">
                {{item.name}}
            </span>
        </div>
        <div class="tiny"></div>
    </div>
    <div class="tip" @mouseover="showTip()" @mouseleave="hidde()" v-show="show">
        <div class="tip-group" @click.stop="click(item)" v-for="(item,key) in itemData" :key="key">
            <div class="tip-title">{{item.name}}<i class="el-icon-more tip-icon"></i></div>
            <div class="tip-con">
                <div v-for="(item,key) in item.data" :key="key">
                    <div class="tip-sname" @click.stop="click(item.route)">{{item.name}}</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import ddd from "./data.js"
export default {
  data () {
    return {
        data:[],
        itemData:[
        ],
        show:false
    }
  },
  mounted() {
      this.data = ddd.data
  },
  methods:{
      click(msg){
          console.log(msg)
      },
      showTip(data){
          if(data){
            //   console.log(data)
              this.itemData = data
          }
          this.show = true
      },
      hidde(){
        this.show = false
      }
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
            width: 210px;
            height: 5px;
            background: #383131;
        }
        .header{
            width: 200px;
            height:40px;
            background: #383131;
            color: #fff;
            line-height: 40px;
            padding-left: 10px;
            font-size: 15px;
            .name{
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
        background: #fff;
        width: 66%;
        border: 2px solid #f65d29;
        border-left: 1px solid #eee;
        padding: 10px;
        .tip-group{
            .tip-title{
                font-size: 15px;
                font-weight: 400;
                height: 30px;
                border-bottom: 1px solid #eee;
                line-height: 30px;
                cursor: pointer;
                .tip-icon{
                    float: right;
                    margin-top: 6px;
                }
            }
            .tip-title:hover{
                color: #f65d29;
            }
            .tip-con{
                display: flex;
                min-height: 26px;
                .tip-sname{
                    height: 26px;
                    cursor: pointer;
                    min-width: 50px;
                    text-align: center;
                    line-height: 26px;
                    font-size: 13px;
                    font-weight: 400;
                }
                .tip-sname:hover{
                    color: #f65d29;
                }
            }
        }
    }
}
</style>
