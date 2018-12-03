<template>
  <div>
    <div class="coupon couponss">
      <div class="coupon_left coupon_leftss">
        <slot name="coupon_type"></slot><slot name="discount"></slot><br>
        <div><slot name="decrease"></slot></div>
      </div>
      <span class="couponRight couponRightss"><slot name="getCoupon"></slot></span>
      <span class="circle circless"></span>
      <span class="circle2 circle2ss"></span>
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
