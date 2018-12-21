<template>
  <div>
    <ul ref="ul" @click.stop.prevent="handlerClick($event)" class="my-list fontsize12">
      <li ref="hot" data-title='hot'>热卖</li>
      <li ref="food" data-title='food'>美食</li>
      <li ref="play" data-title='play'>娱乐</li>
      <li ref="movie" data-title='movie'>电影</li>
      <li ref="test" data-title='test'>测试</li>
    </ul>
  </div>
</template>

<script>
  export default {
    props: {
      title: {
        type: String,
        default: "1"
      }
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
          console.log(newval)
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

