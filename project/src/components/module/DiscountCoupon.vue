<template>
    <div>
      <div class="coupon">
        <div class="coupon_left">
          <slot name="coupon_type"></slot><slot name="discount"></slot><br>
          <div><slot name="decrease"></slot></div>
        </div>
        <span class="coupon_right">领取</span>
        <span class="circle"></span>
        <span class="circle2"></span>
      </div>
    </div>
</template>
<style>
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
