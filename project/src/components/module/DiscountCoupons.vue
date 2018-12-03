<template>
  <div>
    <div class="coupon coupons">
      <div class="coupon_left coupon_lefts">
        <slot name="coupon_type"></slot><slot name="discount"></slot><br>
        <div><slot name="decrease"></slot></div>
      </div>
      <span class="couponRight couponRights"><slot name="getCoupon"></slot></span>
      <span class="circle circles"></span>
      <span class="circle2 circle2s"></span>
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
