<template>
  <div>
    <ul ref="ul" @click.stop.prevent="handlerClick($event)" class="my-list fontsize12">
      <li ref="hot" data-title="hot">{{arr2[0]}}</li>
      <li ref="food" data-title="food">{{arr2[1]}}</li>
      <li ref="play" data-title="play">{{arr2[2]}}</li>
      <li ref="movie" data-title="movie">{{arr2[3]}}</li>
    </ul>
  </div>
</template>

<script>
import ddd from "@/components/pages/home/homeContent.js"
  export default {
    data() {
      return {
        arr:["hot","food","play","movie"],
        arr2:[]
      }
    },
    props: {
      title: {
        type: String,
        default: "1"
      }
    },
    mounted() {
      this.arr2 = ddd.arr2
    },
    methods: {
      handlerClick(e) {
        this.$emit("nav", e.target.dataset.title);
        this.doSomething(e.currentTarget.children, e.target);
      },
      doSomething(children, target) {
        for (let i = 0; i < children.length; i++) {
          children[i].style.backgroundColor = "";
          children[i].style.color = "";
        }
        target.style.backgroundColor = "#ff5000";
        target.style.color = "white";
      }
    },
    watch: {
      title: {
        immediate: true,
        handler: function (newval) {
          this.$nextTick(() => {
            this.doSomething(this.$refs.ul.children, this.$refs[newval]);
          })
        }
      }
    }
  };
</script>


<style lang="scss" scoped>
.my-list{
  display: fixed;
  right: 0px;
  background-color: white;
  list-style: none;
  border: 1px #ddd solid;
  padding: 0px;
  li{
    width: 56px;
    height: 33px;
    text-align: center;
    line-height: 33px;
    cursor: pointer;
  }:hover{
      background-color: #ff9000;
      color: white;
    }
}
</style>

