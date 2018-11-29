<template>
  <div class="content">
    <bigcard v-for="(item,key) in arr" :key = key :dataArr=item.data :title = item.title></bigcard>
  </div>
</template>

<script>
import bigcard from "@/components/pages/home/bigcard"
import ddd from "./homeContent.js"
export default {
    components:{bigcard},
    mounted() {
        this.arr = ddd.arr
        console.log(this.arr)
    },
    data () {
        return {
            arr:[]
        }
    }
}
</script>

<style scoped lang="scss">
.content{
    width: 100%;
}
</style>
