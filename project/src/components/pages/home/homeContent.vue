<template>
  <div class="content">
    <div v-for="(item,key) in arr" :key=key>
      <bigcard></bigcard>
    </div>
  </div>
</template>

<script>
import bigcard from "@/components/pages/home/bigcard"
export default {
  components:{bigcard},
  data () {
    return {
      arr:[1,2,3,4,5]
    }
  }
}
</script>

<style scoped lang="scss">
.content{
  width: 100%;
}
</style>
