<template>
  <div class="content">
    <div v-for="(item,key) in arr" :key = key>
        <bigcard :dataArr=item.data :title = item.title></bigcard>
    </div>
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

</style>
