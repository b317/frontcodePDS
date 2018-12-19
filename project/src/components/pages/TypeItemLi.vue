<template>
  <li title="白色铃兰10株+盆" class="tb-txt">
    <a href="#" role="button" tabindex="0" class="tb-txt-a" :class="{'active': isTrue}" @click="showA"><span>白色铃兰5株+盆</span><i>已选中</i></a>
  </li>
</template>
<script>
    export default {
        data() {
            return {
              msg: 'hello world',
              isTrue: ''
            }
        },
      methods: {
        showA () {
          this.isTrue = true
        }
      }
    }
</script>
<style scoped>
  ul li.tb-txt a {
    padding: 0 5px;
    width: auto!important;
  }
  ul li{float: left;margin-bottom: 10px}
  ul li a {
    width: 38px!important;
    height: 38px;
    padding: 0;
    line-height: 38px;
    background-repeat: no-repeat;
    outline: 0;
    background-position: center center;
  }
  ul li a{
    float: left;
    background-color: #fff;
    border: 1px solid #b8b7bd;
    color: #000;
    min-width: 10px;
    padding: 0 9px;
    text-align: center;
    text-decoration: none;
    margin-left: 6px;
  }
  ul li a:hover{
    border: 2px solid #FF0036;
    margin: -1px -1px -1px 5px;
  }
  ul li .tb-txt-a i {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 12px;
    height: 12px;
    overflow: hidden;
    text-indent: -99em;
    display: block;
    background-repeat: no-repeat;
    background-position: 0 0;
  }
  ul li a.tb-txt-a.active i{
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJUExURUxpcf8AN////7f4NBoAAAABdFJOUwBA5thmAAAAMUlEQVQI103MAQ4AMAQEQev/j66i6YrEXIKIX9jY2NjYyDmhZnlCo5rdyWvebfYDVAcSmABbA7WD+QAAAABJRU5ErkJggg==);
  }
  ul li .tb-txt-a {
    position: relative;
    border: 2px solid #ddd;
    padding: 2px 6px;
    border-radius: 2px;
    cursor: pointer
  }
  ul li a.tb-txt-a.active, ul li .tb-txt-a:hover{
    border: 2px solid #FF0036;
    margin: -1px -1px -1px 5px;
  }
  ul li .tb-txt-a.active i {
    display: block
  }
</style>
