<template>
  <div>
    <div>
      <left-tab v-bind:routeArr="routeArr"></left-tab>
    </div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
import leftTab from "@/components/module/leftTab"

export default {
  components:{
    leftTab
  },
  data () {
    return {
        msg:"goods",
        routeArr:{
          userInfo:"我的主页",
          coupon:"我的红包",
          order:"我的团购",
          goods:"我的订单",
        },
    }
  }
}
</script>

<style scoped>

</style>
