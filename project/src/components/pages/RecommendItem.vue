<template>
  <li class="recommend-item">
    <div class="recommend-img">
      <div class="pic-con"><a href="#" class="img-con"><img
        src="../../../static/goods/rd1.jpg"
        title="免费领包活藤本皇后铁线莲皇家丝绒多颜色可选买2送一"
        alt="免费领包活藤本皇后铁线莲皇家丝绒多颜色可选买2送"></a>
      </div>
      <div class="recommend-extra">
        <p class="recommend-price">
          <span class="now-price"><b class="yen">¥</b><b class="price">20.00</b></span>
        </p>
      </div>
    </div>
  </li>
</template>
<style scoped>
  .recommend-img{
    position: relative;
    padding-top: 10px;
  }
  .recommend-img .pic-con img{
    width: 140px;
    height: 140px;
  }
  .recommend-img .recommend-extra{
    position: absolute;
    width: 140px;
    height: 25px;
    background-color: #fff;
    opacity: .7;
    bottom: 3px;
    left: 0;
    z-index: 2;
    line-height: 1px;
    text-align: center;
  }
</style>
<script>
    export default {
        data() {
            return {
                msg: 'hello world'
            }
        }
    }
</script>
